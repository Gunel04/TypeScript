const a: number = 100;
const b: string = "Hello World!";
const c: boolean = false;


console.log(a);
console.log(b);
console.log(c);

const myArr: string[] = ['apple', 'pear', 'kiwi'];
console.log(myArr);
console.log(myArr[1]);

const myFruits: Array<string> = ['orange', 'mango'];
console.log(myFruits);

const numArr: Array<number> = [1, 2, 3, 4, 5];
console.log(numArr);


const myInfo: Array<number | string | boolean> = ['Gunel', 'Alxasova', 20, false];
console.log(myInfo);

const mixArray: Array<any> = ['Gunel', 'Alxasova', 20, true];
console.log(mixArray);


type myInfoObj = {
    id: number,
    myName: string,
    mySurname: string,
    age: number,
    isStudent: boolean
}

const myObj = {
    id: 1,
    myName: "Gunel",
    mySurname: "Alxasova",
    age: 20,
    isStudent: true
}

console.log(myObj);


const myArrObj: myInfoObj[] = [
    {
        id: 1,
        myName: "Gunel",
        mySurname: "Alxasova",
        age: 20,
        isStudent: true
    },
    {
        id: 2,
        myName: "Yusif",
        mySurname: "Alxasli",
        age: 14,
        isStudent: false
    }
]

console.log(myArrObj);
