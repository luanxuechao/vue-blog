var
  ArrayProto = Array.prototype,
  ObjProto = Object.prototype;

var
  slice = ArrayProto.slice,
  toString = ObjProto.toString;

var util = {};

util.isArray = function(obj) {
  return Array.isArray(obj);
};

var MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;
util.isArrayLike = function(obj) {
  if (typeof obj !== 'object' || !obj) {
    return false;
  }
  var length = obj.length;
  return typeof length === 'number' &&
    length % 1 === 0 && length >= 0 && length <= MAX_ARRAY_INDEX;
};

util.isObject = function(obj) {
  var type = typeof obj;
  return type === 'function' || type === 'object' && !!obj;
};


util.each = function(obj, callback) {
  var i,
    len;
  if (util.isArray(obj)) {
    for (i = 0, len = obj.length; i < len; i++) {
      if (callback(obj[i], i, obj) === false) {
        break;
      }
    }
  } else {
    for (i in obj) {
      if (callback(obj[i], i, obj) === false) {
        break;
      }
    }
  }
  return obj;
};

util.each(['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp', 'Error'], function(name) {
  util['is' + name] = function(obj) {
    return toString.call(obj) === '[object ' + name + ']';
  };
});

util.toArray = function(list, start) {
  start = start || 0
  var i = list.length - start
  var ret = new Array(i)
  while (i--) {
    ret[i] = list[i + start]
  }
  return ret
}

util.toNumber = function(value) {
  if (typeof value !== 'string') {
    return value
  } else {
    var parsed = Number(value)
    return isNaN(parsed) ?
      value :
      parsed
  }
};

util.convertArray = function(value) {
  if (util.isArray(value)) {
    return value
  } else if (util.isPlainObject(value)) {
    // convert plain object to array.
    var keys = Object.keys(value)
    var i = keys.length
    var res = new Array(i)
    var key
    while (i--) {
      key = keys[i]
      res[i] = {
        $key: key,
        $value: value[key]
      }
    }
    return res
  } else {
    return value || []
  }
}

function multiIndex(obj, is) { // obj,['1','2','3'] -> ((obj['1'])['2'])['3']
  return is.length ? multiIndex(obj[is[0]], is.slice(1)) : obj
}

util.getPath = function(obj, is) { // obj,'1.2.3' -> multiIndex(obj,['1','2','3'])
  return multiIndex(obj, is.split('.'))
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 *
 * @param {*} obj
 * @return {Boolean}
 */

var toString = Object.prototype.toString
var OBJECT_STRING = '[object Object]'
util.isPlainObject = function(obj) {
  return toString.call(obj) === OBJECT_STRING
}

util.addDateTimeChatMessage = function(chatMessage, oldChatMessages, reverse) {
  var messages = oldChatMessages;
  var dateTimeMessage;
  var l = messages.length;
  var c1, c2;
  //历史消息
  if (reverse == true) {
    if (messages.length > 0) {
      c1 = new Date(messages[0].createdAt).getTime();
      c2 = new Date(chatMessage.createdAt).getTime();
      if (enableAddTime(c1, c2,l)) {
        dateTimeMessage = buildDateTimeMessage(c1);
        messages.unshift(dateTimeMessage);
        messages.unshift(chatMessage);
      } else {
        messages.unshift(chatMessage);
      }
    } else {
      messages.unshift(chatMessage);
    }
  } else {
    //新消息
    if (messages.length == 0) {
      messages.push(chatMessage);
    } else {
      c1 = new Date(messages[l - 1].createdAt).getTime();
      c2 = new Date(chatMessage.createdAt).getTime();
      if (enableAddTime(c1, c2, l)) {
        dateTimeMessage = buildDateTimeMessage(c2);
        messages.push(dateTimeMessage);
        messages.push(chatMessage);
      } else {
        messages.push(chatMessage);
      }
    }
  }
  return messages;
}

function buildDateTimeMessage(dateTime) {
  var chatMessage = {};
  chatMessage.id = guidGenerator();
  chatMessage.createdAt = dateTime - 1;
  chatMessage.messageContent = new Date(chatMessage.createdAt);
  chatMessage.messageType = 'DATETIME';
  return chatMessage;
}

function guidGenerator() {
  function s4() {
    return (((1 + Math.random()) * 0x10000) || 0).toString(16).substring(1);
  }

  return (s4() + s4() + "-" + s4() + "-" + s4() + "-" + s4() + "-" + s4() + s4() + s4());
}

function enableAddTime(c1, c2,length) {
  return Boolean(Math.abs(c2 - c1) > 5 * 60 * 1000 || length % 10 == 0);
}
export default util;
