import * as moment from 'moment';

function chatMessageTimeFilter(value){
  value = moment(value);
  let formatString = 'HH:mm';
  let dateDiff = Math.abs(value.diff(new Date(), 'days'));
  switch (true){
    case (dateDiff == 0):
      return moment(value).format(formatString);
    case (dateDiff >=1 &&   dateDiff <7 ):
      return fGetCurrentWeek(value)+ ' '+moment(value).format(formatString);
    default:
      return moment(value).format('YYYY年M月DD日 HH:mm')
  }
}

function fGetCurrentWeek(value){
  var sWeek= moment(value).format('dddd');
  switch (sWeek){
      case 'Monday': sWeek='星期一';
          break;
      case 'Tuesday': sWeek='星期二';
          break;
      case 'Wednesday': sWeek='星期三';
          break;
      case 'Thursday': sWeek='星期四';
          break;
      case 'Friday': sWeek='星期五';
          break;
      case 'Saturday': sWeek='星期六';
          break;
      case 'Sunday': sWeek='星期日';
          break;
      default:
          break;
  }
  return sWeek;
}

export default chatMessageTimeFilter;
