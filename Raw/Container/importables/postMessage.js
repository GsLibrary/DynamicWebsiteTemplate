function postMessage(message){
    fetch('/set', {
        method: 'POST', // specify the method
        headers: {
          'Content-Type': 'application/json' // specify the content type
        },
        body: JSON.stringify({ message: message }) // convert the message into a string
      })
      .then(response => response.json()) // parse the json response if needed
      .then(data => console.log(data)) // log the response data
      .catch((error) => console.error('Error:', error)); // log any errors
}

// This goes into your public script.js not your server.js btw