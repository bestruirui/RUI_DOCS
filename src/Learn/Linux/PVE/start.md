---
# 这是文章的标题
title: 使用前的修改
# 这是页面的图标
icon: play
# 这是侧边栏的顺序
order: 2
---
在开始前对系统进行一些本地化修改
## 换源
将系统默认的源换为清华源
#### apt软件源
将`/etc/apt/sources.list`替换为
```
deb https://mirrors.tuna.tsinghua.edu.cn/debian/ bullseye main contrib non-free
# deb-src https://mirrors.tuna.tsinghua.edu.cn/debian/ bullseye main contrib non-free
deb https://mirrors.tuna.tsinghua.edu.cn/debian/ bullseye-updates main contrib non-free
# deb-src https://mirrors.tuna.tsinghua.edu.cn/debian/ bullseye-updates main contrib non-free
deb https://mirrors.tuna.tsinghua.edu.cn/debian/ bullseye-backports main contrib non-free
# deb-src https://mirrors.tuna.tsinghua.edu.cn/debian/ bullseye-backports main contrib non-free
deb https://mirrors.tuna.tsinghua.edu.cn/debian-security bullseye-security main contrib non-free 
# deb-src https://mirrors.tuna.tsinghua.edu.cn/debian-security bullseye-security main contrib non-free
```
#### PVE软件源
将`/etc/apt/sources.list.d/pve-enterprise.list`替换为
```
deb https://mirrors.tuna.tsinghua.edu.cn/proxmox/debian bullseye pve-no-subscription
```
#### lxc软件源
执行下面这句指令
```bash
sed -i 's|http://download.proxmox.com|https://mirrors.tuna.tsinghua.edu.cn/proxmox|g' /usr/share/perl5/PVE/APLInfo.pm
```
## 删除 local-lvm 分区
避免空间浪费，而且 PVE 首页上显示的空间剩余指的是 local 分区，推荐新装 PVE 时进行设置，不然还要备份还原虚拟机，比较麻烦
```
lvremove pve/data  
lvextend -l +100%FREE -r pve/root
```
在这里将local-lvm删除
![[./Pasted image 20230202165942.png]]
然后编辑local分区,内容全选
![[./Pasted image 20230202170047.png]]
