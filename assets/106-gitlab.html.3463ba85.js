import{_ as n,o as s,c as a,e}from"./app.47f53d61.js";const t={},l=e(`<div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code> <span class="token key atrule">web</span><span class="token punctuation">:</span>
   <span class="token key atrule">image</span><span class="token punctuation">:</span> <span class="token string">&#39;gitlab/gitlab-ce:latest&#39;</span>
   <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
   <span class="token key atrule">hostname</span><span class="token punctuation">:</span> <span class="token string">&#39;192.168.0.74&#39;</span>
   <span class="token key atrule">environment</span><span class="token punctuation">:</span>
     <span class="token key atrule">GITLAB_OMNIBUS_CONFIG</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">
       external_url &#39;http://192.168.0.74&#39;
       gitlab_rails[&#39;gitlab_shell_ssh_port&#39;] = 8022
       gitlab_rails[&#39;lfs_enabled&#39;] = true
       gitlab_rails[&#39;gitlab_default_projects_features_builds&#39;] = false</span>
   <span class="token key atrule">ports</span><span class="token punctuation">:</span>
     <span class="token punctuation">-</span> <span class="token string">&#39;80:80&#39;</span>
     <span class="token punctuation">-</span> <span class="token string">&#39;443:443&#39;</span>
     <span class="token punctuation">-</span> <span class="token string">&#39;8022:22&#39;</span>
   <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
     <span class="token punctuation">-</span> <span class="token string">&#39;/opt/gitlab/config:/etc/gitlab&#39;</span>
     <span class="token punctuation">-</span> <span class="token string">&#39;/opt/gitlab/logs:/var/log/gitlab&#39;</span>
     <span class="token punctuation">-</span> <span class="token string">&#39;/opt/gitlab/data:/var/opt/gitlab&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),i=[l];function p(c,o){return s(),a("div",null,i)}var r=n(t,[["render",p],["__file","106-gitlab.html.vue"]]);export{r as default};
