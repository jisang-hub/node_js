






















var dbInfo = {

    host: 'ls-4ab94082220316df9f6805e2cb989baaea4e9715.cu0xyssgzj43.ap-northeast-2.rds.amazonaws.com',
    port: '3306',
    user: 'dbmasteruser',
    password:'angksehwjsqq',
    database: 'BU',
    multipleStatements: true
});
Connection.connect();
Connection.query('SELECT * FROM sensor_data;, function(error,results,fields) {
    (error) {
        console,log(error);
    }
    console,log(results);
    });
    Connection.end();
    res.send("welcome is API Function")
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
    connection.query(sql , func
    connection.query(sql , function(error, results, fields){

        console.log(error);
        console.log(results);
        res.send(results);
    })

    //req.body.sensorIdx
    //req.body.sensorType
    //req.body.sensorValue

});
