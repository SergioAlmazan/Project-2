module.exports = {
  "development": {
    "username": "root",
    "password": "password",
    "database": "quiz_db",
    "host": "localhost",
    "dialect": "mysql"
  },
  "production": {
    "use_env_variable": "JAWSDB_URL",
    "dialect": "mysql"
  }
};
