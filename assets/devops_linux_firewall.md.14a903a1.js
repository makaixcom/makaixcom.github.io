import{_ as s,c as a,o as l,a as n}from"./app.4bcbd411.js";const C=JSON.parse('{"title":"\u67E5\u770Bfirewall\u670D\u52A1\u72B6\u6001","description":"","frontmatter":{},"headers":[],"relativePath":"devops/linux/firewall.md"}'),e={name:"devops/linux/firewall.md"},p=n(`<p>\u67E5\u770B\u9632\u706B\u5899\u72B6\u6001</p><div class="language-shell"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">firewall-cmd --state</span></span>
<span class="line"><span style="color:#A6ACCD;">systemctl status firewalld</span></span>
<span class="line"></span></code></pre></div><p>\u505C\u6B62\u9632\u706B\u5899</p><div class="language-shell"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">systemctl stop firewalld.service</span></span>
<span class="line"></span></code></pre></div><p>\u7981\u6B62\u5F00\u673A\u81EA\u52A8\u542F\u52A8</p><div class="language-shell"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">systemctl disable firewalld.service </span></span>
<span class="line"></span></code></pre></div><p>\u67E5\u770B\u5DF2\u7ECF\u5F00\u653E\u7684\u7AEF\u53E3\uFF1A</p><div class="language-shell"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">firewall-cmd --list-ports</span></span>
<span class="line"><span style="color:#A6ACCD;">firewall-cmd --list-all </span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><p>\u5F00\u542F\u7AEF\u53E3</p><div class="language-shell"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">firewall-cmd --zone=public --add-port=80/tcp --permanent</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#\u91CD\u542F\u9632\u706B\u5899(\u4FEE\u6539\u914D\u7F6E\u540E\u8981\u91CD\u542F\u9632\u706B\u5899)</span></span>
<span class="line"><span style="color:#A6ACCD;">firewall-cmd --reload</span></span>
<span class="line"><span style="color:#A6ACCD;">\u547D\u4EE4\u542B\u4E49\uFF1A</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">\u2013zone </span><span style="color:#676E95;font-style:italic;">#\u4F5C\u7528\u57DF</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2013add-port=80/tcp </span><span style="color:#676E95;font-style:italic;">#\u6DFB\u52A0\u7AEF\u53E3\uFF0C\u683C\u5F0F\u4E3A\uFF1A\u7AEF\u53E3/\u901A\u8BAF\u534F\u8BAE</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2013permanent </span><span style="color:#676E95;font-style:italic;">#\u6C38\u4E45\u751F\u6548\uFF0C\u6CA1\u6709\u6B64\u53C2\u6570\u91CD\u542F\u540E\u5931\u6548</span></span>
<span class="line"></span></code></pre></div><p>1\u542F\u52A8\u4E00\u4E2A\u670D\u52A1\uFF1Asystemctl start firewalld.service 2\u5173\u95ED\u4E00\u4E2A\u670D\u52A1\uFF1Asystemctl stop firewalld.service 3\u91CD\u542F\u4E00\u4E2A\u670D\u52A1\uFF1Asystemctl restart firewalld.service 4\u663E\u793A\u4E00\u4E2A\u670D\u52A1\u7684\u72B6\u6001\uFF1Asystemctl status firewalld.service 5\u5728\u5F00\u673A\u65F6\u542F\u7528\u4E00\u4E2A\u670D\u52A1\uFF1Asystemctl enable firewalld.service 6\u5728\u5F00\u673A\u65F6\u7981\u7528\u4E00\u4E2A\u670D\u52A1\uFF1Asystemctl disable firewalld.service 7\u67E5\u770B\u670D\u52A1\u662F\u5426\u5F00\u673A\u542F\u52A8\uFF1Asystemctl is-enabled firewalld.service;echo $? 8\u67E5\u770B\u5DF2\u542F\u52A8\u7684\u670D\u52A1\u5217\u8868\uFF1Asystemctl list-unit-files|grep enabled</p><div class="language-shell"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;"># \u67E5\u770Bfirewall\u670D\u52A1\u72B6\u6001</span></span>
<span class="line"><span style="color:#A6ACCD;">systemctl status firewalld</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># \u67E5\u770Bfirewall\u7684\u72B6\u6001</span></span>
<span class="line"><span style="color:#A6ACCD;">firewall-cmd --state</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># \u5F00\u542F</span></span>
<span class="line"><span style="color:#A6ACCD;">service firewalld start</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># \u91CD\u542F</span></span>
<span class="line"><span style="color:#A6ACCD;">service firewalld restart</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># \u5173\u95ED</span></span>
<span class="line"><span style="color:#A6ACCD;">service firewalld stop</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># \u67E5\u770B\u9632\u706B\u5899\u89C4\u5219</span></span>
<span class="line"><span style="color:#A6ACCD;">firewall-cmd --list-all </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># \u67E5\u8BE2\u7AEF\u53E3\u662F\u5426\u5F00\u653E</span></span>
<span class="line"><span style="color:#A6ACCD;">firewall-cmd --query-port=8080/tcp</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># \u5F00\u653E80\u7AEF\u53E3</span></span>
<span class="line"><span style="color:#A6ACCD;">firewall-cmd --permanent --add-port=80/tcp</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># \u79FB\u9664\u7AEF\u53E3</span></span>
<span class="line"><span style="color:#A6ACCD;">firewall-cmd --permanent --remove-port=8080/tcp</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#\u91CD\u542F\u9632\u706B\u5899(\u4FEE\u6539\u914D\u7F6E\u540E\u8981\u91CD\u542F\u9632\u706B\u5899)</span></span>
<span class="line"><span style="color:#A6ACCD;">firewall-cmd --reload</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># \u53C2\u6570\u89E3\u91CA</span></span>
<span class="line"><span style="color:#A6ACCD;">1\u3001firwall-cmd\uFF1A\u662FLinux\u63D0\u4F9B\u7684\u64CD\u4F5Cfirewall\u7684\u4E00\u4E2A\u5DE5\u5177\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">2\u3001--permanent\uFF1A\u8868\u793A\u8BBE\u7F6E\u4E3A\u6301\u4E45\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">3\u3001--add-port\uFF1A\u6807\u8BC6\u6DFB\u52A0\u7684\u7AEF\u53E3\uFF1B</span></span>
<span class="line"></span></code></pre></div>`,12),c=[p];function t(i,o,r,d,y,f){return l(),a("div",null,c)}var m=s(e,[["render",t]]);export{C as __pageData,m as default};
