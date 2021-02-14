const compact = require('./compact');

test('Функция, которая возращает массив без пустых элементов', () => {
  expect(compact([0, 1, 2, null, 4, undefined, 6, ""])).toBe([0, 1, 2, 4, 6]);
});
