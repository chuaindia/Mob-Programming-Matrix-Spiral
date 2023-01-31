function spiralCopy(inputMatrix) {
    // your code goes here
    
    var m = inputMatrix.length;
    var n = inputMatrix[0].length;
    
  //create empty 2d array
  
  var startRow = 0;
  var endRow = m - 1;
  var startColumn = 0;
  var endColumn = n - 1;
  var Array = [];
  
  // While loop is used to spiral into the 2d array.
  while(startRow <= endRow && startColumn <= endColumn) {
  
      // Reading top row, from left to right
      for(var i = startColumn; i <= endColumn; i++) 
          Array.push(inputMatrix[startRow][i]);
      
      startRow++; // Top row read.
      
      // Reading right column from top right to bottom right
      for(var i = startRow; i <= endRow; i++) 
          Array.push(inputMatrix[i][endColumn]);
      
      endColumn--; // Right column read
      
      // Reading bottom row, from bottom right to bottom left
      if(startRow <= endRow){
      for(var i = endColumn; i >= startColumn; i--) 
          Array.push(inputMatrix[endRow][i]);
      }
        endRow--; // Bottom row read
      
      // Reading left column, from bottom left to top left
      if(startColumn <= endColumn){
      for(var i = endRow; i >= startRow; i--) 
          Array.push(inputMatrix[i][startColumn]);
      }
      startColumn++; // left column now read.
       
  } // While loop will now spiral in the matrix.
    
  return Array;  
  }