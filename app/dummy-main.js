if (window.location == '/profile'){
  require.ensure(["profile", "feed"], function(require) {
    var a = require("profile");
    // ...
  });
}
else if (window.location == '/feed') {
  require.ensure(["profile", "feed"], function(require) {
    var a = require("feed");
    // ...
  });
}
