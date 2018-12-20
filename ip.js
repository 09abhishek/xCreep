'use strict';

const os = require('os');
const ifaces = os.networkInterfaces();
const ipArray = [];

Object.keys(ifaces).forEach(function (ifname) {
    var count = 0;

    ifaces[ifname].forEach(function (iface) {
      // console.log(iface);
        if ('IPv4' !== iface.family || iface.internal !== false) {
            // skip over internal (i.e. 127.0.0.1) and non-ipv4 addresses
            return;
        }

        if (count >= 1) {
            // this single interface has multiple ipv4 addresses
            ipArray.push(ifname + alias + ':' + iface.address);

            //console.log(ifname + ':' + alias, iface.address);
        } else {
            // this interface has only one ipv4 adress
            ipArray.push(ifname + ':' + iface.address);
            //  console.log(ifname, iface.address);
        }
        ++count;
    });
});

 console.log(ipArray);


// var os = require('os');

// var interfaces = os.networkInterfaces();
// var addresses = [];
// for (var k in interfaces) {
//   //  console.log(interfaces[k].alias);
//     for (var k2 in interfaces[k]) {
//         var address = interfaces[k][k2];
//         if (address.family === 'IPv4' && !address.internal) {
//             addresses.push(address.address);
//         }
//     }
// }

// console.log(addresses);


// var ifs = require('os').networkInterfaces();
// var result = Object.keys(ifs)
//   .map(x => [x, ifs[x].filter(x => x.family === 'IPv4')[0]])
//   .filter(x => x[1])
//   .map(x => x[1].address);

//   console.log(result);


// var os = require( 'os' );
// var networkInterfaces = os.networkInterfaces();
// var arr = networkInterfaces;
// console.log(arr);
// //var ip = arr[0].address;

// //console.log(ip);