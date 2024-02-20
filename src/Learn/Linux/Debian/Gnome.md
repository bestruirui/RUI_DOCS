---
title: Gnome
icon: page
---

Debian12.5安装Gnome43.0-3

- 安装   
```
apt install task-gnome-desktop
```
- 跳过初始化   
```
apt autoremove gnome-initial-setup
```
- 允许root登录   
```
sed -i '/^\[security\]$/a AllowRoot=true' /etc/gdm3/daemon.conf

echo  "AllowRoot=true">> /etc/gdm3/daemon.conf 
sudo sed -i '/auth required pam_succeed_if.so user != root quiet_success/s/^/#/' /etc/pam.d/gdm-password

sed -i '/auth required pam_succeed_if.so user != root quiet_success/s/^/#/' /etc/pam.d/gdm-autologin

```
- 允许root用户使用远程桌面     
```warning
就是这两行，通宵查了一晚
```

```
sed -i '/ConditionUser=!root/s/^/#/' /usr/lib/systemd/user/pipewire.socket
sed -i '/ConditionUser=!root/s/^/#/' /usr/lib/systemd/user/pipewire.service
```
- 重启桌面
```
systemctl restart gdm
```
- root免密自动登录桌面后，显示密钥链         

![](./20240220165352.png) 

- 不接显示器，使用远程桌面
```
# 安装虚拟显示器
apt install xserver-xorg-video-dummy
# 配置文件
bash -c 'cat <<EOF > /usr/share/X11/xorg.conf.d/xorg.conf
Section "Device"
    Identifier "DummyDevice"
    Driver "dummy"
    VideoRam 256000
EndSection
Section "Monitor"
    Identifier "DummyMonitor"
    HorizSync 30.0-1000.0
    VertRefresh 30.0-1000.0
    Modeline "2560x1440_50.00"  256.09  2560 2728 3008 3456  1440 1441 1444 1482 -HSync +Vsync
    Modeline "2560x1600_50.00"  285.75  2560 2736 3016 3472  1600 1601 1604 1646 -HSync +Vsync
    Modeline "3200x2000_60.00"  703.25  3200 3456 3800 4400  2000 2003 2013 2089 -hsync +vsync
EndSection

Section "Screen"
    Identifier "DummyScreen"
    Device "DummyDevice"
    Monitor "DummyMonitor"
    DefaultDepth 24
    SubSection "Display"
        Depth 24
        Modes "3200x2000_60.00" "2560x1600_50.00" "2560x1440_50.00"
    EndSubSection
EndSection
EOF'

# 网上的教程都是reboot，根本不需要重启，只需重启这个服务就好
systemctl restart display-manager
```