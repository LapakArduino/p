import { Sequelize } from "sequelize";
// import connection
import db from "../config/database.js";

// init DataTypes
const { DataTypes } = Sequelize;

// Define schema
const Siswa = db.define(
  "siswa",
  {
    nama: {
      type: DataTypes.STRING,
    },
    kelas: {
      type: DataTypes.STRING,
    },
  },
  {
    // Freeze Table Name
    freezeTableName: true,
  }
);

// Export model Product
export default Siswa;
