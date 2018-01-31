import * as moment from 'moment';

function timefilter(value, formatString) {
  formatString = formatString || 'YYYY-MM-DD HH:mm:ss';
  return moment(value).format(formatString);
};


export default timefilter;
