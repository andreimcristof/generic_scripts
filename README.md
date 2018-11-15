# AWS scripts

### Dynamo DB
- DynamoDBCreate: Import items into your DynamoDB, in batches of 25 (max batch size allowed by DynamoDB). 
- DynamoDBRead: Read full column (scan) from DynamoDB by passing in the batch size (DynamoDB will truncate responses up to 1MB, so figure out roughly what batch size will be fine for that amount in your table). Use this with small tables, since a scan does a full table read.



### Credentials
Credentials are provided with the .dotenv package and being read from process.env, so you need to create the .env file and input there your credentials, table name, etc.

### How to use 
See index.js for examples. 
