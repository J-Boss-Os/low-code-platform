<template>
  <div class="lcp-desgin-config">
    <a-collapse v-model:activeKey="activeKey">
      <a-collapse-panel key="3"></a-collapse-panel>
    </a-collapse>
  </div>
</template>

<script>
import { reactive } from "vue";
export default {
  name: "LCPDesignConfig",
  setup(props, context) {
    const activeKey = reactive([]);
    return { activeKey };
  },
};
</script>

<style>
</style>