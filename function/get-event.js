// Lambda function used to log and return HTTP API (v2) event.
exports.handler = async (event, context) => {
  try {
    // Log full event to CloudWatch Logs
    console.log("Event: ", JSON.stringify(event, null, 2));

    // Create event object to return to caller
    const eventObj = {
      xForwardedFor: event.headers["x-forwarded-for"],
      contentType: event.headers["content-type"],
      method: event.requestContext.http.method,
      rawPath: event.rawPath,
      queryString: event.queryStringParameters,
      body: event.body,
    };

    const response = {
      statusCode: 200,
      body: JSON.stringify(eventObj, null, 2),
    };
    return response;
  } catch (error) {
    console.error(error);
    throw new Error("Function Error");
  }
};