import{_ as s,c as n,o as a,a as l}from"./app.2cf86ac7.js";const d=JSON.parse('{"title":"1 \u62C9\u53D6Nginx\u8FDB\u884C","description":"","frontmatter":{},"headers":[{"level":2,"title":"1 \u62C9\u53D6Nginx\u8FDB\u884C","slug":"_1-\u62C9\u53D6nginx\u8FDB\u884C"},{"level":2,"title":"2 \u51C6\u5907\u5DE5\u4F5C","slug":"_2-\u51C6\u5907\u5DE5\u4F5C"},{"level":2,"title":"3 \u90E8\u7F72\u5BB9\u5668","slug":"_3-\u90E8\u7F72\u5BB9\u5668"}],"relativePath":"devops/nginx/install-docker.md"}'),p={name:"devops/nginx/install-docker.md"},e=l(`<h2 id="_1-\u62C9\u53D6nginx\u8FDB\u884C" tabindex="-1">1 \u62C9\u53D6Nginx\u8FDB\u884C <a class="header-anchor" href="#_1-\u62C9\u53D6nginx\u8FDB\u884C" aria-hidden="true">#</a></h2><div class="language-shell"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">docker pull nginx:latest </span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">\u62C9\u53D6\u5B8C\u6210\u67E5\u770B\uFF1Adocker images</span></span>
<span class="line"></span></code></pre></div><h2 id="_2-\u51C6\u5907\u5DE5\u4F5C" tabindex="-1">2 \u51C6\u5907\u5DE5\u4F5C <a class="header-anchor" href="#_2-\u51C6\u5907\u5DE5\u4F5C" aria-hidden="true">#</a></h2><p>\u5148\u5728\u4E3B\u673A\u521B\u5EFA\u5DE5\u4F5C\u6587\u4EF6\u5939\uFF0C\u4E3A\u4E86\u6302\u8F7D\u914D\u7F6E\u548C\u9759\u6001\u6587\u4EF6\u7684\u8BBF\u95EE\u4F7F\u7528</p><div class="language-shell"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">#\u542F\u52A8\u4E00\u4E2A\u5BB9\u5668  </span></span>
<span class="line"><span style="color:#A6ACCD;"> docker run -d --name nginx nginx </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># \u67E5\u770B \u5BB9\u5668 \u83B7\u53D6\u5BB9\u5668ID \u6216\u76F4\u63A5\u4F7F\u7528\u540D\u5B57  </span></span>
<span class="line"><span style="color:#A6ACCD;"> docker container ls </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># \u5728\u5F53\u524D\u76EE\u5F55\u4E0B\u521B\u5EFA\u76EE\u5F55\uFF1Aconf  </span></span>
<span class="line"><span style="color:#A6ACCD;"> mkdir conf </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># \u62F7\u8D1D\u5BB9\u5668\u5185 Nginx \u9ED8\u8BA4\u914D\u7F6E\u6587\u4EF6\u5230\u672C\u5730\u5F53\u524D\u76EE\u5F55\u4E0B\u7684 conf \u76EE\u5F55\uFF08$PWD \u5F53\u524D\u5168\u8DEF\u5F84\uFF09  </span></span>
<span class="line"><span style="color:#A6ACCD;"> docker cp nginx:/etc/nginx/nginx.conf </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">PWD/conf </span></span>
<span class="line"><span style="color:#A6ACCD;"> docker cp nginx:/etc/nginx/conf.d </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">PWD/conf </span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># \u505C\u6B62\u5BB9\u5668  </span></span>
<span class="line"><span style="color:#A6ACCD;">docker container stop nginx </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># \u5220\u9664\u5BB9\u5668  </span></span>
<span class="line"><span style="color:#A6ACCD;">docker container rm nginx </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># \u5728\u5F53\u524D\u76EE\u5F55\u4E0B\u521B\u5EFA\u76EE\u5F55\uFF1Ahtml \u653E\u9759\u6001\u6587\u4EF6  </span></span>
<span class="line"><span style="color:#A6ACCD;">mkdir html</span></span>
<span class="line"></span></code></pre></div><h2 id="_3-\u90E8\u7F72\u5BB9\u5668" tabindex="-1">3 \u90E8\u7F72\u5BB9\u5668 <a class="header-anchor" href="#_3-\u90E8\u7F72\u5BB9\u5668" aria-hidden="true">#</a></h2><div class="language-shell"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">docker run -d -p 80:80  \\</span></span>
<span class="line"><span style="color:#A6ACCD;">              -p 443:443  \\  </span></span>
<span class="line"><span style="color:#A6ACCD;">--name nginxweb \\  </span></span>
<span class="line"><span style="color:#A6ACCD;">--link answer-server:answerserver \\  </span></span>
<span class="line"><span style="color:#A6ACCD;">-v /usr/local/docker/nginx/html:/usr/share/nginx/html \\  </span></span>
<span class="line"><span style="color:#A6ACCD;">-v /usr/local/docker/nginx/conf/nginx.conf:/etc/nginx/nginx.conf \\  </span></span>
<span class="line"><span style="color:#A6ACCD;">-v /usr/local/docker/nginx/conf/conf.d:/etc/nginx/conf.d \\  </span></span>
<span class="line"><span style="color:#A6ACCD;">-v /usr/local/docker/nginx/logs:/var/log/nginx \\  </span></span>
<span class="line"><span style="color:#A6ACCD;">nginx </span></span>
<span class="line"></span></code></pre></div><blockquote><p>-d <em># \u8868\u793A\u5728\u4E00\u76F4\u5728\u540E\u53F0\u8FD0\u884C\u5BB9\u5668</em> -p 80:80 <em># \u5BF9\u7AEF\u53E3\u8FDB\u884C\u6620\u5C04\uFF0C\u5C06\u672C\u57308081\u7AEF\u53E3\u6620\u5C04\u5230\u5BB9\u5668\u5185\u90E8\u768480\u7AEF\u53E3</em> --name <em># \u8BBE\u7F6E\u521B\u5EFA\u7684\u5BB9\u5668\u540D\u79F0</em> -v <em># \u5C06\u672C\u5730\u76EE\u5F55(\u6587\u4EF6)\u6302\u8F7D\u5230\u5BB9\u5668\u6307\u5B9A\u76EE\u5F55\uFF1B</em> --link answer-server:answerserver \u8FD9\u8BA1\u5212\u662F\u6307\u9700\u8981\u8F6C\u5411\u672C\u673Adocker\u5BB9\u5668\u7684\u522B\u540D</p></blockquote><p>\u4EE5\u4E0B\u662F\u57FA\u672Chttps\u7684\u8BBF\u95EE\u914D\u7F6E</p><div class="language-shell"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">server </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    listen 443 ssl</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    server_name yuming.cpm</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">#\u4F60\u7684\u7533\u8BF7\u8FC7\u8BC1\u4E66\u7684\u57DF\u540D</span></span>
<span class="line"><span style="color:#A6ACCD;">    ssl_certificate     /etc/nginx/conf.d/certs/xxxx.pem</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    ssl_certificate_key /etc/nginx/conf.d/certs/xxxx.key</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    ssl_session_timeout 5m</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    ssl_protocols TLSv1 TLSv1.1 TLSv1.2</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    ssl_ciphers ALL:</span><span style="color:#89DDFF;">!</span><span style="color:#A6ACCD;">ADH:</span><span style="color:#89DDFF;">!</span><span style="color:#A6ACCD;">EXPORT56:RC4+RSA:+HIGH:+MEDIUM:+LOW:+SSLv2:+EXP</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    ssl_prefer_server_ciphers on</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    location / </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        root  /usr/share/nginx/html/admin</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        index  index.html index.htm</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    location /admin </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#82AAFF;">alias</span><span style="color:#A6ACCD;">   /usr/share/nginx/html/admin</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        index  index.html index.htm</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span></span>
<span class="line"><span style="color:#A6ACCD;">    location /s </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	proxy_pass http://mallservertest:8080/</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div>`,10),o=[e];function c(t,r,i,D,A,y){return a(),n("div",null,o)}var x=s(p,[["render",c]]);export{d as __pageData,x as default};
