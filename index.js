'use strict';
require('dotenv').config();

// batch import into DynamoDB
// const DynamoDBCreate = require('./aws/dynamodb/create');
// let options = {
//     tableName : process.env.DynamoDB_DataTable,
//     batchSize: 25
// };
// const dc = new DynamoDBCreate(options);
// dc.createAll();


// batch read from DynamoDB
const DynamoDBRead = require('./aws/dynamodb/read');
let options = {
    batchSize : 25,
    projectionExpression: process.env.projectionExpressionCommaSeparatedColumnNames.split(','),
    tableName: process.env.DynamoDB_DataTable
}
const dr = new DynamoDBRead(options);
dr.readAll();

