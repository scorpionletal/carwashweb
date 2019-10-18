// dependencies
var mysql = require('mysql');
var queries = require('./queries');

// run query to db
var dbConfig = {
   host: process.env.DB_HOST,
   user: process.env.DB_USER,
   password: process.env.DB_PASSWORD,
   database: process.env.DB_NAME,
};

var runQuery = function(Query,Data,callback){
   var connection = mysql.createConnection(dbConfig);
   connection.connect(function(err) {
      if (err) throw err;
   });
   
   connection.query(Query,Data,function(err, res){
         if (err) throw err;
         if (callback){
            callback(res);
            
        }
      }
   );
        connection.end();
}

// module
var DB = function(config){
   config = config || {};
}

DB.prototype.getData = function(data,callback){
    var Query = queries.getdata;
    var Data  = [data];
    runQuery(Query,Data,function(res){
       res = res.pop();
       callback(res);
    });
 }

/*DB.prototype.getSingleData = function(data,callback){
   var Query = queries.SQLGETSINGLEDATA;
   var Data  = [data];
   runQuery(Query,Data,function(res){
      res = res.pop();
      callback(res);
   });
}*/
/*
DB.prototype.saveSingleData = function(data){
   var Query = queries.SQLSAVESINGLEDATA;
   var Data  = data;
   runQuery(Query,Data);
}
DB.prototype.testget = function(data,callback){
   var Query = queries.testget;
   var Data  = [data];
   runQuery(Query,Data,function(res){
      res = res.pop();
      callback(res);
   });
}*/
//consultas para database de las alarmas
/*DB.prototype.getDataAlarmas = function(data,callback){
    var Query = queries.getdataalarmas;
    var Data  = [data];
    runQuery(Query,Data,function(res){
       res = res.pop();
       callback(res);
    });
 }*/
 

 DB.prototype.saveDataAlarmas = function(data){
    var Query = queries.postDataAlarmas;
    var Data  = data;
    runQuery(Query,Data);
 }




/*DB.prototype.saveHistory = function(data,callback){
   
   var Data  = data;
   var Query = queries.saveHistory(Data);
  
   Data.splice(1,1);

   runQuery(Query,Data);
}*/



module.exports = DB;