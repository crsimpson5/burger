const connection = require("./connection.js");

// Creates string of ?
const printQuestionMarks = num => {
  let arr = [];

  for (let i = 0; i < num; i++) {
    arr.push("?");
  }
  return arr.toString();
};

// Converts object key/value pairs to SQL syntax
const objToSql = obj => {
  let arr = [];

  for (let key in obj) {
    let value = obj[key];

    // Check to skip hidden properties
    if (Object.hasOwnProperty.call(obj, key)) {
      // If string has spaces add quotes around it
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      arr.push(`${key}=${value}`);
    }
  }
  return arr.toString();
};

const orm = {
  all: function(table, cb) {
    let queryString = `SELECT * FROM ${table};`;
    
    connection.query(queryString, (err, result) => {
      if (err) throw err;
      cb(result);
    });
  },
  create: function(table, cols, vals, cb) {
    let queryString = `INSERT INTO ${table} (${cols.toString()}) VALUES `;
    queryString += `(${printQuestionMarks(vals.length)})`;
    console.log(queryString);

    connection.query(queryString, vals, (err, result) => {
      if (err) throw err;
      cb(result);
    });
  },
  update: function(table, objColVals, condition, cb) {
    let queryString = `UPDATE ${table} SET ${objToSql(objColVals)} `;
    queryString += `WHERE ${condition}`;
    console.log(queryString);

    connection.query(queryString, (err, result) => {
      if (err) throw err;
      cb(result);
    });
  },
  delete: function(table, condition, cb) {
    let queryString = `DELETE FROM ${table} WHERE ${condition}`;
    console.log(queryString);

    connection.query(queryString, (err, result) => {
      if (err) throw err;
      cb(result);
    });
  }
};

module.exports = orm;
