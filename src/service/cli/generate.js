'use strict';

const fs = require(`fs`).promises;
const { getRandomInt, shuffle } = require(`../../utils`);
const chalk = require(`chalk`);

const DEFAULT_COUNT = 1;
const FILE_NAME = `mock.json`;

const FileName = {
  CATEGORIES: `./data/categories.txt`,
  TITLES: `./data/titles.txt`,
  SENTENCES: `./data/sentences.txt`
}

const readContent = async (filePath) => {
  try {
    const content = await fs.readFile(filePath, `utf-8`);
    return content.split(`\n`);
  } catch (error) {
    console.error(chalk.red(err));
    return [];
  }
};



const getRandomTime = () => {
  const date = new Date();

  return date.toLocaleString();
};


const generatedPosts = (count, categories, sentences, titles) => (
  Array(count).fill({}).map(() => ({
    title: titles[getRandomInt(0, titles.length - 1)],
    announce: shuffle(sentences).slice(0, 5).join(` `),
    fullText: shuffle(sentences).slice(0, getRandomInt(0, sentences.length - 1)).join(` `),
    createdDate: getRandomTime(),
    category: categories[getRandomInt(0, categories.length - 1)]
  }))
  );


module.exports = {
  name: `--generate`,
  async run(args) {
    const [count] = args;
    const countPosts = Number(count) || DEFAULT_COUNT;

    const categories = await readContent(FileName.CATEGORIES);
    const sentences = await readContent(FileName.SENTENCES);
    const titles = await readContent(FileName.TITLES);

    const content = JSON.stringify(generatedPosts(countPosts, categories, sentences, titles));

    try {
      await fs.writeFile(FILE_NAME, content);
      console.log(chalk.green(`Operation success. File created. Congratulation!`));
    } catch (err) {
      console.log(err);
      console.error(chalk.red(`Can't write data to file...`));
    }

  }
};
