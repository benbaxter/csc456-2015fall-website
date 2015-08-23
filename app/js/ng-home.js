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

	function goToTab(tab, tabPanel) {
    	angular.element(document.querySelectorAll("a.mdl-layout__tab")).removeClass("is-active");
    	angular.element(document.querySelectorAll(".mdl-layout__tab-panel")).removeClass("is-active");

    	angular.element(document.querySelector(tab)).addClass("is-active");
    	angular.element(document.querySelector(tabPanel)).addClass("is-active");
    };

    function convertToDate(d) {
    	var date = d.split("/");
		var classMonth = parseInt(date[0]) - 1;
		var classDay = parseInt(date[1]);
		return new Date(2015, classMonth, classDay);
    }
    function getFeatureChapter(chapters) {
    	var featureChapter;
		var today = new Date();
		
		angular.forEach(chapters, function(value, key) {
			var date = value.date.split("/");
			var classMonth = parseInt(date[0]) - 1;
			var classDay = parseInt(date[1]);
			var classDate = new Date(2015, classMonth, classDay);
			var sundayBefore = new Date(2015, classMonth, classDay);
			sundayBefore.setDate(sundayBefore.getDate() - sundayBefore.getDay());
			var sundayAfter = new Date(2015, classMonth, classDay);
			sundayAfter.setDate(sundayAfter.getDate() + sundayAfter.getDay() - 1);
			
			if(today > sundayBefore && today < sundayAfter) {
				featureChapter = value;
			}
		});
		if( featureChapter == undefined ) {
			featureChapter = chapters[chapters.length - 1];
		}
		return featureChapter;
    }

    function isDateInPast(d) {
    	var today = new Date();
		var date = convertToDate(d);
		
		return today > date;
    }

	angular.module( 'csc-456-app' )
	.controller("HomeController", function($scope, ChapterFactory, BadgeFactory, AdventureFactory, $sce) {

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

	    $scope.goToOverview = function() {
	    	goToTab("#overview", "#overview-tab");
	    };

	    $scope.goToChapters = function() {
	    	goToTab("#chapters", "#chapters-tab");
	    };

	    $scope.goToAdventures = function() {
	    	goToTab("#adventures", "#adventures-tab");
	    };

	    $scope.goToBadges = function() {
	    	goToTab("#badges", "#badges-tab");
	    };

	    $scope.goToInstructions = function() {
	    	goToTab("#instructions", "#instructions-tab");
	    };

	    ChapterFactory.getChapters()
	    	.success(function(chapters) {
	    		$scope.chapters = chapters;
	    		$scope.featureChapter = getFeatureChapter(chapters);
	    	});

	    $scope.getClassFromChapter = function(chapter) {
	    	if(chapter["boss-fight"] ) {
	    		return "mdl-color--accent";
	    	} else if (chapter["project-demo"]) {
	    		return "mdl-color--teal-100"
	    	} else if (chapter["no-class"]) {
	    		return "mdl-color--primary-dark"
	    	}
	    	return "mdl-color--primary";
	    }

   	    BadgeFactory.getBadges()
	    	.success(function(badges) {
	    		$scope.badges = badges;
	    		angular.forEach($scope.badges, function(value, key){
	    			value.description = $sce.trustAsHtml(value.description); 
	    		});
	    	});

	    $scope.toggleBadgeDescription = function(badge) {
	    	var badgeCard = angular.element(document.querySelectorAll("#badge-" + badge.id));
	    	var badgeArrow = angular.element(document.querySelectorAll("#badge-arrow-" + badge.id));
	    	if( badgeCard.hasClass("ellipsis") ) {
	    		badgeCard.removeClass("ellipsis");
	    		badgeArrow.html("keyboard_arrow_up");
	    	} else {
	    		badgeCard.addClass("ellipsis");
	    		badgeArrow.html("keyboard_arrow_down");
	    	}
	    	
	    }

	    AdventureFactory.getAdventures()
	    	.success(function(adventures) {
	    		$scope.adventures = adventures;
	    		angular.forEach($scope.adventures, function(value, key){
	    			value.overview = $sce.trustAsHtml(value.overview); 
	    		});
	    	});

	    $scope.getClassForAdventure = function(adventure) {
	    	if( isDateInPast(adventure.date) ) {
	    		return "mdl-color--accent";
	    	}  else if ( adventure.feature ) {
				return "mdl-color--teal-100";
	    	}
	    	
	    	return "mdl-color--primary";
	    }

	    $scope.getListStyleForList = function(list) {
	    	if( list && list.length == 1 ) {
	    		return "no-list-style";
	    	}
	    	return "";
	    }
    } );

    angular.module( 'csc-456-app' )
    	.factory("ChapterFactory", function($http) {
    		return {
    			getChapters : function() {
    				return $http.get("http://nku.benjamingbaxter.com/csc456/2015fall/app/api/chapters-grouped.php");
    			}
    		};
    	})
    	.factory("BadgeFactory", function($http) {
    		return {
    			getBadges : function() {
    				return $http.get("http://nku.benjamingbaxter.com/csc456/2015fall/app/api/badges.php");
    			}
    		};
    	})
    	.factory("AdventureFactory", function($http) {
    		return {
    			getAdventures : function() {
    				return $http.get("http://nku.benjamingbaxter.com/csc456/2015fall/app/api/adventures.php");
    			}
    		};
    	});
})();