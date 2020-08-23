import {genObject} from '../genObject'

test('return {name}', () => {
  const fileNameList = ['a.md', 'b.md']
  expect(genObject(fileNameList)).toStrictEqual([{before: 'a.md'}, {before: 'b.md'}]);
});