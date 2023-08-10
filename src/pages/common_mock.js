// import { createRequire } from 'module'
// const require = createRequire(import.meta.url)
// import xmlhttpreq from 'xmlhttprequest'
// import wsgsdk from '@didi/wsgsig'

var Mock = require('mockjs')
var Random = Mock.Random

var rantypes = ['boolean', 'natural', 'integer', 'float', 'character', 'string',
  'range', 'date', 'time', 'paragraph', 'cparagraph', 'sentence', 'csentence',
  'word', 'cword', 'title', 'ctitle', 'name', 'cname', 'email', 'url', 'ip', 'tld',
  'county', 'region', 'city', 'zip', 'guid', 'id', 'increment']

var rantypesNoC = ['boolean', 'natural', 'integer', 'float', 'character', 'string',
  'range', 'date', 'time', 'paragraph', 'sentence',
  'word', 'title', 'name', 'email', 'url', 'ip', 'tld',
  'zip', 'guid', 'id', 'increment']

function getRantypeValueNoC(index) {
  if (index < 0 || index >= rantypes.length) {
    console.log('[-] error index.')
    return
  }
  var t = rantypes[index]
  var v = null
  switch (t) {
    case 'boolean': {
      v = Random.boolean()
      break
    }
    case 'natural': {
      v = Random.natural(0, 100000000)
      break
    }
    case 'integer': {
      v = Random.integer(-100000000, 100000000)
      break
    }
    case 'float': {
      v = Random.float(-100000000, 100000000)
      break
    }
    case 'character': {
      if (Random.boolean()) {
        v = Random.character('lower')
      }
      if (Random.boolean()) {
        v = Random.character('upper')
      }
      if (Random.boolean()) {
        v = Random.character('number')
      }
      break
    }
    case 'string': {
      v = Random.string(2, 100)
      break
    }
    // case 'range': {
    //   v = Random.range(0, 50)
    //   break
    // }
    // case 'date': {
    //   v = Random.date('yyyy-MM-dd')
    //   break
    // }
    // case 'time': {
    //   if (Random.boolean()) {
    //     v = Random.time()
    //   } else if (Random.boolean()) {
    //     v = Random.datetime()
    //   } else {
    //     v = Random.now()
    //   }
    //   break
    // }
    case 'paragraph': {
      v = Random.paragraph(3, 5)
      break
    }
    // case 'cparagraph': {
    //   v = Random.cparagraph(3, 5)
    //   break
    // }
    case 'sentence': {
      v = Random.sentence()
      break
    }
    // case 'csentence': {
    //   v = Random.csentence()
    //   break
    // }
    case 'word': {
      v = Random.word()
      break
    }
    // case 'cword': {
    //   v = Random.cword()
    //   break
    // }
    case 'title': {
      v = Random.title()
      break
    }
    // case 'ctitle': {
    //   v = Random.ctitle()
    //   break
    // }
    case 'name': {
      v = Random.name()
      break
    }
    // case 'cname': {
    //   v = Random.cname()
    //   break
    // }
    case 'email': {
      v = Random.email()
      break
    }
    // case 'url': {
    //   v = Random.url()
    //   break
    // }
    case 'ip': {
      v = Random.ip()
      break
    }
    case 'tld': {
      v = Random.tld()
      break
    }
    // case 'county': {
    //   v = Random.county()
    //   break
    // }
    // case 'region': {
    //   v = Random.region()
    //   break
    // }
    // case 'city': {
    //   v = Random.city()
    //   break
    // }
    // case 'zip': {
    //   v = Random.zip()
    //   break
    // }
    case 'guid': {
      v = Random.guid()
      break
    }
    case 'id': {
      v = Random.id()
      break
    }
    default: {
      v = Random.word()
    }
  }
  return v
}

function getRantypeValue(index) {
  if (index < 0 || index >= rantypes.length) {
    console.log('[-] error index.')
    return
  }
  var t = rantypes[index]
  var v = null
  switch (t) {
    case 'boolean': {
      v = Random.boolean()
      break
    }
    case 'natural': {
      v = Random.natural(0, 100000000)
      break
    }
    case 'integer': {
      v = Random.integer(-100000000, 100000000)
      break
    }
    case 'float': {
      v = Random.float(-100000000, 100000000)
      break
    }
    case 'character': {
      if (Random.boolean()) {
        v = Random.character('lower')
      }
      if (Random.boolean()) {
        v = Random.character('upper')
      }
      if (Random.boolean()) {
        v = Random.character('number')
      }
      break
    }
    case 'string': {
      v = Random.string(2, 100)
      break
    }
    case 'range': {
      v = Random.range(0, 50)
      break
    }
    case 'date': {
      v = Random.date('yyyy-MM-dd')
      break
    }
    case 'time': {
      if (Random.boolean()) {
        v = Random.time()
      }
      if (Random.boolean()) {
        v = Random.datetime()
      }
      if (Random.boolean()) {
        v = Random.now()
      }
      break
    }
    case 'paragraph': {
      v = Random.paragraph(3, 5)
      break
    }
    case 'cparagraph': {
      v = Random.cparagraph(3, 5)
      break
    }
    case 'sentence': {
      v = Random.sentence()
      break
    }
    case 'csentence': {
      v = Random.csentence()
      break
    }
    case 'word': {
      v = Random.word()
      break
    }
    case 'cword': {
      v = Random.cword()
      break
    }
    case 'title': {
      v = Random.title()
      break
    }
    case 'ctitle': {
      v = Random.ctitle()
      break
    }
    case 'name': {
      v = Random.name()
      break
    }
    case 'cname': {
      v = Random.cname()
      break
    }
    case 'email': {
      v = Random.email()
      break
    }
    // case 'url': { // trigger ssrf by waf
    //   v = Random.url()
    //   break
    // }
    case 'ip': {
      v = Random.ip()
      break
    }
    case 'tld': {
      v = Random.tld()
      break
    }
    case 'county': {
      v = Random.county()
      break
    }
    case 'region': {
      v = Random.region()
      break
    }
    case 'city': {
      v = Random.city()
      break
    }
    case 'zip': {
      v = Random.zip()
      break
    }
    case 'guid': {
      v = Random.guid()
      break
    }
    case 'id': {
      v = Random.id()
      break
    }
    default: {
      v = Random.word()
    }
  }
  return v
}

function generateSonBody() {
  var jsonObj = {}
  var paramNum = Random.integer(1, 20)
  for (var i = 0; i < paramNum; i++) {
    var name = Random.string('lower', 2, 20)
    var index = Random.integer(1, rantypes.length - 1)
    var value = getRantypeValue(index)
    jsonObj[name] = value
  }
  // console.log('[+] json: ' + JSON.stringify(jsonObj))
  return jsonObj
}

function generateRandomBody() {
  var jsonObj = {}
  var paramNum = Random.integer(1, 30)
  var name = null
  var value = null
  var index = null
  // var paramNum = 1000000
  for (var i = 0; i < paramNum; i++) {
    name = Random.string('lower', 2, 20)
    // console.log('[+] name: ' + name)
    index = Random.integer(1, rantypes.length - 1)
    // console.log('[+] index: ' + index + ' ' + rantypes[index])
    value = getRantypeValue(index)
    // console.log('[+] value: ' + value)
    jsonObj[name] = value
  }
  if (paramNum < 5 && Random.boolean() === true) {
    name = Random.string('lower', 2, 20)
    // console.log('[+] name: ' + name)
    value = generateSonBody()
    // console.log('[+] value: ' + JSON.stringify(value))
    jsonObj[name] = value
  }
  // console.log('[+] json: ' + JSON.stringify(jsonObj))
  return JSON.stringify(jsonObj)
}

function generateRandomBodyNoC() {
  var jsonObj = {}
  var paramNum = Random.integer(1, 20)
  // var paramNum = 1000000
  for (var i = 0; i < paramNum; i++) {
    var name = Random.string('lower', 2, 20)
    // console.log('[+] name: ' + name)
    var index = Random.integer(1, rantypesNoC.length - 1)
    // console.log('[+] index: ' + index + ' ' + rantypesNoC[index])
    var value = getRantypeValueNoC(index)
    // console.log('[+] value: ' + value)
    if (typeof value === 'string') {
      if (value.indexOf('&')) {
        continue
      }
    }
    jsonObj[name] = value
  }
  // console.log('[+] json: ' + JSON.stringify(jsonObj))
  return JSON.stringify(jsonObj)
}

function generateRandomParams() {
  var jsonObj = {}
  var paramNum = Random.integer(1, 20)
  // var paramNum = 1000000
  for (var i = 0; i < paramNum; i++) {
    var name = Random.string('lower', 2, 20)
    // console.log('[+] name: ' + name)
    var index = Random.integer(1, rantypesNoC.length - 1)
    // console.log('[+] index: ' + index + ' ' + rantypesNoC[index])
    var value = getRantypeValueNoC(index)
    // console.log('[+] value: ' + value)
    if (typeof value === 'string') {
      if (value.indexOf('&')) {
        continue
      }
    }
    jsonObj[name] = value
  }
  var result = ''
  const keys = Object.keys(jsonObj)
  for (const key of keys) {
    result += key + '=' + encodeURIComponent(jsonObj[key]) + '&'
  }
  result = result.substring(0, result.length - 1)
  // console.log('[+] generateRandomParams: ' + result)
  return result
}

module.exports.generateRandomParams = generateRandomParams
module.exports.generateRandomBody = generateRandomBody
module.exports.generateRandomBodyNoC = generateRandomBodyNoC
