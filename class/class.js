class Person {
    name;
    age;

    talk(){   //método
        console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old`)
    }
}

const newPerson = new Person()

newPerson.name = "Leticia"
newPerson.age = 25
newPerson.talk()




class Persons {
    //método construtor - pode existir ou não
    //alteracao
    constructor(name, age){
        console.log(`Hello, I'm ${name}`)

        this.name = name
        this.age = age
    }
    
    talk(){   //método
        console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old`)
    }
}

const newPersons = new Persons("Leticia", 25)
const newPersons1 = new Persons("Maria", 30)
const newPersons2 = new Persons("Joao", 40)
const newPersons3 = new Persons("Paulo", 21)

newPersons.talk()
newPersons1.talk()
newPersons2.talk()
newPersons3.talk()

