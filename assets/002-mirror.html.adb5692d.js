import{_ as n,o as s,c as e,e as a}from"./app.fc1c3de5.js";const i={},t=a(`<h2 id="\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u547D\u4EE4" aria-hidden="true">#</a> \u547D\u4EE4</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">mkdir</span> -p /etc/docker
<span class="token function">sudo</span> <span class="token function">tee</span> /etc/docker/daemon.json <span class="token operator">&lt;&lt;-</span><span class="token string">&#39;EOF&#39;
{
  &quot;registry-mirrors&quot;: [
    &quot;https://registry.docker-cn.com&quot;,
    &quot;http://hub-mirror.c.163.com&quot;,
    &quot;https://docker.mirrors.ustc.edu.cn&quot;
  ]
}
EOF</span>
<span class="token function">sudo</span> systemctl daemon-reload
<span class="token function">sudo</span> systemctl restart <span class="token function">docker</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),r=[t];function c(o,d){return s(),e("div",null,r)}var u=n(i,[["render",c],["__file","002-mirror.html.vue"]]);export{u as default};
