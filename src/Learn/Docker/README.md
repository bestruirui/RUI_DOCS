---
title: Docker
icon: docker
index: false
---
## Docker
**Docker**是一个开放源代码的开放平台软件，用于开发应用、交付应用、运行应用。Docker允许用户将基础设施中的应用单独分割出来，形成更小的颗粒，从而提高交付软件的速度。    
**Docker容器**与虚拟机类似，但二者在原理上不同。容器是将操作系统层虚拟化，虚拟机则是虚拟化硬件，因此容器更具有便携性、高效地利用服务器。 容器更多的用于表示 软件的一个标准化单元。由于容器的标准化，因此它可以无视基础设施（Infrastructure）的差异，部署到任何一个地方。另外，Docker也为容器提供更强的业界的隔离兼容。     
**Docker** 利用Linux核心中的资源分离机制，例如cgroups，以及Linux核心名字空间，来创建独立的[容器](https://zh.wikipedia.org/wiki/%E4%BD%9C%E6%A5%AD%E7%B3%BB%E7%B5%B1%E5%B1%A4%E8%99%9B%E6%93%AC%E5%8C%96 "操作系统层虚拟化")（containers）。这可以在单一Linux实体下运作，避免启动一个[虚拟机](https://zh.wikipedia.org/wiki/%E8%99%9B%E6%93%AC%E6%A9%9F%E5%99%A8 "虚拟机")造成的额外负担[[4]](https://zh.wikipedia.org/wiki/Docker#cite_note-#1-4)。Linux核心对名字空间的支持完全隔离了工作环境中应用程序的视野，包括行程树、[网络](https://zh.wikipedia.org/wiki/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C "计算机网络")、用户ID与挂载文件系统，而核心的cgroup提供资源隔离，包括[CPU](https://zh.wikipedia.org/wiki/CPU "CPU")、[存储器](https://zh.wikipedia.org/wiki/%E9%9B%BB%E8%85%A6%E8%A8%98%E6%86%B6%E9%AB%94 "电脑存储器")、block I/O与网络。从0.9版本起，Dockers在使用抽象虚拟是经由[libvirt](https://zh.wikipedia.org/wiki/Libvirt "Libvirt")的[LXC](https://zh.wikipedia.org/wiki/LXC "LXC")与systemd - nspawn提供界面的基础上，开始包括libcontainer库做为以自己的方式开始直接使用由Linux核心提供的虚拟化的设施，