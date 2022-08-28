module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "L@kshya06", // update the db password here
    DB: "Emp_notifier", //add database name here
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };
