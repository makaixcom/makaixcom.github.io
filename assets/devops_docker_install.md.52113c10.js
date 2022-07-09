import{_ as s,c as a,o as e,a as n}from"./app.2cf86ac7.js";const m=JSON.parse('{"title":"\u5B89\u88C5docker","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5B89\u88C5docker","slug":"\u5B89\u88C5docker"}],"relativePath":"devops/docker/install.md"}'),l={name:"devops/docker/install.md"},o=n(`<h2 id="\u5B89\u88C5docker" tabindex="-1">\u5B89\u88C5docker <a class="header-anchor" href="#\u5B89\u88C5docker" aria-hidden="true">#</a></h2><div class="language-shell"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;"># step 1: \u5B89\u88C5\u5FC5\u8981\u7684\u4E00\u4E9B\u7CFB\u7EDF\u5DE5\u5177</span></span>
<span class="line"><span style="color:#A6ACCD;">$ sudo yum install -y yum-utils device-mapper-persistent-data lvm2</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># Step 2: \u6DFB\u52A0\u8F6F\u4EF6\u6E90\u4FE1\u606F</span></span>
<span class="line"><span style="color:#A6ACCD;">$ sudo yum-config-manager --add-repo https://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># Step 3: \u66F4\u65B0\u5E76\u5B89\u88C5Docker-CE</span></span>
<span class="line"><span style="color:#A6ACCD;">$ sudo yum makecache </span></span>
<span class="line"><span style="color:#A6ACCD;">$ sudo yum -y install docker-ce docker-ce-cli containerd.io</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># Step 4: \u5F00\u542FDocker\u670D\u52A1</span></span>
<span class="line"><span style="color:#A6ACCD;">$ sudo systemctl start docker</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">$ sudo systemctl </span><span style="color:#82AAFF;">enable</span><span style="color:#A6ACCD;"> docker</span></span>
<span class="line"></span></code></pre></div>`,2),c=[o];function t(p,r,i,d,y,_){return e(),a("div",null,c)}var k=s(l,[["render",t]]);export{m as __pageData,k as default};
