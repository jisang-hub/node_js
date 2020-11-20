'use strict';

/************* include library **************/
var express = require('express');
var api     = express();
var mysql = require('mysql')


var dbInfo = {
    
    host: 'ls-712a3de0f216372c332622b5ed5c6f22fe2f67bd.cu0xyssgzj43.ap-northeast-2.rds.amazonaws.com',
    port: '3306',
    user: 'dbmasteruser',
    password: 'buackr!!##',
    database: 'BU',
    multipleStatements: true
}
var  Connection = mysql.createConnection({
    host : dbInfo.host,
    user : dbInfo.user,
    password : dbInfo.password,
    database : dbInfo.database
})
Connection.connect();
Connection.query('SELECT * FROM sensor_data', function(error,results,fields){
    if (error) {
        console.log(error);
    }
    console.log(results);
     
    Connection.end();
   // res.send("welcome is API Function")
});

api.post('/insSensor', (req, res, next) => {

    var sensorType = req.body.sensorType;// "";
    var sensorValue = req.body.sensorValue;//"";
    var userId = req.body.userId; //"";
    
    var sql = " insert into sensor_data (sensor_type, sensor_value, sensor_usr_id, ins_date, upd_date ) values ";
    sql += " ('"+ sensorType +"', "+ sensorValue +", '"+ userId +"', now() , now()) ";
    console.log(sql);
    connection.connect();

    console.log("init start");
    connection.query(sql , function(error, results, fields){

        console.log(error);
        console.log(results);
        res.send(results);
    })
});
module.exports = api;
