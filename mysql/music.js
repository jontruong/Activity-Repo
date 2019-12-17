const mysql = require('mysql');
const connection = mysql.createConnection({
    host: "localhost",
    port: 8889,
    user: 'root',
    password: 'root',
    database: 'music_db'
});
connection.connect(err => {
    if (err) throw err;

    console.log('connected as id' + connection.threadId);

    connection.query("SELECT * from info WHERE title = 'GANGNAM STYLE'",(err,res) => {
        if(err) throw err;
        console.log('First song', res[0])
    })

    connection.query("INSERT INTO info SET ?", {
        title: "123",
        artist: "tupac",
        genre: "rap",
    },(err,res) => {
        if (err) throw err;
        console.log(res.affectedRows + " products inserted!")
    })
})