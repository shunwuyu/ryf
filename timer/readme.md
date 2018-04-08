[定时器](http://www.ruanyifeng.com/blog/2018/02/node-event-loop.html)

JS单线程运，异步操作重要。
引擎之外的功能，需要与外部交互， 形成异步操作。

libuv 与内核对话。负责各种回调函数的执行时间，一个个排队执行。
libuv 怎么安排异步任务在主线程上执行。

一、同步任务总是比异步任务更早执行。 
二、本轮循环和次轮循环。
  event loop 
  process.nextTick(最快,任务尽可能执行) Promise 在本轮循环。 
  setTimeout setInterval  setImmediate在次轮循环。

  微任务队列 Promise
  全部队列清空， 执行下一个队列。
  顺序
  1 同步任务
  2 process.nextTick()
  3 微任务
  
  只有一个主线程，事件循环在主线程上完成。
  Node执行脚本时， 先进行事件循环的初始化，
  同步任务
  发出异步请求
  规划定时器生效的时间
  执行process.nextTick()

  无限次的执行， 一轮一轮，只有异步任务的回调函数队列清空了，才会停止执行。
  timers
  I/O callbacks
  idle, prepare
  poll
  check
  close callbacks
  Poll  服务器的回应，用户移动鼠标，一直停留在这个阶段，等着I/O请求返回结果。
  check   setImmediate()

  轮循


