const { Report } = require('../models')
const { Country } = require("../models");

class Controller {
  static findAll(req, res, next) {
    Report.findAll({
      include: [Country],
      where: { UserId: req.user }
    })
      .then(data => {
        res.status(200).json(data);
      })
      .catch(err => {
        next(err);
      });
  }
  static create(req, res, next) {
    const { cases, CountryId } = req.body;
    const UserId = req.user;
    console.log(req.body, "ini body");
    Report.create({
      cases,
      CountryId,
      UserId
    })
      .then(data => {
        console.log(data);
        res.status(201).json(data);
      })
      .catch(err => {
        next(err);
      });
  }
  static destroy(req, res, next) {
    const UserId = req.user;
    Report.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(data => {
        console.log(data);
        res.status(200).json(data);
      })
      .catch(err => {
        next(err);
      });
  }
}
module.exports = Controller