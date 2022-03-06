<template>
  <div class="lcp-design">
    <div class="lcp-design-head"></div>
    <div class="lcp-design-body">
      <div class="lcp-design-left">
        <div class="lcp-design-comp-grup">
          <div
            v-for="comp in components"
            :key="comp.name"
            class="lcp-design-comp-item"
          >
            {{ comp.desc || comp.name }}
          </div>
        </div>
      </div>
      <div class="lcp-design-center"></div>
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
export default {
  name: "LCPDesign",
  setup() {
    console.log(lcp.$components);
    return {
      components: lcp.$components,
    };
  },
};
</script>