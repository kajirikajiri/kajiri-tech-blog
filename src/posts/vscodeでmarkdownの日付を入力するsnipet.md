---
title: vscodeでmarkdownの日付を入力するsnipet
description: input description
date: 2020-08-01 23:33:08
---
### 結論
```json
	"File Header": {
    "prefix": "header",
    "description": "Output a file header with the file name and date",
    "body": [
				"---",
				"title: $TM_FILENAME_BASE",
				"description: input description",
        "date: $CURRENT_YEAR-$CURRENT_MONTH-$CURRENT_DATE $CURRENT_HOUR:$CURRENT_MINUTE:$CURRENT_SECOND",
				"---",
    ]
	},
```

headerと入力すると

```markdown
---
title: vscodeでmarkdownの日付を入力するsnipet
description: input description
date: 2020-08-01 23:30:39
---
```

こんな感じでかってに入力してくれます

### helpful References

[https://www.it-swarm.dev/ja/visual-studio-code/vscode%e3%81%ab%e7%8f%be%e5%9c%a8%e3%81%ae%e6%97%a5%e4%bb%98%e6%99%82%e5%88%bb%e3%82%92%e6%8c%bf%e5%85%a5%e3%81%99%e3%82%8b%e6%96%b9%e6%b3%95%e3%81%af%ef%bc%9f/827026837/](https://www.it-swarm.dev/ja/visual-studio-code/vscode%e3%81%ab%e7%8f%be%e5%9c%a8%e3%81%ae%e6%97%a5%e4%bb%98%e6%99%82%e5%88%bb%e3%82%92%e6%8c%bf%e5%85%a5%e3%81%99%e3%82%8b%e6%96%b9%e6%b3%95%e3%81%af%ef%bc%9f/827026837/)
