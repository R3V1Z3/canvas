var filename = "file.json";
var content = "{'hello':\n  {'github':\n    {'gist':'api'}}}"
var data = {
  "description": "posting gist test",
  "public": true,
  "files": {
    filename: {
        "content": content
    }
  }
}
$.ajax({
  url: 'https://api.github.com/gists',
  type: 'POST',
  dataType: 'json',
  data: JSON.stringify(data)
})
.success( function(e) {
  // e.comments_url should contain Gist id, public url structure:
  // https://gist.github.com/anonymous/id
  console.log(e);
})
.error( function(e) {
  console.warn("gist save error", e);
});
