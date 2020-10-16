const path = require(`path`);

const express = require(`express`);
const mainRoutes = require(`./routes/main`);
const myRoutes = require(`./routes/my`);
const articlesRoutes = require(`./routes/articles`);
const searchRoutes = require(`./routes/search`);
const categoriesRoutes = require(`./routes/categories`);

const DEFAULT_PORT = 8000;
const app = express();
const PUBLIC_DIR = `public`;

app.set(`view engine`, `pug`);
app.set(`views`, path.resolve(__dirname, `templates`));

app.use(express.static(path.resolve(__dirname, PUBLIC_DIR)));


app.use(`/`, mainRoutes);
app.use(`/my`, myRoutes);
app.use(`/articles`, articlesRoutes);
app.use(`/search`, searchRoutes);
app.use(`/categories`, categoriesRoutes);




app.listen(DEFAULT_PORT, () => {console.log('Listen port', DEFAULT_PORT)});

