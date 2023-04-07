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
var person = {
    name: "Mina",
    age: 3,
    hobbies: ["coding", "drawing"],
    role: [2, "admin"]
};
// person.role.push('student');
// person.role[1] = 4;
person.role = [3, "admin", "staff"];
for (var _i = 0, _a = person.role; _i < _a.length; _i++) {
    var r = _a[_i];
    console.log(r);
}
