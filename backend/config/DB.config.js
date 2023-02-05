const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: "postgres",
    dialectModule: require("pg"),
  }
);

async function startSequelize() {
  const retries = 5;

  while (retries) {
    try {
      sequelize.authenticate();
      console.log("Connection has been established successfully.");
      break;
    } catch (error) {
      console.error("Unable to connect to the database:", error);
      retries -= 1;
      console.log(`Retires left ${retries}`);

      await new Promise((resolve) => setTimeout(resolve, 5000));
    }
  }
}

module.exports = { startSequelize };
