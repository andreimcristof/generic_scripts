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


// console.log('connecting to DynamoDB')

        // let deleteTblParams = {
        //     TableName: this.tableName
        // }

        // let createTblParams = {
        //     TableName: this.tableName
        // }
        // createTblParams.ProvisionedThroughput = {
        //     ReadCapacityUnits: 1,
        //     WriteCapacityUnits: 1
        // };

        // createTblParams.AttributeDefinitions = [
        //     {
        //         AttributeName: 'alpha3Code',
        //         AttributeType: 'S'
        //     }
        // ];

        // createTblParams.KeySchema = [
        //     {
        //         "AttributeName": "alpha3Code",
        //         "KeyType": "HASH"
        //     }
        // ];

// console.info('deleting table', this.tableName);
    // this.ddb.deleteTable(deleteTblParams, (err, data) => {
    //     if (err) console.error('deleteerr', err);
    //     if(data) console.log('delete table ', data)

    // console.info('creating table', this.tableName);
    // this.ddb.createTable(createTblParams, (err, data) => {
    //     if (err) console.error('createerr', err);
    //     if(data) console.log('create table ', data)


    // async waitForTable(ddb) {
    //     let currentStatus;

    //     let pollTbl = _ => {
    //         do {
    //             let pollStatusFn = async _ => {
    //                 this.interogateStatus(ddb).then(
    //                     status => currentStatus = status
    //                 ).catch(err => currentStatus = 'NOSTATUS')
    //             };

    //             setInterval(pollStatusFn, 3000)
    //         } while (currentStatus === "NOSTATUS");
    //     }

    //     return await pollTbl();
    // }

    // interogateStatus(ddb) {
    //     console.info('interogateStatus');
    //     return new Promise((resolve, reject) => {
    //         let describeTableParams = {
    //             TableName: this.tableName
    //         }

    //         ddb.describeTable(describeTableParams, (err, data) => {
    //             console.info('data', data)

    //             if (err) reject(err);
    //             if (data) resolve(data.status);
    //         })
    //     })
    // }



    // do {
    // setInterval(() => {
    //     console.log('doing2')
    //         interogateStatus(this.ddb)
    //             .then(s => {
    //                 currentStatus = s;
    //             })
    //             .catch(console.error)
    // }, 2500);
    // } while (currentStatus !== "A")
    // do{setInterval(()=> {
    //     console.log('running');
    //     interogateStatus();
    // }, 2000)} while(currentStatus !== "ACTIVE");
