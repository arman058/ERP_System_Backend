const db = require("../models");
const Course = db.Course;

exports.findAll = async (req, res) => {
  const data = await Course.findAll();
  res.json(data);
};

exports.findOne = async (req, res) => {
  const course = await Course.findByPk(req.params.id);
  course ? res.json(course) : res.status(404).send("Not found");
};

exports.create = async (req, res) => {
  const newCourse = await Course.create(req.body);
  res.status(201).json(newCourse);
};

exports.update = async (req, res) => {
  const updated = await Course.update(req.body, { where: { ID: req.params.id } });
  updated[0] ? res.send("Updated") : res.status(404).send("Not found");
};

exports.delete = async (req, res) => {
  const deleted = await Course.destroy({ where: { ID: req.params.id } });
  deleted ? res.send("Deleted") : res.status(404).send("Not found");
};
