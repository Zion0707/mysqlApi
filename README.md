### **nodeJs + mysql 搭建 汽车名称增删改查**
<br>


###### 使用方式
1、$ cnpm i 安装依赖包 <br>
2、$ npm start 启动本地服务器 这里使用 node-dev（更改代码实时更新）或者 直接 $node app.js 就可以启动服务了  <br>
3、mysql 启动 <br>
$ cd /usr/local/mysql/bin/  <br>
$ source ~/.bash_profile  <br>
$ mysql -uroot -p  <br>

###### 数据库
1.数据库名为 cars 表名为list <br>
2.list表数据结构
![](https://github.com/Zion0707/mysqlApi/blob/master/screenshots/list_table.png)


###### 界面呈现
![](https://github.com/Zion0707/mysqlApi/blob/master/screenshots/view.png)


###### 文件说明
app.js 主要的入口  <br>
config.js 配置文件（端口等..）   <br>
public 静态资源  <br>
api 文件夹存放 接口逻辑和数据  <br>

