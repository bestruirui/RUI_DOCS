---
title: 代理池
icon: page
---

## AutoProxyPool

> 作者：mzzsfy  
> [auto-proxy-pool](https://t.me/autoProxyPool)
```tip
一个用于对接代理池的代理整合工具，可玩性较高      可通过该工具对接多个代理池，使用时只需连接一个代理地址即可实现自动切换代理池，规则配置丰富     
```
- #### 获取代理池

  > [携趣](https://www.xiequ.cn)     
  > [巨量](https://www.juliangip.com/user/reg?inviteCode=1023366)每天免费1000个     
  > [星空](http://www.xkdaili.com/?ic=7aeqfsaq)       
  > 自行注册并开通免费代理池业务以获取你的代理池接口地址         
  > 免费代理池需要绑定公网IP才可以使用，如果没有那么可通过官方接口动态调整      


- #### 部署

  ```bash
  docker run -dit \
  --name auto-proxy-pool `# 容器名` \
  --hostname auto-proxy-pool `# 主机名` \
  --network bridge `# 容器网络类型` \
  --restart always `# 开机自启` \
  -p 8080:8080 `# 端口映射，"主机端口:容器端口"` \
  -v /opt/auto-proxy-pool:/run/data `# 配置文件的主机挂载目录` \
  --privileged=true \
  mzzsfy/auto-proxy-pool:latest
  ```
   

  > 注意不可以更改 `:` 右边的内容否则会报错，可更改默认映射端口号以此设置面板访问端口  
  > 若容器启动后不能正常使用请通过 `docker logs -f auto-proxy-pool` 命令查看容器日志

- #### 配置方法

  - ##### 代理配置

    第一次启动容器后需在映射目录新建一个 **proxy.yml** 配置文件，内容如下：

    ```yaml
    defaultCheckUrl: http://baidu.com/ # 代理默认检测地址，用于检测通过代理池提取到的代理IP是否有效
    changeRequest:
      - hostRegex: .* # 用于指定通过代理的请求链接（根据正则表达式匹配，默认 .* 表示匹配全部，若请求链接不在此规则内则会通过本机自身网络快速放通）
        proxy: proxy # 指定配置 
    upstream:
      proxy: # 自定义配置名称
        apiUrl: <你的代理池API> # 接口回传需为txt格式 /n
        lifecycle: -1 # 代理IP的生命周期，即从代理池提取到的IP的有效时长（填-1为自动检测即不指定，若需指定直接定义正整数，单位/秒）
        maxSize: 1 # 最多保留上游IP数量即同时维护几个有效ip，代理池消耗速度的倍数等于该设定值
        requestInterval: 100ms # 从代理池获取代理IP的请求间隔，注意不要太快否则可能会被服务器拉黑
    ```

    上面写的是一个最简单的配置文件，更多配置参数详见模板文件，可前往官方频道关联群组讨论  
    若想仅适用于JD脚本，可将 `hostRegex` 的值指定为 `.*\.(jd|isvjd|isvjcloud)\.com.*`
    ````tip
    每次修改完配置需重启容器才能生效  
    ```bash  
    docker restart auto-proxy-pool  
    ```
    ````
