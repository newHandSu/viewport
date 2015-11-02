# viewport
通常在移动端项目布局的时候，都会设置meta，有不同的方式达到期望的效果。
我平时用的比较多的两种方式是：

1、定义设备viewport按设计稿宽度来进行缩放，这种方式的好处就是可以完全按照设计稿来进行1:1布局，方便切图，坏处就是对于pc这种不具备viewport缩放的设备，页面就不会进行缩放，真真的1:1输出，所以你如果以640的宽度来布局的话，那么pc上只会显示640的区域，并不会拉到满屏。当然如果你有特殊需求必须兼容pc的话，可以考虑css media screen，单独针对大屏处理一套css，那么也能完美布局。

2、定义设备viewport按照设备宽度device-width来进行缩放。这种方式的好处就是可以很好的做到自适应效果，但是坏处就是不能直接按照设计稿1:1布局，基本边距字体得看感觉，对页面要求不高（不要求精确到1px）的网站可以选用这种布局。

第一种方式，我经常会使用一个viewport.js来达到效果，但其实不用js直接写meta也是没有问题的。
//<meta name="viewport" content="width=640, target-densitydpi=device-dpi, user-scalable=no">
其中640为设计稿宽度，现在比较常见的移动端设计稿宽度是640和750，可以根据情况自由选择。
由于target-densitydpi是安卓的私有属性，所以如果在ios端或者pc上可能会报个错，但是基本不影响使用，你如果有代码洁癖，可以用我的viewport.js来进行分别输出，当然viewport得放在head中。
具体的预览效果可以参考我的网站 http://my.bobo.so/Hair/index.html#member/o-xFkv61XF0xIdsRD6FYLjaR8cPg

第二种方式，兼容性就比较好一点，并不需要用到js输出。
//<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
这种方式出现在我最新的项目中，目前并没有上线，所以没有预览入口。


