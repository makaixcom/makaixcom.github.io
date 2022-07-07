import{_ as s,c as n,o as a,a as p}from"./app.2cf86ac7.js";const D=JSON.parse('{"title":"\u8BBE\u7F6E\u73AF\u5883\u53D8\u91CF","description":"","frontmatter":{},"headers":[],"relativePath":"temp/linux\u5B89\u88C5openjdk.md"}'),l={name:"temp/linux\u5B89\u88C5openjdk.md"},e=p(`<div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">sudo yum install java-11-openjdk-devel</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">$ java -version</span></span>
<span class="line"><span style="color:#A6ACCD;">openjdk version &quot;11.0.12&quot; 2021-07-20 LTS</span></span>
<span class="line"><span style="color:#A6ACCD;">OpenJDK Runtime Environment 18.9 (build 11.0.12+7-LTS)</span></span>
<span class="line"><span style="color:#A6ACCD;">OpenJDK 64-Bit Server VM 18.9 (build 11.0.12+7-LTS, mixed mode, sharing)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">$ which java</span></span>
<span class="line"><span style="color:#A6ACCD;">/usr/bin/java</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># \u8BBE\u7F6E\u73AF\u5883\u53D8\u91CF</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo tee /etc/profile.d/java11.sh &lt;&lt;EOF</span></span>
<span class="line"><span style="color:#A6ACCD;">export JAVA_HOME=$(dirname $(dirname $(readlink $(readlink $(which javac)))))</span></span>
<span class="line"><span style="color:#A6ACCD;">export PATH=\\$PATH:\\$JAVA_HOME/bin</span></span>
<span class="line"><span style="color:#A6ACCD;">export CLASSPATH=.:\\$JAVA_HOME/jre/lib:\\$JAVA_HOME/lib:\\$JAVA_HOME/lib/tools.jar</span></span>
<span class="line"><span style="color:#A6ACCD;">EOF</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># \u751F\u6548</span></span>
<span class="line"><span style="color:#A6ACCD;">source /etc/profile.d/java11.sh</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,1),o=[e];function c(t,r,i,A,C,d){return a(),n("div",null,o)}var y=s(l,[["render",c]]);export{D as __pageData,y as default};
