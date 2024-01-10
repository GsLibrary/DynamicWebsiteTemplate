app.use((req, res, next) => {
    const host = req.headers.host;
    if (host === "[WEBSITE HERE]") {
      next(); // The correct host - move to the next middleware
    } else {
      // Not the correct host - redirect to Google
      res.redirect('https://www.google.com'); // You can change this to do something else if you wanna.
    }
  });