'use strict';

angular.module('TicSackToeApp')
  .controller('MainCtrl', function ($scope, angularFire) {
// binding these to firebase
    $scope.games = [];
    $scope.queue = {};
    //Tell firebase where file url is and bind "games" to firebase: $scope.games
    var games = new Firebase("https://ticsacktoe.firebaseio.com/games");
    angularFire(games, $scope, "games").then(function () {

      //Now bind "queue" to firebase: $scope.queue
      //queue contains the id of the game , not the player
      var queue = new Firebase("https://ticsacktoe.firebaseio.com/queue");
      angularFire(queue, $scope, "queue").then(function () {

        //Checks to see if queue is empty, ie a player already there, if not they start as player 1
        if ($scope.queue.gameId == undefined) {
          console.log("I'm player 1");
          $scope.player = "p1";

          //create new game
          var newGame = {
            board: [[{val:'', r: 0, c: 0},{val:'', r: 0, c: 1},{val:'', r: 0, c: 2}], [{val:'', r: 1, c: 0},{val:'', r: 1, c: 1},{val:'', r: 1, c: 2}], [{val:'', r: 2, c: 0},{val:'', r: 2, c: 1},{val:'', r: 2, c: 2}]],
            turn: 'p1',
            win: false,
            turnCount: 0,
            waiting: true
          };

          // its -1 bcs push will return the length but my index starts at 0;
          //appends to array of games, gameId will keep total games count
          $scope.gameId = $scope.games.push(newGame) - 1;

          //says here is the game index that we can hold and sync with next player
          $scope.queue.gameId = $scope.gameId;
          console.log("Player 1's game is: " + $scope.gameId);

        } else {
          console.log("I'm player 2");
          $scope.player = "p2";

          //if someone is already in the queue then will make p2 gameId the same as p1
          $scope.gameId = $scope.queue.gameId;

          //now clear the queue to get ready for the nextgame
          $scope.queue = {};
          console.log("Player 2's game is: " + $scope.gameId);
        }
      });

    });
       


		// $scope.gameWin = function() {
		// 	$scope.winningCombo: true;
		// 	$scope.winNotify: true;
		// };

		// $scope.gameTie = function() {
		// 	$scope.winningCombo: true;
		// 	$scope.winNotify: true;
		// };

    // $scope.$watch('room.gameWin') function() {


    // }

	

	$scope.clickSquare = function(cell) {
		var move = 0;

		// $scope.ticTacToe[row][column] = cell;
		// $scope.ticTacToe = cell;

	if (cell.val !="") {
		console.log(cell.val);
	 	return;
	};

	if ((move%2==0) && (move<9))
		cell.val = "X";
	else 
		cell.val = "O";

	// $scope.ticTacToe[row][column] = letter;
	$scope.board[cell]=cell.val;
	
	$scope.winningCombo(this.board);
	
	move++
		if(move==9)
			alert("Game over no more moves");
	}; 

// might need to add this scope.move = {number: 1};
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

// this is my old JS winningCombo code that I need to transfer to AngularJS

// if(cellArray[0] == cellArray[1] && cellArray[1] == cellArray[2] && cellArray[0] != "")
// 			{champ = cellArray[0];
// 				document.getElementById("win").innerHTML=champ + " is the champion!";
// 				document.getElementById("win").style.display="inline-block";
// 			}
		

// 		if(cellArray[3] == cellArray[4] && cellArray[4] == cellArray[5] && cellArray[3] != "")
// 			{champ = cellArray[3];
// 				document.getElementById("win").innerHTML=champ + " is the champion!";
// 				document.getElementById("win").style.display="inline-block";
// 			}
		
// 		if(cellArray[6] == cellArray[7] && cellArray[7] == cellArray[8] && cellArray[6] != "")
// 			{champ = cellArray[6];
// 				document.getElementById("win").innerHTML=champ + " is the champion!";
// 				document.getElementById("win").style.display="inline-block";
// 			}

// 		if(cellArray[0] == cellArray[3] && cellArray[3] == cellArray[6] && cellArray[0] != "")
// 			{champ = cellArray[0];
// 				document.getElementById("win").innerHTML=champ + " is the champion!";
// 				document.getElementById("win").style.display="inline-block";
// 			}

// 		if(cellArray[1] == cellArray[4] && cellArray[4] == cellArray[7] && cellArray[1] != "")
// 			{champ = cellArray[1];
// 				document.getElementById("win").innerHTML=champ + " is the champion!";
// 				document.getElementById("win").style.display="inline-block";
// 			}

// 		if(cellArray[2] == cellArray[5] && cellArray[5] == cellArray[8] && cellArray[2] != "")
// 			{champ = cellArray[2];
// 				document.getElementById("win").innerHTML=champ + " is the champion!";
// 				document.getElementById("win").style.display="inline-block";
// 			}

// 		if(cellArray[0] == cellArray[4] && cellArray[4] == cellArray[8] && cellArray[0] != "")
// 			{champ = cellArray[0];
// 				document.getElementById("win").innerHTML=champ + " is the champion!";
// 				document.getElementById("win").style.display="inline-block";
// 			}
		
// 		if(cellArray[2] == cellArray[4] && cellArray[4] == cellArray[6] && cellArray[2] != "")
// 			{champ = cellArray[2];
// 				document.getElementById("win").innerHTML=champ + " is the champion!";
// 				document.getElementById("win").style.display="inline-block";
// 			}




