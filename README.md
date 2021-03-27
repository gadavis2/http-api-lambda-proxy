## Overview
This serverless application deploys an Amazon API Gateway HTTP API with a default route and basic CORS configuration. The default route is integrated with a Lambda function that logs the API event (v2) to a CloudWatch Logs log group and returns basic information about the event to the caller.

## Documentation
[Working with HTTP APIs](https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api.html)

[Working with AWS Lambda proxy integrations for HTTP APIs](https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-develop-integrations-lambda.html)