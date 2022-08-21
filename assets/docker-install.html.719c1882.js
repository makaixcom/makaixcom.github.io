import{_ as n,o as s,c as e,e as a}from"./app.f2ae7367.js";const c={},i=a(`<h2 id="\u5B89\u88C5docker" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5docker" aria-hidden="true">#</a> \u5B89\u88C5docker</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># step 1: \u5B89\u88C5\u5FC5\u8981\u7684\u4E00\u4E9B\u7CFB\u7EDF\u5DE5\u5177</span>
$ <span class="token function">sudo</span> yum <span class="token function">install</span> -y yum-utils device-mapper-persistent-data lvm2
<span class="token comment"># Step 2: \u6DFB\u52A0\u8F6F\u4EF6\u6E90\u4FE1\u606F</span>
$ <span class="token function">sudo</span> yum-config-manager --add-repo https://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
<span class="token comment"># Step 3: \u66F4\u65B0\u5E76\u5B89\u88C5Docker-CE</span>
$ <span class="token function">sudo</span> yum makecache 
$ <span class="token function">sudo</span> yum -y <span class="token function">install</span> docker-ce docker-ce-cli containerd.io
<span class="token comment"># Step 4: \u5F00\u542FDocker\u670D\u52A1</span>
$ <span class="token function">sudo</span> systemctl start <span class="token function">docker</span>

$ <span class="token function">sudo</span> systemctl <span class="token builtin class-name">enable</span> <span class="token function">docker</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),o=[i];function t(l,d){return s(),e("div",null,o)}var u=n(c,[["render",t],["__file","docker-install.html.vue"]]);export{u as default};
