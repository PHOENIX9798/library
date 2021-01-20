# node+react的图书馆管理系统
## 0、分工
陈可欣10175101180：完成所有文档部分与网站的登录页面部分的开发；
刘庥秀10175101204：完成网站部署、大部分代码工作。

## 1、如何在本地调试前端页面和接口
在nodeServer文件夹下：
### `npm install`
### `npm start`

在根目录下：
### `npm install`
### `npm start`

打开 [http://localhost:3000](http://localhost:3000) 即可看到前端页面

## 2、如何在本地只跑服务器就可以看到页面
我已经配置好了，只需要：
【默认方法1】在nodeServer文件夹下：
### `npm install`
### `npm start`

若你修改了一些东西，那么需要以下步骤：
【方法2】在根目录下：
### `npm install`
### `npm run build`
我们会在根目录看到build文件夹，把里面的内容放到nodeServer文件夹里的static中

在nodeServer文件夹下：
### `npm install`
### `npm start`

在你使用了方法1或者方法2后，你可以打开 [http://localhost:3333](http://localhost:3333) 即可看到页面

## 3、如何在云服务器上看到页面
拥有一个服务器，百度一下如何在云服务器上部署node应用即可，如果你使用的阿里云服务器，[那么可以参考本文档：](https://help.aliyun.com/document_detail/50775.html?spm=5176.11065259.1996646101.searchclickresult.73aa4729mcloGI)

这篇文档不足以完成可以随时随地访问你的网页，你还需要把[本地文件上传到服务器](https://jingyan.baidu.com/article/ae97a64672d076fbfc461d29.html)上，照着上面写到如何在本地只跑服务器就可以看到页面里的步骤在云服务器上进行一遍即可。完成上述两步，还必须你的服务器跑着应用才可以访问网站，我也是吃了这个亏，在课程展示的时候出bug了，十全的办法请配置一下pm2

### `npm install pm2 -g`
### `ln -s /root/node-v6.9.5-linux-x64/bin/pm2 /usr/local/bin/pm2`
### `pm2 start server.js`

请把上述的命令里的版本号改成你真实的版本号，记得在云服务器上修改一下配置，端口号的配置。

