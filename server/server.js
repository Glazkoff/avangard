const express = require("express");
const path = require("path");
const chalk = require("chalk");
const history = require("connect-history-api-fallback");

const app = express();
const PORT = 80;

// База данных
const db = require("./models/index");

const user = require("./routes/user.js");

app.use("/api/users", user);

app.get("/api", (req, res) => {
  res.send("Привет, Авангард!");
});

/**
 * **********************************************************************
 *
 * ********************  API ПИСАТЬ ВЫШЕ!!!   ***************************
 *
 * **********************************************************************
 */

// Все указанные выше запросы обрабатываются без history
app.use(history());

// Работа со статическими файлами
app.use(express.static(path.join(__dirname, "../dist")));

db.sequelize
  // .sync({ force: true })
  // .sync({ alter: true })
  .sync()
  .then(async () => {
    app.listen(PORT, () => {
      console.log(
        chalk.green(`Клиентская часть запущена на`),
        chalk.cyan(`http://localhost:${PORT}/`)
      );
    });
  });
