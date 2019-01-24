# Vue

### 遇到的问题
* 内存泄漏
  
  1、额外引用的库没有在页面销毁的时候没有手动将**引用的库销毁**  
  2、组件中将不需要页面渲染的数据挂在this，并且...


# ElementUI

### 对于组件的appendToBody理解
* > 将元素append在body下，需要解决的问题（1、位置问题， 2、点击收起的问题） ElementUI使用popperjs(通过递归向父级检索有没元素属性的overflow(overflow-y)为scroll, auto)进行属性的调整，clickoutside采用监听mousedown，mouseup事件

* > ps: 采用mousedown mouseup 可以区分用户的点击事件（冒泡到body）