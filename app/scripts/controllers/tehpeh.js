'use strict'

angular.module('TicSackToeApp')
  .controller('MainCtrl', function ($scope, angularFire) { 
	$scope.game=[];
	$scope.queue={};
	// $scope.player="";
	// $scope.gameId=-1;

	//now on to binding to angular templates
	//the "games" part is the binding to firebase

	var games = new Firebase("https://ticsacktoe.firebaseio.com/games");
	angularFire(games, $scope, "games").then(function() {

		var queue = new Firebase("https://ticsacktoe.firebaseio.com/queue");
		angularFire(queue, $scope, "queue").then(function(){
			// $scope.queue = {myName: "bob"};
		//queue contains the id of the game , not the player
			if($scope.queue.gameId == undefined) {
				console.log("I'm Player 1");
				$scope.player = "p1";
				//create game
				var newGame = {
					board: ["","",""],
					turn: 'p1',
					win: false,
					waiting: false,
					turncount: 0
				};

				// its -1 bcs push will return the length but my index starts at 0;
				$scope.gameId = $scope.games.push(newGame) - 1;
				
				$scope.queue.gameId= $scope.gameId;
				//add game Id to queue
			}
				else
					console.log("I'm Player 2");
					$scope.player = "p2";

					$scope.gameId = $scope.queue.gameId;
					$scope.queue =  {};

				}
			});
		});
		//button is on html that is hello <button ng-click="hello()">Hello</button>
		$scope.hello = function () {
		$scope.games[$scope.gameId].board[0] = "Hello";
	}
});

html:
<div ng-repeat="cell in games[gameid].board">
	<div ng-bind="cell.value"></div>