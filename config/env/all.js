'use strict';

module.exports = {
	app: {
		title: 'Colombia - Tours Ciudad Perdida - Lost City - Tayrona Park - Bahia Concha - Minca - Santa Marta Tours',
		description: 'Expotur the best tours operator in colombia and caribean coast:::Lost City::: Tayrona Park::: Guajira::: Day Tours :::: Sierra Nevada',
		keywords: 'expotur colombia, tayrona, ciudad perdida, puenlos ingigenas, playas en el caribe, hoteles en taganga, hoteles en santa marta, alojamiento en el parque tayrona, hoteles en el rodadero, tours a la guajira, alojamiento en punta gallinas, deportes extremos en santa marta, visita a minca, buceo en taganga',
		logo: '/assets/img/logo-expotur.png',
		slogan: 'expotur-eco - Santa Marta'
	},
	port: process.env.PORT || 3000,
	templateEngine: 'swig',
	sessionSecret: 'MEAN',
	sessionCollection: 'sessions',
	assets: {
		lib: {
			css: [
				'public/lib/angular-loading-bar/build/loading-bar.css',
				'http://necolas.github.io/normalize.css/2.1.1/normalize.css',
				'public/lib/bootstrap/dist/css/bootstrap.css',
				'public/assets/vendor/bootswatch/cerulean/bootstrap.css',
				'public/lib/ngDialog/css/ngDialog.css',
				//'public/lib/ngDialog/css/ngDialog-theme-plain.css',
				'public/lib/font-awesome/css/font-awesome.css',
				'public/lib/angular-ui-select/dist/select.css',
				'public/lib/animate.css/animate.css',
				'public/lib/angular-social/angular-social.css',
				'public/lib/malhar-angular-dashboard/dist/angular-ui-dashboard.css',
				'public/lib/angular-material/angular-material.css',
				'public/lib/flexslider/flexslider.css',
				'public/lib/leaflet/dist/leaflet.css',
				'public/lib/leaflet.markercluster/dist/MarkerCluster.css',
				'public/lib/Leaflet.label/dist/leaflet.label.css',
				'public/lib/Leaflet.awesome-markers/dist/leaflet.awesome-markers.css',
				'public/lib/leaflet.markercluster/dist/MarkerCluster.Default.css'
			],
			js: [
				'public/lib/jquery/dist/jquery.min.js',
				'//cdnjs.cloudflare.com/ajax/libs/lodash.js/3.5.0/lodash.min.js',
				'public/lib/es5-shim/es5-shim.min.js',
				'public/lib/flexslider/jquery.flexslider.js',
				'public/lib/angular/angular.js',
				'public/lib/angular-loading-bar/build/loading-bar.min.js',
				'public/lib/angular-touch/angular-touch.js',
				'public/lib/angular-filter/dist/angular-filter.js',
				'public/lib/angular-resource/angular-resource.js',
				'public/lib/angular-animate/angular-animate.js',
				'public/lib/angular-ui-router/release/angular-ui-router.js',
				'public/lib/angular-ui-utils/ui-utils.js',
				'public/lib/angular-ui-select/dist/select.js',
				'public/lib/angular-ui-sortable/sortable.js',
				'public/lib/angular-bootstrap/ui-bootstrap.js',
				'public/lib/angular-bootstrap/ui-bootstrap-tpls.js',
				'public/lib/json3/lib/json3.min.js',
				'public/lib/angular-route/angular-route.min.js',
				'public/lib/angular-cookies/angular-cookies.min.js',
				'public/lib/angular-sanitize/angular-sanitize.min.js',
				'public/lib/angular-aria/angular-aria.js',
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
				'public/lib/ng-droplet/dist/ng-droplet.js',
				'public/lib/angular-scroll/angular-scroll.js',
				'public/lib/angular-easy-social-share/easy-social-share.js',
				'public/lib/angular-social/angular-social.js',
				'public/lib/horizonal/dist/horizonal.min.js',
				'public/lib/json-edit/js/directives.js',
				'public/lib/malhar-angular-dashboard/dist/angular-ui-dashboard.js',
				'public/lib/angular-material/angular-material.js',
				'public/lib/leaflet/dist/leaflet.js',
				'public/lib/angular-flexslider/angular-flexslider.js',
				'public/lib/angular-leaflet-directive/dist/angular-leaflet-directive.js',
				'public/lib/leaflet.markercluster/dist/leaflet.markercluster.js'
			]
		},
		css: [
			'public/modules/**/css/*.css'
		],
		js: [
			'public/config.js',
			'public/application.js',
			'public/modules/*/*.js',
			'public/modules/*/*[!tests]*/*.js'
		],
		tests: [
			'public/lib/angular-mocks/angular-mocks.js',
			'public/modules/*/tests/*.js'
		]
	}
};
