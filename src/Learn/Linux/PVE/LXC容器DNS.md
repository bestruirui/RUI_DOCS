---
# 这是文章的标题
title: 阻止 DHCP 修改 resolv.conf 文件
# 这是页面的图标
icon: page
---

# 使用 DHCP 钩子

修改 `/etc/dhcp/dhclient-enter-hooks.d/nodnsupdate` 文件。

作出以下的修改

```
#!/bin/sh
make_resolv_conf(){
    :
}
```

给文件 nodnsupdate 添加可执行权限

```
chmod +x /etc/dhcp/dhclient-enter-hooks.d/nodnsupdate
```

重启系统，现在你就可以任性地修改 /etc/resolv.conf 文件而且不会担心被回滚了。