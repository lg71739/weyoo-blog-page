import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as a,c as s,d as t}from"./app.902f866d.js";const p={},e=t(`<h1 id="\u6570\u636E\u4EE3\u7406" tabindex="-1"><a class="header-anchor" href="#\u6570\u636E\u4EE3\u7406" aria-hidden="true">#</a> \u6570\u636E\u4EE3\u7406</h1><h2 id="\u5B9A\u4E49" tabindex="-1"><a class="header-anchor" href="#\u5B9A\u4E49" aria-hidden="true">#</a> \u5B9A\u4E49</h2><p>\u901A\u8FC7vm\u5BF9\u8C61\u6765\u4EE3\u7406data\u5BF9\u8C61\u4E2D\u5C5E\u6027\u7684\u64CD\u4F5C\uFF08\u8BFB/\u5199\uFF09</p><h2 id="\u597D\u5904" tabindex="-1"><a class="header-anchor" href="#\u597D\u5904" aria-hidden="true">#</a> \u597D\u5904</h2><p>\u66F4\u52A0\u65B9\u4FBF\u7684\u64CD\u4F5Cdata\u4E2D\u7684\u6570\u636E</p><h2 id="\u57FA\u672C\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#\u57FA\u672C\u539F\u7406" aria-hidden="true">#</a> \u57FA\u672C\u539F\u7406</h2><ul><li>\u901A\u8FC7Object.defineProperty()\u628Adata\u5BF9\u8C61\u4E2D\u6240\u6709\u5C5E\u6027\u6DFB\u52A0\u5230vm\u4E0A\u3002</li><li>\u4E3A\u6BCF\u4E00\u4E2A\u6DFB\u52A0\u5230vm\u4E0A\u7684\u5C5E\u6027\uFF0C\u90FD\u6307\u5B9A\u4E00\u4E2Agetter/setter\u3002</li><li>\u5728getter/setter\u5185\u90E8\u53BB\u64CD\u4F5C\uFF08\u8BFB/\u5199)data\u4E2D\u5BF9\u5E94\u7684\u5C5E\u6027\u3002</li></ul><p><img src="https://jihulab.com/byzh123/images/raw/images/pictures/2022/08/27_17_48_52_202208271748319.png" alt="img" loading="lazy"></p><h2 id="\u4EE3\u7801" tabindex="-1"><a class="header-anchor" href="#\u4EE3\u7801" aria-hidden="true">#</a> \u4EE3\u7801</h2><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- \u6570\u636E\u4EE3\u7406\uFF1A\u901A\u8FC7\u4E00\u4E2A\u5BF9\u8C61\u4EE3\u7406\u5BF9\u53E6\u4E00\u4E2A\u5BF9\u8C61\u4E2D\u5C5E\u6027\u7684\u64CD\u4F5C\uFF08\u8BFB/\u5199\uFF09--&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text/javascript<span class="token punctuation">&quot;</span></span> <span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
   <span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">x</span><span class="token operator">:</span><span class="token number">100</span><span class="token punctuation">}</span>
   <span class="token keyword">let</span> obj2 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">y</span><span class="token operator">:</span><span class="token number">200</span><span class="token punctuation">}</span>

   Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>obj2<span class="token punctuation">,</span><span class="token string">&#39;x&#39;</span><span class="token punctuation">,</span><span class="token punctuation">{</span>
    <span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
     <span class="token keyword">return</span> obj<span class="token punctuation">.</span>x
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">set</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">{</span>
     obj<span class="token punctuation">.</span>x <span class="token operator">=</span> value
    <span class="token punctuation">}</span>
   <span class="token punctuation">}</span><span class="token punctuation">)</span>
  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://jihulab.com/byzh123/images/raw/images/pictures/2022/08/27_17_51_26_202208271751655.png" alt="146bdb66-49fe-4c5d-8da9-a684aeee4255" loading="lazy"></p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- \u51C6\u5907\u597D\u4E00\u4E2A\u5BB9\u5668--&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>root<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>\u5B66\u6821\u540D\u79F0\uFF1A{{name}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>\u5B66\u6821\u5730\u5740\uFF1A{{address}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>

 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text/javascript<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  Vue<span class="token punctuation">.</span>config<span class="token punctuation">.</span>productionTip <span class="token operator">=</span> <span class="token boolean">false</span> <span class="token comment">//\u963B\u6B62 vue \u5728\u542F\u52A8\u65F6\u751F\u6210\u751F\u4EA7\u63D0\u793A\u3002</span>
  
  <span class="token keyword">const</span> vm <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
   <span class="token literal-property property">el</span><span class="token operator">:</span><span class="token string">&#39;#root&#39;</span><span class="token punctuation">,</span>
   <span class="token literal-property property">data</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&#39;\u5C1A\u7845\u8C37&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">address</span><span class="token operator">:</span><span class="token string">&#39;\u5B8F\u798F\u79D1\u6280\u56ED&#39;</span>
   <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
 </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://jihulab.com/byzh123/images/raw/images/pictures/2022/08/27_17_53_15_202208271753273.png" alt="132cbda4-ea18-4807-8578-7cb11b287d53" loading="lazy"></p>`,13),o=[e];function c(l,i){return a(),s("div",null,o)}var d=n(p,[["render",c],["__file","index.html.vue"]]);export{d as default};
