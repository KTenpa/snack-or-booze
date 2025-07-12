const unroll = require("./unroll");

describe("#unroll", function () {

  it("is a function", function () {
    expect(typeof unroll).toEqual("function");
  });

  it("returns a spiral traversal for a 4x4 grid", function () {
    const square = [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [13, 14, 15, 16],
    ];

    const result = unroll(square);
    expect(result).toEqual([1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10]);
  });

  it("returns a spiral traversal for a 3x3 grid", function () {
    const smallerSquare = [
      ["a", "b", "c"],
      ["d", "e", "f"],
      ["g", "h", "i"]
    ];

    const result = unroll(smallerSquare);
    expect(result).toEqual(["a", "b", "c", "f", "i", "h", "g", "d", "e"]);
  });

  it("returns a spiral traversal for a 1x1 grid", function () {
    const singleElement = [
      [42]
    ];

    const result = unroll(singleElement);
    expect(result).toEqual([42]);
  });

  it("returns a spiral traversal for an empty grid", function () {
    const emptyGrid = [];

    const result = unroll(emptyGrid);
    expect(result).toEqual([]);
  });

  it("returns a spiral traversal for a 2x2 grid", function () {
    const twoByTwo = [
      [1, 2],
      [4, 3]
    ];

    const result = unroll(twoByTwo);
    expect(result).toEqual([1, 2, 3, 4]);
  });

  it("handles irregular rows gracefully", function () {
    const irregularSquare = [
      [1, 2],
      [3, 4],
      [5, 6]
    ];

    const result = unroll(irregularSquare);
    expect(result).toEqual([1, 2, 4, 6, 5, 3]);
  });

});
