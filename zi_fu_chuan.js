var str = "java script";
console.log(str.charAt(2));//返回字符串的第 n 个字符
console.log(str.indexOf('s',6));//返回s在字符串中首次出现的位置,如果没有找到子字符串，则返回-1
console.log(str.lastIndexOf('r'));//返回str对象中字符串最后出现的位置。如果没有匹配到子字符串，则返回-1。
console.log(str.substring(2,6));//返回 str 2-6的字符 从0开始 如果只有一个参数时 截取到最后
console.log(str.slice(2));//字符串截取
console.log(str.toUpperCase());//字符串转换大写
console.log(str.toLowerCase());//字符串转换小写
console.log(str.substr(2,6));//从哪开始 截取的长度
console.log(str.replace('java','hello'));//字符串的替换
console.log(str.search('script'));
//查找 str 与一个正则表达式是否匹配。如果匹配成功，则返回正则表达式在字符串中首次匹配项的索引；
// 否则，返回 -1。如果参数传入的是一个非正则表达式对象，则会使用 new RegExp(obj) 隐式地将其转换为正则表达式对象
console.log(str.split(''));//返回一个数组，分隔符 可以是一个字符串或正则表达式






















