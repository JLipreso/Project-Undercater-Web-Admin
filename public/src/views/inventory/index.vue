<template>
  <div class="layout-wrapper layout-content-navbar">
    <div class="layout-container">
      <SectionSidebar/>
      <div class="layout-page">
        <SectionHeader/>
        <div class="content-wrapper">
          <div class="container-xxl flex-grow-1 container-p-y">
            <div class="d-flex justify-content-between align-items-center py-3">
              <h4 class="fw-bold py-3">Manage Inventory</h4>
              <div class="d-flex">
                <button class="btn btn-primary" @click="()=>{ modal.create_open = true; }">Add Inventory</button>
              </div>
            </div>
            <div class="card">
              <h5 class="card-header">Manage Inventory</h5>
              <div class="table-responsive text-nowrap">
                <table class="table">
                  <thead>
                    <tr>
                      <th>No.</th>
                      <th>Stock Name</th>
                      <th>Base stock</th>
                      <th>Lost</th>
                      <th>Damage</th>
                      <th style="width: 100px;">Update</th>
                      <th style="width: 100px;">Delete</th>
                    </tr>
                  </thead>
                  <tbody class="table-border-bottom-0">
                    <tr>
                      <td>1</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td><button class="btn btn-primary btn-sm">Update</button></td>
                      <td><button class="btn btn-danger btn-sm">Delete</button></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <ModalCreateInventory :open="modal.create_open" @closed="()=>{ modal.create_open = false; }" />
  </div>
</template>
<script lang="ts">

  import { defineComponent } from 'vue';
  import SectionSidebar from "@/components/SectionSidebar.vue";
  import SectionHeader from "@/components/SectionHeader.vue";
  import ModalCreateInventory from "./components/ModalCreateInventory.vue";

  export default defineComponent({
    components: { ModalCreateInventory, SectionSidebar, SectionHeader },
    data() {
      return {
        modal: {
          create_open: false
        }
      }
    }
  });

</script>