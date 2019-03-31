function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '2b7c616d68bf1b497827c7b46832f8804b8609a7';
}

function forkRepo() {
  const repo = 'https://api.github.com/repos/zlehmann/js-ajax-fetch-lab/forks';
  const token = getToken();
  console.log(token);
  //use fetch to fork it!
  fetch(repo, {
    method: 'POST',
    headers: {
      Authorization: `token ${getToken()}`
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
