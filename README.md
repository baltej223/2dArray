# 2dArray-js
## `twoDarray` Class

### Creating a 2D Array

1. **Initialize the 2D array with dimensions:**

    ```javascript
    let myArray = new twoDarray(3, 4);
    ```

2. **Construct the 2D array with values:**

    ```javascript
    myArray.construct(
        [1, 2, 3, 1],
        [4, 5, 6, 1],
        [7, 8, 9, 1]
    );
    ```

### Displaying the 2D Array

3. **Show the 2D array:**

    ```javascript
    myArray.show();
    ```

    **Expected Output:**

    ```
     1  2  3  1 

     4  5  6  1 

     7  8  9  1 
    ```

### Editing the 2D Array

4. **Edit a specific element in the 2D array:**

    ```javascript
    myArray.edit(2, 3, 9); // Changes the value at row 2, column 3 to 9
    ```

5. **Show the updated 2D array:**

    ```javascript
    myArray.show();
    ```

    **Expected Output:**

    ```
     1  2  3  1 

     4  5  9  1 

     7  8  9  1 
    ```

### Retrieving Values from the 2D Array

6. **Retrieve a specific element or row:**

    ```javascript
    console.log(myArray.retrive(3, 3)); // Retrieves the value at row 3, column 3
    console.log(myArray.retrive(1)); // Retrieves the entire first row
    ```

    **Expected Output:**

    ```
    9
    [1, 2, 3, 1]
    ```

---

## `operations` Class

### Adding Matrices

1. **Create two matrices:**

    ```javascript
    let array1 = new twoDarray(2, 2);
    array1.construct([1, 2], [3, 4]);

    let array2 = new twoDarray(2, 2);
    array2.construct([2, 0], [1, 2]);
    ```

2. **Add the matrices:**

    ```javascript
    let added = operations.add(array1, array2);
    added.show(); // Displays the result of the addition
    ```

    **Expected Output:**

    ```
     3  2 

     4  6 
    ```

### Multiplying Matrices

3. **Multiply the matrices:**

    ```javascript
    let multiplied = operations.multiply(array1, array2);
    multiplied.show(); // Displays the result of the multiplication
    ```

    **Expected Output:**

    ```
     4  4 

     10  8 
    ```

### Inverting a Matrix

4. **Find the inverse of a matrix:**

    ```javascript
    let inverted = operations.inverse(array1);
    inverted.show(); // Displays the inverse of array1
    ```

    **Expected Output:**

    ```
     -2  1 

     1.5  -0.5 
    ```

---
Feel free to reach me out for suggestions and improvements.

Made and maintained by ```Baltej Singh```
