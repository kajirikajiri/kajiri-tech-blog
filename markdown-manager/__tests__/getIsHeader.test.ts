import {getIsHeader} from '../getIsHeader'

test('return true', () => {
  const line = '---'
  const lineCounter = 0
  expect(getIsHeader(line, lineCounter)).toBe(true);
});
test('return true', () => {
  const line = 'title: '
  const lineCounter = 1
  expect(getIsHeader(line, lineCounter)).toBe(true);
});
test('return true', () => {
  const line = 'description: '
  const lineCounter = 2
  expect(getIsHeader(line, lineCounter)).toBe(true);
});
test('return true', () => {
  const line = 'date: '
  const lineCounter = 3
  expect(getIsHeader(line, lineCounter)).toBe(true);
});
test('return true', () => {
  const line = '---'
  const lineCounter = 4
  expect(getIsHeader(line, lineCounter)).toBe(true);
});
test('return false', () => {
  const line = '---'
  const lineCounter = 1
  expect(getIsHeader(line, lineCounter)).toBe(false);
});
test('return false', () => {
  const line = 'title: '
  const lineCounter = 2
  expect(getIsHeader(line, lineCounter)).toBe(false);
});
test('return false', () => {
  const line = 'description: '
  const lineCounter = 3
  expect(getIsHeader(line, lineCounter)).toBe(false);
});
test('return false', () => {
  const line = 'date: '
  const lineCounter = 4
  expect(getIsHeader(line, lineCounter)).toBe(false);
});
test('return false', () => {
  const line = '---'
  const lineCounter = 5
  expect(getIsHeader(line, lineCounter)).toBe(false);
});