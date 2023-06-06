import pool from '../../config/dbconfig'

async function testDB (): Promise<string> {
  const res = await pool.query('select \'world\' as hello')
  return res.rows[0]
}

export default testDB
