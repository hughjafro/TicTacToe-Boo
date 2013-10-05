'use strict';

angular.module('TicSackToeApp')
  .controller('MainCtrl', function ($scope) {
    $scope.ticTacToe=[['','',''], ['','',''], ['','','']];
      
   var turn = 0;

$scope.clickSquare = function(row,column) {

	var letter;

	if (this.ticTacToe[row][column] !="") {
	 	return;
	};

	if ((turn%2==0) && (turn<9))
		
		letter = "X";
	else 
		letter = "O";

	this.ticTacToe[row][column] = letter;
	event.target.innerHTML=letter;
	
	turn++
		if(turn==9)
			alert("Game over no more moves");
	$scope.winningCombo(this.ticTacToe);

}; 

	//if all the rows have the same value
	//if all the columns have the same value
	//if diagonals are the same

// 	$scope.winningCombo = function(cellArray) {
// 		//Diagonal
// 		if(cellArray[1][1] != ""){
// 			if(cellArray[0][0] == cellArray[1][1] &&
// 			cellArray[1][1] == cellArray[2][2] ||
// 			cellArray[0][2] == cellArray[1][1] &&
// 			cellArray[1][1] == cellArray[2][0])
// 		}


// 		//row
// 	for var r=0; r<=2; ++r) {
// 	if(cellArray[0][r] == cellArray[1][r] &&)
// }

  });





