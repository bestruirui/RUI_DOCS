---
# 这是文章的标题
title: 03 Switch
# 这是页面的图标
icon: page
# 这是侧边栏的顺序
order: 2
# 设置写作时间
date: 2023-10-08
---

## Switch 语句

使用 `switch` 语句，而不是编写 **许多** `if..else` 语句。

`switch` 语句选择要执行的许多代码块之一：

### 语法

```c
switch(表达式) {
  case 整型数值1:
    // 代码块 1
    break;
  case 整型数值2:
    // 代码块 2
    break;
  default:
    // 代码块 3
}
```

这是它的工作原理：

* `switch` 表达式被计算一次
* 将表达式的值与每个 `case` 的值进行比较
* 如果匹配，则执行关联的代码块
* `break` 语句跳出 switch 块并停止执行
* `default` 语句是可选的，指定在没有大小写匹配时运行的一些代码

下面的示例使用工作日编号来计算工作日名称：

```c
#include <stdio.h>
int main(){
	int day = 4;
	switch (day) {
	  case 1:
	    printf("周一");
	    break;
	  case 2:
	    printf("周二");
	    break;
	  case 3:
	    printf("周三");
	    break;
	  case 4:
	    printf("周四");
	    break;
	  case 5:
	    printf("周五");
	    break;
	  case 6:
	    printf("周六");
	    break;
	  case 7:
	    printf("周日");
	    break;
	}
return 0;
}
// 输出 -> "周四" (day 4)
```

## 中断关键字 break

当 C 到达一个 `break` 关键字时，它会跳出 `switch` 块。

这将停止在块内执行更多代码和案例测试。

找到匹配项并完成工作后，就该休息一下了。 无需进行更多测试。

中断可以节省大量执行时间，因为它“忽略”了 switch 块中所有其余代码的执行。

## 默认关键字 default

`default` 关键字指定在没有大小写匹配时运行的一些代码：

```c
#include <stdio.h>
int main(){
	int day = 4;
	switch (day) {
	  case 6:
	    printf("今天是星期六");
	    break;
	  case 7:
	    printf("今天是星期日");
	    break;
	  default:
	    printf("期待周末");
	}
}

// 输出 -> "期待周末"
```

**注意：** `switch` 中的最后一条语句必须使用 `default` 关键字，并且不需要 `break`。`default` 不是必须的。当没有 `default` 时，如果所有 `case` 都匹配失败，那么就什么都不执行。

## 关键字 case

```c
case 10:     printf("..."); break;   // ✅ 💯 正确
case 8+9:    printf("..."); break;   // ✅ 💯 正确
case 'A':    printf("..."); break;   // ✅ 💯 正确，字符和整数可以相互转换
case 'A'+19: printf("..."); break;   // ✅ 💯 正确，字符和整数可以相互转换
case 9.5:    printf("..."); break;   // ❌ 错误，不能为小数
case a:      printf("..."); break;   // ❌ 错误，不能包含变量
case a+10:   printf("..."); break;   // ❌ 错误，不能包含变量
```
## 作业
```c

```