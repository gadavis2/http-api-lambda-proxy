## Overview of http-api-lambda-proxy
This serverless application deploys an Amazon API Gateway HTTP API with a default route and basic CORS configuration. The default route is integrated with a Lambda function written in Node.js. The function logs the incoming API event (v2) and context object to a CloudWatch Logs log group and returns basic information about the event to the caller.

## Test the application
Once the application is deployed, retrieve the HttpApiEndpoint value from CloudFormation Outputs. Either browse to the endpoint in a web browser or call the endpoint from Postman.

Example GET Request: https://{HttpApiId}.execute-api.us-east-2.amazonaws.com/

Response:
```
{
  "functionName": "http-api-lambda-proxy-function",
  "xForwardedFor": "{YourIpAddress}",
  "method": "GET",
  "rawPath": "/"
}
```

Example POST Request: https://{HttpApiId}.execute-api.us-east-2.amazonaws.com/path1/path2?foo=bar
- Request Header: Content-Type = application/json
- Request Body: {"key1":"value1", "key2":"value2"}

Response: 
```
{
  "functionName": "http-api-lambda-proxy-function",
  "xForwardedFor": "{YourIpAddress}",
  "contentType": "application/json",
  "method": "POST",
  "rawPath": "/path1/path2",
  "queryString": {
    "foo": "bar"
  },
  "body": "{\"key1\":\"value1\", \"key2\":\"value2\"}"
}
```

## Documentation
- [Working with HTTP APIs](https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api.html)
- [Working with AWS Lambda proxy integrations for HTTP APIs](https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-develop-integrations-lambda.html)
- [AWS Lambda - the Basics](https://docs.aws.amazon.com/whitepapers/latest/serverless-architectures-lambda/aws-lambdathe-basics.html)
- [Lambda Function Handler](https://docs.aws.amazon.com/whitepapers/latest/serverless-architectures-lambda/the-handler.html)
- [Function Event Object - Overview](https://docs.aws.amazon.com/whitepapers/latest/serverless-architectures-lambda/the-event-object.html)
- [Function Event Object - HTTP API v2 Event](https://github.com/awsdocs/aws-lambda-developer-guide/blob/master/sample-apps/nodejs-apig/event-v2.json)
- [Function Context Object - Overview](https://docs.aws.amazon.com/whitepapers/latest/serverless-architectures-lambda/the-context-object.html)
- [Function Context Object in Node.js - Properties](https://docs.aws.amazon.com/lambda/latest/dg/nodejs-context.html)
- [Function Environment Variables](https://docs.aws.amazon.com/lambda/latest/dg/configuration-envvars.html)