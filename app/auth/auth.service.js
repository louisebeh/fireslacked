angular.module('angularfireSlackApp')
  .factory('Auth', function($firebaseAuth, FirebaseUrl){
    var ref = newFirebase('https://fireslacked.firebaseio.com');
    var auth = $firebaseAuth(ref);
  });
