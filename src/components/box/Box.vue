<template>
  <!--
    box组件
    size代表该盒子的大小；
    type代表该盒子的类型，例如primary，默认为default；
    title代表该盒子的标题；
    tools表示该盒子的按钮组；
    noPadding表示无填充；
    box-profile表示是否有box-profile；
    collapsable表示可折叠。
  -->
  <div :class="[size, { hidden }]">
    <div class="box" :class="'box-'+type">
      <div v-if="title" class="box-header with-border">
        <h3 class="box-title">{{title}}</h3>

        <div class="box-tools pull-right">
          <slot name="box-tools">
            <button v-if="collapsable" type="button" class="btn btn-box-tool" data-widget="collapse" >
              <i class="fa fa-minus"></i>
            </button>
            <button
              v-for="tool in tools"
              type="button"
              class="btn btn-box-tool"
              :data-widget="tool.widget"
              :data-toggle="tool.toggle"
              :data-target="tool.target"
              :data-type="tool.type"
            >
              <i class="fa" :class="tool.icon" data-toggle="tooltip" :data-original-title="tool.tooltip"></i>
            </button>
          </slot>
        </div>
      </div>

      <div class="box-body" :class="{
        'no-padding': noPadding,
        'box-profile': boxProfile,
      }">
        <slot></slot>
      </div>

      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'box',
    props: {
      size: {
        type: String,
        required: true,
      },
      type: {
        type: String,
        default: 'default',
      },
      title: String,
      tools: Array,
      hidden: Boolean,
      noPadding: Boolean,
      boxProfile: Boolean,
      collapsable: Boolean,
    },
  };
</script>
