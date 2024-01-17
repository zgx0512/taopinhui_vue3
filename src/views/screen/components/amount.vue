<template>
  <div class="amount_box">
    <header>付款订单金额</header>
    <div class="amount">
      ￥<span v-for="(item, index) in amount" :key="index">
        <span class="value">{{ item }}</span>
        <span v-if="index < amount.length - 1 && (amount.length - index - 1) % 3 === 0">,</span>
      </span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const amount = ref<string>('2492530')
</script>

<style lang="scss" scoped>
.amount_box {
  text-align: center;
  header {
    font-size: 20px;
    height: 30px;
    line-height: 30px;
    margin-bottom: 5px;
    margin-left: 15px;
  }
  .amount {
    font-size: 30px;
    color: #fefc66;
    .value {
      background-color: rgba($color: #666, $alpha: 0.3);
      padding: 2px;
      margin-right: 2px;
    }
  }
}
</style>
