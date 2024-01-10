// Set IP To Variable

const clientIp = requestIp.getClientIp(req);

// Check IP

const clientIp = requestIp.getClientIp(req);

if (clientIp = "1.1.1.1") {
	console.log("CloudFlare!");
}

// Blacklisted IP's

const BlacklistedIPs = ['1.1.1.1', '11.89.105.144', '88.252.83.56', '42.205.252.60'];

// Middleware function to check if the client's IP is blacklisted
function checkBlacklistedIp(req, res, next) {
	// Get the client's IP address
	const clientIp = requestIp.getClientIp(req);

	// Check if the clientIp is in the BlacklistedIPs array
	if (BlacklistedIPs.includes(clientIp)) {
		// If IP is blacklisted, you can end the request here
		res.status(403).send('Access denied');
	} else {
		// If IP is not blacklisted, pass on to the next middleware
		next();
	}
}