Package.describe({
  name: 'accolver:twilio-meteor',
  summary: "Twilio API Wrapper for Meteor",
  version: '1.10.0',
  git: 'https://github.com/accolver/twilio-meteor.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles('accolver:twilio-meteor.js', 'server');
  api.export('Twilio', 'server');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('accolver:twilio-meteor');
  api.addFiles('accolver:twilio-meteor-server-tests.js', 'server');
});

Npm.depends({ "twilio": "1.10.0" });