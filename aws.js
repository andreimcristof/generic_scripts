'use strict';
require('dotenv').config();

const AWS = require('aws-sdk');
AWS.config.update({ region: process.env.AWSZone });

class AWSCredentials {
    constructor(){
        this.doc = new AWS.DynamoDB.DocumentClient({
            convertEmptyValues : true
        });
    }
}

module.exports = AWSCredentials
