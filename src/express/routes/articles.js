const {Router} = require(`express`);

const articleRoutes = new Router();

articleRoutes.get(`/`, (req, res) => res.send(`/articles`));
articleRoutes.get(`/category/:id`, (req, res) => res.render(`articles-by-category`));
articleRoutes.get(`/edit/:id`, (req, res) => res.send(`/articles/edit/:id`));
articleRoutes.get(`/add`, (req, res) => res.render(`new-post`));
articleRoutes.get(`/:id`, (req, res) => res.render(`post`));




module.exports = articleRoutes;
