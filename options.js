// Saves options to chrome.storage
function save_options() {
  var github = document.getElementById('github').value;
  var comment = document.getElementById('comment').value;

  chrome.storage.sync.set({
    github: github,
    comment: comment,
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.className = status.className + ' alert alert-success'
    status.textContent = 'Options saved.';
  });
}

function restore_options() {
  chrome.storage.sync.get({
    github: 'blake-education',
    comment: ':eyes: please - {{name}}',
  }, function(items) {
    document.getElementById('github').value = items.github;
    document.getElementById('comment').value = items.comment;
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);
