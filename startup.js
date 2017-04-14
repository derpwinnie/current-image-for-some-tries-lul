(function(){
	var ops = {
		title: "Прапор і Скороп",
		src: "https://cdn.rawgit.com/NomoX/pxls.space/master/template/current.png", 
		x: 0, 
		y: 1600,
		ignore: [], 
		dir: 2,
		pixelize: true
	}
	fetch('https://crossorigin.me/https://registry.npmjs.org/pxls.space/').then(r => r.json()).then(r => r['dist-tags'].latest).then(v => { var s=document.createElement('script');s.src='https://unpkg.com/pxls.space@'+v+'/pxlsbot.utils.min.js',s.id='botUtils',s.type='text/javascript',s.onload=function() {var bs=document.createElement('script');bs.src='https://unpkg.com/pxls.space@'+v+'/pxlsbot.min.js',bs.type='text/javascript',bs.onload = function() {var b = new Notabot(ops);b.start()},document.head.appendChild(bs)},document.head.appendChild(s);})
})();
