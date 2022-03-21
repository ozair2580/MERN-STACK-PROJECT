const http=require('http');
const app=require('./App');
http.createServer(app).listen(6002,console.log('app is running'))
