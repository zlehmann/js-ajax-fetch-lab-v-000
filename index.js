function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '1eb92b31310c7de205862e6634d05978d8344572';
}

function forkRepo() {
  const repo = 'https://github.com/zlehmann/js-ajax-fetch-lab';
  const token = getToken();
  console.log(token);
  //use fetch to fork it!
  fetch(repo, {
    headers: {
      Authorization: 'token ${token}'
    }
  })
    .then(resp => resp.json())
    .then(json => console.log(json));
}

function showResults(json) {
  //use this function to display the results from forking via the API
  console.log(json);
}

function createIssue() {
  //use this function to create an issue based on the values input in index.html
}

function getIssues() {
  //once an issue is submitted, fetch all open issues to see the issues you are creating
}
