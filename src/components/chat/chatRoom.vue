<template>
  <div style="height:100%">
    <Row style='height:290px;'>
      <Col span='24' style="height:100%;">
      <div style="height:40px;background:#eee;">
        <span style="line-height: 40px; margin: 20px auto; font-size:18px;margin-left:10px;font-weight:bold">Chevalier</span>
        <span style="margin-left:370px;">
          <Icon type="ios-information-outline" size='20'></Icon>
        </span>
      </div>
      <div style="overflow-y: auto;height:250px;">
        <div class="left-box">
          <div class="avatar">
            <Avatar style="background-color: #87d068" icon="person" size="small" />
          </div>
          <p style="width:100%;padding:2px 10px;">
            asdadadasdasdasddassadasddasdsad123121231321231232131231313123213212312312313221231
          </p>
        </div>
        <div class="left-box">
          <div class="avatar">
            <Avatar style="background-color: #87d068" icon="person" size="small" />
          </div>
          <p style="width:100%;padding:2px 10px;">
            asdadadasdasdasddassadasddasdsad123121231321231232131231313123213212312312313221231
          </p>
        </div>
        <div class="left-box">
          <div class="avatar">
            <Avatar style="background-color: #87d068" icon="person" size="small" />
          </div>
          <p style="width:100%;padding:2px 10px;">
            asdadadasdasdasddassadasddasdsad123121231321231232131231313123213212312312313221231
          </p>
        </div>
        <div class="left-box">
          <div class="avatar">
            <Avatar style="background-color: #87d068" icon="person" size="small" />
          </div>
          <p style="width:100%;padding:2px 10px;">
            asdadadasdasdasddassadasddasdsad123121231321231232131231313123213212312312313221231
          </p>
        </div>
        <div class="left-box">
          <div class="avatar">
            <Avatar style="background-color: #87d068" icon="person" size="small" />
          </div>
          <p style="width:100%;padding:2px 10px;">
            asdadadasdasdasddassadasddasdsad123121231321231232131231313123213212312312313221231
          </p>
        </div>
        <div class="right-box">
          <div class="avatar">
            <Avatar style="background-color: #87d068" icon="person" size="small" />
          </div>
          <p style="width:100%;padding:2px 10px;">
            asdadadasdasdasddassadasddasdsad123121231321231232131231313123213212312312313221231
          </p>
        </div>
      </div>
      </Col>
    </Row>
    <Row>
      <Col span='24' style="height:100%">
      <Input v-model="value6" type="textarea" :autosize="{minRows: 5,maxRows: 5}"></Input>
      </Col>
    </Row>
  </div>
</template>
<script>
  export default {
    methods:{

    }
  };

</script>
<style>
  .left-box {
    position: relative;
    top: 10px;
    left: 60px;
    max-width: 300px;
    min-height: 40px;
    background: #eee;
    -moz-border-radius: 12px;
    -webkit-border-radius: 12px;
    border-radius: 6px;
    font-size: 16px;
    font-weight: 500;
    word-wrap: break-word;
    margin-bottom: 10px;
    /*  */
  }

  .left-box .avatar {
    position: absolute;
    top: 10px;
    left: -50px;
  }

  .left-box:before {
    position: absolute;
    content: "";
    width: 0;
    height: 0;
    right: 100%;
    top: 12px;
    border-top: 8px solid transparent;
    border-right: 16px solid #eee;
    border-bottom: 8px solid transparent;
  }

  .right-box {
    position: relative;
    top: 10px;
    right: -120px;
    max-width: 300px;
    min-height: 40px;
    background: #eee;
    -moz-border-radius: 12px;
    -webkit-border-radius: 12px;
    border-radius: 6px;
    font-size: 16px;
    font-weight: 500;
    word-wrap: break-word;
    margin-bottom: 10px;
    /*  */
  }

  .right-box .avatar {
    position: absolute;
    top: 10px;
    right: -50px;
  }

  .right-box:after {
    position: absolute;
    content: "";
    width: 0;
    height: 0;
    left: 100%;
    top: 12px;
    border-top: 8px solid transparent;
    border-left: 16px solid #eee;
    border-bottom: 8px solid transparent;
  }

</style>
