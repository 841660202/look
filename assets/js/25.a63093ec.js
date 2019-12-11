(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{216:function(t,s,n){"use strict";n.r(s);var a=n(0),e=Object(a.a)({},(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[n("h2",{attrs:{id:"card"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#card"}},[t._v("#")]),t._v(" Card")]),t._v(" "),n("div",{staticClass:"language-dart extra-class"},[n("pre",{pre:!0,attrs:{class:"language-dart"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Copyright 2015 The Chromium Authors. All rights reserved.")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Use of this source code is governed by a BSD-style license that can be")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// found in the LICENSE file.")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'package:flutter/widgets.dart'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'card_theme.dart'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'material.dart'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'theme.dart'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// A material design card. A card has slightly rounded corners and a shadow.")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("///")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// A card is a sheet of [Material] used to represent some related information,")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// for example an album, a geographical location, a meal, contact details, etc.")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("///")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// This is what it looks like when run:")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("///")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// ![A card with a slight shadow, consisting of two rows, one with an icon and")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// some text describing a musical, and the other with buttons for buying")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// tickets or listening to the show.](https://flutter.github.io/assets-for-api-docs/assets/material/card.png)")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("///")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// {@tool snippet --template=stateless_widget_scaffold}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("///")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// This sample shows creation of a [Card] widget that shows album information")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// and two actions.")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("///")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// ```dart")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// Widget build(BuildContext context) {")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("///   return Center(")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("///     child: Card(")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("///       child: Column(")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("///         mainAxisSize: MainAxisSize.min,")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("///         children: <Widget>[")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("///           const ListTile(")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("///             leading: Icon(Icons.album),")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("///             title: Text('The Enchanted Nightingale'),")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("///             subtitle: Text('Music by Julie Gable. Lyrics by Sidney Stein.'),")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("///           ),")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("///           ButtonTheme.bar( // make buttons use the appropriate styles for cards")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("///             child: ButtonBar(")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("///               children: <Widget>[")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("///                 FlatButton(")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("///                   child: const Text('BUY TICKETS'),")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("///                   onPressed: () { /* ... */ },")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("///                 ),")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("///                 FlatButton(")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("///                   child: const Text('LISTEN'),")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("///                   onPressed: () { /* ... */ },")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("///                 ),")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("///               ],")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("///             ),")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("///           ),")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("///         ],")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("///       ),")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("///     ),")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("///   );")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// }")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// ```")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// {@end-tool}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("///")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// Sometimes the primary action area of a card is the card itself. Cards can be")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// one large touch target that shows a detail screen when tapped.")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("///")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// {@tool snippet --template=stateless_widget_scaffold}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("///")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// This sample shows creation of a [Card] widget that can be tapped. When")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/// tapped this [Card]\'s [InkWell] displays an "ink splash" that fills the')]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// entire card.")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("///")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// ```dart")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// Widget build(BuildContext context) {")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("///   return Center(")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("///     child: Card(")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("///       child: InkWell(")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("///         splashColor: Colors.blue.withAlpha(30),")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("///         onTap: () {")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("///           print('Card tapped.');")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("///         },")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("///         child: Container(")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("///           width: 300,")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("///           height: 100,")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("///           child: Text('A card that can be tapped'),")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("///         ),")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("///       ),")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("///     ),")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("///   );")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// }")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// ```")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("///")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// {@end-tool}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("///")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// See also:")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("///")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("///  * [ListTile], to display icons and text in a card.")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("///  * [ButtonBar], to display buttons at the bottom of a card. Typically these")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("///    would be styled using a [ButtonTheme] created with [new ButtonTheme.bar].")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("///  * [showDialog], to display a modal card.")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("///  * <https://material.io/design/components/cards.html>")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Card")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("StatelessWidget")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// Creates a material design card.")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("///")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// The [elevation] must be null or non-negative. The [borderOnForeground]")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// must not be null.")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Card")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    Key key"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("color"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("elevation"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("shape"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("borderOnForeground "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("margin"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("clipBehavior"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("child"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("semanticContainer "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("assert")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("elevation "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" elevation "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n       "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("assert")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("borderOnForeground "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n       "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("super")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("key"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" key"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// The card's background color.")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("///")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// Defines the card's [Material.color].")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("///")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// If this property is null then [ThemeData.cardTheme.color] is used,")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// if that's null then [ThemeData.cardColor] is used.")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" Color color"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// The z-coordinate at which to place this card. This controls the size of")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// the shadow below the card.")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("///")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// Defines the card's [Material.elevation].")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("///")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// If this property is null then [ThemeData.cardTheme.elevation] is used,")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// if that's null, the default value is 1.0.")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" double elevation"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// The shape of the card's [Material].")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("///")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// Defines the card's [Material.shape].")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("///")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// If this property is null then [ThemeData.cardTheme.shape] is used.")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// If that's null then the shape will be a [RoundedRectangleBorder] with a")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// circular corner radius of 4.0.")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" ShapeBorder shape"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// Whether to paint the [shape] border in front of the [child].")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("///")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// The default value is true.")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// If false, the border will be painted behind the [child].")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" bool borderOnForeground"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// {@macro flutter.widgets.Clip}")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// If this property is null then [ThemeData.cardTheme.clipBehavior] is used.")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// If that's null then the behavior will be [Clip.none].")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" Clip clipBehavior"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// The empty space that surrounds the card.")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("///")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// Defines the card's outer [Container.margin].")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("///")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// If this property is null then [ThemeData.cardTheme.margin] is used,")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// if that's null, the default margin is 4.0 logical pixels on all sides:")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// `EdgeInsets.all(4.0)`.")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" EdgeInsetsGeometry margin"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// Whether this widget represents a single semantic container, or if false")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// a collection of individual semantic nodes.")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("///")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// Defaults to true.")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("///")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// Setting this flag to true will attempt to merge all child semantics into")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// this node. Setting this flag to false will force all child semantic nodes")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// to be explicit.")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("///")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// This flag should be false if the card contains multiple different types")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// of content.")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" bool semanticContainer"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// The widget below this widget in the tree.")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("///")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// {@macro flutter.widgets.child}")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" Widget child"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" double _defaultElevation "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" Clip _defaultClipBehavior "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Clip"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("none"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),n("span",{pre:!0,attrs:{class:"token metadata symbol"}},[t._v("@override")]),t._v("\n  Widget "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("build")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("BuildContext context"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" CardTheme cardTheme "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" CardTheme"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("of")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("context"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Semantics")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n      container"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" semanticContainer"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      child"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Container")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        margin"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" margin "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" cardTheme"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("margin "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" EdgeInsets"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("all")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("4.0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        child"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Material")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n          type"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" MaterialType"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("card"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          color"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" color "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" cardTheme"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("color "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" Theme"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("of")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("context"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cardColor"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          elevation"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" elevation "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" cardTheme"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("elevation "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" _defaultElevation"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          shape"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" shape "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" cardTheme"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("shape "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("RoundedRectangleBorder")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n            borderRadius"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" BorderRadius"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("all")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Radius"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("circular")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("4.0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          borderOnForeground"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" borderOnForeground"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          clipBehavior"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" clipBehavior "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" cardTheme"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("clipBehavior "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" _defaultClipBehavior"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          child"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Semantics")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n            explicitChildNodes"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("semanticContainer"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            child"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" child"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n\n\n")])])])])}],!1,null,null,null);s.default=e.exports}}]);