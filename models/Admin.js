const mongoose = require('mongoose');

const AdminSchema = new mongoose.Schema({
  username: String,
  password: String,
});

const AdminModel = mongoose.model('Admin', AdminSchema);

const questions = [];

const addQuestion = (question, options, answer, explanation) => {
  questions.push({ question, options, answer, explanation });
};

module.exports = {
  addQuestion,
};


module.exports = AdminModel;
