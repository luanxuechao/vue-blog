import * as moment from 'moment';

function friendMenuTimeFilter(value){
  value = moment(value);
  let formatString = 'HH:mm';
  if(value.diff(new Date(), 'days')){
    formatString = 'YYYY/M/DD'
  }
  return moment(value).format(formatString);
}
export default friendMenuTimeFilter;
