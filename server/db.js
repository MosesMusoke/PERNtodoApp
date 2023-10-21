const Pool = require('pg').Pool

// The above allows you to use the Pool class to create a connection pool for your PostgreSQL database.
pool = new Pool({
    user:"postgres",
    host:"localhost",
    password:"Monyvone10",
    port:5433,
    database:"perntodo"
})

module.exports = pool

