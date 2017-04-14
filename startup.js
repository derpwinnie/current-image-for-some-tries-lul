(function(){
	var ops = {
		title: "Прапор і Скороп", /* title */
		src: "http://i.imgur.com/RA3SbBa.png", /* image url or Base64 */
		x: 0, /* x offset */
		y: 1600, /* y offset */
		ignore: [], /* alpha colors ex. [[255, 0, 255, 255], [0, 0, 0, 255]] */
		dir: 3, /* 0 - random (default), 1 - left-right, 2 - right-left, 3 - top-bottom, 4 - bottom-top */
		pixelize: true /* false (default) */
	}
	var s=document.createElement('script');s.src='https://unpkg.com/pxls.space@latest/pxlsbot.utils.min.js',s.id='botUtils',s.type='text/javascript',s.onload=function() {var bs=document.createElement('script');bs.src='https://unpkg.com/pxls.space@latest/pxlsbot.min.js',bs.type='text/javascript',bs.onload = function() {var b = new Notabot(ops);b.start()},document.head.appendChild(bs)},document.head.appendChild(s);
})();
