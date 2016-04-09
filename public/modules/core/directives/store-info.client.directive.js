'use strict';

angular.module('core').directive('storeInfo', [
	function() {
		var StoreInfo = function(s, e, a) {
      this.scope = s;
      this.element = e;
      this.attrs = a;
      this.show = function() {
        this.element.css('display', 'block');
        this.scope.$apply();
      }
      this.hide = function() {
        this.element.css('display', 'none');
      }
    };
    return {
      templateUrl: '/modules/core/views/tour-info.html',
      link: function(scope, e, a) {
        scope.storeInfo= new StoreInfo(scope, e, a);
      }
    };
	}
]);
