// Rotate Matrix: Given an image represented by an N x N matrix, where each pixel in the image is represented by an integer, write a method to rotate the image by 90 degrees. Can you do this in place?



// Gayel Laakmann McDowell(Feb 4, 2021) Cracking the Coding Interview; p. 91; 1.7 - Rotate Matrix



const rotateMatrix = (matrix, mR=[]) =>{
    for(let i=0; i<matrix.length; i++){
        let row = [];
        for(let j=matrix.length-1; j>=0; j--){
            row.push(matrix[j][i]);
        }
        mR.push(row);
    }
    return mR;
}

console.log(rotateMatrix([[1,2,3],[4,5,6],[7,8,9]]))// [[7,4,1],[8,5,2],[9,6,3]]