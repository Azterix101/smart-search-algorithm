const { Client } = require("pg");
const config = require("./config/config.json").development;

async function createDatabase() {
    const client = new Client({
        user: config.username,
        host: config.host,
        password: config.password,
        port: config.port || 5432,
    });

    try {
        await client.connect();
        const res = await client.query(`CREATE DATABASE ${config.database}`);
        console.log("Database created successfully");
    } catch (err) {
        if (err.code === "42P04") {
        console.log("Database already exists");
        } else {
        console.error("Error creating database:", err);
        }
    } finally {
        await client.end();
    }
}

createDatabase();
