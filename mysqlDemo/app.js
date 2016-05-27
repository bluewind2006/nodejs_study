/**
 * http://usejsdoc.org/
 */
var mysql = require('mysql');

var connection = mysql.createConnection({
	host:'127.0.0.1'
   ,user:'root'
   ,password:'qwer1234'
});

connection.connect();

connection.query('Create DATABASE mynodeDB', function(err){
	if(err) { throw err;}
});

connection.query('use mynodeDB');
connection.query('create table member (idx INT(4) AUTO_INCREMENT, user_id VARCHAR(20), user_name VARCHAR(20), PRIMARY KEY(idx))');

connection.query('INSERT INTO member (user_id, user_name) VALUES (?, ?)',
		['qwer1234', '1234qwer'], function (error, results, fields) {
               });

connection.query('select * from member', function(err, results, fields){
	if(err) {throw err;}
	console.log(results);
	console.log(fields);
});

connection.end();



