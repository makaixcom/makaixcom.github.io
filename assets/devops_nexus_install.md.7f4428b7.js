import{_ as s,c as a,o as n,a as e}from"./app.4bcbd411.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"devops/nexus/install.md"}'),l={name:"devops/nexus/install.md"},p=e(`<div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">version: &#39;3.1&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"> services:</span></span>
<span class="line"><span style="color:#A6ACCD;"> nexus:</span></span>
<span class="line"><span style="color:#A6ACCD;"> restart: always</span></span>
<span class="line"><span style="color:#A6ACCD;"> image: sonatype/nexus3</span></span>
<span class="line"><span style="color:#A6ACCD;"> container_name: nexus</span></span>
<span class="line"><span style="color:#A6ACCD;"> ports:</span></span>
<span class="line"><span style="color:#A6ACCD;"> - 8081:8081</span></span>
<span class="line"><span style="color:#A6ACCD;"> volumes:</span></span>
<span class="line"><span style="color:#A6ACCD;"> - /usr/local/docker/nexus/data:/nexus-data</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,1),o=[p];function t(c,r,i,_,A,C){return n(),a("div",null,o)}var y=s(l,[["render",t]]);export{u as __pageData,y as default};
