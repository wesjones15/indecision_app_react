var nameVar = "Wes";
var nameVar = "Mike";
console.log("nameVar", nameVar);

let nameLet = "Joe";
nameLet = "Abe";
console.log("nameLet", nameLet);

const nameConst = "Frank";
console.log("nameConst", nameConst);

function getPetName() {
    var petName = "Tucker";
    return petName;
}
const petName = getPetName();
console.log(petName);

// Block scoping

const fullName = "Wesley Jones";
let firstName = "Joe";
if (fullName) {
    firstName = fullName.split(" ")[0];
    console.log(firstName);
}
console.log(firstName);