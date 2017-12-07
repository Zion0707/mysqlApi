var express = require('express')
var router = express.Router()
var mysql = require('mysql')
var config = require('../config.js')

//更改单条数据
router.post('/updateCar',function(req,res,next){
	//连接数据库
	var connection = mysql.createConnection(config)
	connection.connect();

	//插入数据
	connection.query('update list set name="'+req.body.newVal+'" where name="'+req.body.oldVal+'" ',function(err, docs) {
		if ( err ) {
			throw err;
		}else{
			var json ={
				code : 0,
				api : 'updateCar',
				msg : 'success',
				res : {
					name:req.body.newVal
				}
			}
			res.send(json)
		}
	});

	//关闭数据库
	connection.end(); 

})
module.exports = router;