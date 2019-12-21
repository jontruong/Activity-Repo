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

function updateSongList(){
    console.log("Updating List...\n")
    var query= connection.query(
        "UPDATE info SET ? WHERE ?",[
            {
                genre: "hip hop"
            },
            {
                title:"ABC"
            }

        ],
        function(err,res){
            if (err) throw err;
            console.log(res.affectedRows + " products updated!\n")
            deleteProduct();
        }
    );
    console.log(query.sql);
}

function deleteProduct(){
    console.log("Deleting all PSy\n");
    connection.query(
        "DELETE from info WHERE ?",
        {
            artist:"PSY"
        },
        function(err,res){
            if(err) throw err;
            console.log(res.affectedRows + " products deleted!\n")
            readProducts();
        }
    );
}

function readProducts(){
    console.log("Selecting all products...\n");
    connection.query("SELECT * FROM info",
    function(err,res){
        if (err) throw err;
        console.log(res);
        connection.end();
    }
    )
}