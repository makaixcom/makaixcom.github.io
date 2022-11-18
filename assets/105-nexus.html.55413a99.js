import{_ as e,o as n,c as s,e as i}from"./app.fc1c3de5.js";const a={},d=i(`<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>version: &#39;3.1&#39;
 services:
 nexus:
 restart: always
 image: sonatype/nexus3
 container_name: nexus
 ports:
 - 8081:8081
 volumes:
 - /usr/local/docker/nexus/data:/nexus-data
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u662Fdocker-compose\u7248\uFF0C \u63A8\u8350\u6539\u6210docker\u7248</p>`,2),l=[d];function r(c,t){return n(),s("div",null,l)}var o=e(a,[["render",r],["__file","105-nexus.html.vue"]]);export{o as default};
