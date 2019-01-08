const interfaceIP = require('./ip');

var cmd = require('node-cmd');

console.log(interfaceIP);

const PORT = '8080';
const WIFI = interfaceIP[0];

hostip = WIFI.split(':');



console.log(hostip);

const command = `E: & cd E:\\Codes\\WebstormProjectsWorkspae\\xCreep & ng serve --host ${hostip[1]} --port ${PORT} --open`;
cmd.get(
    command,
    function (err, data, stderr) {
        if (!err) {
            console.log('Command executed! :\n\n', data)
        } else {
            console.log('Folder path seems to be incorrect!');
        }


    }
);