<template>
  <div class="lcp-design">
    <div class="lcp-design-head"></div>
    <div class="lcp-design-body">
      <div class="lcp-design-left">
        <div class="lcp-design-comp-group">
          <div
            v-for="comp in components"
            :key="comp.name"
            class="lcp-design-comp-item"
            draggable="true"
            @dragstart="dragStart($event, comp)"
          >
            {{ comp.desc || comp.name }}
          </div>
        </div>
      </div>
      <div class="lcp-design-center" @click="centerClick">
        <LCPDesignProxy
          v-model:control="pageLayout"
          v-bind="components[pageLayout.compType].design"
        >
          <div></div>
        </LCPDesignProxy>
      </div>
      <div class="lcp-design-right">
        <a-collapse v-model:activeKey="activeKey">
          <a-collapse-panel
            key="3"
            header="This is panel header 3"
            collapsible="disabled"
          >
            <LCPDesignConfigText></LCPDesignConfigText>
          </a-collapse-panel>
        </a-collapse>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";
export default {
  name: "LCPDesign",
  provide() {
    return {
      $design: this,
    };
  },
  setup() {
    const pageLayout = reactive(lcp.getComponentDefaultOpts("LCPPage"));
    pageLayout.hash = lcp.uuid(12);
    if (!pageLayout.compMaxIndex) pageLayout.compMaxIndex = 0;
    pageLayout.compMaxIndex += 1;
    pageLayout.caption += pageLayout.compMaxIndex;
    const dragStart = (ev, comp) => {
      ev.dataTransfer.setData("type", "add");
      ev.dataTransfer.setData("compName", comp.name);
    };
    let clickSlot = null;
    const centerClick = (ev) => {
      clickSlot && clickSlot.removeAttr("focus");
      const slot = lcp.getOneExistAttrParent(ev.target, "slot-name");
      slot.attr("focus", "");
      clickSlot = slot;
    };
    return {
      components: lcp.$components,
      pageLayout,
      dragStart,
      centerClick,
    };
  },
};
</script>