<template>
  <nav :class="['bg-primary', 'position-fixed','vw-100',{'position-fixed': fixed, 'vw-100' : fixed} ]">
    <div class="container px-md-0">
      <div class="wrap">
        <h1>
          六角學院
        </h1>
        <button :class="['hamburger', 'btn', {open:show}]" @click="show = !show">
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul class="list-unstyled bg-primary">
          <li><a href="#" class="text-decoration-none link-light">關卡任務</a></li>
          <li><a href="#" class="text-decoration-none link-light">競賽說明</a></li>
        </ul>
        <ul class="options list-unstyled">
          <li><a href="#" class="text-decoration-none link-light">關卡任務</a></li>
          <li><a href="#" class="text-decoration-none link-light">競賽說明</a></li>
          <li class="btn btn-secondary" v-show="!show"><a href="#" class="text-decoration-none">立即報名</a></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
const show = ref(false)
const fixed = ref(false)
const openEventScroll = () => {
  window.addEventListener('scroll', handlerScroll)
}
const closeEventScroll = () => {
  window.removeEventListener('scroll', handlerScroll)
}
function handlerScroll() {
  let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
  if(scrollTop > 5) {
    fixed.value = true
    return
  }
  fixed.value = false
}
onMounted(() => {
  openEventScroll()
})
onBeforeUnmount(() => {
  closeEventScroll()
})
</script>
