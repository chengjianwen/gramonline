---
layout: default
---

# 一个简单的绘图编程例子

这是一个演示如何通过“绘图”进行编程的例子，你可以通过“开始”、“过程”、“函数”等元件，并在其中填写你需要的语句，来搭建你的程序，并通过带箭头的线将它们连接起来，表示它们执行的顺序。

## 过程

过程由一个方框表示，它不会返回任何值。一个过程执行结束以后，执行指定（通过一个带箭头的线）的下一个过程（或者会函数）。

## 函数

函数由一个菱形表示，它会返回一个值。一个过程执行结束以后，会根据返回值执行符合条件的下一个过程。一个函数可以有多条指向不同目标的线，它们需要标注一个值，以便同该函数的返回值进行判断。

程序支持[JavaScript](https://www.w3schools.com/js/)，除此以外，还提供了三条“栈”指令，你可以在这些指令被执行的时候，看到右边栈中值的情况。

##  push()

它将一个值（数字、字串或者“true”，“false”这样的值，详细参考[JS Data Type](https://www.w3schools.com/js/js_datatypes.asp)）放入堆栈，俗称“入栈”。比如：

push(10)

push('我')

push('你好')

## pop()

它将栈顶的值取出来并作为返回值，俗称“出栈”。例如：

x = peek()

这个时候“x”的值和原先栈顶的值是相同的。

## peek()

它返回的值同pop()相同，区别仅仅在于它不会删除栈顶的值，也就是它会返回栈顶的值，但是不会执行“出栈”。例如：

x = peek()

<div id="sample">
  <div style="width: 100%; display: flex; justify-content: center; align-items: center;">
    {% include save.html display="none"%}
    {% include load.html display="none"%}
    {% include zoomin.html display="block"%}
    {% include zoomout.html display="block"%}
    {% include delay.html display="block"%}
    {% include run.html display="block"%}
  </div>
  <div style="width: 100%; display: flex; justify-content: space-between">
    {% include palette.html %}
    {% include diagram.html %}
    {% include stack.html %}
  </div>
  <textarea id="mySavedModel" style="width: 100%; height: 300px; display: none;">
{% include model.json %}
  </textarea>
</div>
