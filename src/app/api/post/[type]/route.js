import pool from '@/lib/db';

export async function GET(req, { params }) {
  try {
    const type = (await params).type
    const [rows] = await pool.query(`SELECT * FROM Post WHERE type='${type}' ORDER BY timestamp DESC LIMIT 10`);
    return Response.json(rows);
  } catch (error) {
    console.log(error)
    return Response.json([]);
    // Response.json({ message: error.message }, { status: 500 });
  }
}