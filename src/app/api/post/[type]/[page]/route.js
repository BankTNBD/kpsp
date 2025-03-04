import pool from '@/lib/db';

export async function GET(req, { params }) {
  try {
    const type = (await params).type;
    const page = (await params).page;
    const [rows] = await pool.query(`SELECT * FROM Post WHERE type='${type}' ORDER BY timestamp DESC LIMIT 10 OFFSET ${Number(page)}`);
    return Response.json(rows);
  } catch (error) {
    return Response.json([]);
  }
}