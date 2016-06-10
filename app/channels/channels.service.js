angular.module('angularfireSlackApp')
  .factory('Channels', function($firebaseArray, FirebaseUrl){
    var ref = new Firebase(FirebaeUrl+'channels');
    var channels = $firebaseArray(ref);

    return channels;
  })
