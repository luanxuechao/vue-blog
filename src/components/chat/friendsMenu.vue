<template>
  <div style="height:100%">
    <Row style="height:100%;" class="scroll">
      <Col span='6' style="height:100%; background:#ffffff;border-right:1px solid #eee;overflow-y: auto;">
      <div style="width:100%; border-bottom:1px solid #eee">
        <Button style="width:150px; margin:10px auto;display:block;">添加好友</Button>
      </div>
      <div>
        <Collapse accordion style="background:#fff !important;border:none;">
          <Panel name="1" style="border-top:none !important;">
            我的好友
            <div slot="content">
              <div class='person' tabindex="1" style='height:45px;position:relative;margin-left:-16px;width:170px;'>
                <div class="demo-avatar" style="position:absoulte;display:flex;margin-left:10px;">
                  <Avatar style="background-color: #87d068; width:40px;margin:0 auto;" icon="person" />
                  <div style="margin-left:10px">
                    <h3>
                      Chevalier
                    </h3>
                    <span style='overflow:hidden; text-overflow:ellipsis;
                          display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:1;'>
                      这是测试的一段话哈哈哈哈
                    </span>
                  </div>
                </div>
              </div>
              <div class='person' tabindex="2" style='height:45px;position:relative;margin-left:-16px;width:170px;'>
                <div class="demo-avatar" style="position:absoulte;display:flex;margin-left:10px;">
                  <Avatar style="background-color: #87d068; width:40px;margin:auto 0;" src='http://www.qqzhi.com/uploadpic/2015-01-22/022222987.jpg'
                  />
                  <div style="margin-left:10px">
                    <h3>
                      Chevalier
                    </h3>
                    <span style='overflow:hidden; text-overflow:ellipsis;
                          display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:1;'>
                      这是测试的一段话哈哈哈哈
                    </span>
                  </div>
                </div>
              </div>
              <div class='person' tabindex="3" style='height:45px;position:relative;margin-left:-16px;width:170px;'>
                <div class="demo-avatar" style="position:absoulte;display:flex;margin-left:10px;">
                  <Avatar style="background-color: #87d068; width:40px;margin:auto 0;" src='http://qq1234.org/uploads/allimg/140818/3_140818171934_4.jpg'
                  />
                  <div style="margin-left:10px">
                    <h3>
                      哇哈哈
                    </h3>
                    <span style='overflow:hidden; text-overflow:ellipsis;
                          display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:1;'>
                      这是测试的一段话哈哈哈哈
                    </span>
                  </div>
                </div>
              </div>
              <div style='height:45px;position:relative;margin-left:-16px;width:170px;'>
                <div class="demo-avatar" style="position:absoulte;display:flex;margin-left:10px;">
                  <Avatar style="background-color: #87d068; width:40px;margin:0 auto;" src='http://qq1234.org/uploads/allimg/140818/3_140818171934_4.jpg'
                  />
                  <div style="margin-left:10px">
                    <h3>
                      飞旺
                    </h3>
                    <span style='overflow:hidden; text-overflow:ellipsis;
                          display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:1;'>
                      这是测试的一段话哈哈哈哈
                    </span>
                  </div>
                </div>
              </div>
              <div style='height:45px;position:relative;margin-left:-16px;width:170px;'>
                <div class="demo-avatar" style="position:absoulte;display:flex;margin-left:10px;">
                  <Avatar style="background-color: #87d068; width:40px;margin:0 auto;" src="https://i.loli.net/2017/08/21/599a521472424.jpg"
                  />
                  <div style="margin-left:10px">
                    <h3>
                      卫龙
                    </h3>
                    <span style='overflow:hidden; text-overflow:ellipsis;
                          display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:1;'>
                      这是测试的一段话哈哈哈哈
                    </span>
                  </div>
                </div>
              </div>
              <div style='height:45px;position:relative;margin-left:-16px;width:170px;'>
                <div class="demo-avatar" style="position:absoulte;display:flex;margin-left:10px;">
                  <Avatar style="background-color: #87d068; width:40px;margin:0 auto;" src='http://qq1234.org/uploads/allimg/140818/3_140818171934_4.jpg'
                  />
                  <div style="margin-left:10px">
                    <h3>
                      小当前
                    </h3>
                    <span style='overflow:hidden; text-overflow:ellipsis;
                          display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:1;'>
                      这是测试的一段话哈哈哈哈
                    </span>
                  </div>
                </div>
              </div>
              <div style='height:45px;position:relative;margin-left:-16px;width:170px;'>
                <div class="demo-avatar" style="position:absoulte;display:flex;margin-left:10px;">
                  <Avatar style="background-color: #87d068; width:40px;margin:0 auto;" src="https://i.loli.net/2017/08/21/599a521472424.jpg"
                  />
                  <div style="margin-left:10px">
                    <h3>
                      虹桥
                    </h3>
                    <span style='overflow:hidden; text-overflow:ellipsis;
                          display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:1;'>
                      这是测试的一段话哈哈哈哈
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Panel>
          <Panel name="2" style="border:none !important;">
            我的家人
            <div slot="content">
              <div style='height:45px;position:relative;margin-left:-16px;width:170px;'>
                <div class="demo-avatar" style="position:absoulte;display:flex;margin-left:10px;">
                  <Avatar style="background-color: #87d068; width:40px;margin:0 auto;" icon="person" />
                  <div style="margin-left:10px">
                    <h3>
                      Chevalier
                    </h3>
                    <span style='overflow:hidden; text-overflow:ellipsis;
                          display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:1;'>
                      这是测试的一段话哈哈哈哈
                    </span>
                  </div>
                </div>
              </div>
              <div style='height:45px;position:relative;margin-left:-16px;width:170px;'>
                <div class="demo-avatar" style="position:absoulte;display:flex;margin-left:10px;">
                  <Avatar style="background-color: #87d068; width:40px;margin:auto 0;" src='http://www.qqzhi.com/uploadpic/2015-01-22/022222987.jpg'
                  />
                  <div style="margin-left:10px">
                    <h3>
                      Chevalier
                    </h3>
                    <span style='overflow:hidden; text-overflow:ellipsis;
                          display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:1;'>
                      这是测试的一段话哈哈哈哈
                    </span>
                  </div>
                </div>
              </div>
              <div style='height:45px;position:relative;margin-left:-16px;width:170px;'>
                <div class="demo-avatar" style="position:absoulte;display:flex;margin-left:10px;">
                  <Avatar style="background-color: #87d068; width:40px;margin:0 auto;" src='http://qq1234.org/uploads/allimg/140818/3_140818171934_4.jpg'
                  />
                  <div style="margin-left:10px">
                    <h3>
                      哇哈哈
                    </h3>
                    <span style='overflow:hidden; text-overflow:ellipsis;
                          display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:1;'>
                      这是测试的一段话哈哈哈哈
                    </span>
                  </div>
                </div>
              </div>
              <div style='height:45px;position:relative;margin-left:-16px;width:170px;'>
                <div class="demo-avatar" style="position:absoulte;display:flex;margin-left:10px;">
                  <Avatar style="background-color: #87d068; width:40px;margin:0 auto;" src='http://qq1234.org/uploads/allimg/140818/3_140818171934_4.jpg'
                  />
                  <div style="margin-left:10px">
                    <h3>
                      飞旺
                    </h3>
                    <span style='overflow:hidden; text-overflow:ellipsis;
                          display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:1;'>
                      这是测试的一段话哈哈哈哈
                    </span>
                  </div>
                </div>
              </div>
              <div style='height:45px;position:relative;margin-left:-16px;width:170px;'>
                <div class="demo-avatar" style="position:absoulte;display:flex;margin-left:10px;">
                  <Avatar style="background-color: #87d068; width:40px;margin:0 auto;" src="https://i.loli.net/2017/08/21/599a521472424.jpg"
                  />
                  <div style="margin-left:10px">
                    <h3>
                      卫龙
                    </h3>
                    <span style='overflow:hidden; text-overflow:ellipsis;
                          display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:1;'>
                      这是测试的一段话哈哈哈哈
                    </span>
                  </div>
                </div>
              </div>
              <div style='height:45px;position:relative;margin-left:-16px;width:170px;'>
                <div class="demo-avatar" style="position:absoulte;display:flex;margin-left:10px;">
                  <Avatar style="background-color: #87d068; width:40px;margin:0 auto;" src='http://qq1234.org/uploads/allimg/140818/3_140818171934_4.jpg'
                  />
                  <div style="margin-left:10px">
                    <h3>
                      小当前
                    </h3>
                    <span style='overflow:hidden; text-overflow:ellipsis;
                          display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:1;'>
                      这是测试的一段话哈哈哈哈
                    </span>
                  </div>
                </div>
              </div>
              <div style='height:45px;position:relative;margin-left:-16px;width:170px;'>
                <div class="demo-avatar" style="position:absoulte;display:flex;margin-left:10px;">
                  <Avatar style="background-color: #87d068; width:40px;margin:0 auto;" src="https://i.loli.net/2017/08/21/599a521472424.jpg"
                  />
                  <div style="margin-left:10px">
                    <h3>
                      虹桥
                    </h3>
                    <span style='overflow:hidden; text-overflow:ellipsis;
                          display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:1;'>
                      这是测试的一段话哈哈哈哈
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Panel>
          <Panel name="3" style="border-top:none !important;">
            我的同学
            <div slot="content">
              <div style='height:45px;position:relative;margin-left:-16px;width:170px;'>
                <div class="demo-avatar" style="position:absoulte;display:flex;margin-left:10px;">
                  <Avatar style="background-color: #87d068; width:40px;margin:0 auto;" icon="person" />
                  <div style="margin-left:10px">
                    <h3>
                      Chevalier
                    </h3>
                    <span style='overflow:hidden; text-overflow:ellipsis;
                          display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:1;'>
                      这是测试的一段话哈哈哈哈
                    </span>
                  </div>
                </div>
              </div>
              <div style='height:45px;position:relative;margin-left:-16px;width:170px;'>
                <div class="demo-avatar" style="position:absoulte;display:flex;margin-left:10px;">
                  <Avatar style="background-color: #87d068; width:40px;margin:auto 0;" src='http://www.qqzhi.com/uploadpic/2015-01-22/022222987.jpg'
                  />
                  <div style="margin-left:10px">
                    <h3>
                      Chevalier
                    </h3>
                    <span style='overflow:hidden; text-overflow:ellipsis;
                          display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:1;'>
                      这是测试的一段话哈哈哈哈
                    </span>
                  </div>
                </div>
              </div>
              <div style='height:45px;position:relative;margin-left:-16px;width:170px;'>
                <div class="demo-avatar" style="position:absoulte;display:flex;margin-left:10px;">
                  <Avatar style="background-color: #87d068; width:40px;margin:0 auto;" src='http://qq1234.org/uploads/allimg/140818/3_140818171934_4.jpg'
                  />
                  <div style="margin-left:10px">
                    <h3>
                      哇哈哈
                    </h3>
                    <span style='overflow:hidden; text-overflow:ellipsis;
                          display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:1;'>
                      这是测试的一段话哈哈哈哈
                    </span>
                  </div>
                </div>
              </div>
              <div style='height:45px;position:relative;margin-left:-16px;width:170px;'>
                <div class="demo-avatar" style="position:absoulte;display:flex;margin-left:10px;">
                  <Avatar style="background-color: #87d068; width:40px;margin:0 auto;" src='http://qq1234.org/uploads/allimg/140818/3_140818171934_4.jpg'
                  />
                  <div style="margin-left:10px">
                    <h3>
                      飞旺
                    </h3>
                    <span style='overflow:hidden; text-overflow:ellipsis;
                          display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:1;'>
                      这是测试的一段话哈哈哈哈
                    </span>
                  </div>
                </div>
              </div>
              <div style='height:45px;position:relative;margin-left:-16px;width:170px;'>
                <div class="demo-avatar" style="position:absoulte;display:flex;margin-left:10px;">
                  <Avatar style="background-color: #87d068; width:40px;margin:0 auto;" src="https://i.loli.net/2017/08/21/599a521472424.jpg"
                  />
                  <div style="margin-left:10px">
                    <h3>
                      卫龙
                    </h3>
                    <span style='overflow:hidden; text-overflow:ellipsis;
                          display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:1;'>
                      这是测试的一段话哈哈哈哈
                    </span>
                  </div>
                </div>
              </div>
              <div style='height:45px;position:relative;margin-left:-16px;width:170px;'>
                <div class="demo-avatar" style="position:absoulte;display:flex;margin-left:10px;">
                  <Avatar style="background-color: #87d068; width:40px;margin:0 auto;" src='http://qq1234.org/uploads/allimg/140818/3_140818171934_4.jpg'
                  />
                  <div style="margin-left:10px">
                    <h3>
                      小当前
                    </h3>
                    <span style='overflow:hidden; text-overflow:ellipsis;
                          display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:1;'>
                      这是测试的一段话哈哈哈哈
                    </span>
                  </div>
                </div>
              </div>
              <div style='height:45px;position:relative;margin-left:-16px;width:170px;'>
                <div class="demo-avatar" style="position:absoulte;display:flex;margin-left:10px;">
                  <Avatar style="background-color: #87d068; width:40px;margin:0 auto;" src="https://i.loli.net/2017/08/21/599a521472424.jpg"
                  />
                  <div style="margin-left:10px">
                    <h3>
                      虹桥
                    </h3>
                    <span style='overflow:hidden; text-overflow:ellipsis;
                          display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:1;'>
                      这是测试的一段话哈哈哈哈
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Panel>
        </Collapse>
      </div>
      </Col>
      <Col span='18' style="height:100%; background:#fff;display:flex;justify-content:center;">
      <div style="width:90%;height:53px;border-bottom:1px solid #eee;text-align:center;">
        <p style="line-height: 53px;font-size:14px">详细信息</p>
        <div style="margin-top:20px;">
          <Avatar shape="square" icon="person" src="https://i.loli.net/2017/08/21/599a521472424.jpg" size="large" />
        </div>
        <h1 style="line-height: 53px;">
          AAA裕成景观
          <Icon type="male" color='#6DA6C6' size='14'></Icon>
          <Icon type="female" color='#CF6D69' size='14'></Icon>
        </h1>
        <p style="font-size:14px;color:#888888; line-height: 40px;">
          这是一段座右铭
        </p>
        <p style="font-size:12px;color:#888888;line-height: 20px;">
          <span>
            备注：
          </span>
          <span>
            王八蛋
          </span>
        </p>
        <p style="font-size:12px;color:#888888;line-height: 20px;">
          <span>
            地区：
          </span>
          <span>
            上海闵行
          </span>
        </p>
         <Button style="width:150px;margin-top:20px;" type='primary'>发送消息</Button>
      </div>
      </Col>
    </Row>
  </div>
</template>
<script>
  export default {};

</script>
<style>
  .scroll::-webkit-scrollbar {
    display: none;
  }

  .person:focus,
  .person:hover,
  .person:active {
    background: #eee;
    outline: none;
  }

  .ivu-avatar-large.ivu-avatar-icon {
    font-size: 100px;
  }

  .ivu-avatar-large {
    width: 100px;
    height: 100px;
    line-height: 100px;
  }

</style>
