// Client helper functions to interact with the REST API

// add a new car
// sends a POST request to /api/cars
/* eslint-disable no-undef */
function addCar(car, cb) {
  const body = JSON.stringify(car)

  return fetch(`/api/cars`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body,
  }).then(checkStatus)
    .then(parseJSON)
    .then(cb)
}

// sends a GET request to /api/cars
/* eslint-disable no-undef */
function getCars(cb) {
  return fetch(`/api/cars`, {
    accept: 'application/json'
  }).then(checkStatus)
    .then(parseJSON)
    .then(cb)
}

// request helpers
function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    const error = new Error(`HTTP Error ${response.statusText}`);
    error.status = response.statusText;
    error.response = response;
    console.log(error); // eslint-disable-line no-console
    throw error;
  }
}

function parseJSON(response) {
  return response.json();
}

const Client = {
  addCar,
  getCars,
};

export default Client;
