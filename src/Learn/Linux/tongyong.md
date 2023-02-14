---
# 这是文章的标题
title: 通用命令
# 这是页面的图标
icon: square-terminal
---
## 查看CPU频率
```bash
watch grep \'cpu MHz\' /proc/cpuinfo
```
## 解压缩
```bash
tar -zxvf test.tar.gz         #解压

tar -zcvf test.tar.gz ./test/ #压缩
```