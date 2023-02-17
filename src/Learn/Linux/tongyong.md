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
 #解压
tar -zxvf test.tar.gz        
#压缩
tar -zcvf test.tar.gz ./test/ 
```
## 清理日志
```shell
#只保留两天的，其余全部删除
journalctl --vacuum-time=2d  

#删除bash历史
rm -rf ~/.bash_history
history -c
```