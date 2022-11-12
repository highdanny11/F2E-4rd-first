<template>
  <Navbar />
  <div class="overflow-hidden mask-wrap">
    <div class="mask-right position-absolute"></div>
    <div class="mask-left position-absolute"></div>
    <div class="mask-top position-absolute"></div>
  </div>
  <section class="home bg-paper d-flex justify-content-center align-items-lg-center align-items-start">
    <div class="banner container position-relative">
      <div class="row h-100 px-sm-4 justify-content-between flex-column flex-sm-row">
        <div class="col-lg-6 h-lg-100 h-sm-auto h-25">
          <div class="d-flex flex-column article ms-sm-4">
            <h2 class="text-primary mt-7 mt-sm-10 mb-sm-5">THE F2E<span class="bg-secondary">4th</span></h2>
            <p class="text-primary d-none d-md-block introduce">前端工程師和介面設計師，攜手合作拿獎金</p>
            <p class="d-none d-xl-block">羨慕別人的酷酷網頁動畫？
              滿足不了同事的許願？
              動畫技能樹太雜無從下手？</p>
          </div>
        </div>
        <div class="col-lg-6 h-25 h-sm-100">
          <div class="d-flex flex-column 
            justify-content-center
            align-items-sm-end align-items-start
            h-100">
            <ul class="list-unstyled joinInfo d-none d-lg-block">
              <li>
                <p class="text-primary">報名總人數</p>
                <p class="text-primary"><span>1158</span>人</p>
              </li>
              <li>
                <p class="text-primary">個人賽人數</p>
                <p class="text-primary"><span>1052</span>人</p>
              </li>
              <li>
                <p class="text-primary">團體賽人數</p>
                <p class="text-primary"><span>41</span>人</p>
              </li>
            </ul>
            <p class="text-primary d-sm-none introduce">
              前端工程師和介面設計師，攜手合作拿獎金
            </p>
          </div>
        </div>
      </div>
      <div class="hack d-flex align-items-end justify-content-center">
        <ul class="list-unstyled d-flex">
          <li class="me-xxl-5 me-2">個人獎<span class="text-secondary">$3,000</span></li>
          <li>團體獎<span class="text-secondary">$10,000</span></li>
        </ul>
      </div>
      <div class="seal position-absolute"></div>
    </div>
  </section>
  <router-view></router-view>
  <Footer />
</template>

<script lang="ts" setup>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { onMounted } from 'vue';
gsap.registerPlugin(ScrollTrigger);
function init() {
  const blocks = gsap.utils.toArray('main > section')
  blocks.forEach((item, index) => {
    gsap.from(item!, {
      scrollTrigger: {
        trigger: `main > section:nth-of-type(${index + 1})`,
        scrub:true,
      },
      x: (index + 1) % 2  === 0 ? -120 : 120 ,
      duration: 0.8,
    })
  })
}
onMounted(() => {
  const scrollMask = gsap.timeline({
    scrollTrigger: {
      trigger: '.mask-wrap',
      scrub: true,
      pin: true,
    },
  })
  const scrollHome = gsap.timeline({
    scrollTrigger: {
      trigger: '.home',
      scrub: true,
      pin: true,
    },
  })
  scrollMask
    .to('.mask-top', { yPercent: -100, })
    .to('.mask-left', { xPercent: -100, })
    .to('.mask-right', { xPercent: 100, })
  scrollHome
    .from('.seal', { scale: 0, opacity: 0 })
    .from('.hack', { y: 100, opacity: 0 });
  init()
})
</script>

<style lang="scss">
.mask-wrap {
  width: 100vw;
  height: 100vh;
  top: 0;
  position: absolute;
  z-index: 2000;
}

.mask-top {
  background: url('@/assets/images/mask/mask-T.png') no-repeat center / cover;
  width: 100vw;
  aspect-ratio: 1034 / 581;
  top: 0;
}

.mask-left {
  background: url('@/assets/images/mask/mask-L.png') no-repeat center / cover;
  width: 100vw;
  aspect-ratio: 760 / 853;
  left: -40vw;
  top: 0;
}

.mask-right {
  background: url('@/assets/images/mask/mask-R.png') no-repeat center / cover;
  width: 100vw;
  aspect-ratio: 983 / 814;
  right: -50vw;
  top: 0;
}
</style>