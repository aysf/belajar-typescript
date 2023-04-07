
// cara lama

// const ADMIN = 0;
// const STAFF = 1;
// const USER = 2;

// const person = {
//     name: "Ananto",
//     age: 32,
//     role: ADMIN
// };



// cara baru
// enum Role {ADMIN, STAFF, USER};

// const person = {
//     name: "Ananto",
//     age: 32,
//     role: Role.STAFF
// };


// cara baru 2

// Role elements can be assigned any values including string
// the default is start from 0
enum Role {ADMIN = 3, STAFF = 6, USER};

const person = {
    name: "Ananto",
    age: 32,
    role: Role.STAFF
};

if (person.role === Role.STAFF) {
    console.log('is staff');
}

