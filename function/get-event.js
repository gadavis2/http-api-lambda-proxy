// Lambda function used to log and return HTTP API (v2) event.
exports.handler = async (event, context) => {
  try {
    // Log event and context object to CloudWatch Logs
    console.log("Event: ", JSON.stringify(event, null, 2));
    console.log("Context: ", JSON.stringify(context, null, 2));
    // Example function environment variables
    console.log("Variable1: ", process.env.Variable1);
    console.log("Variable2: ", process.env.Variable2);

    // Create event object to return to caller
    const eventObj = {
      functionName: context.functionName,
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