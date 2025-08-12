export async function GET() {
    return Response.json({
      POSTGRES_URL_SET: Boolean(process.env.POSTGRES_URL) // true or false
    });
  }
  