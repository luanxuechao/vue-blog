import Vue from 'vue';

const vue = new Vue()

const notification = message => {
  const title = message && message.title
  const content = message && message.content
  if (window.Notification) {
    const ua = navigator.userAgent.toLowerCase()
    if (ua.indexOf('safari') !== -1) {
      if (ua.indexOf('chrome') > -1) {
        // Chrome
        Notification.requestPermission().then(permission => {
          if (permission === 'granted' && message) {
            const notification = new Notification(title, {
              body: content
              // ,
              // icon: 'some/icon/url'
            });
            notification.onclick = () => {
              console.log('点击');
              notification.close();
            };
          } else {
            Notification.requestPermission();
            console.log('没有权限,用户拒绝:Notification');
            vue.$Notice.info({
              title,
              desc: content
            })
          }
        });
      } else {
        // Safari
        Notification.requestPermission(permission => {
          if (permission === 'granted' && message) {
            const notification = new Notification(title, {
              body: content
              // ,
              // icon: 'some/icon/url'
            });

            notification.onclick = () => {
              // console.log('点击');
              notification.close();
            };
          } else {
            Notification.requestPermission();
            console.log('没有权限,用户拒绝:Notification');
            vue.$Notice.info({
              title,
              desc: content
            })
          }
        })
      }
    }
  } else {
    console.log('不支持Notification');
    vue.$Notice.info({
      title,
      desc: content
    })
  }
}

export default notification
