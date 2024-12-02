module.exports = {
  host: process.env.RDB_HOST,
  port: process.env.RDB_PORT,
  db: process.env.RDB_DB,
  user: process.env.RDB_USER,
  password: process.env.RDB_PASS,
  mongoose_conection_string: process.env.MONGO_CONN,
};
