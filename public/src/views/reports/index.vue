<template>
  <div class="layout-wrapper layout-content-navbar">
    <div class="layout-container">
      <SectionSidebar/>
      <div class="layout-page">
        <SectionHeader/>
        <div class="content-wrapper">
          <div class="container-xxl flex-grow-1 container-p-y">
            <div class="d-flex justify-content-between align-items-center py-3">
              <h4 class="fw-bold py-3 mb-4"><span class="text-muted fw-light">Reports /</span> Masterlist</h4>
              <div class="d-flex">
                <button class="btn btn-primary" @click="printReport()">Print</button>
               </div>
            </div>
            <div class="card">
              <h5 class="card-header">Manage Reports</h5>
              <div class="table-responsive text-nowrap">
                <table class="table">
                  <thead>
                    <tr>
                      <th>No.</th>
                      <th>Event</th>
                      <th>Date</th>
                      <th>Check In</th>
                      <th>Check Out</th>
                      <th>Price</th>
                    </tr>
                  </thead>
                  <tbody class="table-border-bottom-0">
                    <tr>
                      <td>1</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td>1</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <ModalPrintReport :open="modal_open" @closed="()=>{ modal_open = false; }" />
  </div>
</template>
<script lang="ts">

  import { defineComponent } from 'vue';
  import SectionSidebar from "@/components/SectionSidebar.vue";
  import SectionHeader from "@/components/SectionHeader.vue";
  import ModalPrintReport from "./components/ModalPrintReport.vue";

  export default defineComponent({
    components: { ModalPrintReport, SectionSidebar, SectionHeader },
    data() {
      return {
        modal_open: false
      }
    },
    methods: {
      printReport() {
        this.modal_open = true;
      }
    }
  });

</script>