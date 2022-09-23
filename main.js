let NewPerson = require('./modulo/userConstructor');
let People = require('./modulo/userData');
let Calc = require('./modulo/avgExcellent');

const pessoa1 = new NewPerson(3,22)
const pessoa2 = new NewPerson(2,21)
const pessoa3 = new NewPerson(3,22)
const pessoa4 = new NewPerson(2,21)
const pessoa5 = new NewPerson(2,23)
const pessoa6 = new NewPerson(1,23)
const pessoa7 = new NewPerson(3,22)
const pessoa8 = new NewPerson(3,23)
const pessoa9 = new NewPerson(2,25)
const pessoa10 = new NewPerson(3,22)
const pessoa11 = new NewPerson(3,22)
const pessoa12 = new NewPerson(2,35)

console.log(Calc.avgExcellent(People))





