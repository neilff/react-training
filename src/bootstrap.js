import Parse from 'parse';

Parse.initialize('c0dabc5c-e0c3-46ef-bdcb-900e1010f5d8','unused');
Parse.serverURL = 'http://react-europe.herokuapp.com/';

//var obj = new Parse.Object('GameScore');
//obj.set('score',1337);
//obj.save().then(function(obj) {
//  console.log(obj.toJSON());
//  var query = new Parse.Query('GameScore');
//  query.get(obj.id).then(function(objAgain) {
//    console.log(objAgain.toJSON());
//  }, function(err) {console.log(err); });
//}, function(err) { console.log(err); });