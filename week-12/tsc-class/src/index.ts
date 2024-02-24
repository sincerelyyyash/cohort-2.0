interface User{
    name: string,
    age: number,
    email: string,
    password: string,
};

// function sumOfAge (user1: User, user2:User){
//     return user1.age + user2.age;
// }

// const age = sumOfAge({name : "Yash", age: 21}, {name: "Aditya", age: 20})
// console.log(age)

type updateProps = Pick<User, 'name' | 'email'>

function updateUserName(user: updateProps){
    console.log(`Name: ${user.name}, Email: ${user.email} `)
}

updateUserName({name: "Yash", email: "yta@"});

type updatePropsOptional = Partial<updateProps>


