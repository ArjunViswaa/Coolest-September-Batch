// Primitive data types are copied by value - Number, String, Boolean, undefined, null

let num1 = 10;
let num2 = 20;

let num3 = num1; // Copy by value

console.log(num1, num2, num3); // 10 20 10

// Non-primitive or Reference data types are copied by reference - Object, Array, Function

let obj1 = {
    name: "John",
    age: 30
};

let obj2 = obj1; // Copy by reference

obj2.name = "Doe";

console.log(obj1, obj2); // { name: 'Doe', age: 30 } { name: 'Doe', age: 30 }


// Shallow copy - Only the first level of the object is copied

let obj3 = {
    name: "John",
    age: 30,
    address: {
        city: "New York",
        country: "USA"
    }
};

let obj4 = Object.assign({}, obj3); // Shallow copy - 1st way
let obj5 = {...obj3}; // Shallow copy - 2nd way
obj4.name = "Doe";
obj4.address.city = "California";

console.log("Shallow copy", obj3, obj4, obj5);


// Deep copy - All levels of the object are copied

let obj6 = {
    name: "John",
    age: 30,
    address: {
        city: "New York",
        country: "USA"
    }
};

let obj7 = JSON.parse(JSON.stringify(obj6)); // Deep copy
obj7.name = "Doe";
obj7.address.city = "California";

console.log("Deep copy", obj6, obj7);