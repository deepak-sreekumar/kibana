define(function(){function t(t,n){var r=e.readFileSync(t,"utf8");r.indexOf("﻿")===0&&(r=r.substring(1)),n(r)}function n(e){return e.replace(/[\r\n]+/g," ").replace(/[\t]/g," ")}var e=require.nodeRequire("fs"),r={},i=!1,s={load:function(e,i,s,o){s(!0),t(o.baseUrl+e,function(t){r[e]=n(t)})},write:function(e,t,n,s){i||(i=!0,n("define('"+e+"-embed', function()\n{\n"+"	function embed_css(content)\n"+"	{\n"+"		var head = document.getElementsByTagName('head')[0],\n"+"		style = document.createElement('style'),\n"+"		rules = document.createTextNode(content);\n"+"		style.type = 'text/css';\n"+"		if(style.styleSheet)\n"+"			style.styleSheet.cssText = rules.nodeValue;\n"+"		else style.appendChild(rules);\n"+"			head.appendChild(style);\n"+"	}\n"+"	return embed_css;\n"+"});\n")),n("define('"+e+"!"+t+"', ['"+e+"-embed'], \n"+"function(embed)\n{\n"+"	embed(\n	'"+r[t].replace(/'/g,"\\'")+"'\n	);\n"+"	return true;\n"+"});\n")},writeFile:function(e,t,n){},onLayerEnd:function(e,t){}};return s});