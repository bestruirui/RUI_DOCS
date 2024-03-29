---
# 这是文章的标题
title: 04 for
# 这是页面的图标
icon: page
# 这是侧边栏的顺序
order: 3
# 设置写作时间
date: 2023-10-08
---
## For 循环

当确切知道要循环一段代码的次数时，使用 `for` 循环更好而不是 `while` 循环：

### 语法

```c
for (表达式 1; 表达式 2; 表达式 3) {
  // 要执行的代码块
}
```

`表达式 1` 在代码块执行之前执行（一次）。

`表达式 2` 定义了执行代码块的条件。

`表达式 3` 在代码块执行后（每次）执行。

下面的示例将打印数字 0 到 4：

### 示例

```c
#include <stdio.h>
int main()
{
	int i;
	for (i = 0; i < 5; i++) {
	  printf("%d\n", i);
	}
}
```

**示例说明**

`表达式 1`： 在循环开始之前设置一个变量（int i = 0）。

`表达式 2`： 定义循环运行的条件（i 必须小于 5）。 如果条件为真，循环将重新开始，如果条件为假，循环将结束。

`表达式 3`： 每次执行循环中的代码块时增加一个值 (i++)。

## 另一个例子

此示例将仅打印 0 到 10 之间的偶数值：


```c
#include <stdio.h>
int main()
{
	for (i = 0; i <= 10; i = i + 2) {
	  printf("%d\n", i);
	}
}
```
## 作业
```c
#include <stdio.h>
int main()
{
    float x=0 , y=0;
    for (y=2;y>-2;y-=0.05)
    {
        for (x=-2;x<2;x+=0.04)
        {
            if ((x*x+y*y-1)*(x*x+y*y-1)*(x*x+y*y-1)-x*x*y*y*y < 0)
                printf("rm");
            else printf("  ");
        }
        printf("\n");
    }
    return 0;
}
```  
> 函数图像[Desmos | 图形计算器](https://www.desmos.com/calculator/pzc1splc1p?lang=zh-CN)