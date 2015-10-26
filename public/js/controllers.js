app.controller("loginController", ['$scope', '$routeParams', '$http', function($scope, $routeParams, $http){
	$scope.test = "Login Controller"

}])

app.controller("searchController", ['$scope', '$routeParams', '$http', function($scope, $routeParams, $http){

	$scope.test = "Search Controller"

	$http.get('/js/provider.json').then(function(response){
		$scope.data = response.data;
	})

	$scope.postInfo = function(){
		var info = this.object
		$http.post('/js/provider.json', info).success(function(response){
			console.log(response)
			console.log(info)
		})
	}

}])