// central location for all communication with our api

export function get(url) {
  return fetch(url);
};

export function post(url, body) {
  var body = JSON.stringify(body);
  return new Promise(function(resolve, reject) {
    fetch(url, {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: body
    })
    .then((response) => {
      response.json()
      .then(function(json) {
        resolve(json);
      });
    })
    .catch((err) => {
      console.log(err);
      reject(err);
    });
  });
};