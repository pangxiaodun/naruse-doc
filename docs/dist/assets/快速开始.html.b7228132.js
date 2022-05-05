import{_ as n,d as s}from"./app.1e4ce3bd.js";const a={},e=s(`<h1 id="\u5FEB\u901F\u5F00\u59CB" tabindex="-1"><a class="header-anchor" href="#\u5FEB\u901F\u5F00\u59CB" aria-hidden="true">#</a> \u5FEB\u901F\u5F00\u59CB</h1><h2 id="\u8D77\u6B65" tabindex="-1"><a class="header-anchor" href="#\u8D77\u6B65" aria-hidden="true">#</a> \u8D77\u6B65</h2><h3 id="\u514B\u9686\u9879\u76EE" tabindex="-1"><a class="header-anchor" href="#\u514B\u9686\u9879\u76EE" aria-hidden="true">#</a> \u514B\u9686\u9879\u76EE</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> clone https://github.com/Barrierml/Naruse.git
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="\u5B89\u88C5\u4F9D\u8D56" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5\u4F9D\u8D56" aria-hidden="true">#</a> \u5B89\u88C5\u4F9D\u8D56</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span>
<span class="token comment"># or</span>
cnpm <span class="token function">install</span>
<span class="token comment"># or </span>
<span class="token function">yarn</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="\u9884\u89C8" tabindex="-1"><a class="header-anchor" href="#\u9884\u89C8" aria-hidden="true">#</a> \u9884\u89C8</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> run start
<span class="token comment"># \u8F93\u51FA</span>
<span class="token comment"># dist/naruse.dev.debug.js    \u7F16\u8BD1\u540E\u7684\u4EE3\u7801</span>
<span class="token comment"># dist/naruse.dev.debug.json  \u7231\u7528\u6D4B\u8BD5\u4E13\u7528</span>
<span class="token comment"># dist/naruse.min.js					\u538B\u7F29\u540E\u7684\u4EE3\u7801</span>

<span class="token comment"># PC\u7AEF\u67E5\u770B\u6548\u679C</span>
<span class="token builtin class-name">cd</span> ./h5-demo
<span class="token function">npm</span> run dev

<span class="token comment"># \u5C0F\u7A0B\u5E8F\u7AEF\u67E5\u770B\u6548\u679C</span>
<span class="token comment"># \u76F4\u63A5\u4F7F\u7528\u6DD8\u5B9D\u5C0F\u7A0B\u5E8F\u5F00\u53D1\u8005\u5DE5\u5177\u6253\u5F00Naurse\u6839\u76EE\u5F55\u5373\u53EF</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h3 id="\u914D\u7F6E\u81EA\u5DF1\u7684\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u81EA\u5DF1\u7684\u7EC4\u4EF6" aria-hidden="true">#</a> \u914D\u7F6E\u81EA\u5DF1\u7684\u7EC4\u4EF6</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// naruse.config.js</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token operator">...</span>
    <span class="token literal-property property">input</span><span class="token operator">:</span> <span class="token string">&#39;./src/adverts/index&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u4FEE\u6539\u4E3A\u81EA\u5DF1\u7EC4\u4EF6\u8DEF\u5F84</span>
    <span class="token operator">...</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div>`,10);function r(p,c){return e}var t=n(a,[["render",r],["__file","\u5FEB\u901F\u5F00\u59CB.html.vue"]]);export{t as default};
