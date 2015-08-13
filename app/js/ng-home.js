(function () {
  'use strict';
	
	function getCourseProgress() {
		var today = new Date();
    	var begin = new Date(2015, 7, 17, 11, 59, 0);//august 17, 2014
    	var end = new Date(2015, 11, 4, 11, 59, 0);//december 4, 2014

    	var progressTime = today.getTime() - begin.getTime();
    	var totalTime = end.getTime() - begin.getTime();
    	var progress = parseInt(progressTime/totalTime * 100);
    	var left = 100 - progress;
		if( progress > 100 ) {
			progress = 100;
		} else if( progress < 0 ) {
			progress = 0;
		}
		return progress;
	}

	angular.module( 'csc-456-app' )
	.controller("HomeController", function($scope, ChapterFactory) {

		 $scope.current =        getCourseProgress();
        $scope.max =            100;
        $scope.stroke =         15;
        $scope.radius =         100;
        $scope.isSemi =         false;
        $scope.rounded =        false;
        $scope.responsive =     false;
        $scope.clockwise =      true;
        $scope.currentColor =   '#ACEC00';//'#45ccce';
        $scope.bgColor =        '#eaeaea';
        $scope.iterations =     50;
        $scope.currentAnimation = 'easeOutCubic';

        $scope.getStyle = function(){
	        return {
	            'top': $scope.isSemi ? 'auto' : '50%',
	            'bottom': $scope.isSemi ? '5%' : 'auto',
	            'left': '50%',
	            'transform': ($scope.isSemi ? '' : 'translateY(-50%) ') + 'translateX(-50%)',
	            'font-size': $scope.radius/2 + 'px',
	            'font-family' : 'Roboto'
	        };
	    };

	    $scope.goToChapters = function() {
	    	angular.element(document.querySelectorAll("a.mdl-layout__tab")).removeClass("is-active");
	    	angular.element(document.querySelectorAll(".mdl-layout__tab-panel")).removeClass("is-active");

	    	angular.element(document.querySelector("#chapters")).addClass("is-active");
	    	angular.element(document.querySelector("#chapters-tab")).addClass("is-active");
	    };

	    ChapterFactory.getChapters()
	    	.success(function(chapters) {
	    		$scope.chapters = chapters;
	    	});

    } );

    angular.module( 'csc-456-app' )
    	.factory("ChapterFactory", function($http) {
    		return {
    			getChapters : function() {
    				return $http.get("http://nku.benjamingbaxter.com/csc456/2015fall/app/api/chapters.json");
    			}
    		};
    	});
})();