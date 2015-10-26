app.controller("loginController", ['$scope', '$routeParams', '$http', function($scope, $routeParams, $http){

	$('.ui.checkbox')
  .checkbox() // consent checkbox on form

  $scope.consent = false 

  $scope.toggleConsent = function(){ // used for ng-hide conditional to display button 
  	$scope.consent = !$scope.consent
  }

  $scope.postConsent = function(){ // post request for volunteer
  	var volunteer = {}

  	volunteer.firstname = $scope.firstname
  	volunteer.lastname = $scope.lastname
  	volunteer.consent = $scope.consent
  	volunteer.city = $scope.city

  	$http.post('/js/provider.json', volunteer).success(function(response){
  		console.log(response + " for volunteer consent")
  		console.log(volunteer)
  	})
  }

;

}])

app.controller("searchController", ['$scope', '$routeParams', '$http', function($scope, $routeParams, $http){

	$http.get('/js/provider.json').then(function(response){ // gets physician/organization data
		$scope.data = response.data;
	})

	$scope.postInfo = function(){ // post request with physician/organization selected
		var info = this.object
		$http.post('/js/provider.json', info).success(function(response){
			console.log(response)
			console.log(info)
		})
	}

}])