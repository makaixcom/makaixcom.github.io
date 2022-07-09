import{_ as s,c as a,o as n,a as e}from"./app.2cf86ac7.js";const m=JSON.parse('{"title":"docker\u955C\u50CF\u52A0\u901F","description":"","frontmatter":{},"headers":[{"level":2,"title":"docker\u955C\u50CF\u52A0\u901F","slug":"docker\u955C\u50CF\u52A0\u901F"}],"relativePath":"devops/docker/mirror.md"}'),o={name:"devops/docker/mirror.md"},l=e(`<h2 id="docker\u955C\u50CF\u52A0\u901F" tabindex="-1">docker\u955C\u50CF\u52A0\u901F <a class="header-anchor" href="#docker\u955C\u50CF\u52A0\u901F" aria-hidden="true">#</a></h2><div class="language-shell"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">$ sudo mkdir -p /etc/docker</span></span>
<span class="line"><span style="color:#A6ACCD;">$ sudo tee /etc/docker/daemon.json </span><span style="color:#89DDFF;">&lt;&lt;</span><span style="color:#C3E88D;">-&#39;</span><span style="color:#89DDFF;font-style:italic;">EOF</span><span style="color:#C3E88D;">&#39;</span></span>
<span class="line"><span style="color:#C3E88D;">{</span></span>
<span class="line"><span style="color:#C3E88D;">  &quot;registry-mirrors&quot;: [</span></span>
<span class="line"><span style="color:#C3E88D;">    &quot;https://registry.docker-cn.com&quot;,</span></span>
<span class="line"><span style="color:#C3E88D;">    &quot;http://hub-mirror.c.163.com&quot;,</span></span>
<span class="line"><span style="color:#C3E88D;">    &quot;https://docker.mirrors.ustc.edu.cn&quot;</span></span>
<span class="line"><span style="color:#C3E88D;">  ]</span></span>
<span class="line"><span style="color:#C3E88D;">}</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">EOF</span></span>
<span class="line"><span style="color:#A6ACCD;">$ sudo systemctl daemon-reload</span></span>
<span class="line"><span style="color:#A6ACCD;">$ sudo systemctl restart docker</span></span>
<span class="line"></span></code></pre></div>`,2),t=[l];function r(p,c,d,i,_,u){return n(),a("div",null,t)}var D=s(o,[["render",r]]);export{m as __pageData,D as default};
