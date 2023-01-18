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
         listen    [::]:443 ssl; 
         listen 0.0.0.0:443 ssl;

         server_name  bestrui.top;    
         ssl_certificate  /nginx/ssl/bestrui.top_nginx/bestrui.top_bundle.crt;
         ssl_certificate_key   /nginx/ssl/bestrui.top_nginx/bestrui.top.key;
         ssl_session_timeout 5m;
         ssl_protocols TLSv1.2 TLSv1.3;
         ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:HIGH:!aNULL:!MD5:!RC4:!DHE; 
         ssl_prefer_server_ciphers on;                                                   
         location / {
                root /docker/web/home;
                index index.html;
           }               
          error_page 404 403 500 502 503 504 /404.html;
          location = /404.html {
          root /www/404;
           }

}
server{
        listen [::]:80;
        listen 0.0.0.0:80;
        server_name bestrui.top;
        rewrite ^/(.*)$ https://bestrui.top:443/$1 permanent;
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