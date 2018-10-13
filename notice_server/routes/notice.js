var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var sql_config = {   // 配置链接信息
  host: '180.76.119.190',  // 数据库地址，一般在本地
  user: 'admin',        // 用户名
  password: '123456',    // 密码
  database: 'noticeStatement'     // 数据库名
}
// 输入 sql 语句，和处理函数，给处理函数传入数据。
function conect_sql(sql_msg, cb) {
  var connection = mysql.createConnection(sql_config); // 表名
  connection.connect();
  connection.query(sql_msg, (err, rows, fields) => {
    if (err) throw err;
    cb(rows);
    connection.end();
  });
}

router.all('*', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

// 登陆接口
router.post('/login', (req, res) => {
  let userName = req.body['admin_name'];
  let admin_passwd = req.body['admin_passwd'];

  let tableName = 'user_list'

  let sql_str = `SELECT * FROM ${tableName} where admin_name="${userName}"`

  conect_sql(sql_str, (list) => {
    if (list[0].admin_passwd === admin_passwd) {
      res.send('success');
    } else {
      res.send('用户名或密码错误');
    }
    
  })
})

module.exports = router;