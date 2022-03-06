<template>
  <div
    class="lcp-design-proxy"
    :style="style"
    @drop.prevent="drop"
    @dragover.prevent="dragover"
  >
    <component :is="control.compType" v-bind="control">
      <template v-for="slot in control.slots" v-slot:[slot.name]>
        <LCPDesignProxy
          v-for="comp in slot.controls"
          :key="comp.hash"
          :control="comp"
        ></LCPDesignProxy>
      </template>
    </component>
    <div class="lcp-design-proxy-mask"></div>
    <div class="lcp-design-proxy-operate">
      <div
        class="lcp-design-proxy-hander"
        draggable="true"
        @dragstart="dragStart"
      >
        拖动
      </div>
      <div class="lcp-design-proxy-hander">删除</div>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";
export default {
  name: "LCPDesignProxy",
  provide() {
    return {
      $designProxy: this,
    };
  },
  props: {
    control: {
      default: () => {
        return {};
      },
    },
  },
  setup() {
    const style = reactive({
      height: "auto",
    });
    const updateProxyHeight = (height) => {
      style.height = height;
    };

    let hoverSlot = null;
    const dragStart = (ev) => {
      console.log(ev);
    };
    const drop = (ev) => {
      const type = ev.dataTransfer.getData("type");
      const compName = ev.dataTransfer.getData("compName");
      console.log(type, compName);
    };
    const dragover = (ev) => {
      hoverSlot = lcp.getOneExistAttrParent(ev.target, "slot-name");
      console.log(hoverSlot);
    };
    return { updateProxyHeight, style, dragStart, drop, dragover };
  },
};

function useDrag() {}
function useDrop() {}
</script>

<style>
</style>

