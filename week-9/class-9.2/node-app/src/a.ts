// let x: number = 1;
// x = 'Yash'
// console.log(x)

// function greet (name: string){
//     console.log("Hello" + name)
// }

// greet("Yash");

// function sum (a: number, b: number): number{
//     return a+b
// }

// const value = sum(1,2)

// console.log(value)



// function isLegal (age:number){
//     if (age>=18){
//         return true
//     } else{
//         return false
//     }
// }
interface User {
    firstName: string,
    lastName: string,
    age: number,
    email?: string
}

function isLegal (user: User){
    if (user.age>=18){
        return true
    } else{
        return false
    }
}

