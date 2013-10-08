'use strict';

angular.module('TicSackToeApp')
  .controller('MainCtrl', function ($scope) {
    $scope.ticTacToe=[[{val:''},{val:''},{val:''}], [{val:''},{val:''},{val:''}], [{val:''},{val:''},{val:''}]];

    
     
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
	
	turn++
		if(turn==9)
			alert("Game over no more moves");
	// $scope.winningCombo(this.ticTacToe);

}; 

// might need to add this scope.turn = {number: 1};

	//if all the rows have the same value
	//if all the columns have the same value
	//if diagonals are the same

	$scope.winningCombo = function(cellArray) {
		//Diagonal
		// if($scope.ticTacToe[1][1].val != ""){

		// 	if($scope.ticTacToe[0][0].val == $scope.ticTacToe[1][1].val &&
		// 	$scope.ticTacToe[1][1].val == $scope.ticTacToe[2][2].val ||
		// 	$scope.ticTacToe[0][2].val == $scope.ticTacToe[1][1].val &&
		// 	$scope.ticTacToe[1][1].val == $scope.ticTacToe[2][0].val) {
		// 	alert("WINS");
		// }


		//row
		// (for var r=0; r<=2; ++r) {
		// if($scope.ticTacToe[0][r].val != "" &&
		// 	$scope.ticTacToe[0][r].val == $scope.ticTacToe[1][r].val &&
		// 	$scope.ticTacToe[1][r].val == $scope.ticTacToe[2][r].val)
		// 	alert("WINS");
		// }
	

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




