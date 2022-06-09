const isValidRowOrColumn = require('./connect4')

describe('testing the isValidRowOrColumn function', () => {
it ( "will return that the array will equal 7 or will error", () => {

//Arrange
const arrayLength = 7
const expectedResult = false

//Act
const result = isValidRowOrColumn.isValidRowOrColumn(arrayLength)


//Assert
expect(result).toBe(expectedResult)
});
})
