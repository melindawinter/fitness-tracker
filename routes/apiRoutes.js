const Workout = require("../models");

module.exports = function (app) {
  app.get("/api/workout", (req, res) =>
    Workout.find()
      .then(data => {
        res.json(data);
      })
      .catch(err => {
        res.json(err);
      })
  );
};

app.post("/api/workouts", (req, res) => {
  Workout.create({})
    .then(data => res.json(data))
    .catch(err => {
      res.json(err);
    });
});
