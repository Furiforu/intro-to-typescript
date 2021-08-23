import { PersonGreeter } from "./personGreeter";

const firstName = "Jamal";
const secondName = "Ahmed";

const fullname: string = `${firstName} ${secondName}`;

type Person = {
    firstName: string;
    secondName: string;
    dateOfbirth: Date;
};

const person : Person = {
    firstName: `Jamal`,
    secondName: `Ahmed`,
    dateOfbirth: new Date(1999, 6, 5) 
};

const sayHelloToPerson = (p: Person) => {
    console.log(`Hello ${p.firstName} ${secondName}, your date of birth is ${p.dateOfbirth.toDateString()}`)
};

sayHelloToPerson(person);

const personGreeter = new PersonGreeter("", "")