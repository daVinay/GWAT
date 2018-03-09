angular.module('app').controller('HomeController', ['$scope', '$http', '$rootScope', '$interval', '$timeout', 'toaster', '$location', '$sce',
	function($scope, $http, $rootScope, $interval, $timeout, toaster, $location, $sce) {	

		$scope.submissionData = [];
		$scope.currentPage = 1;
  		$scope.numPerPage = 3;
  		$scope.maxSize = 5;
  		$scope.isPagination = false;
  		$scope.todos = [];



		$scope.getPostSubmission = function(){
			
			$http.get('/api/post').success(function(data){
			    $scope.todos = data;
			    if($scope.todos && $scope.todos.length){
			    	bindData($scope.todos);	
			    }
			   	
			}).error(function(data){
				
			});
		}

		 $scope.numPages = function () {
		    return Math.ceil($scope.todos.length / $scope.numPerPage);
		  };

		var bindData = function(data){
			$scope.$watch("currentPage + numPerPage", function() {
			    var begin = (($scope.currentPage - 1) * $scope.numPerPage)
			    , end = begin + $scope.numPerPage;

			    if(data.length > 3){
			    	$scope.isPagination = true;
			    }
			    $scope.submissionData = data.slice(begin, end);

	  		});
		}



		$scope.isSubmitted = false;
		$scope.isDisabledSave = false;
		$scope.create = function(){

			if(!$scope.myForm.$valid){
				$scope.isSubmitted = true;
				return;
			}

			var postData = {
			    title: $scope.title,
				body: $scope.body,
				category: $scope.category,
				subjectUrl: $scope.subjectUrl
			}

			$scope.isDisabledSave = true;
			$http.post('/api/create/post', postData).success(function(data){
				$('#myModal').modal('hide');
				toaster.pop('success', "", "Post has been created successfully");
				$scope.isSubmitted = false;
				$scope.title = '';
				$scope.body = '';
				$scope.category = '';
				$scope.subjectUrl = '';
				$scope.isDisabledSave = false;
				$scope.getPostSubmission();
		 	}).error(function(data){
		 		$scope.isDisabledSave = false;
		 		if(data && data.Invalid){
		 			toaster.pop('error', "", data.Invalid);
		 		}
				$scope.isSubmitted = false;
				
		 	});

			
		}

		$scope.cancel = function(){
			$scope.isSubmitted = false;
			$scope.title = '';
			$scope.body = '';
			$scope.category = '';
			$scope.subjectUrl = '';
			$('#myModal').modal('hide');
		}

}]);