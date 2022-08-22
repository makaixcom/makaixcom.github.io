import{_ as e,o as i,c as n,e as s}from"./app.027a7703.js";const c={},d=s(`<p>vi /etc/sysconfig/network-scripts/ifcfg-ens33</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>
BOOTPROTO=static  # dhcp-\u52A8\u6001\u5206\u914D\uFF0Cstatic-\u9759\u6001\u5206\u914D\uFF08\u91CD\u8981\uFF09\u3002
ONBOOT=yes  # \u662F\u5426\u5F00\u673A\u5F15\u5BFC\u3002
DNS1=114.114.114.114  # \u7B2C1\u4E2ADSN\u670D\u52A1\u5668\u7684IP\u5730\u5740\u3002
DNS2=1.2.4.8  # \u7B2C2\u4E2ADSN\u670D\u52A1\u5668\u7684IP\u5730\u5740\u3002
IPADDR=192.168.226.128  # IP\u5730\u5740\uFF08\u91CD\u8981\uFF09\u3002
NETMARSK=255.255.255.0  # \u5B50\u7F51\u63A9\u7801\uFF08\u91CD\u8981\uFF09\u3002
GATEWAY=192.168.226.2   # \u7F51\u5173\uFF08\u91CD\u8981\uFF09\u3002

systemctl restart network
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),t=[d];function l(a,r){return i(),n("div",null,t)}var o=e(c,[["render",l],["__file","002-modify-ip.html.vue"]]);export{o as default};
