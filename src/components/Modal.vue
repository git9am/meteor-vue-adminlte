<template>
  <!-- modal组件中
    id指该弹出框的id值；
    title表示该弹出框的主题；
  -->
  <div class="modal fade" :id="id">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">×</span></button>
          <h4 class="modal-title">{{title}}</h4>
        </div>

        <slot>
          <div class="modal-body">
            <slot name="body"></slot>
          </div>

          <div class="modal-footer">
            <button type="button" class="btn btn-default pull-left" data-dismiss="modal">{{$t('btn.cancel')}}</button>
            <slot name="footer"></slot>
          </div>
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'modal',
    props: ['id', 'title']
  };
</script>
