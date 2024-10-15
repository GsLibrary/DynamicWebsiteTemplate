app.post('/check', function(req, res) {
    const x = req.body.inputCheck; // Get the value from the input field
    if (x === process.env.SUPERSECRET) { res.send("yes");} else {
        res.redirect('/');
    }
});