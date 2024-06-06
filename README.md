# smart-search-algorithm

This README provides step-by-step instructions for setting up and running the smart-search-algorithm project.

## Prerequisites

Ensure you have the following installed:
- Node.js (v14.x or higher)
- PostgreSQL

## Project Setup

### 1. Clone the Repository

```bash
git clone <[link](https://github.com/Azterix101/smart-search-algorithm.git)>
cd smart-search-algorithm
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `config.json` file in the root directory and add the following:

```config

{
  "development": {
    "username": "your_db_username",
    "password": "your_db_password",
    "database": "entity_extraction_dev",
    "host": "127.0.0.1",
    "dialect": "postgres"
  }
}
```

### 4. Initialize Sequelize

```bash
npx sequelize-cli init
```

### 5. Create the Database

Ensure PostgreSQL is running and create the database manually:

```sql
CREATE DATABASE entity_extraction_dev;
```

Or create a script to initialize the database:

```javascript
const { Client } = require('pg');
const config = require('./config/config.json').development;

async function createDatabase() {
  const client = new Client({
    user: config.username,
    host: config.host,
    password: config.password,
    port: config.port || 5432
  });

  try {
    await client.connect();
    await client.query(`CREATE DATABASE ${config.database}`);
    console.log('Database created successfully');
  } catch (err) {
    if (err.code === '42P04') {
      console.log('Database already exists');
    } else {
      console.error('Error creating database:', err);
    }
  } finally {
    await client.end();
  }
}

createDatabase();
```

Run the script:

```bash
node initDatabase.js
```

### 6. Run Migrations

```bash
npx sequelize-cli db:migrate
```

### 7. Start the Server

```bash
npm start
```

## Conclusion

You have successfully set up and configured the smart-search-algorithm project. You can now run the server and execute unit tests to ensure everything is working correctly. For any issues or contributions, please refer to the project's repository.