import{_ as n,o as s,c as a,e}from"./app.8fde5a02.js";const t={},i=e(`<h2 id="\u8D44\u6E90\u51C6\u5907" tabindex="-1"><a class="header-anchor" href="#\u8D44\u6E90\u51C6\u5907" aria-hidden="true">#</a> \u8D44\u6E90\u51C6\u5907</h2><p>CPU\uFF1A2\u6838 \u5185\u5B58\uFF1A4G \u786C\u76D8\uFF1A20G</p><h2 id="\u65B0\u5EFA\u6240\u9700\u76EE\u5F55" tabindex="-1"><a class="header-anchor" href="#\u65B0\u5EFA\u6240\u9700\u76EE\u5F55" aria-hidden="true">#</a> \u65B0\u5EFA\u6240\u9700\u76EE\u5F55</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>mkdir -p /opt/docker-compose/gitlab &amp;&amp; cd /opt/docker-compose/gitlab/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u62C9\u53D6\u955C\u50CF" tabindex="-1"><a class="header-anchor" href="#\u62C9\u53D6\u955C\u50CF" aria-hidden="true">#</a> \u62C9\u53D6\u955C\u50CF</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>docker pull gitlab/gitlab-ce
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u5199\u5165docker-compose\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u5199\u5165docker-compose\u6587\u4EF6" aria-hidden="true">#</a> \u5199\u5165docker-compose\u6587\u4EF6</h2><p>\u628A\u4E0B\u9762\u5185\u5BB9\u4FDD\u5B58\u6210 <code>docker-compose.yml</code> \u6587\u4EF6</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code>
<span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&#39;3.1&#39;</span>
<span class="token key atrule">services</span><span class="token punctuation">:</span> 
  <span class="token key atrule">gitlab</span><span class="token punctuation">:</span> 
    <span class="token key atrule">image</span><span class="token punctuation">:</span> <span class="token string">&#39;gitlab/gitlab-ce:latest&#39;</span>
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> gitlab
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
    <span class="token key atrule">environment</span><span class="token punctuation">:</span> 
      <span class="token key atrule">TZ</span><span class="token punctuation">:</span> <span class="token string">&#39;Asia/Shanghai&#39;</span>
      <span class="token key atrule">GITLAB_OMNIBUS_CONFIG</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string"> 
        external_url &#39;http://192.168.3.133&#39;
        gitlab_rails[&#39;gitlab_shell_ssh_port&#39;] = 222
        gitlab_rails[&#39;gravatar_plain_url&#39;] = &#39;https://gravatar.loli.net/avatar/%{hash}?s=%{size}&amp;d=identicon&#39;</span>
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&#39;80:80&#39;</span>
      <span class="token punctuation">-</span> <span class="token string">&#39;222:222&#39;</span>
      <span class="token punctuation">-</span> <span class="token string">&#39;443:443&#39;</span>
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&#39;./config:/etc/gitlab&#39;</span>
      <span class="token punctuation">-</span> <span class="token string">&#39;./logs:/var/log/gitlab&#39;</span>
      <span class="token punctuation">-</span> <span class="token string">&#39;./data:/var/opt/gitlab&#39;</span>



<span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&#39;3.7&#39;</span>
<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">web</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> <span class="token string">&#39;gitlab/gitlab-ce:latest&#39;</span>
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
    <span class="token key atrule">hostname</span><span class="token punctuation">:</span> <span class="token string">&#39;localhost&#39;</span>
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> gitlab<span class="token punctuation">-</span>ce
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token key atrule">GITLAB_OMNIBUS_CONFIG</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">
        external_url &#39;http://localhost&#39;</span>
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&#39;8080:80&#39;</span>
      <span class="token punctuation">-</span> <span class="token string">&#39;8443:443&#39;</span>
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&#39;./config:/etc/gitlab&#39;</span>
      <span class="token punctuation">-</span> <span class="token string">&#39;./logs:/var/log/gitlab&#39;</span>
      <span class="token punctuation">-</span> <span class="token string">&#39;./data:/var/opt/gitlab&#39;</span>
    <span class="token key atrule">networks</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> gitlab
  <span class="token key atrule">gitlab-runner</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> gitlab/gitlab<span class="token punctuation">-</span>runner<span class="token punctuation">:</span>alpine
    <span class="token key atrule">deploy</span><span class="token punctuation">:</span>
      <span class="token key atrule">mode</span><span class="token punctuation">:</span> replicated
      <span class="token key atrule">replicas</span><span class="token punctuation">:</span> <span class="token number">4</span>
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> gitlab<span class="token punctuation">-</span>runner    
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
    <span class="token key atrule">depends_on</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> web
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&#39;./gitlab-runner:/etc/gitlab-runner&#39;</span>
    <span class="token key atrule">networks</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> gitlab

<span class="token key atrule">networks</span><span class="token punctuation">:</span>
  <span class="token key atrule">gitlab</span><span class="token punctuation">:</span>
    <span class="token key atrule">name</span><span class="token punctuation">:</span> gitlab<span class="token punctuation">-</span>network
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u542F\u52A8" tabindex="-1"><a class="header-anchor" href="#\u542F\u52A8" aria-hidden="true">#</a> \u542F\u52A8</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>docker-compose up -d
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u67E5\u770B-root-\u5BC6\u7801" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B-root-\u5BC6\u7801" aria-hidden="true">#</a> \u67E5\u770B root \u5BC6\u7801</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cat config/initial_root_password
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u5176\u4ED6\u5C0F\u8BBE\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u5176\u4ED6\u5C0F\u8BBE\u7F6E" aria-hidden="true">#</a> \u5176\u4ED6\u5C0F\u8BBE\u7F6E</h2><p>\u4FEE\u6539\u6210\u4E2D\u6587 \u4FEE\u6539\u661F\u671F\u4E00 \u4FEE\u6539\u5BC6\u7801 \u4FEE\u6539\u5934\u50CF \u4FEE\u6539\u7EDD\u5BF9\u65F6\u95F4</p>`,15),l=[i];function p(c,o){return s(),a("div",null,l)}var r=n(t,[["render",p],["__file","gitlab-install.html.vue"]]);export{r as default};
