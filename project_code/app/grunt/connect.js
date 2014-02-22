module.exports = {
	server: {
		options: {
			port: 3010,
			hostname: 'localhost',
			base: 'www',
			keepalive: true,
			open: {
				target: 'http://localhost:3010',
				appName: 'chromium-browser'
			}
		}
	}
};