import { Resend } from "resend";
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
      const resend = new Resend(context.env.RESEND_API_KEY);

await resend.emails.send({
  from: "BirdieLabs <beta@birdielabs.app>",
  to: "birdielabsiq@gmail.com",
  subject: "🚀 Nueva solicitud para la beta",
  html: `
    <h2>Nueva solicitud para la beta</h2>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Fecha:</strong> ${new Date().toLocaleString("es-ES")}</p>
  `
});

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