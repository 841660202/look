## model 结构(5点)
 * 属性
 * 构造方法（简版）
 * .fromJson
 * .toJson
 * 重写 toString 方法
 例子
 ```dart
class ServiceModel {
  int tabId;
  String label;
  String labelId;
  String iconRes;
  String iconUrl;
  String url;
// 简化版的构造函数
/* 原版
  ServiceModel(
    tabId,
    label,
    labelId,
    iconRes,
    iconUrl,
    url,
  ){
      this.tabId=tabId;
      this.label=label;
      this.labelId=labelId;
      this.iconRes=iconRes;
      this.iconUrl=iconUrl;
      this.url=url;
  };

*/
  ServiceModel({
    this.tabId,
    this.label,
    this.labelId,
    this.iconRes,
    this.iconUrl,
    this.url,
  });

  ServiceModel.fromJson(Map<String, dynamic> json)
      : tabId = json['tabId'],
        label = json['label'],
        labelId = json['labelId'],
        iconRes = json['iconRes'],
        iconUrl = json['iconUrl'],
        url = json['url'];

  Map<String, dynamic> toJson() => {
        'tabId': tabId,
        'label': label,
        'labelId': labelId,
        'iconRes': iconRes,
        'iconUrl': iconUrl,
        'url': url,
      };

  @override
  String toString() {
    StringBuffer sb = new StringBuffer('{');
    sb.write("\"tabId\":$tabId");
    sb.write(",\"label\":\"$label\"");
    sb.write(",\"labelId\":\"$labelId\"");
    sb.write(",\"iconRes\":\"$iconRes\"");
    sb.write(",\"iconUrl\":\"$iconUrl\"");
    sb.write(",\"url\":\"$url\"");
    sb.write('}');
    return sb.toString();
  }
}
 ```