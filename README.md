## Overview of http-api-lambda-proxy
This serverless application deploys an Amazon API Gateway HTTP API with a default route and basic CORS configuration. The default route is integrated with a Lambda function (nodejs) that logs the API event (v2) to a CloudWatch Logs log group and returns basic information about the event to the caller.

## Test the application
Once the application is deployed, retrieve the HttpApiEndpoint value from CloudFormation Outputs. Either browse to the endpoint in a web browser or call the endpoint from Postman.

Example GET Request: https://{HttpApiId}.execute-api.us-east-2.amazonaws.com/

Response:
```
{
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
[Working with HTTP APIs](https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api.html)

[Working with AWS Lambda proxy integrations for HTTP APIs](https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-develop-integrations-lambda.html)