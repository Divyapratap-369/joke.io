function generateJoke() {
  fetch("https://jokeapi.dev/joke/any")
    .then(response => response.json())
    .then(data => {
      let joke;
      if (data.setup) {
        joke = `${data.setup} ... ${data.delivery}`;
      } else {
        joke = data.joke;
      }
      document.getElementById("joke").innerHTML = joke;
    });
}
/*
The generateJoke function is called when the "Generate Joke" button is clicked.

The first line of the function uses the fetch API to make a GET request to the Joke API. The API endpoint is specified as the first argument passed to the fetch function, in this case it's "https://jokeapi.dev/joke/any"

The fetch function returns a promise that resolves with a Response object. The response object has a method called json() which we can use to parse the JSON data from the API. This is done in the next line of code by chaining a .then call to the fetch promise, where response => response.json() is used.

The json() method returns a promise that resolves with the parsed JSON data. This is passed as an argument to the next .then call, where we can access the data.

We check if the data has a property called setup, if it does, we set the joke variable to a string that concatenates setup and delivery properties. If it doesn't, we set the joke variable to the joke property.

Finally, we set the innerHTML of the "joke" element to the joke text.

This code uses the fetch API to get the data from the Joke API and it uses the .then




*/