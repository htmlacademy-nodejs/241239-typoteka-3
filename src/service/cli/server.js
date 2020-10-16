const express = require(`express`);
const chalk = require(`chalk`);
const postsRoutes = require(`./routes/posts`);

const DEFAULT_PORT = 3000;
const app = express();


app.use(express.json());
app.use(`/posts`, postsRoutes);



module.exports = {
    name: `--server`,
    run(args) {
        const [customPort] = args;
        const port = Number(customPort) || DEFAULT_PORT;
        

        app.listen(port, () => console.info(chalk.green(`Жду подключений на порте: ${port}`)))
    }
}