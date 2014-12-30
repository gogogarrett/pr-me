var pullRequestReviewer = {
  requestReviewer: function() {
    var req = new XMLHttpRequest();
    that = this;

    this.findOrg(function(org) {
      url = "https://api.github.com/orgs/" + org + "/public_members";

      req.open("GET", url, true);
      req.onload = that.findUser_.bind(that);
      req.send(null);
    })
  },

  findOrg: function(callback) {
    chrome.storage.sync.get({github: 'blake-education', }, function(items) {
      callback(items.github)
    });
  },

  findUser_: function (e) {
    var users = JSON.parse(e.target.responseText)
    user = users[Math.floor(Math.random() * users.length)];
    this.addEyesFor_(user['login']);
  },

  addEyesFor_: function (username) {
    document.getElementById("new_comment_field").value = ':eyes: please -  @' + username;
  }
}

pullRequestReviewer.requestReviewer();
