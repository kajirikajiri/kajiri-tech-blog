import { validFileNameList } from '../validFileNameList'

test('return \d{14}.md', () => {
  const fileNameList = ['a.md', '20200816150335hoge.md', '20200816150335.md']
  expect(validFileNameList(fileNameList)).toStrictEqual(['a.md']);
});