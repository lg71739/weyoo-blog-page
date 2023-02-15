import{_ as e,Z as a,$ as i,a4 as d}from"./framework-c23f4b14.js";const s={},n=d(`<h2 id="下载镜像文件" tabindex="-1"><a class="header-anchor" href="#下载镜像文件" aria-hidden="true">#</a> 下载镜像文件</h2><p>当前redis稳定版为7.0，为保证配置稳定性，推荐添加上Tags信息，拉取固定版本</p><p>本次我是用的是7.0.8版本</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> pull redis:7.0.8
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://jihulab.com/byzh123/images/-/raw/images/pictures/2023/02/15_9_47_23_15_9_47_6_image-20230215094700828.png" alt="下载镜像文件" tabindex="0" loading="lazy"><figcaption>下载镜像文件</figcaption></figure><h2 id="安装redis" tabindex="-1"><a class="header-anchor" href="#安装redis" aria-hidden="true">#</a> 安装Redis</h2><h3 id="创建数据目录" tabindex="-1"><a class="header-anchor" href="#创建数据目录" aria-hidden="true">#</a> 创建数据目录</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /mydata/redis/conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="创建配置文件" tabindex="-1"><a class="header-anchor" href="#创建配置文件" aria-hidden="true">#</a> 创建配置文件</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">touch</span> /mydata/redis/conf/redis.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>并在文件中插入如下内容</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 设置redis持久化
appendonly yes
# 设置Redis连接密码
requirepass root
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="创建实例" tabindex="-1"><a class="header-anchor" href="#创建实例" aria-hidden="true">#</a> 创建实例</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker run -p 6379:6379 --name redis -v /mydata/redis/data:/data -v/mydata/redis/conf/redis.conf:/etc/redis/redis.conf -d redis:7.0.8 redis-server /etc/redis/redis.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://jihulab.com/byzh123/images/-/raw/images/pictures/2023/02/15_10_8_19_image-20230215100819372.png" alt="创建实例" tabindex="0" loading="lazy"><figcaption>创建实例</figcaption></figure><div class="hint-container info"><p class="hint-container-title">提示:</p><p>运行命令失败的 先通过 <code>docker ps -a</code> redis 的id ,</p><p>然后使用<code>docker rm [id]</code>停掉之后再执行以上的命令</p></div><h2 id="连接测试" tabindex="-1"><a class="header-anchor" href="#连接测试" aria-hidden="true">#</a> 连接测试</h2><h3 id="查看启动情况" tabindex="-1"><a class="header-anchor" href="#查看启动情况" aria-hidden="true">#</a> 查看启动情况</h3><p>使用<code>docker ps</code> 命令查看启动情况</p><figure><img src="https://jihulab.com/byzh123/images/-/raw/images/pictures/2023/02/15_10_11_54_image-20230215101154132.png" alt="image-20230215101154132" tabindex="0" loading="lazy"><figcaption>image-20230215101154132</figcaption></figure><h3 id="redis-cli-连接" tabindex="-1"><a class="header-anchor" href="#redis-cli-连接" aria-hidden="true">#</a> redis-cli 连接</h3><p>执行如下命令 使用redis-cli 连接</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker exec -it redis redis-cli
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果正常执行如下命令表示Redis安装正常</p><figure><img src="https://jihulab.com/byzh123/images/-/raw/images/pictures/2023/02/15_10_17_5_image-20230215101705404.png" alt="连接测试" tabindex="0" loading="lazy"><figcaption>连接测试</figcaption></figure>`,25),r=[n];function c(t,l){return a(),i("div",null,r)}const h=e(s,[["render",c],["__file","1676344869409.html.vue"]]);export{h as default};
