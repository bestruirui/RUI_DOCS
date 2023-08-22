---
# 这是文章的标题
title: 控制PWM风扇转速
# 这是页面的图标
icon: page
---
## PWM模块
首先查看有没有PWM模块
```bash
ls /sys/class/hwmon/hwmon*/
```
如果没有先安装
```bash
echo nct6775 >> /etc/modules
modprobe -v nct6775
```
安装完以后在`/sys/devices/platform`目录下应该会有`nct6775*`目录
## 模式切换
首先先查看当前模式       
目录替换为自己的    
```bash
cat /sys/devices/platform/nct6775.656/hwmon/hwmon2/pwm2_enable
```    
 
```bash
#手动模式
echo 1  > /sys/devices/platform/nct6775.656/hwmon/hwmon2/pwm2_enable
```

```bash
#BIOS控制
echo 5  > /sys/devices/platform/nct6775.656/hwmon/hwmon2/pwm2_enable
```
## 转速控制
```bash
#将RPM替换为0~255区间
echo RPM  > /sys/devices/platform/nct6775.656/hwmon/hwmon2/pwm2
```