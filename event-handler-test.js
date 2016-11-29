//require events module
var events = require('events');

//创建eventEmitter对象
var eventEmitter = new events.EventEmitter();

//创建事件处理程序
var connectionHandler = function() {
	console.log('connected');

	//触发 data_received 事件
	eventEmitter.emit('data_received');
}

eventEmitter.on('data_received', function() {
	console.log('data received');
})

//接受 connection 事件，并指定事件处理程序
eventEmitter.on('connection', connectionHandler);

//触发 connection 事件
eventEmitter.emit('connection');

console.log('done');
