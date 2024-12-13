<template>
  <div class="modal fade" :class="{ show: open, display: open }" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Booking Details</h5>
        </div>
        <hr/>
        <div class="modal-body" style="max-height: calc(100vh - 300px);overflow: auto;">
          <div class="p-5 bg-dark"></div>
          <div class="form-group mt-3">
            <label>Title</label>
            <input type="text" class="form-control form-control-lg">
          </div>
          <div class="form-group mt-4">
            <label>Description</label>
            <textarea class="form-control form-control-lg"></textarea>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal" @click="closeModal()">Close</button>
          <button type="button" class="btn btn-primary">Save</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">

  import { defineComponent } from 'vue';

  export default defineComponent({
    props: {
      open: {
        default: false,
        type: Boolean
      }
    },
    data() {
      return {}
    },
    methods: {
      closeModal() {
        this.$emit("closed");
      },
    }
  });

</script>
<style scoped>
  .display {
    display: block;
    background-color: #0a0a0a42;
  }
</style>