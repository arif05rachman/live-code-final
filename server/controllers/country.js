const { Country } = require('../models')

class Controller{
  static findAll(req, res, next) {
    Country
      .findAll()
      .then(data => {
        console.log(data)
        res.status(200).json(data)
      })
      .catch(err => {
        console.log(err)
      next(err)
    })
  }
}

module.exports = Controller