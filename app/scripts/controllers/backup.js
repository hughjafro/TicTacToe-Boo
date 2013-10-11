'use strict';

angular.module('TicSackToeApp')
  .controller('MainCtrl', function ($scope, angularFire) {
	$scope.games=[];
	$scope.queue={};

	//tells Firebase where to initialize the url and then has a msg for firebase thru angelfire
	//After communicating to firebase, & if everything is ok, THEN...
    var games = new Firebase("https://ticsacktoe.firebaseio.com/rooms");
    angularFire(games, $scope, "games").then(function()
    	var queue = new Firebase("https://ticsacktoe.firebaseio.com/queue");
		angularFire(queue, $scope, "queue").then(function(){
			// $scope.queue = {myName: "bob"};

		//queue contains the id of the game , not the player
		//On our variable queue, we add an object .gameID that is created automatically
		//If it is undefined, no gameId yet = no game, then we say
		// 1) you are p1 2) a new game is created 2a) new board 2b) p1's turn 2c) no win yet 2d) turn is 0
			if($scope.queue.gameId == undefined) {
				console.log("I'm Player 1");
				$scope.player = "p1";
				//create game
				var newGame = {
					board: [[{val:'', r: 0, c: 0},{val:'', r: 0, c: 1},{val:'', r: 0, c: 2}], [{val:'', r: 1, c: 0},{val:'', r: 1, c: 1},{val:'', r: 1, c: 2}], [{val:'', r: 2, c: 0},{val:'', r: 2, c: 1},{val:'', r: 2, c: 2}]],
					turn: 'p1',
					win: false,
					turncount: 0
				};

				//the gameId is our array index that will continue to grow, even though a game is cancelled
				// its -1 bcs push will return the length but my index starts at 0;
				$scope.gameId = $scope.games.push(newGame) - 1;
				
				//previously mentioned $scope.queue.gameId is the index?????????
				//gameId will return the index. $scope.games.push will place new game at the end of the array and -1
				$scope.queue.gameId = $scope.gameId;
				//add game Id to queue
			}

			//if a game has been started and is available then it will add you as p2
				else
					// console.log("I'm Player 2");
					$scope.player = "p2";

					//the gameId will be from line 36
					//gameId is what is growing in number, the # in the array
					$scope.gameId = $scope.queue.gameId;

					//resets queue to empty, undefined
					$scope.queue =  {};
				}
			});
		});
		//button is on html that is hello <button ng-click="hello()">Hello</button>
		$scope.hello = function () {
			//this is how we access the board
		$scope.games[$scope.gameId].board[0] = "Hello";
	}
    // {
    // 	$scope.ticTacToe=[[{val:'', r: 0, c: 0},{val:'', r: 0, c: 1},{val:'', r: 0, c: 2}], [{val:'', r: 1, c: 0},{val:'', r: 1, c: 1},{val:'', r: 1, c: 2}], [{val:'', r: 2, c: 0},{val:'', r: 2, c: 1},{val:'', r: 2, c: 2}]];
    // });
       
    $scope.room =
    {
    	playerTurn: 1,
    	ticTacToe:[[{val:'', r: 0, c: 0},{val:'', r: 0, c: 1},{val:'', r: 0, c: 2}], [{val:'', r: 1, c: 0},{val:'', r: 1, c: 1},{val:'', r: 1, c: 2}], [{val:'', r: 2, c: 0},{val:'', r: 2, c: 1},{val:'', r: 2, c: 2}]],
    	playerNum: 0,
    	gameWin: false,
    	gameTie: false  
    }


    // $scope.win = function() {

    // 	$scope.show
    // }

    // $scope.$watch('room.gameWin') function() {


    // }

	var turn = 0;

	$scope.clickSquare = function(cell) {

		// $scope.ticTacToe[row][column] = cell;
		// $scope.ticTacToe = cell;
		
	// var letter;

	if (cell.val !="") {
		console.log(cell.val);
	 	return;
	};

	if ((turn%2==0) && (turn<9))
		cell.val = "X";
	else 
		cell.val = "O";

	// $scope.ticTacToe[row][column] = letter;
	$scope.ticTacToe[cell]=cell.val;
	
	$scope.winningCombo(this.ticTacToe);
	
	turn++
		if(turn==9)
			alert("Game over no more moves");


	}; 

// might need to add this scope.turn = {number: 1};


	$scope.winningCombo = function() {
		//Diagonal
		if($scope.ticTacToe[1][1].val != ""){

			if($scope.ticTacToe[0][0].val == $scope.ticTacToe[1][1].val &&
			$scope.ticTacToe[1][1].val == $scope.ticTacToe[2][2].val ||
			$scope.ticTacToe[0][2].val == $scope.ticTacToe[1][1].val &&
			$scope.ticTacToe[1][1].val == $scope.ticTacToe[2][0].val) {
			alert("WINS");
			}
		}


		// //columns
		for (var c=0; c<=2; ++c) {
		if($scope.ticTacToe[0][c].val != "" &&
			$scope.ticTacToe[0][c].val == $scope.ticTacToe[1][c].val &&
			$scope.ticTacToe[1][c].val == $scope.ticTacToe[2][c].val) {
			alert("WINS");
			}
		}

		//rows
		for (var r=0; r<=2; ++r) {
		if($scope.ticTacToe[r][0].val != "" &&
			$scope.ticTacToe[r][0].val == $scope.ticTacToe[r][1].val &&
			$scope.ticTacToe[r][1].val == $scope.ticTacToe[r][2].val) {
			alert("WINS");
			}
		}
	};
	

 });

