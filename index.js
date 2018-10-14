'use strict';

// const Create = require('./aws/dynamodb/create');
// const bi = new Create();
// bi.run();

const DynamoDBRead = require('./aws/dynamodb/read');

let options = {
    batchSize : 25,
    projectionExpression: process.env.projectionExpressionCommaSeparatedColumnNames.split(','),
    tableName: process.env.DynamoDB_DataTable
}
const dr = new DynamoDBRead(options);
dr.readAll();

