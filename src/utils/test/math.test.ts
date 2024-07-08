import { add } from '../math';
describe('测试add', function () {
  test('测试1+1', function () {
    expect(add(1, 1)).toBe(2);
  });
  test('测试2+2', function () {
    expect(add(2, 2)).toBe(4);
  });
  test('测试2+9', function () {
    expect(add(2, 2)).toBe(4);
  });
});
