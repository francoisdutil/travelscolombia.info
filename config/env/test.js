'use strict';

module.exports = {
	db: 'mongodb://localhost/mtc-test',
	port: 3001,
	app: {
		title: 'mtc - Test Environment'
	},
	facebook: {
		clientID: process.env.FACEBOOK_ID || '639943469420300',
		clientSecret: process.env.FACEBOOK_SECRET || '5272949477bae96474e48006290d3369',
		callbackPath: 'http://localhost:3000/auth/facebook/callback'
	},
	twitter: {
		clientID: process.env.TWITTER_KEY || 'NA5HZ7Qy5tBNiESEtEIgM41lM',
		clientSecret: process.env.TWITTER_SECRET || 'uhwhR7iQpObnMEVS0kVG1JKKJAtjn4DjtOk8PFlKlC92TsRsxt',
		callbackPath: 'http://localhost:3000/auth/twitter/callback'
	},
	google: {
		clientID: process.env.GOOGLE_ID || '569086323986-ren636qnd17is2i9brepl9eu8m7vauja.apps.googleusercontent.com',
		clientSecret: process.env.GOOGLE_SECRET || 'h3dhJSfYAUAthJ7tFBUQIVLL',
		callbackPath: 'http://localhost:3000/auth/google/callback'
	},
	mailer: {
		from: process.env.MAILER_FROM || 'MAILER_FROM',
		options: {
			service: process.env.MAILER_SERVICE_PROVIDER || 'MAILER_SERVICE_PROVIDER',
			auth: {
				user: process.env.MAILER_EMAIL_ID || 'MAILER_EMAIL_ID',
				pass: process.env.MAILER_PASSWORD || 'MAILER_PASSWORD'
			}
		}
	}
};
