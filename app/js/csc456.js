var csc456 = (function () {
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

	function convertToDate(d) {
    	var date = d.split("/");
		var classMonth = parseInt(date[0]) - 1;
		var classDay = parseInt(date[1]);
		return new Date(2015, classMonth, classDay);
    }

    function isDateInPast(d) {
    	var today = new Date();
		var date = convertToDate(d);
		
		return today > date;
    }

    return {
    	getCourseProgress : function() {
    		getCourseProgress();
    	},
    	getFeatureChapter: function(chapters) {
    		getFeatureChapter(chapters); 
    	},
    	isDateInPast : function(date) {
    		isDateInPast(date;
    	}
    }
})();