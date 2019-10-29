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
    friendOptions.push(req.body);
    
    var userScore = req.body.scores;
    var results = [];
    var match = 0;
    var bestFriend;
    
    for (var i = 0; i < friendOptions.length; i++) {
      var difference = 0;
      for (var j = 0; j < userScore.length; j++) {
        console.log(friendOptions[i].scores[j]);
        difference += (Math.abs(parseInt(friendOptions[i].scores[j]) - parseInt(userScore[j])))
      };
      results.push(difference);
    };
    console.log(results);

    for (var i = 0; i < results.length; i++) {
      console.log(results[i]);
      if (results[i] <= results[match]) {
        match = i;
        console.log(match);
      }
    };

    bestFriend = friendOptions[match];
    console.log("============================");
    console.log(bestFriend);

    res.json(bestFriend);
  });
};