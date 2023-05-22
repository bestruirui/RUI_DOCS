---
# 这是文章的标题
title: 代码优化
# 这是页面的图标
icon: code
---
```tip
主要是善用位运算
```
### 乘除法        
位操作只需一个指令周期即可完成        
左乘右除       
`<<`(向左位移) 针对二进制，转换成二进制后(32位)向左边移动n位 ，相当于这个整数乘以2的n次方；        
`>>`(向右位移) 针对二进制，转换成二进制后(32位)向右移动n位,相当于这个整数除以2的n次方,正数高位补0, 正数高位补1；      
```c
MOTOR->DATA.Angle_Infinite = (int32_t) (8192 * MOTOR->DATA.Laps + MOTOR->DATA.Angle_now);
//上述代码可优化为
MOTOR->DATA.Angle_Infinite = (int32_t) ((MOTOR->DATA.Laps << 13)  + MOTOR->DATA.Angle_now);
```
### 绝对值
```c
//int16_t取绝对值
int16_t RUI_F_MATH_ABS_int16_t(int16_t DATA)
{
    return DATA&0x7FFF;
}
//float取绝对值
float RUI_F_MATH_ABS_float(float DATA)
{
    uint32_t RUI_V_TEMP = *(uint32_t*) &DATA;
    RUI_V_TEMP &= 0x7FFFFFFF; // 将符号位清零
    return *(float*) &RUI_V_TEMP;
}
```
### 浮点平方根倒数
```c
float RUI_F_MATH_INV_SQRT_float(float DATA)
{
    float DATA_half = 0.5f * DATA;
    uint32_t i = *(uint32_t*) &DATA; // 将浮点数视为无符号整数
    i = 0x5f3759df - (i >> 1); // 运用魔数进行处理
    DATA = *(float*) &i; // 再将无符号整数转回浮点数
    DATA = DATA * (1.5f - DATA_half * DATA * DATA); // 进行牛顿迭代
    return DATA;
}
```
### 查表法
```c
uint8_t RUI_F_MOD(void)
{
    uint8_t RUI_V_MOD[3][3]={
        {RUI_DF_MOD_HEAD_ARM,RUI_DF_MOD_HEAD_CUP,RUI_DF_MOD_HEAD_CUP_SHUT},
        {RUI_DF_MOD_BOTTOM_MOVE,RUI_DF_MOD_BOTTOM_UP,RUI_DF_MOD_BOTTOM_DOWN},
        {0,0,RUI_DF_MOD_KEYBOARD}
    };

    static uint8_t RUI_V_DBUS_R = 0 , RUI_V_DBUS_L = 0;
    uint8_t RUI_L_DBUS_TABLE[3] ={ 0, 2, 1 };
    uint8_t RUI_R_DBUS_TABLE[3] ={ 0, 2, 1 };

    RUI_V_DBUS_L = RUI_L_DBUS_TABLE[RUI_V_DBUS.Remote.S2_u8 - 1];
    RUI_V_DBUS_R = RUI_R_DBUS_TABLE[RUI_V_DBUS.Remote.S1_u8 - 1];

    return  RUI_V_MOD[RUI_V_DBUS_L][RUI_V_DBUS_R];
}
```