// const dotenv = require('dotenv');
// const mysql = require('mysql2');
// import dotenv from 'dotenv';
import mysql from 'mysql2/promise';
// dotenv.config();

// const pool = mysql.createConnection({
//     host: process.env.MYSQL_HOST,
//     user: process.env.MYSQL_USER,
//     password: process.env.MYSQL_ASSWORD,
//     database: process.env.MYSQL_DATABASE
// });
const connection = await mysql.createConnection({
    host: 'sql5.freemysqlhosting.net',
    user: 'sql5699265',
    password: 'rYYc7siSAW',
    database: 'sql5699265'

   
});



// A simple SELECT query
/*
try {
    const [results, fields] = await connection.query(
      'SELECT * FROM `content`'
    );
  
    console.log(results); // results contains rows returned by server
   // console.log(fields); // fields contains extra meta data about results, if available
  } catch (err) {
    console.log(err);
  }
  
  */
export async function getContets(){
    const [rows] = await connection.query("SELECT * FROM content");
    return rows;
};

export async function createContent(data, date){
    const [result] = await connection.query(
        "INSERT INTO content (data, date) VALUES(?,?)", [data,date]
    );
    return result.insertId;
}

// module.exports = {
//     getContets,
//     createContent
// };
