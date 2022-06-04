// import sequelize
import sequelize from "sequelize";
// create connection
const db = new sequelize("node_arduino", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

// export connection
export default db;
