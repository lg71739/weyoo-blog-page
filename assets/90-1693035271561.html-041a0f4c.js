import{_ as e,U as a,V as i,a4 as r}from"./framework-0db41e67.js";const t={},n=r(`<h1 id="zerotier的安装与配置" tabindex="-1"><a class="header-anchor" href="#zerotier的安装与配置" aria-hidden="true">#</a> Zerotier的安装与配置</h1><h2 id="安装zerotier" tabindex="-1"><a class="header-anchor" href="#安装zerotier" aria-hidden="true">#</a> 安装Zerotier</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-s</span> https://install.zerotier.com <span class="token operator">|</span> <span class="token function">sudo</span> <span class="token function">bash</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://jihulab.com/byzh123/images/raw/images/pictures/2023/08/28_19_55_26_202308281955562.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure><hr><h2 id="启动停止服务" tabindex="-1"><a class="header-anchor" href="#启动停止服务" aria-hidden="true">#</a> 启动停止服务</h2><h3 id="启动zerotier" tabindex="-1"><a class="header-anchor" href="#启动zerotier" aria-hidden="true">#</a> 启动Zerotier</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo systemctl start zerotier-one.service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="重启zerotier" tabindex="-1"><a class="header-anchor" href="#重启zerotier" aria-hidden="true">#</a> 重启Zerotier</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo systemctl restart zerotier-one.service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="设置开机自启动" tabindex="-1"><a class="header-anchor" href="#设置开机自启动" aria-hidden="true">#</a> 设置开机自启动</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo systemctl enable zerotier-one.service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="查看服务状态" tabindex="-1"><a class="header-anchor" href="#查看服务状态" aria-hidden="true">#</a> 查看服务状态</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>zerotier-cli status
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://jihulab.com/byzh123/images/raw/images/pictures/2023/08/28_19_56_3_202308281956196.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure><hr><h2 id="管理网络" tabindex="-1"><a class="header-anchor" href="#管理网络" aria-hidden="true">#</a> 管理网络</h2><h3 id="加入网络" tabindex="-1"><a class="header-anchor" href="#加入网络" aria-hidden="true">#</a> 加入网络</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>zerotier-cli join 8850xxxxxxxxxxxxxxx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://jihulab.com/byzh123/images/raw/images/pictures/2023/08/28_19_56_6_202308281956414.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure><h3 id="离开网络" tabindex="-1"><a class="header-anchor" href="#离开网络" aria-hidden="true">#</a> 离开网络</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>zerotier-cli leave 8850xxxxxxxxxxxxxxx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="查看所有的网络" tabindex="-1"><a class="header-anchor" href="#查看所有的网络" aria-hidden="true">#</a> 查看所有的网络</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>zerotier-cli listnetworks
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://jihulab.com/byzh123/images/raw/images/pictures/2023/08/28_19_56_9_202308281956719.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure>`,25),s=[n];function d(l,c){return a(),i("div",null,s)}const h=e(t,[["render",d],["__file","90-1693035271561.html.vue"]]);export{h as default};
