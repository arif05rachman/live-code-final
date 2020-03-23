module.exports = (err, req, res, next) => {
  console.log(err)
  let message = []
  if (err.name === "SequelizeValidationError") {
    err.errors.forEach(element => {
      message.push(element.message);
    });
    res.status(400).json({ message });
  } else if (err.name === "SequelizeUniqueContraintError") {
    err.errors.forEach(element => {
      message.push(element.message);
    });
    res.status(400).json({ message });
  }
  if (err.name === "SequelizeDatabaseError") {
    res.status(400).json({ message: "Data inputan salah" });
  } else if (err) {
    res.status(400).json({err})
  }
  else {
    res.status(500).json({ message: "internal server error" });
  }
}