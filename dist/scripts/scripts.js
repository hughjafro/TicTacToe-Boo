'use strict';

angular.module('TicSackToeApp', ["firebase"])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

'use strict';

angular.module('TicSackToeApp')
  .controller('MainCtrl', function ($scope, angularFire) {

	$scope.ticTacToe=[];

    var database = new Firebase("https://ticsacktoe.firebaseio.com/ticTacToe");

    angularFire(database, $scope, "ticTacToe").then(function()
    {
    	$scope.ticTacToe=[[{val:'', r: 0, c: 0},{val:'', r: 0, c: 1},{val:'', r: 0, c: 2}], [{val:'', r: 1, c: 0},{val:'', r: 1, c: 1},{val:'', r: 1, c: 2}], [{val:'', r: 2, c: 0},{val:'', r: 2, c: 1},{val:'', r: 2, c: 2}]];
    });
       
    // $scope.room =
    // {
    // 	playerTurn: 1,
    // 	ticTacToe:[[{val:'', r: 0, c: 0},{val:'', r: 0, c: 1},{val:'', r: 0, c: 2}], [{val:'', r: 1, c: 0},{val:'', r: 1, c: 1},{val:'', r: 1, c: 2}], [{val:'', r: 2, c: 0},{val:'', r: 2, c: 1},{val:'', r: 2, c: 2}]],
    // 	playerNum: 0,
    // 	gameWin: false,
    // 	gameTie: false  
    // }


		$scope.gameWin = function() {
			$scope.winningCombo: true;
			$scope.winNotify: true;
		};

		$scope.gameTie = function() {
			$scope.winningCombo: true;
			$scope.winNotify: true;
		};

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




