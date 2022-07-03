var cluster = require('cluster');
var os = require('os');
var server = require('./server-debug.js');

if(cluster.isMaster) {
  for(let i = 0; i < os.cpus(); i++){
    cluster.fork();
  }
}else{
  server.start();
}
