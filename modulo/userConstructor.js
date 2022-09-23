let people = require('./userData')

function NewPerson(opiniao, idade) {
  people.push({
      opiniao: opiniao,
      idade: idade,
    });
  }

module.exports = NewPerson;