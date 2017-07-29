var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      console.log('MESSAGES - GET');
      models.messages.get(req.body, (content, err)=>{
        
        if (err) {
          console.log('Error: ', err);
          res.status(500).end(err);
        } else {
          console.log('Content: ', content);
          res.status(200).end(JSON.stringify(content));
        }
      });      

    }, // a function which handles a get request for all messages
    post: function (req, res) {
      console.log('MESSAGES - POST');
      models.messages.post(req.body, (content, err)=>{
        if (err) {
          console.log('Error: ', err);
          res.status(500).end(err);
        } else {
          res.status(200).end(JSON.stringify(content));
        }
      });
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      console.log('USERS - GET');
      models.users.get(req.body, (content, err)=>{
        if (err) {
          console.log('Error: ', err);
          res.status(500).end(err);
        } else {
          res.status(200).end(JSON.stringify(content));
        }
      });
      
    },
    post: function (req, res) {
      console.log('USERS - POST');
      models.users.post(req.body, (content, err)=>{
        if (err) {
          console.log('Error: ', err);
          res.status(500).end();
        } else {
          res.status(201).end(JSON.stringify(content));
        }
      });
    }
  }
};

