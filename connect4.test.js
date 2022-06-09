const isValidRowOrColumn = require('./connect4')

describe('testing the isValidRowOrColumn function', () => {
it ( "will return that the array will equal 7 or will error", () => {

//Arrange
const arrayLength = [1, 2, 3, 4, 5, 6, 7]
const expectedResult = true

//Act
const result = isValidRowOrColumn.isValidRowOrColumn(arrayLength)


//Assert
expect(result).toEqual(expectedResult)
});
})
