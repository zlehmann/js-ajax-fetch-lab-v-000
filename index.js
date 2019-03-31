function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ' 4b1060a58447a0c8bc1d52439d1faacb923cfaac';
}

function forkRepo() {
  const repo = 'https://api.github.com/repos/zlehmann/js-ajax-fetch-lab/forks';
  //use fetch to fork it!
  fetch(repo, {
    headers: {
      Authorization: `token 4b1060a58447a0c8bc1d52439d1faacb923cfaac`
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
}

function getIssues() {
  //once an issue is submitted, fetch all open issues to see the issues you are creating
}
