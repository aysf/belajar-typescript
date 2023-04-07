const person = {
    name: "Ananto",
    age: 33,
    hobbies: ["reading", "sleeping", "coding"]
};

console.log(person.name);

for (const hobby of person.hobbies) {
    console.log(hobby)
}

let foods: string[];
foods = ["cake", "rice"];

for (const food of foods) {
    console.log(food)
}

let bucket: any[];
bucket = [3, "car", true]
