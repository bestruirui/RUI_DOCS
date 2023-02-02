---
# 这是文章的标题
title: 显卡直通
# 这是页面的图标
icon: page
---
## 修改BIOS
打开VT-D
开启CSM
CSM选项中的项目都选为legacy
## PVE设置
找到` /etc/default/grub`中的`GRUB_CMDLINE_LINUX_DEFAULT`修改为：
```
GRUB_CMDLINE_LINUX_DEFAULT="quiet intel_iommu=on i915.enable_gvt=1 iommu=pt video=efifb:off video=vesafb:off"
```