---
title: js 中apply、call 和 bind
---


### apply()

接受两个参数，第一个参数是运行函数的作用域，第二个是参数数组。其中第二个可以是Array实例，也可以是arguments对象。
```
function sum(num1,num2){
    return num1+num2;
}
//传入Array实例
function arraySum(num1,num2){
    sum.apply(this,[num1,num2]);
}
//传入arguments对象
function argumentsSum(num1,num2){
    sum.apply(this,arguments);
}
```
### call()

call() 与 apply() 作用相同，区别在于接受参数的方式不同，传给call的参数必须得逐一列出来。
```
sum.apply(this,num1,num2);
```
### bind()

创建一个函数的实例，this的值会被绑定到传给bind()函数的值。
```
var o ={ color:'red'}
function sayColor(){
    console.log(this.color);
}
var objectSayColor = sayColor.bind(o);
objectSayColor();  //red
```

### 相同点
> * 三者都是用来改变函数的this对象的指向的；
> * 三者第一个参数都是this要指向的对象，也就是想指定的上下文；
> * 三者都可以利用后续参数传参；


