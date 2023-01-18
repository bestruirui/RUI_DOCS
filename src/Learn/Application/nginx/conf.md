---
# 这是文章的标题
title: 配置文件
# 这是页面的图标
icon: gear
---

## 反向代理某个端口
#### HTTPS
```nginx
server {
    listen                  443 ssl http2;
    listen                  [::]:443 ssl http2;
    server_name             bestrui.top;

    # SSL
    ssl_certificate         /nginx/ssl/jd.bestrui.top_nginx/jd.bestrui.top_bundle.crt;
    ssl_certificate_key     /nginx/ssl/jd.bestrui.top_nginx/jd.bestrui.top.key;
    ssl_session_timeout 5m;
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:HIGH:!aNULL:!MD5:!RC4:!DHE; 
    ssl_prefer_server_ciphers on;

    # reverse proxy
    location / {
        proxy_pass            http://192.168.31.20:15000;
        proxy_set_header Host $host;
    }
}

# HTTP redirect
server {
    listen      80;
    listen      [::]:80;
    server_name bestrui.top;
    location / {
        return 301 https://bestrui.top$request_uri;
    }
}

```
#### HTTP
```nginx
server{
        listen [::]:80;
        listen 0.0.0.0:80;
        server_name bestrui.top;
        location = / {
          proxy_pass         http://192.168.31.3:3001;
        }
}
```