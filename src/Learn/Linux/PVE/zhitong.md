---
# 这是文章的标题
title: 显卡直通
# 这是页面的图标
icon: page
---
````warning
我的环境J4125，PVE7.2-3
````

## 修改BIOS
打开VT-D
开启CSM
CSM选项中的项目都选为legacy
## PVE设置
#### 启动内核IOMMU支持
修改` /etc/default/grub`中的`GRUB_CMDLINE_LINUX_DEFAULT`为：
```
GRUB_CMDLINE_LINUX_DEFAULT="quiet intel_iommu=on i915.enable_gvt=1 iommu=pt video=efifb:off video=vesafb:off"
```
#### 加载硬件直通相关模块
修改`/etc/modules`，添加以下内容
```
vfio
vfio_iommu_type1
vfio_pci
vfio_virqfd
kvmgt
```
修改`/etc/modprobe.d/pve-blacklist.conf`，添加以下内容
```
blacklist snd_hda_intel
blacklist snd_hda_codec_hdmi
blacklist snd_hda_codec
blacklist snd_hda_core
blacklist i915
```
#### 更新配置信息
执行以下命令
```
update-grub
update-initramfs -u -k all
reboot
```
#### 绑定核显到vfio模块
查看核显以及声卡的ID：
![[./Pasted image 20230202171821.png]]
![[./Pasted image 20230202172010.png]]
根据ID修改下面的命令
```
echo "options vfio-pci ids=8086:3185,8086:3198" > /etc/modprobe.d/vfio.conf
```