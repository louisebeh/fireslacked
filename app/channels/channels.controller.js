angular.module('angularfireSlackApp')
  .controller('ChannelsCtrl', function($state, Auth, profile, channels){
    var channelsCtrl = this;

    channelsCtrl.profile = profile;
    channelsCtrl.channels = channels;
  });
