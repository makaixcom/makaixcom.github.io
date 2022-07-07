import{_ as s,c as a,o as n,a as e}from"./app.4bcbd411.js";const y=JSON.parse('{"title":"\u66F4\u6362IP","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u66F4\u6362IP","slug":"\u66F4\u6362ip"}],"relativePath":"devops/linux/ip.md"}'),p={name:"devops/linux/ip.md"},l=e(`<h2 id="\u66F4\u6362ip" tabindex="-1">\u66F4\u6362IP <a class="header-anchor" href="#\u66F4\u6362ip" aria-hidden="true">#</a></h2><p>\u4FEE\u6539<code>/etc/sysconfig/network-scripts/ifcfg-ens33</code></p><div class="language-shell"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;"># \u4FEE\u6539\u4EE5\u4E0B\u5185\u5BB9</span></span>
<span class="line"><span style="color:#A6ACCD;">ONBOOT=yes</span></span>
<span class="line"><span style="color:#A6ACCD;">BOOTPROTO=static</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># \u8FFD\u52A0\u4EE5\u4E0B\u5185\u5BB9</span></span>
<span class="line"><span style="color:#A6ACCD;">IPADDR=192.168.3.129</span></span>
<span class="line"><span style="color:#A6ACCD;">NETMASK=255.255.255.0</span></span>
<span class="line"><span style="color:#A6ACCD;">GATEWAY=192.168.3.2</span></span>
<span class="line"><span style="color:#A6ACCD;">DNS1=223.6.6.6</span></span>
<span class="line"><span style="color:#A6ACCD;">DNS2=180.76.76.76</span></span>
<span class="line"></span></code></pre></div>`,3),c=[l];function t(o,i,r,_,d,A){return n(),a("div",null,c)}var f=s(p,[["render",t]]);export{y as __pageData,f as default};
