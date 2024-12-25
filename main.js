class twoDarray{
    constructor(n=1,m=1){
        this.n=n;
        this.m=m;
    }
    construct(..._2dArrays){
            let rowLength = _2dArrays.length;
            if (rowLength != this.n){
                throw new Error("Length of provided rows doesn't match with number of rows provided in defination");
            }
            else if(rowLength === this.n){
                _2dArrays.forEach((row, rowNumber)=>{
                    if (row.length != this.m){
                        throw new Error("Number of colums is not equal to number provided during defination.Number of columns provided is :"+row.length+" Where during defination, number of columns provided was "+this.m+" .\nAt row number:"+(rowNumber+1));
                    }
                });
                
                this._2dArray = {
                    _2dArray:_2dArrays,
                    Checked:true,
                    rows:this.n, 
                    column:this.m
                };
                
                return {
                    _2dArray:_2dArrays,
                    Checked:true,
                    rows:this.n,
                    columns:this.m
                };
            }

        // catch(e){
        //     throw new Error("Some unknow error creeps down below in code");
        // }
    }
    show(){
        let _2dArray = this._2dArray;
        if (_2dArray.Checked === true){
            _2dArray = _2dArray._2dArray;
            try{
                // console.table(_2dArray);
                _2dArray.forEach((rows)=>{
                    let rowString = '';
                    rows.forEach((element, columnNumber)=>{
                        rowString += " "+element+" "
                    });
                    console.log(rowString, "\n");
                });
            }
            catch(e){
                console.error("Some Error occured while printing 2dArray",e);
            }
        }
        else{
            throw new Error("Passed 2D Array seems to have not been passed through construct method. Please pass it through construct method befor calling the print method");
        }
    }
    edit(rowIndex, columnIndex, newValue){
        if(!newValue){
            throw new Error(`Value to replace old value at ${rowIndex}*${columnIndex} is not provided at edit method`);
        }
        if (rowIndex<this.n && columnIndex<this.m){
            let main2Darray = this._2dArray._2dArray;
            main2Darray[rowIndex-1][columnIndex-1] = newValue;
            this._2dArray._2dArray = main2Darray;
        }
        else{
            throw new Error("The provided position of the element doesn't exist, the position provided is row:"+rowIndex+" and column:"+columnIndex+"where as this 2d array only is of "+this.n+"*"+this.m);
        }
    }
    retrive(rowNumber=1, columnNumber){
        if (columnNumber==undefined){
            return this._2dArray._2dArray[rowNumber-1];
        }
        else if (rowNumber && columnNumber){
            return this._2dArray._2dArray[rowNumber-1][columnNumber-1];
        }
    }
}

let _2dArray = new twoDarray(3,4);
let constructed = _2dArray.construct(
    [1,2,3,1],
    [4,5,6,1],
    [7,8,9,1],
    );
_2dArray.show(); // will show the 2d array
_2dArray.edit(2,3,9); //changing the value at 2*3 from 6 to 9
_2dArray.show(); // will show the updated 2d array
console.log(_2dArray.retrive(3,3)); //9
// console.log(constructed);


class operations {
    static add(...arrays) {
        if (arrays.length < 2) {
            throw new Error("At least two matrices are required for addition.");
        }
        
        const rows = arrays[0].n;
        const columns = arrays[0].m;
        
        arrays.forEach((array, index) => {
            if (array.n !== rows || array.m !== columns) {
                throw new Error(`Matrix at position ${index + 1} does not match dimensions of the first matrix.`);
            }
        });

        let result = new twoDarray(rows, columns);
        let resultArray = Array.from({ length: rows }, () => Array(columns).fill(0));

        arrays.forEach(array => {
            array._2dArray._2dArray.forEach((row, i) => {
                row.forEach((value, j) => {
                    resultArray[i][j] += value;
                });
            });
        });

        result.construct(...resultArray);
        return result;
    }

    static multiply(array1, array2) {
        if (array1.m !== array2.n) {
            throw new Error("Number of columns of the first matrix must equal the number of rows of the second matrix.");
        }

        let result = new twoDarray(array1.n, array2.m);
        let resultArray = Array.from({ length: array1.n }, () => Array(array2.m).fill(0));

        for (let i = 0; i < array1.n; i++) {
            for (let j = 0; j < array2.m; j++) {
                for (let k = 0; k < array1.m; k++) {
                    resultArray[i][j] += array1._2dArray._2dArray[i][k] * array2._2dArray._2dArray[k][j];
                }
            }
        }

        result.construct(...resultArray);
        return result;
    }

    static inverse(array) {
        if (array.n !== array.m) {
            throw new Error("Matrix must be square to find its inverse.");
        }

        const n = array.n;
        let identityMatrix = Array.from({ length: n }, (_, i) => Array.from({ length: n }, (_, j) => (i === j ? 1 : 0)));
        let matrix = array._2dArray._2dArray.map(row => [...row]);

        for (let i = 0; i < n; i++) {
            let diagonalElement = matrix[i][i];
            if (diagonalElement === 0) {
                throw new Error("Matrix is singular and cannot be inverted.");
            }

            for (let j = 0; j < n; j++) {
                matrix[i][j] /= diagonalElement;
                identityMatrix[i][j] /= diagonalElement;
            }

            for (let k = 0; k < n; k++) {
                if (k !== i) {
                    let factor = matrix[k][i];
                    for (let j = 0; j < n; j++) {
                        matrix[k][j] -= factor * matrix[i][j];
                        identityMatrix[k][j] -= factor * identityMatrix[i][j];
                    }
                }
            }
        }

        let result = new twoDarray(n, n);
        result.construct(...identityMatrix);
        return result;
    }
}

// Using it:

//let array1 = new twoDarray(2, 2);
//array1.construct([1, 2], [3, 4]);

//let array2 = new twoDarray(2, 2);
//array2.construct([2, 0], [1, 2]);

//let added = operations.add(array1, array2);
//added.show();

//let multiplied = operations.multiply(array1, array2);
//multiplied.show();

//let inverted = operations.inverse(array1);
//inverted.show();
