const base = 100;
let offset = 42;

//template literals (backtick)
let message = `your value is ${base+offset}!`;


// console.log(base+offset);
// offset += 10;
// console.log(base+offset);

// if (offset > 10) {
//     console.log("large");
// } else {
//     console.log("small");
// }

// for (let i = 0; i < 10; i++){
//     console.log(`meow from cat #${i}!`);
// }

// let breeds = ["calico", "tabby", "siamese"];

// console.log(breeds);

// // how to add things to list
// breeds.push("mysterycat");
// breeds.unshift("shorty");

// // for loop 
// for (let i = 0; i<breeds.length; i++){
//     console.log(breeds[i]);
// }

// // easier for loop pythonically
// for(let b of breeds) {
//     console.log(b);
// }

let my_cat = {
    name: 'MPEG',
    num_legs: 4,
    nicknames: ['emmycat', 'emmy'],
    tail_length: 4,
};

function increaseTailLength(cat) {
    cat.tail_length += 10;
    return cat.tail_length;
}

// new way of creating a function
let multiplyTailLength = (cat) => cat.tail_length *=2;

console.log(increaseTailLength(my_cat));

console.log(my_cat);