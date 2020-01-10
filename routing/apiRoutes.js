var friends = require("../data/friends");

module.exports = function(app){
    app.get("/api/friends", function(req, res){
        res.json(friends);
        //console.log(friends);
    });

    app.post("/api/friends", function(req, res){
        var userInput = req.body.scores;
    

        //Logic for calculating best friend compatibility
        var bestFriend;
        var maxDifference = 41;

        for(var i = 0; i < friends.length; i++){
            var totalDiff = 0;
            for(var j = 0; j < friends[i].scores.length; j++){
                totalDiff += Math.abs(parseInt(friends[i].scores[j]) - parseInt(userInput[j]));
                
            };
            if (totalDiff < maxDifference){
                maxDifference = totalDiff;
                bestFriend = i;
            };
        };
       friends.push(req.body); 
       res.json(friends[bestFriend]);
    });
};