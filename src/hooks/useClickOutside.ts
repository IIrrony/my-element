import { onMounted, onUnmounted } from "vue"
import type { Ref } from "vue"

const useClickOutside = (elementRef: Ref<undefined | HTMLElement>, callback: (e: MouseEvent) =>  void) => {
  const handler = (e: MouseEvent) => {
    if(elementRef.value && e.target) {
      // 当页面dom元素不包含e时，调用callback
      if(!elementRef.value.contains(e.target as HTMLElement)) {
        callback(e)
      }
    }
  }
  onMounted(() => {
    document.addEventListener('click', handler)
  })
  onUnmounted(() => {
    document.removeEventListener('click', handler)
  })
}

export default useClickOutside
