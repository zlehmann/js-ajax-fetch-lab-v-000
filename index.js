function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '';
}

function forkRepo() {
  const repo = 'https://api.github.com/repos/learn-co-curriculum/js-ajax-fetch-lab/forks';
  //use fetch to fork it!
  fetch(repo, {
    method: "POST",
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
    .then(resp => resp.json())
    .then(json => showResults(json));

}

function showResults(json) {
  //use this function to display the results from forking via the API
  console.log(json);
}

function createIssue() {
  //use this function to create an issue based on the values input in index.html
  const repo = 'https://api.github.com/repos/learn-co-curriculum/js-ajax-fetch-lab/issues';
  fetch(repo, {
    method: "POST",
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
    .then(resp => resp.json())
    .ten(json => console.log(json));
}

function getIssues() {
  //once an issue is submitted, fetch all open issues to see the issues you are creating
}
