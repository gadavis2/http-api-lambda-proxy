// Lambda function used to log and return HTTP API (v2) event.

exports.handler = async (event, context) => {
  try {
    const method = event.requestContext.http.method;
    const rawPath = event.rawPath;
    const queryString = JSON.stringify(event.queryStringParameters);
    const body = event.body;
    const xForwardedFor = event.headers["x-forwarded-for"];
    const contentType = event.headers["content-type"];

    console.log("Event: ", JSON.stringify(event, null, 2));
    console.log("Method: ", method);
    console.log("RawPath: ", rawPath);
    console.log("QueryString: ", queryString);
    console.log("Body: ", body);
    console.log("XForwardedFor: ", xForwardedFor);
    console.log("ContentType: ", contentType);

    const response = {
      statusCode: 200,
      body: JSON.stringify(event, null, 2),
    };
    return response;
  } catch (error) {
    console.error(error);
    throw new Error("Function Error");
  }
};