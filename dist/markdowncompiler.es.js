function e(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function n(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function t(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var o=/^```[\s\S]*$/,i=/^```$/,s=/^#{1,6} .*$/,a=/[&<>"]/,u=/[&<>"]/g;function l(e){switch(e){case 9:case 32:return!0}return!1}var c={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"};function h(e){return c[e]}var k=function(){function n(){e(this,n)}return t(n,null,[{key:"token2Markdown",value:function(e){return"```"+e.info+"\n"+e.content+"\n```"}},{key:"token2Html",value:function(e){return"<pre><code>"+(n=e.content,(a.test(n)?n.replace(u,h):n)+"</code></pre>\n");var n}},{key:"fence",value:function(e,n,t){var r=e.getLinesContent(n);if(!o.test(r))return!1;var s=n+1,a=r.split("```")[1];for(e.beginMarks[s],e.endMarks[s],s=n+1;s<t&&!i.test(e.getLinesContent(s));s++);var u=e.getLinesContent(n+1,s-1),l=e.push("fence","code",0);return l.content=u,l.info=a,s+1}}]),n}(),f=function(){function n(){e(this,n)}return t(n,null,[{key:"token2Markdown_open",value:function(e){var n="######";return n=n.substr(0,Number(e.tag.split("h")[1]))+" "}},{key:"token2Markdown_close",value:function(e){return""}},{key:"token2Html_open",value:function(e){return"<".concat(e.tag,">")}},{key:"token2Html_close",value:function(e){return"</".concat(e.tag,">")}},{key:"heading",value:function(e,n,t){var r=e.getLinesContent(n);if(!s.test(r))return!1;var o="h"+r.split(" ")[0].length;e.push("heading_open",o,1);return e.push("inline","text",0).content=r.split(" ")[1],e.push("heading_close",o,-1),n+1}}]),n}(),p=function(){function n(){e(this,n)}return t(n,null,[{key:"token2Markdown_open",value:function(e){return""}},{key:"token2Markdown_close",value:function(e){return""}},{key:"token2Html_open",value:function(e){return"<p>"}},{key:"token2Html_close",value:function(e){return"</p>"}},{key:"paragraph",value:function(e,n,t){e.push("paragraph_open","p",1);return e.push("inline","text",0).content=e.getLinesContent(n),e.push("paragraph_close","p",-1),n+1}}]),n}(),g=function(){function n(){e(this,n),this.rules=[k.fence,f.heading,p.paragraph]}return t(n,[{key:"getRules",value:function(){return this.rules}}]),n}(),v=function n(t,r,o){e(this,n),this.type=t,this.tag=r,this.nesting=o},d=function(){function n(t){var o=this;e(this,n),r(this,"push",(function(e,n,t){var r=new v(e,n,t);return t<0&&o.level--,r.level=o.level,t>0&&o.level++,o.tokens.push(r),r})),r(this,"addTokenByProxy",(function(e,n,t,r){})),r(this,"deleteTokenByProxy",(function(e){})),r(this,"changeTokenByProxy",(function(e,n){})),this.src=t,this.beginMarks=[],this.endMarks=[],this.offset=[],this.lineMax=0,this.tokens=[],this.level=0,this.tokensProxy=null,this.initState()}return t(n,[{key:"initState",value:function(){var e,n,t,r,o=this.src.length,i=!1,s=this.src;for(e=n=t=0;n<=o;n++){if(r=s.charCodeAt(n),!i){if(l(r)){r==CHAR_SPACE?t++:r===CHAR_TAB&&(t+=4-t%4);continue}i=!0}10!==r&&n!==o-1||(10!==r&&n++,this.beginMarks.push(e),this.endMarks.push(n),this.offset.push(t),i=!1,t=0,e=n+1)}this.lineMax=this.beginMarks.length}},{key:"getLinesContent",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e,t=this.beginMarks[e],r=this.endMarks[n],o=this.src.substr(t,r-t);return o}}]),n}(),y=function(){function n(){var t=this;e(this,n),r(this,"addProxy2Tokens",(function(){t.blockState.tokensProxy=new Proxy(t.blockState.tokens,{set:function(e,n,t){return console.log("tokens被修改"),Reflect.set(e,n,t)}})}))}return t(n,[{key:"markdown2Tokens",value:function(e){for(var n=new d(e),t=(new g).getRules(),r=0;r<n.lineMax;)for(var o=0;o<t.length;o++){var i=t[o](n,r,n.lineMax);if(i){r=i;break}}return n.tokensProxy=new Proxy(n.tokens,{set:function(e,n,t){return console.log(token被修改),Reflect.set(e,n,t)}}),n.tokens}}]),n}(),_=function(){function n(){e(this,n)}return t(n,null,[{key:"token2Markdown",value:function(e){return e.content}},{key:"token2Html",value:function(e){return e.content}}]),n}(),m=function n(){var t=this,o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{WYSIWYG:!0,highlight:highlight};e(this,n),r(this,"tokens2Html",(function(e){var n="";return e.forEach((function(e){switch(e.type){case"fence":n+=t.rules.fence(e);break;case"heading_open":n+=t.rules.heading_open(e);break;case"heading_close":n+=t.rules.heading_close(e);break;case"paragraph_open":n+=t.rules.paragraph_open(e);break;case"paragraph_close":n+=t.rules.paragraph_close(e);break;case"inline":n+=t.rules.inline(e)}})),n})),this.WYSIWYG=o.WYSIWYG,this.defaultRules={fence:k.token2Html,heading_open:f.token2Html_open,heading_close:f.token2Html_close,paragraph_open:p.token2Html_open,paragraph_close:p.token2Markdown_close,inline:_.token2Html},this.rules=this.defaultRules},b=function(){function n(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{WYSIWYG:!0,highlight:function(e,n){return e}};e(this,n),this.parserInstance=new y,this.renderInstance=new m({WYSIWYG:t.WYSIWYG,highlight:t.highlight}),this.markdown2Tokens=this.parserInstance.markdown2Tokens,this.tokens2Html=this.renderInstance.tokens2Html,this.parser=this.parserInstance.markdown2Tokens}return t(n,[{key:"render",value:function(e){return"string"==typeof e?this.tokens2Html(this.markdown2Tokens(e)):e instanceof Array&&this.tokens2Html(e)}}]),n}();export{b as default};
