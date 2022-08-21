import{_ as a,o as i,c as r,b as e,a as d,e as o,d as n,r as t}from"./app.f2ae7367.js";const l={},c=o(`<h2 id="\u65B9\u5F0F1" tabindex="-1"><a class="header-anchor" href="#\u65B9\u5F0F1" aria-hidden="true">#</a> \u65B9\u5F0F1</h2><p>Dockerfile</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>FROM openjdk:8-jdk-alpine
ARG JAR_FILE=target/*.jar
COPY \${JAR_FILE} app.jar
ENTRYPOINT [&quot;java&quot;,&quot;-jar&quot;,&quot;/app.jar&quot;]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5982\u679C\u662F <code>gradle</code>\u6267\u884C\u4EE5\u4E0B\u547D\u4EE4</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>docker build --build-arg JAR_FILE=build/libs/\\*.jar -t springio/gs-spring-boot-docker .
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5982\u679C\u662F <code>maven</code>\u6267\u884C\u4EE5\u4E0B\u547D\u4EE4</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>docker build -t springio/gs-spring-boot-docker .
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u65B9\u5F0F2" tabindex="-1"><a class="header-anchor" href="#\u65B9\u5F0F2" aria-hidden="true">#</a> \u65B9\u5F0F2</h2><p>dockerfile</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>FROM openjdk:8-jdk-alpine
RUN addgroup -S spring &amp;&amp; adduser -S spring -G spring
USER spring:spring
ARG JAR_FILE=target/*.jar
COPY \${JAR_FILE} app.jar
ENTRYPOINT [&quot;java&quot;,&quot;-jar&quot;,&quot;/app.jar&quot;]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> build -t springio/gs-spring-boot-docker <span class="token builtin class-name">.</span>
<span class="token function">docker</span> run -p <span class="token number">8080</span>:8080 springio/gs-spring-boot-docker
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4F7F\u7528\u81EA\u5B9A\u4E49\u7684\u8FD0\u884C\u73AF\u5883" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u81EA\u5B9A\u4E49\u7684\u8FD0\u884C\u73AF\u5883" aria-hidden="true">#</a> \u4F7F\u7528\u81EA\u5B9A\u4E49\u7684\u8FD0\u884C\u73AF\u5883</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> run -e <span class="token string">&quot;SPRING_PROFILES_ACTIVE=prod&quot;</span> -p <span class="token number">8080</span>:8080 -t springio/gs-spring-boot-docker
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,13),u=n("\u5F15\u7528"),p={href:"https://spring.io/guides/gs/spring-boot-docker/",target:"_blank",rel:"noopener noreferrer"},g=n("https://spring.io/guides/gs/spring-boot-docker/");function v(b,m){const s=t("ExternalLinkIcon");return i(),r("div",null,[c,e("blockquote",null,[e("p",null,[u,e("a",p,[g,d(s)])])])])}var k=a(l,[["render",v],["__file","docker-jar2img.html.vue"]]);export{k as default};