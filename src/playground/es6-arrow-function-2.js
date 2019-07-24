const add = (a, b) => {
    // console.log(arguments);
    return a + b;
}

console.log(add(2, 4, 1001));

const user = {
    name: "Wes",
    cities: ['Downingtown', 'Millersville', 'Snow Shoe'],
    printPlacesLived() {
        const cityMessages = this.cities.map((city) =>  this.name + " has lived in " + city);
        return cityMessages;
        // this.cities.forEach((city) => {
        //     console.log(this.name + " has lived in " + city);
        // });
    }
};

console.log(user.printPlacesLived());

const multiplier = {
    numArr: [1,2,3,4],
    multiplyBy: 4,
    multiply() {
        const multiplied = this.numArr.map((num) => (num * this.multiplyBy));
        return multiplied;
    }
};
console.log(multiplier.multiply());