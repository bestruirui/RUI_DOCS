---
# 这是文章的标题
title: bili直播状态监控
# 这是页面的图标
icon: page
---
利用go-cqhttp提供的API向指定群聊发送直播状态     
```docker
docker run \
  -v /docker/cqhttp:/data \
  -p 2333:8080 \
  -it \
  --name cqhttp \
  ghcr.bestrui.top/mrs4s/go-cqhttp:master
```
    
```shell
ROOM_ID=27178028

LIVE_STATUS=`curl -G -s "https://api.live.bilibili.com/room/v1/Room/get_info?room_id=$ROOM_ID" | sed 's/,/\n/g' | grep "live_status" | sed 's/:/\n/g' | sed '1d'      | sed 's/}//g'`
  
LIVE_IMAGE=`curl    -s "https://api.live.bilibili.com/room/v1/Room/get_info?room_id=$ROOM_ID" | sed 's/,/\n/g' | grep "keyframe"    | sed 's/"/\n/g' |  sed 's/}//g' | grep https`

RUI_TIME=`TZ=UTC-8 date "+%m-%d %H:%M:%S"`

if [ $LIVE_STATUS == 1 ];then

     POST_OUTPUT=`curl  -s POST http://192.168.31.7:2333/send_group_msg \
                 -H 'Content-Type: application/json' \
                 -d '{
                       "group_id":769835,
                       "message":[
                                  {
                                    "type": "image",
                                    "data": {
                                        "file": "'$LIVE_IMAGE'"
                                    }
                                  }  
                            ],
                       "auto_escape":true
                    }' `
  
      POST_STATUS=`echo $POST_OUTPUT | sed 's/,/\n/g' | grep "status" |  sed 's/:/\n/g' | sed '1d' | sed 's/}//g' | sed 's/"//g' `
      if [ $POST_STATUS = "ok" ];then          
       echo -e  "$RUI_TIME  \e[32m SUCCESS \e[0m 正在直播 发送成功"
      else
       echo -e "$RUI_TIME  \e[33m WARN \e[0m 正在直播 发送失败"
      fi

else

     POST_OUTPUT=`curl  -s 'http://192.168.31.7:2333/send_private_msg?user_id=1009&message=直播暂停&auto_escape=true' `

     POST_STATUS=`echo $POST_OUTPUT | sed 's/,/\n/g' | grep "status" |  sed 's/:/\n/g' | sed '1d' | sed 's/}//g' | sed 's/"//g' `

     if [ $POST_STATUS = "ok" ];then          

     echo -e  "$RUI_TIME \e[31m ERROR \e[0m 直播\e[31m结束\e[0m 发送\e[32m成功\e[0m"

     else

     echo -e "$RUI_TIME \e[31m ERROR \e[0m 直播\e[31m结束\e[0m  发送\e[31m失败\e[0m"

     fi

fi

```