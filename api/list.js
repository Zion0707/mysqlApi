//post方式
var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var config = require('../config.js');

//查询所有数据
router.post('/list',function(req,res,next){
	//连接数据库
	var connection = mysql.createConnection(config)
	connection.connect();
	//查询list表
	connection.query('select * from list',function(err, docs) {
		if ( err ) {
			throw err;
		}else{
			var json ={
				code : 0,
				api : 'list',
				msg : 'success',
				list : docs
			}
			res.send(json)
		}
	});
	//关闭数据库
	connection.end(); 

})
module.exports = router;