<template>
  <div :class="size">
    <div class="nav-tabs-custom">
      <ul class="nav nav-tabs">
        <slot name="tab-item"></slot>
      </ul>
      <div class="tab-content">
        <slot name="tab-content"></slot>
      </div>
    </div>
  </div>

</template>
<script>
  export default{
    name: 'tabs',
    props: ['size']
  };
</script>
