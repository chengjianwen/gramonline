---
layout: default
---

# 流程图编程

这是一个如何通过“绘制流程图”进行编程的例子，你可以通过创建自己的过程和函数，并将连接起来而形成一个程序，并让它执行。缺省的执行模式为“断步”模式，也就是执行完每个过程和函数，它都会暂停一下，以便让你观察它的运行过程。

## 过程块

通过<img src="/img/rectangle.png" height=1em>来创建一个过程块。一个过程块执行结束以后，会根据它的线条指向执行下一个过程/函数块。

## 函数块

通过<img src="/img/diamond.png" height=1em>来创建一个函数块。一个函数块执行结束以后，会根据它的返回值和各个下一步指向的线条值进行判断，从而执行符合条件的下一个过程/函数块。

## 线条

线条是一根有方向箭头的线，通过它将各个过程和函数块连接起来，指示程序/函数块执行的顺序。

## 语言

程序目前支持[JavaScript语言](https://www.w3schools.com/js/)。

## 运行

点击“运行”按钮可以运行你的程序。缺省情况下程序会按照设置的间隔时间断步执行每个程序/函数块，以便让你看到程序执行的过程是否正确。

<div>
  <div style="width: 100%; display: flex; justify-content: center; align-items: center;">
    samples: {% include samples.html display="block"%}
    {% include save.html display="block"%}
    {% include zoomin.html display="block"%}
    {% include zoomout.html display="block"%}
    delay: {% include delay.html display="block"%}
    {% include run.html display="block"%}
  </div>
  <div style="width: 100%; display: flex; justify-content: space-between">
    {% include palette.html %}
    {% include diagram.html %}
  </div>
</div>
