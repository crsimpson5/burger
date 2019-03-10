const orm = require("../config/orm.js");

const burger = {
  all: function(cb) {
    orm.all("burgers", res => {
      cb(res);
    });
  },
  create: function(cols, vals, cb) {
    orm.create("burgers", cols, vals, res => {
      cb(res);
    });
  },
  delete: function(condition, cb) {
    orm.delete("burgers", condition, res => {
      cb(res);
    });
  }
};

module.exports = burger;
