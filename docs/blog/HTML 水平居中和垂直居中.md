---
title:  HTML 水平居中和垂直居中
---

###  水平居中

1. 文字居中
```
text-align:center;
```
2. 图片居中
```
/*图片的父级div*/
text-align:center;
```
3. 绝对定位元素 居中
```
margin: 0 auto;
```
4. 相对定位 负边距居中
```
/*适合于已知宽度*/
width:100px;
position:relative;
left:50%;
margin-left:-50px;
```
### 垂直居中
文字设置line-height
```
line-height:40px;
```
div 最常用的是负边距居中
```
top:50%;
margin-top:-50px;
```


