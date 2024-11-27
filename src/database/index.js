var r = require('rethinkdb');

const conn = r.connect({
    db: 'Lidar',
    host: '37.46.134.113',
    user: 'lidar_admin',
    password: 'admin'
})

module.exports = { 
    r, 
    conn 
}