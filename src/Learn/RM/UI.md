---
# 这是文章的标题
title: 裁判系统UI
# 这是页面的图标
icon: page
---

<table>
  <td>frame_header</td>
  <td>SOF</td>
  <td>1</td>
  <td >0xA5</td>
 </tr>
 <tr>
  <td >data_length</td>
  <td >2</td>
  <td>数据帧中 data 的长度</td>
 </tr>
 <tr>
  <td >seq</td>
  <td >1</td>
  <td>包序号</td>
 </tr>
 <tr>
  <td >CRC8</td>
  <td >1</td>
  <td>帧头 CRC8 校验</td>
 </tr>
 <tr >
  <td >cmd_id</td>
  <td>命令码 ID</td>
  <td class=xl65>2</td>
  <td>0x301 机器人间交互数据，发送方触发发送，上限 10Hz</td>
 </tr>
 <tr height=19 style='height:14.25pt'>
  <td rowspan=4 height=76 class=xl65 style='height:57.0pt'>data</td>
  <td>数据段的内容 ID</td>
  <td class=xl65>2</td>
  <td></td>
 </tr>
 <tr height=19 style='height:14.25pt'>
  <td height=19 style='height:14.25pt'>发送者的 ID</td>
  <td class=xl65>2</td>
  <td></td>
 </tr>
 <tr height=19 style='height:14.25pt'>
  <td height=19 style='height:14.25pt'>接收者的 ID</td>
  <td class=xl65>2</td>
  <td></td>
 </tr>
 <tr height=19 style='height:14.25pt'>
  <td height=19 style='height:14.25pt'>内容数据段</td>
  <td class=xl65>113</td>
  <td>最大为113</td>
 </tr>
 <tr height=19 style='height:14.25pt'>
  <td height=19 style='height:14.25pt'>frame_tail</td>
  <td>CRC16，整包校验</td>
  <td class=xl65>2</td>
  <td></td>
 </tr>
</table>