import{_ as s,c as a,o as n,a as l}from"./app.2cf86ac7.js";const y=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"devops/gitlab/install-bak.md"}'),p={name:"devops/gitlab/install-bak.md"},e=l(`<div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">version: &#39;3&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">services:</span></span>
<span class="line"><span style="color:#A6ACCD;">  gitlab:</span></span>
<span class="line"><span style="color:#A6ACCD;">    restart: always</span></span>
<span class="line"><span style="color:#A6ACCD;">    image: twang2218/gitlab-ce-zh:latest</span></span>
<span class="line"><span style="color:#A6ACCD;">    container_name: gitlab</span></span>
<span class="line"><span style="color:#A6ACCD;">    hostname: &#39;00.00.00.00&#39;         # \u4E5F\u53EF\u4EE5\u4F7F\u7528IP\u5730\u5740</span></span>
<span class="line"><span style="color:#A6ACCD;">    privileged: true</span></span>
<span class="line"><span style="color:#A6ACCD;">    environment:</span></span>
<span class="line"><span style="color:#A6ACCD;">      TZ: &#39;Asia/Shanghai&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">      GITLAB_OMNIBUS_CONFIG: |</span></span>
<span class="line"><span style="color:#A6ACCD;">        gitlab_rails[&#39;time_zone&#39;] = &#39;Asia/Shanghai&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">        external_url &#39;http://00.00.00.00:7002&#39;       #http\u5730\u5740</span></span>
<span class="line"><span style="color:#A6ACCD;">        gitlab_rails[&#39;gitlab_shell_ssh_port&#39;] = 7003    #ssh\u5730\u5740\u7AEF\u53E3</span></span>
<span class="line"><span style="color:#A6ACCD;">        gitlab_rails[&#39;smtp_enable&#39;] = true    #\u542F\u7528SMTP\uFF0C\u90AE\u4EF6\u53D1\u9001\u670D\u52A1\u5668\u5FC5\u5F00</span></span>
<span class="line"><span style="color:#A6ACCD;">        gitlab_rails[&#39;smtp_address&#39;] = &quot;smtp.163.com&quot;  # \u3010163\u90AE\u4EF6\u670D\u52A1\u5668\u5730\u5740\u3011</span></span>
<span class="line"><span style="color:#A6ACCD;">        gitlab_rails[&#39;smtp_port&#39;] = 465 # \u542F\u7528\u7684\u7AEF\u53E3 \uFF0C\u6709\u4EBA\u5199\u7684\u662F25\uFF0C\u4F46\u662F\u963F\u91CC\u7684\u4F1A\u7981\u7528\uFF0C\u4F1A\u62A5\u9519\uFF0C\u6240\u4EE5\u5EFA\u8BAE\u662F465\uFF0C\u8FD8\u9700\u8981\u53BB\u670D\u52A1\u5668\u5F00\u542F\u5B89\u5168\u7B56\u7565\u914D\u7F6E\u7AEF\u53E3</span></span>
<span class="line"><span style="color:#A6ACCD;">        gitlab_rails[&#39;smtp_user_name&#39;] = &#39;xxxxxx@163.com&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">        gitlab_rails[&#39;smtp_password&#39;] = &quot;xxxxxxxxxx&quot;  # 163\u6388\u6743\u5BC6\u7801 \u4E0D\u662F163\u767B\u5F55\u5BC6\u7801\uFF0C\u5EFA\u8BAE\u767E\u5EA6\u53BB\u67E5</span></span>
<span class="line"><span style="color:#A6ACCD;">        gitlab_rails[&#39;smtp_domain&#39;] = &quot;163.com&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">        gitlab_rails[&#39;smtp_authentication&#39;] = &quot;login&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">        gitlab_rails[&#39;smtp_enable_starttls_auto&#39;] = true</span></span>
<span class="line"><span style="color:#A6ACCD;">        gitlab_rails[&#39;smtp_tls&#39;] = true</span></span>
<span class="line"><span style="color:#A6ACCD;">        gitlab_rails[&#39;smtp_openssl_verify_mode&#39;] = &#39;peer&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">        gitlab_rails[&#39;gitlab_email_from&#39;] = &#39;xxxxxx@163.com&#39; # \u53D1\u4EF6\u4EBA\u90AE\u7BB1  \u8FD8\u6709\u4E2A\u914D\u7F6E\u662F\u6284\u9001\u4EBA\u90AE\u7BB1\u5730\u5740\uFF0C</span></span>
<span class="line"><span style="color:#A6ACCD;">        user[&#39;git_user_email&#39;] = &quot;xxxxxx@163.com&quot;  # \u6821\u9A8C\u4EC0\u4E48\u4EC0\u4E48\u7684\u90AE\u7BB1 \u5FC5\u987B\u548C\u4E0A\u4E00\u4E2A\u4E00\u6837</span></span>
<span class="line"><span style="color:#A6ACCD;">    ports:</span></span>
<span class="line"><span style="color:#A6ACCD;">      - &#39;7001:443&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">      - &#39;7002:7002&#39;      # \u6CE8\u610F\u8FD9\u91CC\u4E0D\u662F80  \u4E0E\u4E0A\u9762external_url\u81EA\u5B9A\u4E49\u7AEF\u53E3\u4FDD\u6301\u4E00\u81F4</span></span>
<span class="line"><span style="color:#A6ACCD;">      - &#39;7003:22&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">    volumes:             # \u5BBF\u4E3B\u673A\u5730\u5740\u82E5\u6CA1\u6709\uFF0C\u4F1A\u81EA\u52A8\u521B\u5EFA\u76EE\u5F55</span></span>
<span class="line"><span style="color:#A6ACCD;">      - /gitlab/config:/etc/gitlab</span></span>
<span class="line"><span style="color:#A6ACCD;">      - /gitlab/log:/var/log/gitlab</span></span>
<span class="line"><span style="color:#A6ACCD;">      - /gitlab/data:/var/opt/gitlab</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,1),t=[e];function o(i,c,r,A,C,_){return n(),a("div",null,t)}var D=s(p,[["render",o]]);export{y as __pageData,D as default};
