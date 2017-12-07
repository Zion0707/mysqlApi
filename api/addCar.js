var express = require('express')
var router = express.Router()
var mysql = require('mysql')
var config = require('../config.js')

//添加单条数据
router.post('/addCar',function(req,res,next){
	
	//连接数据库
	var connection = mysql.createConnection(config)
	connection.connect();

	//插入数据
	connection.query('insert into list (name) values ("'+ req.body.name +'")',function(err, docs) {
		if ( err ) {
			throw err;
		}else{
			var json ={
				code : 0,
				api : 'addCar',
				msg : 'success'
			}
			res.send(json)
		}
	});

	//关闭数据库
	connection.end(); 

})
module.exports = router;