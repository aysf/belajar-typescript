// const person = {
//     name: "Mina",
//     age: 3,
//     hobbies: ["coding", "drawing"],
//     role: [2, "admin"]
// }

// these still work, but expected not
// person.role.push('student');
// person.role[1] = 4;
// person.role = [3, "admin", "staff"];

const person: {
    name: string;
    age: number;
    hobbies: string[];
    role: [number, string];
} = {
    name: "Mina",
    age: 3,
    hobbies: ["coding", "drawing"],
    role: [2, "admin"]
}

// these couldn't work again except push
// person.role.push('student');
// person.role[1] = 4;
// person.role = [3, "admin", "staff"];





for (const r of person.role) {
    console.log(r);
}