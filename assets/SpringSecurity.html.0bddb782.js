import{_ as e,o as i,c as n,e as a}from"./app.fc1c3de5.js";const r={},s=a(`<h2 id="\u6743\u9650\u7BA1\u7406" tabindex="-1"><a class="header-anchor" href="#\u6743\u9650\u7BA1\u7406" aria-hidden="true">#</a> \u6743\u9650\u7BA1\u7406</h2><h3 id="\u4EC0\u4E48\u662F\u8BA4\u8BC1" tabindex="-1"><a class="header-anchor" href="#\u4EC0\u4E48\u662F\u8BA4\u8BC1" aria-hidden="true">#</a> \u4EC0\u4E48\u662F\u8BA4\u8BC1</h3><p>\u5224\u65AD\u4E00\u4E2A\u7528\u6237\u662F\u5426\u4E3A\u5408\u6CD5\u7528\u6237</p><h3 id="\u4EC0\u4E48\u662F\u6388\u6743" tabindex="-1"><a class="header-anchor" href="#\u4EC0\u4E48\u662F\u6388\u6743" aria-hidden="true">#</a> \u4EC0\u4E48\u662F\u6388\u6743</h3><p>\u63A7\u5236\u8C01\u80FD\u8BBF\u95EE\u54EA\u4E9B\u6743\u9650</p><h2 id="\u81EA\u5B9A\u4E49\u9ED8\u8BA4\u7528\u6237" tabindex="-1"><a class="header-anchor" href="#\u81EA\u5B9A\u4E49\u9ED8\u8BA4\u7528\u6237" aria-hidden="true">#</a> \u81EA\u5B9A\u4E49\u9ED8\u8BA4\u7528\u6237</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>spring.security.user.name=root
spring.security.user.password=root
spring.security.user.roles=admin,user
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u81EA\u5B9A\u4E49\u8D44\u6E90\u8BA4\u8BC1\u8DEF\u5F84\u89C4\u5219" tabindex="-1"><a class="header-anchor" href="#\u81EA\u5B9A\u4E49\u8D44\u6E90\u8BA4\u8BC1\u8DEF\u5F84\u89C4\u5219" aria-hidden="true">#</a> \u81EA\u5B9A\u4E49\u8D44\u6E90\u8BA4\u8BC1\u8DEF\u5F84\u89C4\u5219</h2><p>\u4E00\u4E2A\u5E94\u7528\u4E2D\u7684\u8D44\u6E90\u5206\u4E3A\u4E24\u90E8\u5206\uFF1A\u516C\u5F00\u8D44\u6E90\u548C\u53D7\u9650\u8D44\u6E90\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>
@Configuration
@EnableWebSecurity
public class SecurityConfiguration {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        // configure HTTP security...
        http.authorizeRequests()
                .antMatchers(&quot;/index&quot;).permitAll() // \u653E\u884C\u8D44\u6E90
                .anyRequest().authenticated() // \u8BA4\u8BC1\u8D44\u6E90
            .and()
                .formLogin();// \u5F00\u542F\u8868\u5355\u8BA4\u8BC1

        return http.build();
    }

}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u81EA\u5B9A\u4E49\u767B\u5F55\u9875\u9762" tabindex="-1"><a class="header-anchor" href="#\u81EA\u5B9A\u4E49\u767B\u5F55\u9875\u9762" aria-hidden="true">#</a> \u81EA\u5B9A\u4E49\u767B\u5F55\u9875\u9762</h2>`,11),d=[s];function t(l,c){return i(),n("div",null,d)}var v=e(r,[["render",t],["__file","SpringSecurity.html.vue"]]);export{v as default};
