# 问题
## Q1:录音，播放
* q1、android（android手机上传的是.ogg后缀文件）可以用 dd.getRecorderManager()录制，E应用录制是.audio后缀文件，正常上传，正常播放，IOS不能播放android上传的ogg文件（原因：backgroundAudioManager 支持类型有mp3/wav/aac/m4a格式。

* q2、
IOS（上传的是wav文件）可以用dd.getRecorderManager()录制，E应用录制是.audio后缀文件,正常上传，iOS 不能播放，android也不能播放，查看上传后的文件是.wav后缀，经测试，将上传到服务器的.wav后缀更改成.ogg 后缀后，android可以播放，iOS与问题1一样,不能播放
<hr>
* 需要实现：
1、android录制上传的文件上传后，音频文件可在 “android，iOS ”上正常播放
2、IOS 录制上传的文件上传后，音频文件可在 “android，iOS ”上正常播放
> 大概问题找到了，确实是我们这边处理有问题，大致情况是这样：1、无论Android还是iOS，录音生成的文件都是ogg，但是iOS端在上传的时候，文件类型没有匹配正确，导致上传显示的是wav；2、现在BackgroundAudioManager 播放的音频格式里不支持ogg的类型，所有iOS端播放不了，Android端因为兼容了，所以能播。

> 刚才重新review了一下实现，有个方式可以尝试下，把音频文件下载到本地，然后通过本地路径播放

> 您试的iOS？
1、ios 上传后，将wav改成ogg，
2、把文件下载到本地
3、执行播放代码
这样操作？
## Q2: svg,ios并不买单

## Q3: 定制应用，无法扫码预览

## Q4: 试用版钉钉云无法共创

## Q5: 定制应用，ip超出5个

## Q6: E应用，没有pc端

## Q7: E应用没有人脸识别
## Q8: 重复跳转页面
## Q9: 页面获取不到 dd.xxx api问题
## Q10: 通信录权限无法开通
## Q11
