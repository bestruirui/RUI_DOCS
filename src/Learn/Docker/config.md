---
title: 常用命令
icon: square-terminal
toc: true
---
## 运行命令
```docker
docker run [OPTIONS] IMAGE [COMMAND] [ARG...]
```
#####  OPTIONS说明
- `-d` : 后台运行
- `-it` : 交互模式运行
- `-p 3000:3000` : 指定端口映射，`主机(宿主)端口:容器端口`
- `--name bestrui` : 容器名字
- `--dns 111.11.1.1` : 指定DNS服务器
- `--net="bridge"` : 指定容器的网络类型
- `-v /docker:/app` : 绑定目录，`主机(宿主)目录:容器目录` 
- `-e TZ=Asia/Shanghai` : 环境变量：时区
- `--restart=always` : 重启策略
```` tip 重启策略
- no 默认值，表示容器退出时，docker不自动重启容器
- always 容器退出时总是重启
- on-failure 若容器的退出状态非0，则docker自动重启容器
- unless-stopped 容器退出时总是重启，但不考虑Docker守护进程启动时就已经停止的容器
````

## 启动命令
```docker
docker start     name //普通的启动命令
docker start -i  name //启动并进入交互
docker start -a  name //在前端显示日志
```

## 构建容器
```docker
docker build -t name:tag .
```

````tip 提示
命令最后的 ==**.**== 不能省略
````

## 创建网络
- #### macvlan网络
```docker
docker network create -d \
       macvlan -o \
        parent=eth0 \
        RUI \
       --subnet=192.168.31.0/24  \
       --gateway=192.168.31.1 \
       --ipv6 --subnet=fe80::/8
```
## 清理日志
```shell
#!/bin/sh
echo  "========开始清理容器日志 $(date +%Y-%m-%d\ %H:%M:%S)========"  
  
logs=$(find /var/lib/docker/containers/ -name *-json.log)  
  
for log in $logs  
        do  
                echo "清理了: $log"  
                cat /dev/null > $log  
        done  

echo "========清理完成 $(date +%Y-%m-%d\ %H:%M:%S)========" 
```
或者
```shell
docker ps -aq | xargs docker inspect --format='{{.LogPath}}' | xargs truncate -s 0
```