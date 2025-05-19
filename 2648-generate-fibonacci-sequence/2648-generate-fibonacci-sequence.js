/**
 * @return {Generator<number>}
 */
var fibGenerator = function*() {
  let x = 0;
  let y = 1;

  while (true) {
    yield x;
    [x, y] = [y, x + y];
  }
};

/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */
