angular.module('angularfireSlackApp')
  .controller('MessagesCtrl', function(profile, channelName, messages){
    var messagesCtrl = this;

    messagesCtrl.messages = messages;
    messagesCtrl.channelName = channelName;
    messagesCtrl.message = '';
  });
