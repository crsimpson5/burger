const connection = require("./connection.js");

const printQuestionMarks = num => {
  let arr = [];

  for (let i = 0; i < num; i++) {
    arr.push("?");
  }
  return arr.toString();
};

const orm = {
  all: function(table, cb) {
    const queryString = `SELECT * FROM ${table};`;
    console.log(queryString);

    connection.query(queryString, (err, result) => {
      if (err) throw err;
      cb(result);
    });
  },
  create: function(table, cols, vals, cb) {
    const queryString = `INSERT INTO ${table} (${cols.toString()}) VALUES `;
    queryString += `(${printQuestionMarks(vals.length)})`;
    console.log(queryStirng);

    connection.query(queryString, vals, (err, result) => {
      if (err) throw err;
      cb(result);
    });
  },
  delete: function(table, condition, cb) {
    const queryString = `DELETE FROM ${table} WHERE ${condition}`;
    console.log(queryStirng);

    connection.query(queryString, (err, result) => {
      if (err) throw err;
      cb(result);
    });
  }
};

module.exports = orm;
