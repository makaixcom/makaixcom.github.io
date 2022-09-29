import{_ as e,o as i,c as n,e as l}from"./app.63b1fee1.js";const s={},d=l(`<p>\u7B2C\u4E00\u90E8\u5206\uFF1Ak8s\u6982\u5FF5\u548C\u67B6\u6784</p><p>\u7B2C\u4E8C\u90E8\u5206 \u4ECE\u96F6\u642D\u5EFAk8s\u96C6\u7FA4</p><p>\u7B2C\u4E09\u90E8\u5206 k8s\u6838\u5FC3\u6982\u5FF5</p><p>Pod Controller Service Ingress RBAC Helm \u6301\u4E45\u5316\u5B58\u50A8</p><p>\u7B2C\u56DB\u90E8\u5206 \u642D\u5EFA\u4E00\u4E2A\u96C6\u7FA4\u76D1\u63A7\u5E73\u53F0</p><p>\u7B2C\u4E94\u90E8\u5206 \u4ECE\u96F6\u5F00\u59CB\u642D\u5EFA\u9AD8\u53EF\u7528k8s\u96C6\u7FA4</p><p>\u7B2C\u516D\u90E8\u5206 \u5728\u96C6\u7FA4\u73AF\u5883\u4E2D\u90E8\u7F72\u9879\u76EE</p><h2 id="k8s\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#k8s\u7EC4\u4EF6" aria-hidden="true">#</a> K8s\u7EC4\u4EF6</h2><h3 id="master\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#master\u7EC4\u4EF6" aria-hidden="true">#</a> Master\u7EC4\u4EF6</h3><p>API Server \u96C6\u7FA4\u7EDF\u4E00\u5165\u53E3\uFF0C\u4EE5\u4E00\u79CDRestful\u98CE\u683C\u8FDB\u5165\u5230\u96C6\u7FA4\u4E2D\uFF0C\u4EA4\u7ED9ETCD\u8FDB\u884C\u5B58\u50A8</p><p>Scheduler \u8282\u70B9\u8C03\u5EA6\uFF0C\u4E3B\u8981\u662F\u505A\u7BA1\u7406\uFF0C\u5982\u679C\u90E8\u7F72\u5E94\u7528\u5219\u4EA4\u7ED9Scheduler\uFF0C\u9009\u62E9Node\u8282\u70B9\u8FDB\u884C\u5E94\u7528\u90E8\u7F72\u3002</p><p>Controller-Manager \u5904\u7406\u96C6\u7FA4\u4E2D\u5E38\u89C4\u540E\u53F0\u4EFB\u52A1\uFF0C\u4E00\u4E2A\u8D44\u6E90\u5BF9\u5E94\u4E00\u4E2A\u63A7\u5236\u5668\u3002</p><p>ETCD \u5B58\u50A8\u7CFB\u7EDF\uFF0C\u7528\u4E8E\u4FDD\u5B58\u96C6\u7FA4\u6570\u636E\u3002</p><h3 id="node\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#node\u7EC4\u4EF6" aria-hidden="true">#</a> Node\u7EC4\u4EF6</h3><p>kubelet</p><p>kubelet \u662F\u4E3B\u8981\u7684Node\u4EE3\u7406\u3002\u5B83\u76D1\u89C6\u5DF2\u5206\u914D\u5230\u5176Node\u4E0A\u7684Pod\uFF08\u901A\u8FC7apiserver\u6216\u672C\u5730\u914D\u7F6E\u6587\u4EF6\uFF09\u548C\uFF1A</p><ul><li>\u88C5\u8F7DPod\u6240\u9700\u7684Volume\u3002</li><li>\u4E0B\u8F7DPod\u7684secret\u3002</li><li>\u901A\u8FC7Docker\uFF08\u6216\u5B9E\u9A8C\u65F6\u4F7F\u7528rkt\uFF09\u8FD0\u884CPod\u7684\u5BB9\u5668\u3002</li><li>\u5B9A\u671F\u6267\u884C\u4EFB\u4F55\u88AB\u8BF7\u6C42\u5BB9\u5668\u7684\u6D3B\u52A8\u63A2\u9488\uFF08liveness probes\uFF09\u3002</li><li>\u5728\u5FC5\u8981\u65F6\u521B\u5EFAmirror pod \uFF0C\u4ECE\u800C\u5C06pod\u7684\u72B6\u6001\u62A5\u544A\u56DE\u7CFB\u7EDF\u7684\u5176\u4F59\u90E8\u5206\u3002</li><li>\u5C06\u8282\u70B9\u7684\u72B6\u6001\u62A5\u544A\u56DE\u7CFB\u7EDF\u7684\u5176\u4F59\u90E8\u5206\u3002</li></ul><p>kube-proxy kube-proxy \u5728\u4E3B\u673A\u4E0A\u7EF4\u62A4\u7F51\u7EDC\u89C4\u5219\u5E76\u6267\u884C\u8FDE\u63A5\u8F6C\u53D1\uFF0C\u4ECE\u800C\u6765\u5B9E\u73B0Kubernetes\u670D\u52A1\u62BD\u8C61\u3002 \u63D0\u4F9B\u7F51\u7EDC\u4EE3\u7406\uFF0C\u8D1F\u8F7D\u5747\u8861\u7B49\u64CD\u4F5C\u3002</p><p>docker</p><h2 id="k8s\u6838\u5FC3\u6982\u5FF5" tabindex="-1"><a class="header-anchor" href="#k8s\u6838\u5FC3\u6982\u5FF5" aria-hidden="true">#</a> K8s\u6838\u5FC3\u6982\u5FF5</h2><p>POD</p><ul><li>K8s\u4E2D\u6700\u5C0F\u90E8\u7F72\u5355\u5143</li><li>\u662F\u4E00\u7EC4\u5BB9\u5668\u7684\u96C6\u5408</li><li>\u4E00\u4E2APOD\u4E2D\u7684\u5BB9\u5668\u662F\u5171\u4EAB\u7F51\u7EDC\u7684</li><li>\u751F\u547D\u5468\u671F\u662F\u77ED\u6682\u7684\u3002</li></ul><p>controller</p><ul><li>\u521B\u5EFAPOD\uFF0C\u786E\u4FDD\u9884\u671F\u7684pod\u526F\u672C\u6570\u91CF</li><li>\u65E0\u72B6\u6001\u7684\u5E94\u7528\u90E8\u7F72</li><li>\u6709\u72B6\u6001\u7684\u5E94\u7528\u90E8\u7F72</li><li>\u786E\u4FDD\u6240\u6709\u7684Nod\u8FD0\u884C\u540C\u4E00\u4E2Apod</li><li>\u4E00\u6B21\u6027\u4EFB\u52A1\u548C\u5B9A\u65F6\u4EFB\u52A1</li></ul><p>Service</p><ul><li>\u5B9A\u4E49\u4E00\u7EC4pod\u7684\u8BBF\u95EE\u89C4\u5219</li></ul><h2 id="\u642D\u5EFA\u96C6\u7FA4" tabindex="-1"><a class="header-anchor" href="#\u642D\u5EFA\u96C6\u7FA4" aria-hidden="true">#</a> \u642D\u5EFA\u96C6\u7FA4</h2><p>1\u3001k8s \u5E73\u53F0\u89C4\u5212 2\u3001\u670D\u52A1\u5668\u786C\u4EF6\u914D\u7F6E\u8981\u6C42 3\u3001\u642D\u5EFAk8s\u96C6\u7FA4\u6709\u51E0\u79CD\u90E8\u7F72\u65B9\u5F0F</p><h2 id="\u5355\u8282\u70B9\u96C6\u7FA4" tabindex="-1"><a class="header-anchor" href="#\u5355\u8282\u70B9\u96C6\u7FA4" aria-hidden="true">#</a> \u5355\u8282\u70B9\u96C6\u7FA4</h2><p>master 2C 4G 20G node 4C 8G 40G</p><h2 id="\u9AD8\u53EF\u7528\u96C6\u7FA4" tabindex="-1"><a class="header-anchor" href="#\u9AD8\u53EF\u7528\u96C6\u7FA4" aria-hidden="true">#</a> \u9AD8\u53EF\u7528\u96C6\u7FA4</h2><h2 id="\u5B89\u88C5\u51C6\u5907" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5\u51C6\u5907" aria-hidden="true">#</a> \u5B89\u88C5\u51C6\u5907</h2><p>\u5B89\u88C5\u4E09\u53F0\u865A\u62DF\u673A\uFF0CRockyLinux \u7CFB\u7EDF\u521D\u59CB\u5316\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>- \u5173\u95ED\u9632\u706B\u5899
systemctl stop firewalld
systemctl disable firewalld

- \u5173\u95EDselinux
sed -i &#39;s/enforcing/disabled/&#39; /etc/selinux/config # \u6C38\u4E45
setenforce 0 # \u4E34\u65F6

- \u5173\u95EDswap
swapoff -a # \u4E34\u65F6
sed -ri &#39;s/.*swap.*/#&amp;/&#39; etc/fstab # \u6C38\u4E45

- \u6839\u636E\u8BBE\u7F6E\u89C4\u5212\u4E3B\u673A\u540D
hostnamectl set-hostname &lt;hostname&gt;

- \u5728master\u6DFB\u52A0HOST
cat &gt;&gt; /etc/hosts &lt;&lt; EOF
192.168.3.11 master
192.168.3.12 node1
192.168.3.13 node2
EOF

- \u5C06\u6865\u63A5\u7684IPV4\u6D41\u91CF\u4F20\u9012\u5230iptables\u7684\u94FE
cat &gt; /etc/sysctl.d/k8s.conf &lt;&lt; EOF
net.bridge.bridge-nf-call-ip6tables = 1
net.bridge.bridge-nf-call-iptables = 1
EOF
sysctl --system # \u751F\u6548

- \u65F6\u533A\u8BBE\u7F6E\u548C\u65F6\u95F4\u540C\u6B65
yum install ntpdate -y
ntpdate time.windows.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,34),a=[d];function r(t,c){return i(),n("div",null,a)}var u=e(s,[["render",r],["__file","kubernetes.html.vue"]]);export{u as default};
