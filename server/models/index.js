var db = require('../db');



module.exports = {
  messages: {
    get: function (body, callback) {
      // console.log(body);
      var queryString = `SELECT * FROM messages`;
      // console.log(queryString);
      db.query(queryString, function(err, results) {
        if (err) {
          // throw err;
          console.log('Error: ', err);
          callback(err);
        } else {
          callback(results);
         
          console.log('Success: ', results);
        }
      });
    }, // a function which produces all the messages

    post: function (body, callback) {
      var queryString = `INSERT INTO messages (message) VALUES ("${body.text}")`;
      // console.log(queryString);
      db.query(queryString, function(err, results) {
        if (err) {
          // throw err;
          console.log('Error: ', err);
          callback(null, err);
        } else {
          callback(results, null);
          console.log('Success!');
        }
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (body, callback) {

      var queryString = `SELECT * FROM users`;
      
      //console.log(queryString);
      db.query(queryString, function(err, results) {
        if (err) {
          // throw err;
          console.log('Error: ', err);
          callback(err);
        } else {
          callback(results);
         
          console.log('Success!');
        }
      });
    },

    post: function (body, callback) {
      
      var queryString = `INSERT INTO users (username) VALUES ('${body.username}')`;
      // console.log(queryString);
      db.query(queryString, function(err, results) {
        if (err) {
          // throw err;
          console.log('Error: ', err);
          callback(err);
        } else {
          console.log('Success!');
          
          callback(results);
        }
      });
    }
  }
};

