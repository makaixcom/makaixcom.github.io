import{_ as s,o as e,c as n,e as a}from"./app.47f53d61.js";const l={},i=a(`<p>\u67E5\u770B\u9632\u706B\u5899\u72B6\u6001</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>firewall-cmd --state
systemctl status firewalld
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u505C\u6B62\u9632\u706B\u5899</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>systemctl stop firewalld.service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u7981\u6B62\u5F00\u673A\u81EA\u52A8\u542F\u52A8</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>systemctl disable firewalld.service 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u67E5\u770B\u5DF2\u7ECF\u5F00\u653E\u7684\u7AEF\u53E3\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>firewall-cmd --list-ports
firewall-cmd --list-all 

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5F00\u542F\u7AEF\u53E3</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>firewall-cmd --zone<span class="token operator">=</span>public --add-port<span class="token operator">=</span><span class="token number">80</span>/tcp --permanent
<span class="token comment">#\u91CD\u542F\u9632\u706B\u5899(\u4FEE\u6539\u914D\u7F6E\u540E\u8981\u91CD\u542F\u9632\u706B\u5899)</span>
firewall-cmd --reload
\u547D\u4EE4\u542B\u4E49\uFF1A

\u2013zone <span class="token comment">#\u4F5C\u7528\u57DF</span>
\u2013add-port<span class="token operator">=</span><span class="token number">80</span>/tcp <span class="token comment">#\u6DFB\u52A0\u7AEF\u53E3\uFF0C\u683C\u5F0F\u4E3A\uFF1A\u7AEF\u53E3/\u901A\u8BAF\u534F\u8BAE</span>
\u2013permanent <span class="token comment">#\u6C38\u4E45\u751F\u6548\uFF0C\u6CA1\u6709\u6B64\u53C2\u6570\u91CD\u542F\u540E\u5931\u6548</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1\u542F\u52A8\u4E00\u4E2A\u670D\u52A1\uFF1Asystemctl start firewalld.service 2\u5173\u95ED\u4E00\u4E2A\u670D\u52A1\uFF1Asystemctl stop firewalld.service 3\u91CD\u542F\u4E00\u4E2A\u670D\u52A1\uFF1Asystemctl restart firewalld.service 4\u663E\u793A\u4E00\u4E2A\u670D\u52A1\u7684\u72B6\u6001\uFF1Asystemctl status firewalld.service 5\u5728\u5F00\u673A\u65F6\u542F\u7528\u4E00\u4E2A\u670D\u52A1\uFF1Asystemctl enable firewalld.service 6\u5728\u5F00\u673A\u65F6\u7981\u7528\u4E00\u4E2A\u670D\u52A1\uFF1Asystemctl disable firewalld.service 7\u67E5\u770B\u670D\u52A1\u662F\u5426\u5F00\u673A\u542F\u52A8\uFF1Asystemctl is-enabled firewalld.service;echo $? 8\u67E5\u770B\u5DF2\u542F\u52A8\u7684\u670D\u52A1\u5217\u8868\uFF1Asystemctl list-unit-files|grep enabled</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u67E5\u770Bfirewall\u670D\u52A1\u72B6\u6001</span>
systemctl status firewalld
<span class="token comment"># \u67E5\u770Bfirewall\u7684\u72B6\u6001</span>
firewall-cmd --state
<span class="token comment"># \u5F00\u542F</span>
<span class="token function">service</span> firewalld start
<span class="token comment"># \u91CD\u542F</span>
<span class="token function">service</span> firewalld restart
<span class="token comment"># \u5173\u95ED</span>
<span class="token function">service</span> firewalld stop
<span class="token comment"># \u67E5\u770B\u9632\u706B\u5899\u89C4\u5219</span>
firewall-cmd --list-all 
<span class="token comment"># \u67E5\u8BE2\u7AEF\u53E3\u662F\u5426\u5F00\u653E</span>
firewall-cmd --query-port<span class="token operator">=</span><span class="token number">8080</span>/tcp
<span class="token comment"># \u5F00\u653E80\u7AEF\u53E3</span>
firewall-cmd --permanent --add-port<span class="token operator">=</span><span class="token number">80</span>/tcp
<span class="token comment"># \u79FB\u9664\u7AEF\u53E3</span>
firewall-cmd --permanent --remove-port<span class="token operator">=</span><span class="token number">8080</span>/tcp

<span class="token comment">#\u91CD\u542F\u9632\u706B\u5899(\u4FEE\u6539\u914D\u7F6E\u540E\u8981\u91CD\u542F\u9632\u706B\u5899)</span>
firewall-cmd --reload

<span class="token comment"># \u53C2\u6570\u89E3\u91CA</span>
<span class="token number">1</span>\u3001firwall-cmd\uFF1A\u662FLinux\u63D0\u4F9B\u7684\u64CD\u4F5Cfirewall\u7684\u4E00\u4E2A\u5DE5\u5177\uFF1B
<span class="token number">2</span>\u3001--permanent\uFF1A\u8868\u793A\u8BBE\u7F6E\u4E3A\u6301\u4E45\uFF1B
<span class="token number">3</span>\u3001--add-port\uFF1A\u6807\u8BC6\u6DFB\u52A0\u7684\u7AEF\u53E3\uFF1B
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),d=[i];function c(r,t){return e(),n("div",null,d)}var v=s(l,[["render",c],["__file","firewall.html.vue"]]);export{v as default};
