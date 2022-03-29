const net = require('net');
const server = net.createServer();

server.listen(process.env.PORT || 3000, () => {
  //  console.log('Server is running');

});

server.on('connection', (socket) => {

    //console.log('Rastreador conectou');
   
        socket.write("CONECTOU");
});