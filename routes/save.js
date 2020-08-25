var express = require('express');
const mysql = require('mysql');
var router = express.Router();
// var moment = require('moment'); // 追加momentで追加
// var connection = require('../mysqlConnection'); // 追加

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'pass',
  database: 'list_app',
});

connection.connect((err) => {
  if (err) {
    console.log('error connecting: ' + err.stack);
    return;
  }
  console.log('success');
});

router.post('/', function(req, res, next) {
  console.log(req.body.menu);
  console.log(req.body.sex);
  console.log(req.body.ages);
  // var createdAt = moment().format('YYYY-MM-DD HH:mm:ss'); // 追加
  // console.log(createdAt); // 追加
  connection.query(
    "insert into sampledata values(?,?,?);",
    [req.body.menu, req.body.sex, req.body.ages],
    (error, results) => {
      console.log(results);
      res.send('データが送信されました！！');
    }
  );
});



module.exports = router;

