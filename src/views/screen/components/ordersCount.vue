<template>
  <div class="count_box">
    <header>付款订单数</header>
    <div class="count">
      <span v-for="(item, index) in count" :key="index">
        <span class="value">{{ item }}</span>
        <span v-if="index < count.length - 1 && (count.length - index - 1) % 3 === 0">,</span>
      </span><span style="font-size: 20px;">笔</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const count = ref<string>('8976') 
</script>

<style lang="scss" scoped>
.count_box {
  text-align: center;
  header {
    font-size: 20px;
    height: 30px;
    line-height: 30px;
    margin-bottom: 5px;
  }
  .count {
    font-size: 30px;
    color: #43c2f3;
    .value {
      background-color: rgba($color: #666, $alpha: 0.3);
      padding: 2px;
      margin-right: 2px;
    }
  }
}
</style>
