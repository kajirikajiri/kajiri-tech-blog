import {getMdList} from '../getMdList'

test('return .md', () => {
  const fileNameList = ['a.md', 'a.txt']
  expect(getMdList(fileNameList)).toStrictEqual(['a.md']);
});