
<style scoped>
.layout {
    border: 1px solid #d7dde4;
    background: #f5f7f9;
}

.layout-logo {
    width: 100px;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
}

.layout-nav {
    width: 420px;
    margin: 0 auto;
}

.layout-assistant {
    width: 300px;
    margin: 0 auto;
    height: inherit;
}

.layout-breadcrumb {
    padding: 10px 15px 0;
}

.layout-content {
    min-height: 200px;
    margin-left: 15px;
    overflow: hidden;
    background: #fff;
    border-radius: 4px;
}

.layout-content-main {
    padding: 10px;
}

.layout-copy {
    text-align: center;
    padding: 10px 0 20px;
    color: #9ea7b4;
}
</style>
<template>
    <div id="app">
        <div class="layout">
            <Menu mode="horizontal" theme="dark" active-name="1" @on-select="goTimeLine">
                <div class="layout-logo">
                </div>
                <div class="layout-nav">
                    <MenuItem name="1">
                    <Icon type="ios-navigate"></Icon>
                    首页
                    </MenuItem>
                    <MenuItem name="2"  >
                    <Icon type="ios-calendar" ></Icon>
                    时间轴
                    </MenuItem>
                    <MenuItem name="4">
                    <Icon type="social-javascript"></Icon>
                    案例
                    </MenuItem>
                    <MenuItem name="3">
                    <Icon type="person"></Icon>
                    关于我
                    </MenuItem>
                </div>
            </Menu>
            <router-view />
            <div class="layout-copy" v-on:click="goTimeLine">
                2011-2016 &copy; TalkingData
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'app',
    methods: {
    goTimeLine(name){
        console.log(name);
        switch(name){
            case '1':
               this.$router.push({ path: '/' });
                break;
            case '2':
               this.$router.push({ path: '/TimeLine' });
                break;
        }
    //
    // alert(name);
    // alert(222);
    }
}
}
</script>
