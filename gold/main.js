//for each loop

let arr = [35,2,3,4,5];

//addition
 arr.forEach(function (items,i){
    console.log(items+2); 
});

//subtraction
arr.forEach(function (items,i){
    console.log(items-2); 
});

// Multiplication
arr.forEach(function (items,i){
    console.log(items*2); 
});

//Division

arr.forEach(function (items,i){
    console.log(items/2); 
});

//mod
arr.forEach(function (items,i){
    console.log(items%2); 
});


// for loop


let arr1 = [4,5,6,7,8,9]

//addition
for (let i =0; i < arr.length; i++) {
console.log(arr1[i] +4);
}

//sub
for (let i =0; i < arr.length; i++) {
console.log(arr1[i] -4);
}

//mul
for (let i =0; i < arr.length; i++) {
console.log(arr1[i] *4);
}

//div
for (let i =0; i < arr.length; i++) {
console.log(arr1[i] /4);
}

//mod
for (let i =0; i < arr.length; i++) {
console.log(arr1[i] %4);
}


///for of loop

//add
for (let item of arr1) {
    console.log(item +5);
}

//sub
for (let item of arr1) {
    console.log(item -5);
}

//mul
for (let item of arr1) {
    console.log(item *5);
}

//div
for (let item of arr1) {
    console.log(item /5);
}


//mod
for (let item of arr1) {
    console.log(item %5);
}

















