let blocked = [];

export async function handler(event) {
  if (event.httpMethod === "GET") {
    return {
      statusCode: 200,
      body: JSON.stringify(blocked),
    };
  }

  if (event.httpMethod === "POST") {
    const body = JSON.parse(event.body);
    blocked = body;
    return {
      statusCode: 200,
      body: JSON.stringify({ success: true }),
    };
  }

  return {
    statusCode: 405,
    body: "Method Not Allowed",
  };
}