import{_ as e,o as i,c as n,e as d}from"./app.027a7703.js";const s={},l=d(`<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>sudo yum install java-11-openjdk-devel


$ java -version
openjdk version &quot;11.0.12&quot; 2021-07-20 LTS
OpenJDK Runtime Environment 18.9 (build 11.0.12+7-LTS)
OpenJDK 64-Bit Server VM 18.9 (build 11.0.12+7-LTS, mixed mode, sharing)

$ which java
/usr/bin/java

# \u8BBE\u7F6E\u73AF\u5883\u53D8\u91CF
sudo tee /etc/profile.d/java11.sh &lt;&lt;EOF
export JAVA_HOME=$(dirname $(dirname $(readlink $(readlink $(which javac)))))
export PATH=\\$PATH:\\$JAVA_HOME/bin
export CLASSPATH=.:\\$JAVA_HOME/jre/lib:\\$JAVA_HOME/lib:\\$JAVA_HOME/lib/tools.jar
EOF

# \u751F\u6548
source /etc/profile.d/java11.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),a=[l];function v(r,c){return i(),n("div",null,a)}var u=e(s,[["render",v],["__file","openjdk.html.vue"]]);export{u as default};
