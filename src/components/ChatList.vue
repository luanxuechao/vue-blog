<template>
  <div style="height:100%" >
    <Row style="height:100%;" >
      <Col span='7' class="scroll" style="height:100%; background:#ffffff;border-right:1px solid #eee;overflow-y: scroll;">
        <div style='height:60px;border-bottom:1px solid #eee;position:relative;padding:10px;'>
          <div class="demo-avatar" style="position:absoulte;left:10px; display: flex;width:190px">
            <Avatar style="background-color: #87d068;" icon="person" size="large" />
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
         <div style='height:60px;border-bottom:1px solid #eee;position:relative;padding:10px;'>
          <div class="demo-avatar" style="position:absoulte;left:10px; display: flex;width:190px">
            <Avatar style="background-color: #87d068;" src="https://i.loli.net/2017/08/21/599a521472424.jpg" size="large" />
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
          <div style='height:60px;border-bottom:1px solid #eee;position:relative;padding:10px;'>
          <div class="demo-avatar" style="position:absoulte;left:10px; display: flex;width:190px">
            <Avatar style="color: #f56a00;background-color: #fde3cf" src='http://qq1234.org/uploads/allimg/140818/3_140818171934_4.jpg' size="large" />
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
          <div style='height:60px;border-bottom:1px solid #eee;position:relative;padding:10px;'>
          <div class="demo-avatar" style="position:absoulte;left:10px; display: flex;width:190px">
            <Avatar style="background-color: #87d068;" src='http://www.qqzhi.com/uploadpic/2015-01-22/022222987.jpg' size="large" />
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
          <div style='height:60px;border-bottom:1px solid #eee;position:relative;padding:10px;'>
          <div class="demo-avatar" style="position:absoulte;left:10px; display: flex;width:190px">
            <Avatar style="background-color: #87d068" src='http://i.zeze.com/attachment/forum/201504/22/121550n77o7q22dbeebyey.jpg' size="large" />
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
          <div style='height:60px;border-bottom:1px solid #eee;position:relative;padding:10px;'>
          <div class="demo-avatar" style="position:absoulte;left:10px; display: flex;width:190px">
            <Avatar style="background-color: #87d068" src='http://cdnq.duitang.com/uploads/item/201502/22/20150222201844_QCWmL.thumb.224_0.jpeg' size="large" />
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
          <div style='height:60px;border-bottom:1px solid #eee;position:relative;padding:10px;'>
          <div class="demo-avatar" style="position:absoulte;left:10px; display: flex;width:190px">
            <Avatar style="background-color: #87d068" src='http://img2.imgtn.bdimg.com/it/u=3746075707,1914896074&fm=214&gp=0.jpg' size="large" />
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
          <div style='height:60px;border-bottom:1px solid #eee;position:relative;padding:10px;'>
          <div class="demo-avatar" style="position:absoulte;left:10px; display: flex;width:190px">
            <Avatar style="background-color: #87d068" src='http://www.qqzhi.com/uploadpic/2015-02-02/211841154.jpg' size="large" />
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
      </Col>
      <Col span='17' style="height:100%; background:#fffff">
        <chat-room></chat-room>
      </Col>
    </Row>
  </div>
</template>
<script>
import chatRoom from './chat/chatRoom'
export default {
 components:{
    chatRoom
  }
}
</script>
<style>
.scroll::-webkit-scrollbar {
    display: none;
}
</style>


