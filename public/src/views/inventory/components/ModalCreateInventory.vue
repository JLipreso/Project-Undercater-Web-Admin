<template>
  <div class="modal fade" :class="{ show: open, display: open }" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Add Inventory</h5>
        </div>
        <hr/>
        <div class="modal-body" style="max-height: calc(100vh - 300px);overflow: auto;">
          <div class="form-group mt-3">
            <label>Inventory Name</label>
            <input type="text" class="form-control form-control-lg">
          </div>
          <div class="form-group mt-4">
            <label>Inventory Stock</label>
            <input type="number" class="form-control form-control-lg">
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