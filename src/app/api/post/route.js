import pool from '@/lib/db';

export async function POST(req) {
    try {
        const data = await req.json();
        const [rows] = await pool.query(`
        INSERT INTO Post (title, description, image, link, type) 
        VALUES ( ?, ?, ?, ?, ? )
      `, [data.title || null, data.description || null, data.image || null, data.link || null, data.type || null]);
        console.log('Data inserted successfully:', rows);
        return Response.json({ status: 200 });
    } catch (error) {
        console.log(error)
        return Response.json({ message: error.message }, { status: 500 });
    }
}

export async function DELETE(req) {
    try {
        const data = await req.json();
        await pool.query(`DELETE FROM Post WHERE id=?`, [data.id]);
        return Response.json({ status: 200 });
    } catch (error) {
        return Response.json({ message: error.message }, { status: 500 });
    }
}