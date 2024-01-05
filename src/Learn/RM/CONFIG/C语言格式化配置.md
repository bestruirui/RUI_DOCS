---
title: C语言格式化配置
icon: page
---
在项目根目录下新建`.vscode/settings.json`
将以下内容复制到新建的文件中
```json
{
    "files.autoSave": "onFocusChange",
    "editor.formatOnSave": true,
    "C_Cpp.formatting": "vcFormat",
    "C_Cpp.vcFormat.newLine.beforeOpenBrace.block": "newLine",
    "C_Cpp.vcFormat.newLine.beforeOpenBrace.lambda": "newLine",
    "C_Cpp.vcFormat.newLine.beforeOpenBrace.namespace": "newLine",
    "C_Cpp.vcFormat.newLine.beforeOpenBrace.type": "newLine",
    "C_Cpp.vcFormat.indent.preserveWithinParentheses": true,
    "C_Cpp.vcFormat.newLine.scopeBracesOnSeparateLines": true,
    "C_Cpp.vcFormat.space.afterCastCloseParenthesis": true,
    "C_Cpp.vcFormat.space.aroundAssignmentOperator": "ignore",
    "C_Cpp.vcFormat.space.aroundBinaryOperator": "ignore",
    "C_Cpp.vcFormat.newLine.beforeOpenBrace.function": "newLine",
    "C_Cpp.vcFormat.newLine.beforeElse": true,
    "C_Cpp.vcFormat.indent.withinParentheses": "alignToParenthesis",
    "C_Cpp.vcFormat.indent.preserveComments": true,
    "C_Cpp.vcFormat.space.beforeComma": true,
}
```