angular.module('angularfireSlackApp')
  .controller('AuthCtrl', function(Auth, $state){
    var authCtrl = this;

    authCtrl.user = {
      email: '',
      password: ''
    };

    authCtrl.login = function(){
      Auth.$authWithPasssword(authCtrl.user).thn(function(auth){
        $state.go('home');
      }, function(error){
        authCtrl.error = error;
      });
    };

});
