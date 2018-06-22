let mysql = require('mysql');

let con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'personasdb'
});

con.connect( err =>{
    if (err) throw err;
    console.log("Connected to DB");
});

const addPersonToDB = person => {
  let sqlStatement = `INSERT INTO persona SET ?`;

  con.query(sqlStatement, person, (err, result) => {
      
    if (err) throw err;
    console.log("Number of records inserted: " + result.affectedRows);
  });

};

module.exports = addPersonToDB;
