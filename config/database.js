const mysql = require('mysql2/promise');
const {logger} = require('./winston');

// TODO: 본인의 DB 계정 입력
const pool = mysql.createPool({
    //
    // host: 'database-1.cxcw5prmxvi7.ap-northeast-2.rds.amazonaws.com',
    // user: 'hannah100',
    // port: '3306',
    // password: 'hannah1205!',
    // database: 'CoupangEats'

    host: 'database-1.cpekoz9psp0y.ap-northeast-2.rds.amazonaws.com',
    user: 'admin',
    port: '3306',
    password: '010203zz!',
    database: 'CoupangEatsapi'

});



module.exports = {
    pool: pool
};