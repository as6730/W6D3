const FollowToggle = require('./follow_toggle.js');

$( document ).ready(function() {
  $('button.follow-toggle').each((idx, button) => new FollowToggle(button));
});
