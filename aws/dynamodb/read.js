'use strict';

const rx = require('rxjs');
const rxop = require('rxjs/operators');
require('dotenv').config();
const AWSCredentials = require('../aws');

class DynamoDBRead extends AWSCredentials {
    constructor(options){
        super();
        this.options = options;
    }

    readSingleBatch(key) {
        console.info("passed key", key)
        return new Promise((resolve, reject) => {
            let readParams = {
                TableName : this.options.tableName,
                ProjectionExpression : this.options.projectionExpression,
                Limit: this.options.batchSize
            };

            if(key) readParams.ExclusiveStartKey = key;
            console.log("readparams", readParams)
            return this.doc.scan(readParams, (err, data) => {
                if(err) reject(err);
                resolve(data);
            });
        });
    }

    readAll() {
        let batches = [];
        let key = null;
        const source = rx.defer(_ => this.readSingleBatch(key));

        let pushToBatch = res => {
            res.Items.forEach(item => batches.push(item));
            return res;
        };

        let extractKey = res => {
            key = res.LastEvaluatedKey;
            return res;
        }

        let lastKeyExists = res => res.LastEvaluatedKey !== undefined;
        
        let observer = source.pipe(
            rxop.map(pushToBatch),
            rxop.map(extractKey),
        );

        let done = _ => console.info("done, result contains ", batches.length);
        let err = err => console.error(err);

        let resubscribeIfIncomplete = (res) => {
            return lastKeyExists(res) ? observer.subscribe(resubscribeIfIncomplete, err, done) : null;
        }
        observer.subscribe(resubscribeIfIncomplete, err, done);           
    }
}
module.exports = DynamoDBRead;