import { Kysely, PostgresDialect } from 'kysely'
import { Pool } from 'pg'

import type { Database } from './types'

export const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
})

export const db = new Kysely<Database>({
  dialect: new PostgresDialect({
    pool,
  }),
})
