const {Router} = require(`express`);
const fs = require(`fs`).promises;
const {HttpCode} = require(`../../../const`);

const FILENAME = `mock.json`;

const postsRoutes = new Router();

postsRoutes.get(`/`, async (req, res) => {
    try {
        const fileContent = await fs.readFile(FILENAME);
        const mock = JSON.parse(fileContent);
        res.json(mock);
    } catch (err) {
        res.status(HttpCode.INTERNAL_SERVER_ERROR).send(err);
    }
})


module.exports = postsRoutes;