//设计稿的实际宽度
var designWidth = 640;
var ua = navigator.userAgent;
if (/Android (\d+\.\d+)/.test(ua)) {
	//target-densitydpi=device-dpi为安卓设备私有属性，设置成device-dpi可以防止部分低版本安卓机器自动按照分辨率缩放
	document.write('<meta name="viewport" content="width='+ designWidth +', target-densitydpi=device-dpi, user-scalable=no">');
}
else {
	document.write('<meta name="viewport" content="width='+ designWidth +', user-scalable=no">');
}