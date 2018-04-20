'use strict';
var Client = require('bitcore-wallet-client');


var fs = require('fs');
//var BWS_INSTANCE_URL = 'http://47.52.232.123:3232/bws/api';
//var BWS_INSTANCE_URL = 'https://ltc.58wallet.io/bws/api';
//var BWS_INSTANCE_URL = 'http://52.193.226.247:3232/bws/api';
var BCHAddressTranslator = require('./bchaddresstranslator');

var BWS_INSTANCE_URL = 'http://bch.blockvalley.io/bws/api';
var client = new Client({
    baseUrl: BWS_INSTANCE_URL,
    verbose: true,
});

var fileName = 'live-bch.dat';
var str = fs.readFileSync(fileName, {
    encoding: 'utf8'
});
client.import(str.toString());

client.createAddress({}, function(err, addr) {
    if (err) {
        console.log('error: ', err);
        return;
        //return reject(err);
    }
    console.log(addr);
    console.log(addr.address);
    console.log(BCHAddressTranslator.translate(addr.address, 'cashaddr', 'copay'));
    //return resolve(addr.address);
});