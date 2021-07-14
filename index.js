// console.log(324567); 手写实现call
Function.prototype.myCall = function (context, ...arr) {
  if (context === null || context === undefined) {
    // 指定为 null 和 undefined 的 this 值会自动指向全局对象(浏览器中为window)
    context = window;
  } else {
    context = Object(context); // 值为原始值（数字，字符串，布尔值）的 this 会指向该原始值的实例对象
  }
  const specialPrototype = Symbol("特殊属性Symbol"); // 用于临时储存函数
  context[specialPrototype] = this; // 函数的this指向隐式绑定到context上
  let result = context[specialPrototype](...arr); // 通过隐式绑定执行函数并传递参数
  delete context[specialPrototype]; // 删除上下文对象的属性
  return result; // 返回函数执行结果
};
