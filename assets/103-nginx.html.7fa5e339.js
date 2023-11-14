import{_ as n,o as s,c as a,e}from"./app.6b9dae10.js";const i={},c=e(`<h2 id="_1-\u62C9\u53D6nginx\u8FDB\u884C" tabindex="-1"><a class="header-anchor" href="#_1-\u62C9\u53D6nginx\u8FDB\u884C" aria-hidden="true">#</a> 1 \u62C9\u53D6Nginx\u8FDB\u884C</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> pull nginx:latest 

\u62C9\u53D6\u5B8C\u6210\u67E5\u770B\uFF1Adocker images
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-\u51C6\u5907\u5DE5\u4F5C" tabindex="-1"><a class="header-anchor" href="#_2-\u51C6\u5907\u5DE5\u4F5C" aria-hidden="true">#</a> 2 \u51C6\u5907\u5DE5\u4F5C</h2><p>\u5148\u5728\u4E3B\u673A\u521B\u5EFA\u5DE5\u4F5C\u6587\u4EF6\u5939\uFF0C\u4E3A\u4E86\u6302\u8F7D\u914D\u7F6E\u548C\u9759\u6001\u6587\u4EF6\u7684\u8BBF\u95EE\u4F7F\u7528</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#\u542F\u52A8\u4E00\u4E2A\u5BB9\u5668  </span>
 <span class="token function">docker</span> run -d --name nginx nginx 
<span class="token comment"># \u67E5\u770B \u5BB9\u5668 \u83B7\u53D6\u5BB9\u5668ID \u6216\u76F4\u63A5\u4F7F\u7528\u540D\u5B57  </span>
 <span class="token function">docker</span> container <span class="token function">ls</span> 
<span class="token comment"># \u5728\u5F53\u524D\u76EE\u5F55\u4E0B\u521B\u5EFA\u76EE\u5F55\uFF1Aconf  </span>
 <span class="token function">mkdir</span> conf 
<span class="token comment"># \u62F7\u8D1D\u5BB9\u5668\u5185 Nginx \u9ED8\u8BA4\u914D\u7F6E\u6587\u4EF6\u5230\u672C\u5730\u5F53\u524D\u76EE\u5F55\u4E0B\u7684 conf \u76EE\u5F55\uFF08$PWD \u5F53\u524D\u5168\u8DEF\u5F84\uFF09  </span>
 <span class="token function">docker</span> <span class="token function">cp</span> nginx:/etc/nginx/nginx.conf <span class="token environment constant">$PWD</span>/conf 
 <span class="token function">docker</span> <span class="token function">cp</span> nginx:/etc/nginx/conf.d <span class="token environment constant">$PWD</span>/conf 

<span class="token comment"># \u505C\u6B62\u5BB9\u5668  </span>
<span class="token function">docker</span> container stop nginx 
<span class="token comment"># \u5220\u9664\u5BB9\u5668  </span>
<span class="token function">docker</span> container <span class="token function">rm</span> nginx 
<span class="token comment"># \u5728\u5F53\u524D\u76EE\u5F55\u4E0B\u521B\u5EFA\u76EE\u5F55\uFF1Ahtml \u653E\u9759\u6001\u6587\u4EF6  </span>
<span class="token function">mkdir</span> html
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-\u90E8\u7F72\u5BB9\u5668" tabindex="-1"><a class="header-anchor" href="#_3-\u90E8\u7F72\u5BB9\u5668" aria-hidden="true">#</a> 3 \u90E8\u7F72\u5BB9\u5668</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> run -d -p <span class="token number">80</span>:80  <span class="token punctuation">\\</span>
              -p <span class="token number">443</span>:443  <span class="token punctuation">\\</span>  
--name nginxweb <span class="token punctuation">\\</span>  
--link answer-server:answerserver <span class="token punctuation">\\</span>  
-v /usr/local/docker/nginx/html:/usr/share/nginx/html <span class="token punctuation">\\</span>  
-v /usr/local/docker/nginx/conf/nginx.conf:/etc/nginx/nginx.conf <span class="token punctuation">\\</span>  
-v /usr/local/docker/nginx/conf/conf.d:/etc/nginx/conf.d <span class="token punctuation">\\</span>  
-v /usr/local/docker/nginx/logs:/var/log/nginx <span class="token punctuation">\\</span>  
nginx 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u200B</p><blockquote><p>-d <em># \u8868\u793A\u5728\u4E00\u76F4\u5728\u540E\u53F0\u8FD0\u884C\u5BB9\u5668</em> -p 80:80 <em># \u5BF9\u7AEF\u53E3\u8FDB\u884C\u6620\u5C04\uFF0C\u5C06\u672C\u57308081\u7AEF\u53E3\u6620\u5C04\u5230\u5BB9\u5668\u5185\u90E8\u768480\u7AEF\u53E3</em> --name <em># \u8BBE\u7F6E\u521B\u5EFA\u7684\u5BB9\u5668\u540D\u79F0</em> -v <em># \u5C06\u672C\u5730\u76EE\u5F55(\u6587\u4EF6)\u6302\u8F7D\u5230\u5BB9\u5668\u6307\u5B9A\u76EE\u5F55\uFF1B</em> --link answer-server:answerserver \u8FD9\u8BA1\u5212\u662F\u6307\u9700\u8981\u8F6C\u5411\u672C\u673Adocker\u5BB9\u5668\u7684\u522B\u540D</p></blockquote><p>\u4EE5\u4E0B\u662F\u57FA\u672Chttps\u7684\u8BBF\u95EE\u914D\u7F6E</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>server <span class="token punctuation">{</span>
    listen <span class="token number">443</span> ssl<span class="token punctuation">;</span>
    server_name yuming.cpm<span class="token punctuation">;</span> <span class="token comment">#\u4F60\u7684\u7533\u8BF7\u8FC7\u8BC1\u4E66\u7684\u57DF\u540D</span>
    ssl_certificate     /etc/nginx/conf.d/certs/xxxx.pem<span class="token punctuation">;</span>
    ssl_certificate_key /etc/nginx/conf.d/certs/xxxx.key<span class="token punctuation">;</span>
    ssl_session_timeout 5m<span class="token punctuation">;</span>
    ssl_protocols TLSv1 TLSv1.1 TLSv1.2<span class="token punctuation">;</span>
    ssl_ciphers ALL:<span class="token operator">!</span>ADH:<span class="token operator">!</span>EXPORT56:RC4+RSA:+HIGH:+MEDIUM:+LOW:+SSLv2:+EXP<span class="token punctuation">;</span>
    ssl_prefer_server_ciphers on<span class="token punctuation">;</span>
    location / <span class="token punctuation">{</span>
        root  /usr/share/nginx/html/admin<span class="token punctuation">;</span>
        index  index.html index.htm<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    location /admin <span class="token punctuation">{</span>
        <span class="token builtin class-name">alias</span>   /usr/share/nginx/html/admin<span class="token punctuation">;</span>
        index  index.html index.htm<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
	
    location /s <span class="token punctuation">{</span>
	proxy_pass http://mallservertest:8080/<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u200B</p>`,12),l=[c];function t(o,d){return s(),a("div",null,l)}var r=n(i,[["render",t],["__file","103-nginx.html.vue"]]);export{r as default};
