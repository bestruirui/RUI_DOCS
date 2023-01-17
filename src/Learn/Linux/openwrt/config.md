---
title: 常用的命令
icon: square-terminal
---
## 开启指定的IPv6端口

```shell
ip6tables -I forwarding_rule -p tcp --dport 1234 -j ACCEPT
```