import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();

async function insertUser(username: string, password: string, firstname: string, lastname?: string) {
  const res = await prisma.user.create({
    data: {
        username,
        password,
        firstname,
        lastname,
    }
  })
  console.log(res);
}

// insertUser("yash@gmail", '123456','yash')

interface UpdateParams {
    firstname: string;
    lastname: string;
}

async function updateUser(username: string, {
    firstname,
    lastname
}: UpdateParams) {
  const res = await prisma.user.update({
    where: {username},
    data: {
        firstname,
        lastname,
    }
  })
  console.log(res)
}

updateUser('yash@gmail' ,{
    firstname: 'Yash',
    lastname: "Thakur"
})
