'use strict';

require('dotenv').config();
const rx = require('rxjs');
const rxop = require('rxjs/operators');
const AWSCredentials = require('../aws');
const Data = require('../../data');

class DynamoDBCreate extends AWSCredentials {
    constructor(options) {
        super();
        this.options = options;
        this.data = new Data();
    }
    
    createAll() {
        this.data.fetchList().then( res => {
            let lst = JSON.parse(res);
            let objLst = this.buildInsertList(lst);
            const source = rx.from(objLst);
            
            const p = source.pipe(rxop.bufferCount(this.options.batchSize));

            p.subscribe(this.writeToDb.bind(this), console.error, console.info);            
        })
    }

    writeToDb(lst){
        var importParams = {
            RequestItems: {}
        };

        importParams.RequestItems[this.options.tableName] = lst;

        this.doc.batchWrite(importParams, (err, data) => {
            console.error('batchwriteerr', err);
        })
    }

    buildInsertList(lst) {
        return lst.map(this.buildItem.bind(this));
    }

    buildItem(apiObject) {
        return {
            PutRequest: {
                Item: this.data.asDataItem(apiObject)
            }
        }
    }
}

module.exports = DynamoDBCreate;

  