var pullRequestReviewer = {
  githubUrl: "https://api.github.com/orgs/blake-education/public_members",

  requestReviewer: function() {
    var req = new XMLHttpRequest();
    req.open("GET", this.githubUrl, true);
    req.onload = this.findUser_.bind(this);
    req.send(null);
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
