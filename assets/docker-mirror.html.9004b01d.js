import{_ as n,o as s,c as e,e as a}from"./app.f2ae7367.js";const i={},r=a(`<h2 id="docker\u955C\u50CF\u52A0\u901F" tabindex="-1"><a class="header-anchor" href="#docker\u955C\u50CF\u52A0\u901F" aria-hidden="true">#</a> docker\u955C\u50CF\u52A0\u901F</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">sudo</span> <span class="token function">mkdir</span> -p /etc/docker
$ <span class="token function">sudo</span> <span class="token function">tee</span> /etc/docker/daemon.json <span class="token operator">&lt;&lt;-</span><span class="token string">&#39;EOF&#39;
{
  &quot;registry-mirrors&quot;: [
    &quot;https://registry.docker-cn.com&quot;,
    &quot;http://hub-mirror.c.163.com&quot;,
    &quot;https://docker.mirrors.ustc.edu.cn&quot;
  ]
}
EOF</span>
$ <span class="token function">sudo</span> systemctl daemon-reload
$ <span class="token function">sudo</span> systemctl restart <span class="token function">docker</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),c=[r];function o(t,d){return s(),e("div",null,c)}var u=n(i,[["render",o],["__file","docker-mirror.html.vue"]]);export{u as default};
