<template>
  <div class="container">
    <Watermark text="版权所有">
      <div class="content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque aliquam
        laudantium ex aut accusamus pariatur dolorem, maxime animi ipsa eius
        vitae. Modi quidem quibusdam nobis repellendus quas voluptatibus libero
        aliquid dolorum cum iure reiciendis a soluta at harum accusantium in
        deleniti amet doloribus, fugiat, similique delectus! Sapiente deserunt
        nisi ullam dicta fugiat inventore? Velit assumenda inventore sit iusto
        natus autem, beatae id facilis culpa accusamus labore maxime praesentium
        omnis esse nisi tempora cum nemo pariatur quod molestiae dolore possimus
        unde, dolorum quaerat! Ut voluptatem, provident velit amet dolor natus
      </div>
    </Watermark>
    <Watermark text="禁止转载">
      <video controls class="video" src="./assets/LA.mp4"></video>
    </Watermark>
  </div>
</template>

<script setup>
import Watermark from './components/Watermark.vue';
</script>

<style scoped>
.container {
  width: 100%;
  display: flex;
  justify-content: space-around;
}
.container > * {
  width: 45%;
  background: #e3d9c3;
  box-sizing: border-box;
  line-height: 2;
  height: 50vh;
  overflow: hidden;
}
.content {
  padding: 10px;
}
.video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
