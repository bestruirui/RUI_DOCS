---
title: 百度网盘Docker
icon: page
---
百度网盘群晖套件版提取版    
群晖套件版就是一个docker容器   
网上竟然没有人分享这个docker容器   
我自己提取出来了 ，可以在非群晖机器上直接运行

## 说明  
`baiduapp` 这个是解包提取出来的    
`baiduappdata` 不在群晖上，直接使用docker部署时需要用到    
## 安装   
- 解压`baiduappdata.zip`到`baidu/data`文件夹    
- Docker直接部署     
```
docker run -d --name baiduapp -v ./baidu/data:/data -v ./baidu/download:/sdkpath/volume1/docker bestrui/baidu
```
镜像是`baiduapp`里面文件直接构建的，如不放心，也可以自己构建   
## 构建   
- 解压`baiduapp.zip`到`baidu/src`文件夹  
- 进入`baidu/src/baiduapp`文件夹   
```
docker build -t baidu:latest .
```
- 用自己的镜像运行    
```
docker run -d --name baiduapp -v ./baidu/data:/data -v ./baidu/download:/sdkpath/volume1/docker baidu:latest
```
## 下载链接

[百度网盘 | AList (bestrui.top)](https://alist.bestrui.top/OneDrive/Download/Share/%E7%99%BE%E5%BA%A6%E7%BD%91%E7%9B%98)