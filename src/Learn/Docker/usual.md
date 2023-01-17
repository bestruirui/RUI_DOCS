---
title: 常用的容器
icon: box-archive
---
## Portainer
Docker可视化管理
```Dockcer
docker run -d \
--restart=always \
--name="portainer" \
-p 9001:9000 \
-v /var/run/docker.sock:/var/run/docker.sock \
-v /docker/portainer:/data \
 6053537/portainer-ce:latest
```
## Aria2-Pro
更好用的 Aria2 Docker 容器镜像
```Docker
docker run -d \
    --name aria2ng \
    --restart unless-stopped \
    --log-opt max-size=1m \
    --network RUI \
    -e PUID=$UID \
    -e PGID=$GID \
    -e RPC_SECRET=100427 \
    -e RPC_PORT=6800 \
    -e LISTEN_PORT=6888 \
    -e IPV6_MODE=true \
    -v /docker/aria2/aria2-config:/config \
    -v /docker/downloads:/downloads \
    registry.hub.docker.com/p3terx/aria2-pro
```
## 青龙面板
定时任务面板
```Docker
docker run -dit \
    -v /docker/ql:/ql/data \
    -p 5700:5700 \
    --name="ql" \
    --dns 111.11.1.1 \
    --restart unless-stopped \
    whyour/qinglong:latest
```
## Alist
网盘目录列表程序
```docker
docker run -d \
     --restart=always \
     -v /doetclist:/opt/alist/data \
     -p 5244:5244 \
     --name="alist" \
     xhofe/alist:latest
```
## code-server
web版vscode
```docker
docker run -it --name code-server -p 5566:8080 \
  -v /docker/code/config:/home/coder/.config \
  -v /docker/code/home:/home/coder/project \
  codercom/code-server:latest
```
## 甜糖心愿
搞钱的
```docker
  docker run -d \
      -v /ttnode:/mnt/data/ttnode \
      -v /var/run/docker.sock:/var/run/docker.sock \
      -v /proc:/host/proc:ro \
      --name ttnode \
      --hostname ttnode \
      --privileged \
      --net=host \
      --dns=111.11.1.1 \
       --restart=always \
      registry.cn-hangzhou.aliyuncs.com/tiptime/ttnode:latest
```
















