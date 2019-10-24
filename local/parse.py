import os
import xlrd
import json

book = xlrd.open_workbook('/Users/zhangchao/Desktop/data.xlsx')
sheet = book.sheet_by_name('7上')
# for i in range(14, sheet.nrows):
res = []
keys = ['title', 'author', 'dynasty', 'main', 'grade', 'seq_id', 'unit_num',
        'class_id', 'class_title', 'reference', 'annotate', 'comment']
for i in range(1, sheet.nrows):
    row = sheet.row_values(i)
    # print(row)
    # 取出国家名字
    tmp = {}
    for i, v in enumerate(row):
        if isinstance(v, float):
            v = str(int(v))
        tmp[keys[i]] = v.replace('\n', '<br>')
    res.append(tmp)

print(json.dumps(res, indent=2, ensure_ascii=False))