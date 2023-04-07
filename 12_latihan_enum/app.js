// const ADMIN = 0;
// const STAFF = 1;
// const USER = 2;
// const person = {
//     name: "Ananto",
//     age: 32,
//     role: ADMIN
// };
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["STAFF"] = 1] = "STAFF";
    Role[Role["USER"] = 2] = "USER";
})(Role || (Role = {}));
;
var person = {
    name: "Ananto",
    age: 32,
    role: Role.STAFF
};
if (person.role === Role.STAFF) {
    console.log('is staff');
}
