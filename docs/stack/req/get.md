# get 请求传递数组，postman测试接口
```
http://192.168.1.132:8086/web/v2/manage/patient/signList?service%5B0%5D=0&know%5B0%5D=0&know%5B1%5D=1&know%5B2%5D=2&isEmphasis%5B0%5D=0&peopleClassification%5B0%5D=0&userName=

{
    service:[0],
    know:[0,1,2],
    isEmphasis:[0],
    peopleClassification:[0],
}
```