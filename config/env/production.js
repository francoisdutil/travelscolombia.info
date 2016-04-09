'use strict';

module.exports = {
	db: process.env.MONGOHQ_URL || 'mongodb://mtc420io:{{mtc}}@dogen.mongohq.com:10053/app25405995',
	app: {
		title: 'Colombia - Tours Ciudad Perdida - Lost City - Tayrona Park - Bahia Concha - Minca - Santa Marta Tours'
	},
	assets: {
		lib: {
			css: [
				'https://cdnjs.cloudflare.com/ajax/libs/angular-loading-bar/0.7.1/loading-bar.min.css',
				'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css',
				'https://cdnjs.cloudflare.com/ajax/libs/bootswatch/3.3.2/cerulean/bootstrap.min.css',
				'public/lib/ngDialog/css/ngDialog.css',
				'public/lib/ngDialog/css/ngDialog-theme-plain.css',
				'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.3.0/css/font-awesome.min.css',
				'https://cdnjs.cloudflare.com/ajax/libs/angular-ui-select/0.10.0/select.min.css',
				'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.2.1/animate.min.css',
				'public/lib/angular-social/angular-social.css',
				'https://cdnjs.cloudflare.com/ajax/libs/angular-material/0.8.2/angular-material.min.css',
				'public/lib/flexslider/flexslider.css',
				'public/lib/leaflet/dist/leaflet.css',
				'public/lib/leaflet.markercluster/dist/MarkerCluster.css',
				'public/lib/Leaflet.label/dist/leaflet.label.css',
				'public/lib/Leaflet.awesome-markers/dist/leaflet.awesome-markers.css',
				'public/lib/leaflet.markercluster/dist/MarkerCluster.Default.css'
			],
			js: [
				'https://cdn.jsdelivr.net/jquery/2.1.3/jquery.min.js',
				'https://cdn.jsdelivr.net/lodash/3.3.0/lodash.compat.min.js',
				'https://cdnjs.cloudflare.com/ajax/libs/es5-shim/4.1.0/es5-shim.min.js',
				'public/lib/es5-shim/es5-sham.min.js',
				'public/lib/flexslider/jquery.flexslider.js',
				'public/lib/gsap/src/minified/TweenMax.min.js',
				'https://ajax.googleapis.com/ajax/libs/angularjs/1.3.15/angular.min.js',
				'https://cdnjs.cloudflare.com/ajax/libs/angular-loading-bar/0.7.1/loading-bar.min.js',
				'https://ajax.googleapis.com/ajax/libs/angularjs/1.3.15/angular-touch.min.js',
				'https://cdnjs.cloudflare.com/ajax/libs/angular-filter/0.5.4/angular-filter.min.js',
				'https://ajax.googleapis.com/ajax/libs/angularjs/1.3.15/angular-resource.min.js',
				'https://ajax.googleapis.com/ajax/libs/angularjs/1.3.15/angular-animate.min.js',
				'https://cdnjs.cloudflare.com/ajax/libs/angular-ui-router/0.2.13/angular-ui-router.min.js',
				'https://cdnjs.cloudflare.com/ajax/libs/angular-ui-utils/0.1.1/angular-ui-utils.min.js',
				'https://cdnjs.cloudflare.com/ajax/libs/angular-ui-select/0.10.0/select.min.js',
				'https://cdnjs.cloudflare.com/ajax/libs/angular-ui-sortable/0.13.3/sortable.min.js',
				'public/lib/angular-bootstrap/ui-bootstrap.min.js',
				'public/lib/angular-bootstrap/ui-bootstrap-tpls.min.js',
				'https://cdnjs.cloudflare.com/ajax/libs/json3/3.3.2/json3.min.js',
				'https://ajax.googleapis.com/ajax/libs/angularjs/1.3.15/angular-route.min.js',
				'https://ajax.googleapis.com/ajax/libs/angularjs/1.3.15/angular-cookies.min.js',
				'https://ajax.googleapis.com/ajax/libs/angularjs/1.3.15/angular-sanitize.min.js',
				'https://ajax.googleapis.com/ajax/libs/angularjs/1.3.15/angular-aria.min.js',
				'public/lib/messageformat/messageformat.js',
				'public/lib/angular-translate/angular-translate.min.js',
				'public/lib/angular-translate-interpolation-messageformat/angular-translate-interpolation-messageformat.min.js',
				'public/lib/angular-translate-storage-cookie/angular-translate-storage-cookie.min.js',
				'public/lib/angular-translate-storage-local/angular-translate-storage-local.min.js',
				'public/lib/angular-translate-loader-static-files/angular-translate-loader-static-files.min.js',
				'public/lib/angular-translate-handler-log/angular-translate-handler-log.js',
				'public/lib/angular-dynamic-locale/src/tmhDynamicLocale.js',
				'public/lib/ngDialog/js/ngDialog.js',
				'public/lib/angularytics/dist/angularytics.min.js',
				'public/assets/js/bootstrap-colorpicker-module.js',
				'public/lib/PreloadJS/lib/preloadjs-0.4.1.min.js',
				'public/lib/angular-growl-notifications/dist/angular-growl-notifications.js',
				'https://cdnjs.cloudflare.com/ajax/libs/angular-scroll/0.6.5/angular-scroll.min.js',
				'public/lib/angular-easy-social-share/easy-social-share.js',
				'public/lib/angular-social/angular-social.js',
				'public/lib/horizonal/dist/horizonal.min.js',
				'public/lib/json-edit/js/directives.js',
				'https://ajax.googleapis.com/ajax/libs/angular_material/0.8.2/angular-material.min.js',
				'public/lib/angular-flexslider/angular-flexslider.js',
				'public/lib/leaflet/dist/leaflet.js',
				'public/lib/angular-flexslider/angular-flexslider.js',
				'public/lib/angular-leaflet-directive/dist/angular-leaflet-directive.min.js',
				'public/lib/leaflet.markercluster/dist/leaflet.markercluster.js'
				]
		},
		css: 'public/dist/application.min.css',
		js: 'public/dist/application.min.js'
	},
	facebook: {
	clientID: process.env.FACEBOOK_ID || '639943469420300',
	clientSecret: process.env.FACEBOOK_SECRET || '5272949477bae96474e48006290d3369',
	callbackPath: 'https://expotur-eco.herokuapp.com/auth/facebook/callback'
	},
	twitter: {
	clientID: process.env.TWITTER_KEY || 'NA5HZ7Qy5tBNiESEtEIgM41lM',
	clientSecret: process.env.TWITTER_SECRET || 'uhwhR7iQpObnMEVS0kVG1JKKJAtjn4DjtOk8PFlKlC92TsRsxt',
	callbackPath: 'https://expotur-eco.herokuapp.com/auth/twitter/callback'
	},
	google: {
	clientID: process.env.GOOGLE_ID || '569086323986-ren636qnd17is2i9brepl9eu8m7vauja.apps.googleusercontent.com',
	clientSecret: process.env.GOOGLE_SECRET || 'h3dhJSfYAUAthJ7tFBUQIVLL',
	callbackPath: 'https://expotur-eco.herokuapp.com/oauth2callback'
	},
	mailer: {
		from: process.env.MAILER_FROM || 'info@expotur-eco.com',
		options: {
			service: process.env.MAILER_SERVICE_PROVIDER || 'Gmail',
			auth: {
				user: process.env.MAILER_EMAIL_ID || 'francois.dutil@gmail.com',
				pass: process.env.MAILER_PASSWORD || '{{franco1s}}'
				//pass: process.env.MAILER_PASSWORD || 'margarita2435'
				}
		}
	}
};
