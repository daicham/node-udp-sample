var models = require('./models');

var post = new Post({text: "ふが"});
post.save(function(err){
  if (err) {
    console.log(err);
  } else {
    console.log("success");
  }
});
