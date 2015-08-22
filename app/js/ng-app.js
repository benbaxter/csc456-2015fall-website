(function () {
  'use strict';
	
	angular.module( 'csc-456-app', [ 'ngMaterial', 'angular-svg-round-progress', 'ui.router' ] );

	angular.module( 'csc-456-app' )
	.config(function($stateProvider, $urlRouterProvider) {
	  
	  $urlRouterProvider.otherwise("/home");

	  $stateProvider
	    .state('home', {
	      url: "/home",
	      templateUrl: "app/views/index.html",
	      views: {
	        "overview": { templateUrl: "app/views/overview.html" },
	        "chapters": { templateUrl: "app/views/chapters.html" },
	        "badges": { templateUrl: "app/views/badges.html" },
	        "rule-book": { templateUrl: "app/views/rule_book.html" },

	        "adventure-overview": { templateUrl: "app/views/adventure-overview.html" }
	      }
	    });

	    //add 15 adventures to the state machine. If more than 15 adventures, 
	    //this will need to be fixed. Too lazy to figure out how to make this 
	    //dynamic by pulling from the service first.
	    for( var a = 1; a < 15; ++a ) {
	    	$stateProvider
		    	.state('adventure' + a, {
			      url: "/adventure" + a,
			      templateUrl: "app/views/adventure_" + a + ".html"
			    });
	    }
	  
	})

	.run(function ($rootScope) {
		$rootScope.$on('$stateChangeStart', 
		function(event, toState, toParams, fromState, fromParams){ 
		    if( toState.name == "home" ) {
		    	angular.element(document.querySelectorAll(".mdl-layout__tab-bar")).addClass("clumsy-ninja");
				angular.element(document.querySelectorAll(".mdl-layout__tab-bar")).removeClass("ninja");

				angular.element(document.querySelectorAll(".mdl-layout__tab-bar-container")).addClass("clumsy-ninja");
				angular.element(document.querySelectorAll(".mdl-layout__tab-bar-container")).removeClass("ninja");
		    } else {
		    	angular.element(document.querySelectorAll(".mdl-layout__tab-bar")).removeClass("clumsy-ninja");
				angular.element(document.querySelectorAll(".mdl-layout__tab-bar")).addClass("ninja");

				angular.element(document.querySelectorAll(".mdl-layout__tab-bar-container")).removeClass("clumsy-ninja");
				angular.element(document.querySelectorAll(".mdl-layout__tab-bar-container")).addClass("ninja");
		    }
		});
	});

})();