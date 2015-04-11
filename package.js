Package.describe({
  name: 'sakukode:sayjs',
  version: '0.0.3',
  // Brief, one-line summary of the package.
  summary: 'TTS (text to speech) for node.js. send text from node.js to your speakers.',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/sakukode/meteor-sayjs',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: null
});

Npm.depends({
  'say' : "0.6.0"
})

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.addFiles('say.js', 'server');
});

/*
Package.onTest(function(api) {
  api.use('tinytest');
  api.use('piyiku:sayjs');
  api.addFiles('sayjs-tests.js');
});
*/
