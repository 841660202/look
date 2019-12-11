(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{168:function(e,t,r){e.exports=r.p+"assets/img/badge.d985d869.png"},169:function(e,t,r){e.exports=r.p+"assets/img/dart-devTools.357008ac.png"},170:function(e,t,r){e.exports=r.p+"assets/img/a-db-view.d53dbf54.jpg"},171:function(e,t,r){e.exports=r.p+"assets/img/db-view.d2b6c1c7.png"},172:function(e,t,r){e.exports=r.p+"assets/img/intro-app.e6675e28.gif"},219:function(e,t,r){"use strict";r.r(t);var a=[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"flutter-应用内部升级"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#flutter-应用内部升级"}},[this._v("#")]),this._v(" flutter 应用内部升级")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"项目参考"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#项目参考"}},[this._v("#")]),this._v(" 项目参考")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"插件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#插件"}},[this._v("#")]),this._v(" 插件")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"sqlite"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sqlite"}},[this._v("#")]),this._v(" sqlite")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"原有表，后来表结构发生改动怎么办？"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#原有表，后来表结构发生改动怎么办？"}},[this._v("#")]),this._v(" 原有表，后来表结构发生改动怎么办？")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"如何查看db数据，如果以后用户说出问题了，可以把db上传，查看"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#如何查看db数据，如果以后用户说出问题了，可以把db上传，查看"}},[this._v("#")]),this._v(" 如何查看db数据，如果以后用户说出问题了，可以把db上传，查看")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("img",{attrs:{src:r(170),alt:"avatar"}}),this._v(" "),t("img",{attrs:{src:r(171),alt:"avatar"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"text"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#text"}},[this._v("#")]),this._v(" Text")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"swiper"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#swiper"}},[this._v("#")]),this._v(" swiper")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ol",{attrs:{start:"3"}},[t("li",[this._v("Visibility\n当你看完Flutter Widge文档的时候，我们突然发现一个略显尴尬的问题：组件是否显示怎么控制？貌似所有的组件中都没有这个属性！这不坑了，咋办？\n目前看方法无非如下几个：\n3.1 删除法\n核心将该真实widget或者widget树从renderTree中移除。\n具体到实践级别主要分为两个：")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"视觉差"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#视觉差"}},[this._v("#")]),this._v(" 视觉差")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"badge"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#badge"}},[this._v("#")]),this._v(" badge")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("img",{attrs:{src:r(172),alt:"avatar"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"签名"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#签名"}},[this._v("#")]),this._v(" 签名")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("keytool -genkey -alias **** -keyalg RSA -validity 100000 -keystore ****.jks\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"推送"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#推送"}},[this._v("#")]),this._v(" 推送")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("keytool -list  -v -keystore ****.jks -storepass 密码\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"配置签名"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置签名"}},[this._v("#")]),this._v(" 配置签名")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("storePassword=密码\nkeyPassword=密码\nkeyAlias=key\nstoreFile=/Users/chenhailong/development/my_flutter/key.jks\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("// 发布签名\ndef keystorePropertiesFile = rootProject.file(\"key.properties\")\ndef keystoreProperties = new Properties()\nkeystoreProperties.load(new FileInputStream(keystorePropertiesFile))\ndefaultConfig {\n    // TODO: Specify your own unique Application ID (https://developer.android.com/studio/build/application-id.html).\n    applicationId \"com.example.update_in_app\"\n    minSdkVersion 16\n    targetSdkVersion 28\n    versionCode flutterVersionCode.toInteger()\n    versionName flutterVersionName\n    testInstrumentationRunner \"android.support.test.runner.AndroidJUnitRunner\"\n}\n// 新增签名配置\nsigningConfigs {\n    release {\n        keyAlias keystoreProperties['keyAlias']\n        keyPassword keystoreProperties['keyPassword']\n        storeFile file(keystoreProperties['storeFile'])\n        storePassword keystoreProperties['storePassword']\n    }\n}\n// 修改签名配置\nbuildTypes {\n    release {\n        // TODO: Add your own signing config for the release build.\n        // Signing with the debug keys for now, so `flutter run --release` works.\n        // signingConfig signingConfigs.debug\n        signingConfig signingConfigs.release\n    }\n}\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"打包"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#打包"}},[this._v("#")]),this._v(" 打包")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"dart-devtools"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dart-devtools"}},[this._v("#")]),this._v(" Dart DevTools")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"对话框"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#对话框"}},[this._v("#")]),this._v(" 对话框")])}],s=r(0),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[e._m(0),e._v(" "),e._m(1),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/hehuapei/flutter-demo/tree/master/app_update_demo",target:"_blank",rel:"noopener noreferrer"}},[e._v("app-update"),a("OutboundLink")],1),e._v(" "),a("a",{attrs:{href:"https://github.com/841660202/flutter-demo",target:"_blank",rel:"noopener noreferrer"}},[e._v("app-update fork"),a("OutboundLink")],1)]),e._v(" "),e._m(2),e._v(" "),a("p",[e._v("cupertino_icons: ^0.1.2")]),e._v(" "),a("p",[e._v("permission_handler: ^3.0.1")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://pub.dartlang.org/packages/permission_handler#-installing-tab-",target:"_blank",rel:"noopener noreferrer"}},[e._v("# permission_handler"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("flutter_downloader: ^1.1.3")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://pub.dartlang.org/packages/flutter_downloader",target:"_blank",rel:"noopener noreferrer"}},[e._v("# flutter_downloader "),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("install_plugin: ^2.0.0")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://pub.dartlang.org/packages/install_plugin",target:"_blank",rel:"noopener noreferrer"}},[e._v("# install_plugin"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("package_info: ^0.4.0+3]")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://pub.dev/packages/package_info",target:"_blank",rel:"noopener noreferrer"}},[e._v("# package_info"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("path_provider: ^0.4.0")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://pub.dev/packages/path_provider",target:"_blank",rel:"noopener noreferrer"}},[e._v("# path_provider"),a("OutboundLink")],1)]),e._v(" "),e._m(3),e._v(" "),e._m(4),e._v(" "),a("p",[e._v("原来表没有content字段，后来添加该字段，如果要先查询，数据库没有该字段，会出异常")]),e._v(" "),e._m(5),e._v(" "),e._m(6),e._v(" "),e._m(7),e._v(" "),a("p",[a("a",{attrs:{href:"https://www.jianshu.com/p/4bbda37daabf",target:"_blank",rel:"noopener noreferrer"}},[e._v("Text解读"),a("OutboundLink")],1),e._v(" "),a("a",{attrs:{href:"https://www.jianshu.com/p/383b772049c0",target:"_blank",rel:"noopener noreferrer"}},[e._v("Container解读"),a("OutboundLink")],1),e._v(" "),a("a",{attrs:{href:"https://www.jianshu.com/p/5d44d26d3556",target:"_blank",rel:"noopener noreferrer"}},[e._v("TextField解读"),a("OutboundLink")],1),e._v(" "),a("a",{attrs:{href:"https://www.jianshu.com/p/c80c2b70ee09",target:"_blank",rel:"noopener noreferrer"}},[e._v("listTile解读"),a("OutboundLink")],1)]),e._v(" "),e._m(8),e._v(" "),a("p",[a("a",{attrs:{href:"https://blog.csdn.net/ddwhan0123/article/details/89470221",target:"_blank",rel:"noopener noreferrer"}},[e._v("定制化demo"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("4.2 App生命周期\n需要指出的是如果想要知道App的生命周期,那么需要通过WidgetsBindingObserver的didChangeAppLifecycleState 来获取。通过该接口可以获取是生命周期在AppLifecycleState类中。常用状态包含如下几个：")]),e._v(" "),a("p",[e._v("名称\n状态")]),e._v(" "),a("p",[e._v("resumed\n可见并能相应用户的输入")]),e._v(" "),a("p",[e._v("inactive\n处在并不活动状态，无法处理用户相应")]),e._v(" "),a("p",[e._v("paused\n不可见并不能相应用户的输入，但是在后台继续活动中")]),e._v(" "),a("p",[e._v("一个实际场景中的例子：\n在不考虑suspending的情况下：从后台切入前台生命周期变化如下:")]),e._v(" "),a("p",[e._v("AppLifecycleState.inactive->AppLifecycleState.resumed;")]),e._v(" "),a("p",[e._v("从前台压后台生命周期变化如下：")]),e._v(" "),a("p",[e._v("AppLifecycleState.inactive->AppLifecycleState.paused;")]),e._v(" "),e._m(9),e._v(" "),a("p",[e._v("单个组件‘隐藏’自己。在build方法中返回一个空的Container.")]),e._v(" "),a("p",[e._v("@override\nWidget build(BuildContext context) {\nreturn isVisible\n? Widget //真的Widget\n: new Container(); //空Widget 仅仅占位 并不显示\n}")]),e._v(" "),a("p",[e._v("多个child")]),e._v(" "),a("p",[e._v("在父容器的children字段的list中，删除掉对应的cell。\n3.2 Offstage\nOffstage 是一个widget。Offstage的offstage属性设置为true，那么Offstage以及他的child都将不会被绘制到界面上。\nsample code如下：\n@override\nWidget build(BuildContext context) {\nreturn new Offstage(\noffstage: !isVisible,\nchild:child);\n}")]),e._v(" "),a("p",[e._v("3.3 透明度\n设置widget的透明度，使之不可见。但是这样的方法是副作用的。因为这个对应的widget树是已经经过了完整的layout&paint过程，成本高。同时设置透明度本身也要耗费一定的计算资源，造成了二次浪费。需要注意的是即便变透明了，占据的位置还在。大家慎重选择使用。\nsample code如下：\n@override\nWidget build(BuildContext context) {\nreturn new AnimatedOpacity(\nduration: Duration(milliseconds: 10),\nopacity: isVisible ? 1.0 : 0.0,\nchild:child);\n}")]),e._v(" "),a("p",[e._v("visibility的控制还是比较麻烦的。这是Flutter设计上不符合正常习惯的一个点，需要大家重点关注。")]),e._v(" "),e._m(10),e._v(" "),a("p",[a("a",{attrs:{href:"https://www.jianshu.com/p/e6dafb114855",target:"_blank",rel:"noopener noreferrer"}},[e._v("视觉差"),a("OutboundLink")],1)]),e._v(" "),e._m(11),e._v(" "),a("p",[a("a",{attrs:{href:"https://dartlang-pub.appspot.com/packages/badges",target:"_blank",rel:"noopener noreferrer"}},[e._v("badge"),a("OutboundLink")],1),e._v(" "),a("img",{attrs:{src:r(168),alt:"avatar"}})]),e._v(" "),a("p",[a("a",{attrs:{href:"https://dartlang-pub.appspot.com/packages/intro_slider",target:"_blank",rel:"noopener noreferrer"}},[e._v("介绍页"),a("OutboundLink")],1)]),e._v(" "),e._m(12),e._v(" "),e._m(13),e._v(" "),e._m(14),e._m(15),e._v(" "),a("p",[e._v("华为push需要 SHA256证书指纹，需要用到")]),e._v(" "),e._m(16),e._m(17),e._v(" "),a("p",[e._v("1、local.properties 同级添加key.properties")]),e._v(" "),e._m(18),a("p",[e._v("2、open android/app/build.gradle")]),e._v(" "),e._m(19),e._m(20),e._v(" "),a("p",[e._v("flutter build")]),e._v(" "),e._m(21),e._v(" "),a("p",[a("a",{attrs:{href:"https://flutter.github.io/devtools/vscode",target:"_blank",rel:"noopener noreferrer"}},[e._v(" Dart DevTools"),a("OutboundLink")],1),e._v(" "),a("img",{attrs:{src:r(169),alt:"avatar"}})]),e._v(" "),e._m(22),e._v(" "),a("p",[a("a",{attrs:{href:"https://www.jianshu.com/p/4bbbb5aa855d",target:"_blank",rel:"noopener noreferrer"}},[e._v("Flutter - 自定义Dialog"),a("OutboundLink")],1)])])}),a,!1,null,null,null);t.default=n.exports}}]);