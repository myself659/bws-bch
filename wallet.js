'use strict';
var Client = require('bitcore-wallet-client');


var fs = require('fs');
//var BWS_INSTANCE_URL = 'http://47.52.232.123:3232/bws/api';
//var BWS_INSTANCE_URL = 'https://ltc.58wallet.io/bws/api';
//var BWS_INSTANCE_URL = 'http://52.193.226.247:3232/bws/api';
var BWS_INSTANCE_URL = 'http://bch.blockvalley.io/bws/api'; 

var client = new Client({
    baseUrl: BWS_INSTANCE_URL,
    verbose: false,
});

client.createWallet("bchwallet", "eric", 1, 1, { network: 'livenet', singleAddress: true, coin: 'bch' }, function(err, secret) {
    if (err) {
        console.log('error: ', err);
        return
    };
    // Handle err
    console.log('Wallet Created. Share this secret with your copayers: ' + secret);
    fs.writeFileSync('live-bch.dat', client.export());
});


