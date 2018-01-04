<template>
  <div style="height:100%">
    <Row style="height:100%;" class="scroll">
      <Col span='6' style="height:100%; background:#ffffff;border-right:1px solid #eee;overflow-y: auto;">
      <div style="width:100%; border-bottom:1px solid #eee">
        <Button style="width:150px; margin:10px auto;display:block;">添加好友</Button>
      </div>
      <div>
        <Collapse v-model="value1" accordion>
          <Panel name="1">
            我的好友
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
          <Panel name="2">
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
          <Panel name="3">
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
    </Row>
  </div>
</template>
<script>
  export default {

  }

</script>
<style>
  .scroll::-webkit-scrollbar {
    display: none;
  }

</style>
