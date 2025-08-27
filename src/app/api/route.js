export async function GET() {
  return Response.json({
    message: "Backend is working",
    timestamp: new Date().toISOString(),
  });
}
