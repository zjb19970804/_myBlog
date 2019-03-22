<template>
    <div class="myContainer">
      <div class="flex myColumns">
        <SlideLeft />
        <nuxt />
        <SlideRight />
      </div>
    </div>
</template>

<script>
import SlideLeft from '../components/SlideLeft'
import SlideRight from '../components/SlideRight'
export default {
  components: {
    SlideLeft,
    SlideRight
  }
}
</script>
