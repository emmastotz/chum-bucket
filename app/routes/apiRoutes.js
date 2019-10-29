// =========================================================
// LOAD DATA
// =========================================================
var friendOptions = require("../data/friend.js");

// =========================================================
// ROUTING
// =========================================================
module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    res.json(friendOptions);
  });
  
  app.post("/api/friends", function(req, res) {
    
    var userScore = req.body.scores;
    var results = [];
    var match = 0;
    var bestFriend;
    
    for (var i = 0; i < friendOptions.length; i++) {
      var difference = 0;
      for (var j = 0; j < userScore.length; j++) {
        difference += (Math.abs(parseInt(friendOptions[i].scores[j]) - parseInt(userScore[j])))
      };
      results.push(difference);
    };

    for (var i = 0; i < results.length; i++) {
      if (results[i] <= results[match]) {
        match = i;
      }
    };

    bestFriend = friendOptions[match];
    console.log("============================");
    console.log(bestFriend);

    res.json(bestFriend);
    friendOptions.push(req.body);
  });
};