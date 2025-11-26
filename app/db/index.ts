import { drizzle } from "drizzle-orm/node-postgres";
import * as schema from "./schema";
import { singleton } from "dn-react-router-toolkit";
import pg from "pg";
import * as dotenv from "dotenv";

dotenv.config();

function createDatabase() {
    const pool = new pg.Pool({
        host: process.env.POSTGRES_HOST!,
        port: parseInt(process.env.POSTGRES_PORT!),
        user: process.env.POSTGRES_USER!,
        password: process.env.POSTGRES_PASSWORD!,
        database: process.env.POSTGRES_DATABASE!,
    });

    const db = drizzle(pool, { schema });

    return db;
}

export const db = singleton("db", createDatabase);

export * from "./schema";
