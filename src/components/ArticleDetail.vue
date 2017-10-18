<style>
	.markdown-body {
		box-sizing: border-box;
		min-width: 200px;
		max-width: 980px;
		margin: 0 auto;
		padding: 45px;
	}

	@media (max-width: 767px) {
		.markdown-body {
			padding: 15px;
		}
	}
</style>
<template>
<div class="hello" style="margin-top:15px;">
  <Row>
  <Col span="16" offset="2" style='min-width:470px;background:#fff'>
  <div class="article-panel detail-box">
        <h1>这个是文章标题</h1>
        <div class="article-tip article-detail-hint" >
          <span class="article-tip-stick">置顶帖</span>
          <span class="article-tip-jing">精帖</span>
          <span>js问题集合</span>
          <div class="article-list-hint">
           <Icon type="chatbox-working" size=18 color="#000"></Icon>8
            <Icon type="ios-eye" size=18 color="#000" ></Icon>106
          </div>
        </div>
  </div>
  <div class="markdown-body">
      <h2>开发环境状态 develop branch status</h2>
      <p><a href="https://lab.niuchuangwin.com/be/ncwz-node/commits/develop"><img alt="pipeline status" src="https://lab.niuchuangwin.com/be/ncwz-node/badges/develop/pipeline.svg"></a><br> <a href="https://lab.niuchuangwin.com/be/ncwz-node/commits/develop"><img alt="coverage report" src="https://lab.niuchuangwin.com/be/ncwz-node/badges/develop/coverage.svg"></a></p> <h2>生产环境状态 master branch status</h2> <p><a href="https://lab.niuchuangwin.com/be/ncwz-node/commits/master"><img alt="pipeline status" src="https://lab.niuchuangwin.com/be/ncwz-node/badges/master/pipeline.svg"></a><br> <a href="https://lab.niuchuangwin.com/be/ncwz-node/commits/master"><img alt="coverage report" src="https://lab.niuchuangwin.com/be/ncwz-node/badges/master/coverage.svg"></a></p> <h2>本镜像使用了以下基础镜像:</h2> <ul> <li>phusion/passenger-nodejs:0.9.25</li> <li>monogo:3.4.8</li> <li>redis:4.0.1</li> </ul> <h2>使用前的准备工作</h2> <p>在命令行运行以下命令创建需要的宿主数据卷(Volumes)，并赋予权限：</p> <pre class="hljs"><code class="">$ sudo mkdir /srv &amp;&amp; sudo mkdir /srv/docker $ sudo mkdir /srv/docker/ncwz $ sudo chown yourusername:yourusergroup /srv/docker/ </code></pre> <p>本地 MacOs 开发环境下，请至 Docker Preferences 选中 File Sharing 标签页，<br> 添加绑定的本地数据卷 <code>/srv/docker</code></p> <ol> <li>mongodb 的数据将会被保存在 /srv/docker/ncwz/mongo</li> <li>redis 的数据将会被保存在 /srv/docker/ncwz/redis</li> <li>nginx 的 log 数据将会被保存在 /srv/docker/ncwz/nginx</li> </ol> <h2>运行 docker-compose</h2> <p>请确保 Docker 监护进程在运行中，至本文件夹目录下，同时在命令行运行以下命令启动：</p> <pre class="hljs"><code class="">$ docker-compose up </code></pre> <p>或运行以下命令结束服务：</p> <pre class="hljs"><code class="">$ docker-compose down </code></pre> <h2>安装初始化数据</h2> <p>运行以下命令重置数据库，注意该命令只能在开发和测试环境使用，请相应修改环境变量:</p> <pre class="hljs"><code class="">$ docker-compose exec api bash -c "NODE_ENV=testing yarn run resetDB" </code></pre> <p>运行以下命令安装数据：</p> <pre class="hljs"><code class="">$ docker-compose exec api bash -c "NODE_ENV=testing yarn run fixture" </code></pre> <h2>运行测试脚本</h2> <p>运行以下命令进行测试，注意该命令只能在开发和测试环境使用，请相应修改环境变量:</p> <pre class="hljs"><code class="">$ docker-compose exec api bash -c "NODE_ENV=testing yarn run test" </code></pre> <h2>ESLINT 检查代码质量</h2> <p>可以使用特定的编辑器自动格式化 JS 文件，尽可能优化代码质量，详细 IBM 教程：<br> https://developer.ibm.com/node/2016/07/27/auto-fixing-formatting-your-javascript-with-eslint/</p> <h2>登录研发中心 www.niujianjinfu.com/lab</h2> <p>用户名: <code>alibaba</code><br> 密码: <code>sdfdsfsdfds</code><br> Token: <code>assdsaasadadasd==</code></p> <h2>注意事项</h2> <ul> <li>请结合 Loopback 官方 API 文档：https://apidocs.strongloop.com/loopback</li> <li>确保使用 yarn 管理 npm 包；</li> <li>测试服务器地址：23131231231，可在 <code>/etc/hosts</code> 添加 <code>52.80.82.215 www.niujianjinfu.com</code> 进行域名访问；</li> <li>生产服务器地址：1231313132 -&gt; www.niujianjinfu.com；</li> </ul>
  </div>
  </Col>
   </Row>
</div>
</template>

<script>
export default {
 name: 'ArticleDetail',
 data() {
    return {
    }
}
}
</script>

