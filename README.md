# nodinx
use nodejs to implete nginx  features, includes proxy, upstream, phase etc. 

> 想法产生于2016.07.21 

突然产生一个很好的想法, 那就是用nodejs实现nginx的核心功能, 包括负载均衡, 发向代理. 更妙的是, 要本开发nodinx的过程和维护公司的wapstatic服务器结合在一起. 大致工作分成如下几个阶段: 

- 第一阶段: 替换wapstatic nginx

撤掉wapstatic上的nginx服务器, 用nodejs处理所有的请求, 包括静态文件访问, 文件上传, 反向代理. 使用pm2来管理所有的进程.

然后对所有的请求加上监控,  比如上传文件的请求, 所有数据都存储到mongodb和redis中.  通过实现一个web app来访问这些所有的数据.  比如每天上传了多少个文件, 文件大小, 类型, 下载了多少个文件. 

- 第二个阶段: 核心功能实现

简单支持nginx的如下几个配置: 

location支持, upstream支持, proxy_pass支持.  也包括静态资源的支持. 

- 第三阶段: phase实现

支持nginx的11个phase.  刚开始可以只支持几个phase: 如rewrite, access, content.
到了这个阶段, 就需要实现自己的nodejs服务器框架了.  可以参考express, koa, restify 

