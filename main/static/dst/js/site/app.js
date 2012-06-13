// Generated by CoffeeScript 1.3.1
(function() {

  $(function() {
    return LOG('app init');
  });

  $(function() {
    return $('html.welcome').each(function() {
      return LOG('init welcome');
    });
  });

  $(function() {
    return $('html.profile').each(function() {
      return init_profile();
    });
  });

  $(function() {
    return $('html.feedback').each(function() {
      return init_loading_button();
    });
  });

  $(function() {
    return $('html.admin-config').each(function() {
      return init_admin_config();
    });
  });

  $(function() {
    var channel_name;
    channel_name = $('html').data('channel-name');
    if (channel_name === 'chat') {
      return subscribe_chat();
    }
  });

}).call(this);
