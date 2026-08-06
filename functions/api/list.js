export async function onRequestGet(context) {
  const { DB } = context.env;

  const { results } = await DB.prepare(`
    SELECT *
    FROM beta_users
    ORDER BY created_at DESC
  `).all();

  return Response.json(results);
} 