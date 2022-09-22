import{_ as e,o as n,c as s,e as i}from"./app.47f53d61.js";const a={},l=i(`<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>version: &#39;3.1&#39;
 services:
 nexus:
 restart: always
 image: sonatype/nexus3
 container_name: nexus
 ports:
 - 8081:8081
 volumes:
 - /usr/local/docker/nexus/data:/nexus-data
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),d=[l];function r(c,t){return n(),s("div",null,d)}var u=e(a,[["render",r],["__file","nexus.html.vue"]]);export{u as default};
