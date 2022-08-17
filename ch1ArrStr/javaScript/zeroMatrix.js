// Zero Matrix: Write an algorithm such that if an element in an M x N matrix is 0, its entire row and column are set to 0.


// Gayel Laakmann McDowell(Feb 4, 2021) Cracking the Coding Interview; p. 91; 1.8 - Zero Matrix



const zeroMatrix = (matrix, ans=[]) =>{
    for(let i=0; i<matrix.length; i++){
        ans[i] = [];
        for(let j=0; j<matrix.length; j++){
            ans[i][j] = matrix[i][j];
        }
    }
    for(let i=0; i<matrix.length; i++){
        for(let j=0; j<matrix[i].length; j++){
            console.log(`count ${i}: `,matrix)
            if(matrix[i][j] === 0){
                ans[i] = ans[i].map(x => 0);
                col = i + 1;
                while(col !== i){
                    if(col===matrix.length){
                        col = 0
                        continue;
                    }
                    ans[col][j] = 0;
                    col++;
                }
            }
        }
    }
    return ans;
}

console.log(zeroMatrix([[1,2,3],[4,0,6],[7,8,9]]))// [[1,0,3],[0,0,0],[7,0,9]] 