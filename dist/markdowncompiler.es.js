function e(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function n(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function t(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var s=/^```[\s\S]*$/,i=/^```$/,a=/^#{1,6} .*$/,o=/[&<>"]/,u=/[&<>"]/g,h=function(){function n(){e(this,n),this.rules=[c,l,f]}return t(n,[{key:"getRules",value:function(){return this.rules}}]),n}();function c(e,n,t){var r=e.getLinesContent(n);if(!s.test(r))return!1;var a=n+1,o=r.split("```")[1];for(e.beginMarks[a],e.endMarks[a],a=n+1;a<t&&!i.test(e.getLinesContent(a));a++);return content=e.getLinesContent(n+1,a-1),token=e.push("fence","code",0),token.content=content,token.info=o,a+1}function l(e,n,t){var r=e.getLinesContent(n);if(!a.test(r))return!1;var s="h"+r.split(" ")[0].length;e.push("heading_open",s,1);return e.push("inline","text",0).content=r.split(" ")[1],e.push("heading_close",s,-1),n+1}function f(e,n,t){return token=e.push("paragraph_open","p",1),token=e.push("inline","text",0),token.content=e.getLinesContent(n),token=e.push("paragraph_close","p",-1),n+1}function p(e){switch(e){case 9:case 32:return!0}return!1}var k={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"};function g(e){return k[e]}var v=function n(t,r,s){e(this,n),this.type=t,this.tag=r,this.nesting=s},d=function(){function n(t){var s=this;e(this,n),r(this,"push",(function(e,n,t){var r=new v(e,n,t);return t<0&&s.level--,r.level=s.level,t>0&&s.level++,s.tokens.push(r),r})),r(this,"addTokenByProxy",(function(e,n,t,r){})),r(this,"deleteTokenByProxy",(function(e){})),r(this,"changeTokenByProxy",(function(e,n){})),this.src=t,this.beginMarks=[],this.endMarks=[],this.offset=[],this.lineMax=0,this.tokens=[],this.level=0,this.tokensProxy=null,this.initState()}return t(n,[{key:"initState",value:function(){var e,n,t,r,s=this.src.length,i=!1,a=this.src;for(e=n=t=0;n<=s;n++){if(r=a.charCodeAt(n),!i){if(p(r)){r==CHAR_SPACE?t++:r===CHAR_TAB&&(t+=4-t%4);continue}i=!0}10!==r&&n!==s-1||(10!==r&&n++,this.beginMarks.push(e),this.endMarks.push(n),this.offset.push(t),i=!1,t=0,e=n+1)}this.lineMax=this.beginMarks.length}},{key:"getLinesContent",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e,t=this.beginMarks[e],r=this.endMarks[n],s=this.src.substr(t,r-t);return s}}]),n}(),y=function(){function n(){e(this,n)}return t(n,[{key:"markdown2Tokens",value:function(e){for(var n=new d(e),t=(new h).getRules(),r=0;r<n.lineMax;)for(var s=0;s<t.length;s++){var i=t[s](n,r,n.lineMax);if(i){r=i;break}}return n.tokensProxy=new Proxy(n.tokens,{set:function(e,n,t){return console.log(111),Reflect.set(e,n,t)}}),n.tokens}}]),n}(),_=function(){function n(){var t=this;e(this,n),r(this,"defaultRules",{fence:this.fence,heading_open:this.heading_open,heading_close:this.heading_close,paragraph_open:this.paragraph_open,paragraph_close:this.paragraph_close,inline:this.inline}),r(this,"rules",this.defaultRules),r(this,"tokens2Html",(function(e){var n="";return e.forEach((function(e){switch(e.type){case"fence":n+=t.rules.fence(e);break;case"heading_open":n+=t.rules.heading_open(e);break;case"heading_close":n+=t.rules.heading_close(e);break;case"paragraph_open":n+=t.rules.paragraph_open(e);break;case"paragraph_close":n+=t.rules.paragraph_close(e);break;case"inline":n+=t.rules.inline(e)}})),n}))}return t(n,[{key:"fence",value:function(e){return"<pre><code>"+(n=e.content,(o.test(n)?n.replace(u,g):n)+"</code></pre>\n");var n}},{key:"heading_open",value:function(e){return"<"+e.tag+">"}},{key:"heading_close",value:function(e){return"</"+e.tag+">"}},{key:"paragraph_open",value:function(e){return"<p>"}},{key:"paragraph_close",value:function(e){return"</p>"}},{key:"inline",value:function(e){return e.content}}]),n}(),b=function(){function n(){e(this,n),this.parserInstance=new y,this.renderInstance=new _,this.markdown2Tokens=this.parserInstance.markdown2Tokens,this.tokens2Html=this.renderInstance.tokens2Html,this.parser=this.parserInstance.markdown2Tokens}return t(n,[{key:"render",value:function(e){return"string"==typeof e?this.tokens2Html(this.markdown2Tokens(e)):e instanceof Array&&this.tokens2Html(e)}}]),n}();export{b as default};