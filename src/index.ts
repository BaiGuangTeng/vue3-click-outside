type bindingType = {
  value: Function
}

export default {
  created(el:any, binding:bindingType) {
    if (typeof binding.value !== "function") return

    function handle(e:MouseEvent) {

      let target:Element

      if ( e.target && 'tagName' in e.target) {
        target = e.target as Element

        !el.contains(target) && binding.value()
      }

    }
    
    el.handle = handle

    window.addEventListener('click', el.handle, false)
  },

  // 绑定元素的父组件卸载前调用
  beforeUnmount(el:any) {
    window.removeEventListener("click", el.handle, false)
  },
}