//program 1 to find longest word in the sentence

function findLongest(sentence) {

    sentence = sentence.split(" ")
    max = ""

    for (let i = 0; i < sentence.length; i++) {
        if (sentence[i].length > max.length) max = sentence[i];

    }
    return max
}

// console.log("the longest word in the sentence (hi what's  your name) is")
// let result=findLongest("hi what's  your name")
// console.log(result)


//program 2 to find the majority element in the array
function findMajority(arr) {

    maj = {}

    for (let i = 0; i < arr.length; i++) {

        if (!maj[arr[i]]) {
            maj[arr[i]] = 1;
        }
        else {
            maj[arr[i]] = maj[arr[i]] + 1;
        }
    }

    most = 0;
    for (let i = 0; i < arr.length; i++) {
        if (maj[arr[i]] > most) most = arr[i]
    }


    return most

}

// let result= findMajority([1,2,1,3,4,2,4,4]);
// console.log("the most repeated value in the arr [1,2,1,3,4,2,4] is")
// console.log(result)

//program 3 to sort an array
let sort = [1, 2, 43, 0, 10, 213, 42, 57, 234]
// console.log(sort.sort((a, b) => a - b))


//program 4 for array manipulation 

function manipulation(operation, mani, val=0) {

    if (operation === "push") mani.push(val)
    if (operation === "pop") mani.pop()
    if (operation === "shift") mani.unshift(val)
    if (operation === "unshift") mani.shift()
}
let mani = [1,2,3]

manipulation("push",mani,10)
manipulation("pop",mani)
manipulation("shift",mani,3)
manipulation("push",mani,11)

// console.log("the manipulation operation for the array ",mani," after operations");
// console.log(mani)


//program 5 to perform stack operation for the array

function stackfun(operation, arr, val=0) {

    if (operation === "push") arr.push(val)
    if (operation === "pop") arr.pop()

}
let stack = []

stackfun("push",stack,10)
stackfun("pop",stack)
stackfun("push",stack,11)
stackfun("push",stack,13)

console.log("the stack operation for the array ",stack," after operations");
console.log(stack)