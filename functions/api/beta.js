export async function onRequestPost(context) {
  try {
    const formData = await context.request.formData();
    const email = formData.get("email");

    if (!email) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "Email requerido"
        }),
        {
          status: 400,
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
    }

    // ¿Ya existe?
    const existing = await context.env.DB
      .prepare("SELECT id FROM beta_users WHERE email = ?")
      .bind(email)
      .first();

    if (existing) {
      return new Response(
        JSON.stringify({
          success: true,
          message: "Ya estabas apuntado 😊"
        }),
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
    }

    // Guardar
    await context.env.DB
      .prepare(
        "INSERT INTO beta_users (email) VALUES (?)"
      )
      .bind(email)
      .run();

    return new Response(
      JSON.stringify({
        success: true,
        message: "¡Bienvenido a la beta!"
      }),
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
    );

  } catch (err) {
    return new Response(
      JSON.stringify({
        success: false,
        message: err.message
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
  }
}