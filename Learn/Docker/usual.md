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
