const findTheOldest = function(people) {
    const CurrentDate = new Date();
    const year = CurrentDate.getFullYear()
    obj = people.reduce((people, person)=> {
        if(person.yearOfDeath==undefined){
            person.age=year-person.yearOfBirth
            console.log(person.age)
        }
        else{
            person.age = person.yearOfDeath-person.yearOfBirth
            console.log(person.age)
        }
        people.push(person)
     return people;
    }, [])

    obj.sort((a,b) => b.age-a.age)
    return obj[0]

};

const people = [
      {
        name: "Carly",
        yearOfBirth: 1942,
        yearOfDeath: 1970,
      },
      {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
      },
      {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
      },
]

const oldest = (findTheOldest(people))
console.log(oldest)
// Do not edit below this line
module.exports = findTheOldest;
