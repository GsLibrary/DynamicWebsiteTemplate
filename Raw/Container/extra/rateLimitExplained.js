const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per window
    message: 'Too many requests, please try again later.',
});

app.use(limiter);


/*
    - 15: 15min
    - 60: converts minutes to seconds
    - 1000: converts secondfs to milliseconds

    Its defining 15min by going step by step
*/

/*
A request on a Node.js site that could potentially lead to being rate-limited would be any HTTP request made by a client to your server, including:

Refreshing the page: Every time a user refreshes their browser (F5, Ctrl+R, or reloading), it sends a new HTTP request to the server. If someone refreshes the page frequently, it counts toward their request limit within the defined time window.

Navigating between pages: Any click that leads to a new route on the site sends an HTTP request. For example, moving from /home to /about generates a new request.

Form submissions: Each time a user submits a form, such as login, registration, or contact forms, it sends an HTTP POST request.

AJAX requests: If the site uses JavaScript (AJAX) to make background requests to the server (like fetching data or submitting forms without a full page reload), these can also count as requests.

API calls: If your site exposes an API, every request to your API endpoints (GET, POST, PUT, DELETE) counts towards the rate limit.

WebSocket or other long-lived connections: Although WebSockets maintain an open connection rather than repeatedly sending HTTP requests, some systems may count connection initiation or other interactions that occur over time.

Example Scenario for Rate-Limiting:
If you have a rate limit set like this:

javascript
Copy
Edit
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Max 100 requests per 15 minutes
    message: 'Too many requests, please try again later.',
});
If a user refreshes the page 10 times in 1 minute, that's 10 requests.
If they submit a form or interact with other parts of the site (e.g., clicking a button that triggers an AJAX request), that adds additional requests.
If they hit the max request threshold (100 requests in 15 minutes), they will be rate-limited, meaning they'll receive the "Too many requests" message.

What Actions Trigger Rate Limiting:
Constant refreshing: A user refreshing the page or navigating between pages frequently.
Spamming form submissions: Submitting forms repeatedly (e.g., login attempts, contact forms).
Bot-like behavior: Automated scripts or bots generating multiple requests in a short time period.
You can configure express-rate-limit to be more lenient or strict, depending on how often you want users or clients to interact with the server within a given time window. If you'd like, I can guide you on how to handle specific cases like form submissions or API requests with different rate limits.
*/