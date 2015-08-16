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

	function getQueryVariable(variable) {
	    var query = window.location.search.substring(1);
	    var vars = query.split('&');
	    for (var i = 0; i < vars.length; i++) {
	        var pair = vars[i].split('=');
	        if (decodeURIComponent(pair[0]) == variable) {
	            return decodeURIComponent(pair[1]);
	        }
	    }
	}

	function goToTab(tab, tabPanel) {
    	angular.element(document.querySelectorAll("a.mdl-layout__tab")).removeClass("is-active");
    	angular.element(document.querySelectorAll(".mdl-layout__tab-panel")).removeClass("is-active");

    	angular.element(document.querySelector(tab)).addClass("is-active");
    	angular.element(document.querySelector(tabPanel)).addClass("is-active");
    };

    function getFeatureChapter(chapters) {
    	var featureChapter;
		var today = new Date();
		var day = today.getDate();
		var month = today.getMonth() + 1;
		var previousClassDay = -1;

		angular.forEach(chapters, function(value, key) {
			var date = value.date.split("/");
			var classMonth = parseInt(date[0]) - 1;
			var classDay = parseInt(date[1]);
			var classDate = new Date(2015, classMonth, classDay);
			var sundayBefore = new Date(2015, classMonth, classDay);
			sundayBefore.setDate(sundayBefore.getDate() - sundayBefore.getDay());
			var saturdayAfter = new Date(2015, classMonth, classDay);
			saturdayAfter.setDate(saturdayAfter.getDate() + saturdayAfter.getDay() - 2);

			if(today > sundayBefore && today < saturdayAfter) {
				featureChapter = value;
			}
		});
		if( featureChapter == undefined ) {
			featureChapter = chapters[chapters.length - 1];
		}
		return featureChapter;
    }

	angular.module( 'csc-456-app' )
	.controller("HomeController", function($scope, ChapterFactory, BadgeFactory, $sce) {

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

	    $scope.deepLinkToTab = function(tab) {
	    	window.location.href = "../../index.html?tab=" + tab;
	    }

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

	    $scope.goToAdventure = function(num) {
	    	window.location.href = "app/views/adventure_" + num + ".html";
	    }

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

	    $scope.getListStyleForList = function(list) {
	    	if( list && list.length == 1 ) {
	    		return "no-list-style";
	    	}
	    	return "";
	    }

	    var deepLinkTab = getQueryVariable("tab");
		if(deepLinkTab) {
			if( deepLinkTab == "overview" ) {
				$scope.goToOverview();
			} else if( deepLinkTab == "chapters" ) {
				$scope.goToChapters();
			} else if( deepLinkTab == "adventures" ) {
				$scope.goToAdventures();
			} else if( deepLinkTab == "badges" ) {
				$scope.goToBadges();
			} else if( deepLinkTab == "instructions" ) {
				$scope.goToInstructions();
			} 
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
    	});
})();