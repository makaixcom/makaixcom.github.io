import{_ as e,o as i,c as n,e as a}from"./app.f2ae7367.js";const d={},r=a(`<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>docker run -id --name myrabbit -e RABBITMQ_DEFAULT_USER=admin -e RABBITMQ_DEFAULT_PASS=123456 -p 15672:15672 -p 5672:5672 rabbitmq:3-management
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u8FD0\u884Crabbitmq\u547D\u4EE4\u89E3\u6790(\u4E0B\u9762\u662F\u547D\u4EE4\u62C6\u5206)\uFF1A

docker run -d --name   -- \u8FD9\u91CC\u662F\u56FA\u5B9A\u7684

Myrabbitmq     -- \u8FD9\u4E2A\u8868\u793A\u5F53rabbitmq\u5728docker\u4E2D\u8FD0\u884C\u8D77\u6765\u540E\uFF0C\u5728docker\u4E2D\u7684\u81EA\u5B9A\u4E49\u540D\u79F0 (\u5C31\u597D\u6BD4\u624B\u673A\u5E94\u7528\u7684\u91CD\u547D\u540D\u3002\u7231\u6539\u4E0D\u6539)

-e RABBITMQ_DEFAULT_USER=admin -e RABBITMQ_DEFAULT_PASS=admin   -- \u7ED9rabbitmq\u8BBE\u7F6E\u767B\u5F55\u7684\u7528\u6237\u540D\u3001\u5BC6\u7801(\u8FD9\u91CC\u7684\u7528\u6237\u540D\u3001\u5BC6\u7801\u90FD\u4E3Aadmin)

-p 15672:15672 -p 5673:5672  -- \u6BD4\u5982\u53EA\u770B\uFF1A-p 5673:5672 \u8FD9\u91CC\u7684 -p \u8868\u793A\u6620\u5C04\u7AEF\u53E3\uFF0C 5673\u8868\u793Alinux\u670D\u52A1\u5668\u7684\u7AEF\u53E3\u53F7\uFF0C5672\u8868\u793Adocker\u955C\u50CF\u4E2D\u8FD0\u884C\u7A0B\u5E8F\u7684\u7AEF\u53E3\u53F7 (\u6211\u8FD9\u91CC\u4F7F\u75285673\u7AEF\u53E3\u53F7\u7684\u539F\u56E0\u662F\uFF1A\u6211\u7684activemq\u7684\u7AEF\u53E3\u4F7F\u7528\u4E865672) 

rabbitmq:3.7-management-alpine  -- \u5F53\u4F7F\u7528\u547D\u4EE4\uFF1Adocker images \u770B\u89C1 REPOSTTORY \u548C TAG \u4E0B\u9762\u7684rabbitmq \u548C 3.7-management-alpine \u5728\u4ED6\u4EEC\u4E2D\u95F4\u52A0\u4E2A \u5192\u53F7
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),s=[r];function l(t,m){return i(),n("div",null,s)}var b=e(d,[["render",l],["__file","108-rabbitmq.html.vue"]]);export{b as default};
