import express from "express"
import { Client } from "pg"

async function insertData(){
    const client = new Client({
        host: 'localhost',
        port: 5432,
        database: 'postgres',
        user: 'postgres',
        password: 'mysecretpassword',
    });


    async function createUsersTable() {
        await client.connect()
        const result = await client.query(`
            CREATE TABLE users (
                id SERIAL PRIMARY KEY,
                username VARCHAR(50) UNIQUE NOT NULL,
                email VARCHAR(255) UNIQUE NOT NULL,
                password VARCHAR(255) NOT NULL,
                created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
            );
        `)
        console.log(result)
    }

    createUsersTable();

    try {
        // await client.connect();
        const insertQuery = "INSERT INTO users (username, email, password) VALUES ('Yash', 'yta@test.com', 'user123456');";
        const res = await client.query(insertQuery);
        console.log("Insertion Success", res)
    } catch (error) {
        console.log("error",error)
    } finally {
        await client.end();
    }
}

insertData();