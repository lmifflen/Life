


let hobby3 = (req, res, next) => {
  let hobby3 = req.query.hobby3;
  if (hobby3 === "BIKE") {
    res.send(`Player loves biking`);
  } else if (hobby3 === "SWIM") {
    res.send("Player loves swimming");
  } else {
    res.send("Player is a lameo");
  }
  next();
};

module.exports = { hobby3 };