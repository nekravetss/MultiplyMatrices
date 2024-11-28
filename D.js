function multiplyMatrices(matrixA, matrixB) {
    const rowsA = matrixA.length;
    const colsA = matrixA[0].length;
    const rowsB = matrixB.length;
    const colsB = matrixB[0].length;

    if (colsA !== rowsB) {
        throw new Error("Matrices cannot be multiplied: incompatible dimensions.");
    }

    const result = new Array(rowsA).fill(0).map(() => new Array(colsB).fill(0));

    for (let i = 0; i < rowsA; i++) {
        for (let j = 0; j < colsB; j++) {
            for (let k = 0; k < colsA; k++) {
                result[i][j] += matrixA[i][k] * matrixB[k][j];
            }
        }
    }

    return result;
}

const matrixA = [
    [1, 2, 3],
    [4, 5, 6],
    [3, 5, 2],
];

const matrixB = [
    [7, 8, 5],
    [9, 10, 4],
    [11, 12, 3],
];

try {
    const result = multiplyMatrices(matrixA, matrixB);
    console.log("Result:");
    console.table(result);
} catch (error) {
    console.error(error.message);
}
