import pool from '@/lib/db';

export async function POST(req) {
    try {
        const data = await req.json();
        await pool.query(`
        INSERT INTO Post (title, description, image, link, type) 
        VALUES (
          ${data.title ? `'${data.title}'` : 'NULL'},
          ${data.description ? `'${data.description}'` : 'NULL'},
          ${data.image ? `'${data.image}'` : 'NULL'},
          ${data.link ? `'${data.link}'` : 'NULL'},
          '${data.type ? `'${data.type}'` : 'NULL'}'
        )
      `);
        return Response.json({ status: 200 });
    } catch (error) {
        return Response.json({ message: error.message }, { status: 500 });
    }
}

export async function DELETE(req) {
    try {
        const data = await req.json();
        await pool.query(`DELETE FROM Post WHERE id='${data.id}'`);
        return Response.json({ status: 200 });
    } catch (error) {
        return Response.json({ message: error.message }, { status: 500 });
    }
}