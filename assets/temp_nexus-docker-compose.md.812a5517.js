import{_ as s,c as n,o as a,a as e}from"./app.2cf86ac7.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"temp/nexus-docker-compose.md"}'),p={name:"temp/nexus-docker-compose.md"},o=e(`<div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">version: &#39;3.1&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"> services:</span></span>
<span class="line"><span style="color:#A6ACCD;"> nexus:</span></span>
<span class="line"><span style="color:#A6ACCD;"> restart: always</span></span>
<span class="line"><span style="color:#A6ACCD;"> image: sonatype/nexus3</span></span>
<span class="line"><span style="color:#A6ACCD;"> container_name: nexus</span></span>
<span class="line"><span style="color:#A6ACCD;"> ports:</span></span>
<span class="line"><span style="color:#A6ACCD;"> - 8081:8081</span></span>
<span class="line"><span style="color:#A6ACCD;"> volumes:</span></span>
<span class="line"><span style="color:#A6ACCD;"> - /usr/local/docker/nexus/data:/nexus-data</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,1),l=[o];function c(t,r,i,_,A,C){return a(),n("div",null,l)}var u=s(p,[["render",c]]);export{m as __pageData,u as default};
