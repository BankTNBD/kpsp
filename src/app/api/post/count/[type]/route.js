import pool from '@/lib/db';

export async function GET(req, { params }) {
  try {
    const type = (await params).type
    const count = await pool.query(`SELECT COUNT(*) FROM Post WHERE type=?`, [type]);
    return count;
  } catch (error) {
    return 0;
  }
}