import sql from 'mssql';
import dotenv from 'dotenv';
import assert from 'assert';
dotenv.config(); // Loads the environment variables from .env file


const { SQL_USER, SQL_PASSWORD, SQL_SERVER, SQL_PORT, SQL_DB } = process.env; // Destructure environment variables

//Ensure that the environment variables are defined
assert(SQL_USER, 'SQL_USER is not defined in environment variables');
assert(SQL_PASSWORD, 'SQL_PASSWORD is not defined in environment variables');
assert(SQL_SERVER, 'SQL_SERVER is not defined in environment variables');
assert(SQL_PORT, 'SQL_PORT is not defined in environment variables');
assert(SQL_DB, 'SQL_DATABASE is not defined in environment variables');


//MSSQL Database Configuration

// Configuration object for the database connection
export const Config = {
    // Local SQL Server Express with computer name and instance name
    port: SQL_PORT,
    sqlConfig: {
        user: SQL_USER,
        password: SQL_PASSWORD,
        server: SQL_SERVER,
        database: SQL_DB,
        connectionTimeout: 15000,
        requestTimeout: 15000,
        pool: {
            max: 10,
            min: 0,
            idleTimeoutMillis: 30000
        },
        options: {
            encrypt: false,
            trustServerCertificate: true,
            enableArithAbort: true
        }
    },
    //azure sql config
    azureConfig: {
        user: SQL_USER,
        password: SQL_PASSWORD,
        server: SQL_SERVER,
        database: SQL_DB,
        port: parseInt(SQL_PORT || '1433'),
        connectionTimeout: 30000,
        requestTimeout: 30000,
        pool: {
            max: 10,
            min: 0,
            idleTimeoutMillis: 30000
        },
        options: {
            encrypt: true,
            trustServerCertificate: false,
            enableArithAbort: true,
            connectTimeout: 30000,
            requestTimeout: 30000
        }
    }
};


//Create a connection pool - a cache of database connections maintained so that the connections can be reused when future requests to the database are required.

let globalPool: sql.ConnectionPool | null = null;

const initDatabaseConnection = async () => {
    // Return existing connection if already established
    if (globalPool && globalPool.connected) {
        console.log('Using existing database connection');
        return globalPool;
    }

    try {
        // Use Azure config for production, local config for development
        const isProduction = process.env.NODE_ENV === 'production' 
        const config = isProduction ? Config.azureConfig : Config.sqlConfig;

        console.log(`Connecting to database with server: ${config.server}`);
        console.log(`Using ${isProduction ? 'Azure' : 'Local'} configuration`);

        globalPool = await sql.connect(config); // Establishes a new connection pool using the provided configuration
        console.log('Connected to SQL SERVER Database');
        return globalPool; // Returns the connected pool for executing queries
    } catch (error) {
        console.error('Database Connection Failed! ', error);

        // Log additional debugging information
        console.error('Environment variables:');
        console.error(`SQL_SERVER: ${SQL_SERVER}`);
        console.error(`SQL_DATABASE: ${SQL_DB}`);
        console.error(`SQL_USER: ${SQL_USER}`);
        console.error(`NODE_ENV: ${process.env.NODE_ENV}`);
        // console.error(`WEBSITE_SITE_NAME: ${process.env.WEBSITE_SITE_NAME}`);

        throw error;
    }
};

// Export function to get the current database pool
export const getDbPool = (): sql.ConnectionPool => {
    if (!globalPool || !globalPool.connected) {
        throw new Error('Database not connected. Call initDatabaseConnection() first.');
    }
    return globalPool;
};

export default initDatabaseConnection; // Export the function to initialize the database connection 