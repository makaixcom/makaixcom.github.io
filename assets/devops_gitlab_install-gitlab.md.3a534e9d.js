import{_ as s,c as a,o as n,a as l}from"./app.2cf86ac7.js";const D=JSON.parse('{"title":"\u8D44\u6E90\u51C6\u5907","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u8D44\u6E90\u51C6\u5907","slug":"\u8D44\u6E90\u51C6\u5907"},{"level":2,"title":"\u65B0\u5EFA\u6240\u9700\u76EE\u5F55","slug":"\u65B0\u5EFA\u6240\u9700\u76EE\u5F55"},{"level":2,"title":"\u62C9\u53D6\u955C\u50CF","slug":"\u62C9\u53D6\u955C\u50CF"},{"level":2,"title":"\u5199\u5165docker-compose\u6587\u4EF6","slug":"\u5199\u5165docker-compose\u6587\u4EF6"},{"level":2,"title":"\u542F\u52A8","slug":"\u542F\u52A8"},{"level":2,"title":"\u67E5\u770B root \u5BC6\u7801","slug":"\u67E5\u770B-root-\u5BC6\u7801"},{"level":2,"title":"\u5176\u4ED6\u5C0F\u8BBE\u7F6E","slug":"\u5176\u4ED6\u5C0F\u8BBE\u7F6E"}],"relativePath":"devops/gitlab/install-gitlab.md"}'),p={name:"devops/gitlab/install-gitlab.md"},e=l(`<h2 id="\u8D44\u6E90\u51C6\u5907" tabindex="-1">\u8D44\u6E90\u51C6\u5907 <a class="header-anchor" href="#\u8D44\u6E90\u51C6\u5907" aria-hidden="true">#</a></h2><p>CPU\uFF1A2\u6838 \u5185\u5B58\uFF1A4G \u786C\u76D8\uFF1A20G</p><h2 id="\u65B0\u5EFA\u6240\u9700\u76EE\u5F55" tabindex="-1">\u65B0\u5EFA\u6240\u9700\u76EE\u5F55 <a class="header-anchor" href="#\u65B0\u5EFA\u6240\u9700\u76EE\u5F55" aria-hidden="true">#</a></h2><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">mkdir -p /opt/docker-compose/gitlab &amp;&amp; cd /opt/docker-compose/gitlab/</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u62C9\u53D6\u955C\u50CF" tabindex="-1">\u62C9\u53D6\u955C\u50CF <a class="header-anchor" href="#\u62C9\u53D6\u955C\u50CF" aria-hidden="true">#</a></h2><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">docker pull gitlab/gitlab-ce</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u5199\u5165docker-compose\u6587\u4EF6" tabindex="-1">\u5199\u5165docker-compose\u6587\u4EF6 <a class="header-anchor" href="#\u5199\u5165docker-compose\u6587\u4EF6" aria-hidden="true">#</a></h2><p>\u628A\u4E0B\u9762\u5185\u5BB9\u4FDD\u5B58\u6210 <code>docker-compose.yml</code> \u6587\u4EF6</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">version: &#39;3.1&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">services: </span></span>
<span class="line"><span style="color:#A6ACCD;">  gitlab: </span></span>
<span class="line"><span style="color:#A6ACCD;">    image: &#39;gitlab/gitlab-ce:latest&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    container_name: gitlab</span></span>
<span class="line"><span style="color:#A6ACCD;">    restart: always</span></span>
<span class="line"><span style="color:#A6ACCD;">    environment: </span></span>
<span class="line"><span style="color:#A6ACCD;">      TZ: &#39;Asia/Shanghai&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">      GITLAB_OMNIBUS_CONFIG: | </span></span>
<span class="line"><span style="color:#A6ACCD;">        external_url &#39;http://192.168.3.130:8929&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">        gitlab_rails[&#39;gitlab_shell_ssh_port&#39;] = 2224</span></span>
<span class="line"><span style="color:#A6ACCD;">        gitlab_rails[&#39;gravatar_plain_url&#39;] = &#39;https://gravatar.loli.net/avatar/%{hash}?s=%{size}&amp;d=identicon&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    ports:</span></span>
<span class="line"><span style="color:#A6ACCD;">      - &#39;8929:8929&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">      - &#39;2224:2224&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    volumes:</span></span>
<span class="line"><span style="color:#A6ACCD;">      - &#39;./config:/etc/gitlab&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">      - &#39;./logs:/var/log/gitlab&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">      - &#39;./data:/var/opt/gitlab&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">version: &#39;3.7&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">services:</span></span>
<span class="line"><span style="color:#A6ACCD;">  web:</span></span>
<span class="line"><span style="color:#A6ACCD;">    image: &#39;gitlab/gitlab-ce:latest&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    restart: always</span></span>
<span class="line"><span style="color:#A6ACCD;">    hostname: &#39;localhost&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    container_name: gitlab-ce</span></span>
<span class="line"><span style="color:#A6ACCD;">    environment:</span></span>
<span class="line"><span style="color:#A6ACCD;">      GITLAB_OMNIBUS_CONFIG: |</span></span>
<span class="line"><span style="color:#A6ACCD;">        external_url &#39;http://localhost&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    ports:</span></span>
<span class="line"><span style="color:#A6ACCD;">      - &#39;8080:80&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">      - &#39;8443:443&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    volumes:</span></span>
<span class="line"><span style="color:#A6ACCD;">      - &#39;./config:/etc/gitlab&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">      - &#39;./logs:/var/log/gitlab&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">      - &#39;./data:/var/opt/gitlab&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    networks:</span></span>
<span class="line"><span style="color:#A6ACCD;">      - gitlab</span></span>
<span class="line"><span style="color:#A6ACCD;">  gitlab-runner:</span></span>
<span class="line"><span style="color:#A6ACCD;">    image: gitlab/gitlab-runner:alpine</span></span>
<span class="line"><span style="color:#A6ACCD;">    deploy:</span></span>
<span class="line"><span style="color:#A6ACCD;">      mode: replicated</span></span>
<span class="line"><span style="color:#A6ACCD;">      replicas: 4</span></span>
<span class="line"><span style="color:#A6ACCD;">    container_name: gitlab-runner    </span></span>
<span class="line"><span style="color:#A6ACCD;">    restart: always</span></span>
<span class="line"><span style="color:#A6ACCD;">    depends_on:</span></span>
<span class="line"><span style="color:#A6ACCD;">      - web</span></span>
<span class="line"><span style="color:#A6ACCD;">    volumes:</span></span>
<span class="line"><span style="color:#A6ACCD;">      - &#39;./gitlab-runner:/etc/gitlab-runner&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    networks:</span></span>
<span class="line"><span style="color:#A6ACCD;">      - gitlab</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">networks:</span></span>
<span class="line"><span style="color:#A6ACCD;">  gitlab:</span></span>
<span class="line"><span style="color:#A6ACCD;">    name: gitlab-network</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u542F\u52A8" tabindex="-1">\u542F\u52A8 <a class="header-anchor" href="#\u542F\u52A8" aria-hidden="true">#</a></h2><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">docker-compose up -d</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u67E5\u770B-root-\u5BC6\u7801" tabindex="-1">\u67E5\u770B root \u5BC6\u7801 <a class="header-anchor" href="#\u67E5\u770B-root-\u5BC6\u7801" aria-hidden="true">#</a></h2><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">cat config/initial_root_password</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u5176\u4ED6\u5C0F\u8BBE\u7F6E" tabindex="-1">\u5176\u4ED6\u5C0F\u8BBE\u7F6E <a class="header-anchor" href="#\u5176\u4ED6\u5C0F\u8BBE\u7F6E" aria-hidden="true">#</a></h2><p>\u4FEE\u6539\u6210\u4E2D\u6587 \u4FEE\u6539\u661F\u671F\u4E00 \u4FEE\u6539\u5BC6\u7801 \u4FEE\u6539\u5934\u50CF \u4FEE\u6539\u7EDD\u5BF9\u65F6\u95F4</p>`,15),o=[e];function c(t,r,i,A,C,d){return n(),a("div",null,o)}var g=s(p,[["render",c]]);export{D as __pageData,g as default};
