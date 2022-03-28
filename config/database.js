var mysql = require('mysql');
var express = require('express');
var router = express.Router();


module.exports = function () {
    return {
        init: function () {
            return mysql.createConnection({
                host : "", //서버 로컬 IP
                port : "" ,
                user : "", //계정 아이디
                password : "", //계정 비밀번호
                database : "" //접속할 DB
            })
        },

        test_open: function (con) {
            con.connect(function (err) {
                if (err) {
                    console.error('mysql connection error :' + err);
                } else {
                    console.info('mysql is connected successfully.');
                }
            })
        }
    }
};
