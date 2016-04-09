'use strict';

angular.module('core').directive('passObject', ['ngDialog',
	function(ngDialog) {
		return {
        restrict: 'A',
        scope: { passedObject: '=' },
        template: "<div class='directive'>This is the value passed into this directive = {{passedObject}}!</div>",
        link: function($scope, element){
            element.on('click',function(){
                ngDialog.open({
                    template: '<div>By updating i need it to reflect in the root scope:<br /><br />' +
                              '<input type="text" ng-model="passedObject"/></div>',
                    plain: true,
                    scope: $scope,
                    controller: ['$scope', function($scope){
                        $scope.$watch('passedObject', function(passedObject){
                            //What do i need to do? it seems like the scope at this level is updating how come the parent is not?
                            if(window.console){console.log('updated with: ' + passedObject);}
                            //$scope.$apply();
                        });
                    }]
                })
            });
        }
    };
	}
]);
