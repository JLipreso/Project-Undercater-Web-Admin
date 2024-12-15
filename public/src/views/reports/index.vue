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
                <select v-model="scope" class="form-control me-4" @change="onScopeChanged()" style="min-width: 220px;">
                  <option value="daily">Daily</option>
                  <option value="weekly">Weekly</option>
                  <option value="monthly">Monthly</option>
                  <option value="yearly">Yearly</option>
                </select>
                <button class="btn btn-primary me-3" @click="printReport()">Fetch</button>
                <button class="btn btn-primary" @click="printTable()">Print</button>
               </div>
            </div>
            <div class="card">
              <h5 class="card-header">Manage Reports</h5>
              <div class="table-responsive text-nowrap">
                <table class="table" id="tableList">
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
                    <tr v-for="(booking, bi) in reports" :key="bi">
                      <td>{{ bi + 1 }}</td>
                      <td>{{ booking?.event?.name }}</td>
                      <td>{{ booking?.header?.event_date }}</td>
                      <td>{{ booking?.header?.event_start_time }}</td>
                      <td>{{ booking?.header?.event_end_time }}</td>
                      <td>{{ booking?.header?.total_price }}</td>
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

  import { defineComponent, toRaw } from 'vue';
  import { getLocalUser } from '@/assets/ts/localStorage';
  import { variable } from '@/var';
  import SectionSidebar from "@/components/SectionSidebar.vue";
  import SectionHeader from "@/components/SectionHeader.vue";
  import ModalPrintReport from "./components/ModalPrintReport.vue";
  import axios from 'axios';

  export default defineComponent({
    components: { ModalPrintReport, SectionSidebar, SectionHeader },
    data() {
      return {
        admin: {} as any,
        modal_open: false,
        scope: 'daily',
        reports: {} as any
      }
    },
    methods: {
      printReport() {
        this.modal_open = true;
      },
      async onScopeChanged() {
        console.log("Called:", this.scope);
        await this.fetchReport();
      },
      async fetchReport() {
        await axios.get(  variable()['api_main'] + "booking/report?scope=" + this.scope ).then( async (response) => {
          this.reports = response.data;
        });
      },
      printTable() {
        const elem = document.getElementById('tableList');
        if(elem) {
          const table = elem.outerHTML;
          const printWindow = window.open('', '', 'height=600,width=800');
          if(printWindow) {
            printWindow.document.write('<html><head><title>Print Table</title>');
            printWindow.document.write('<style>table {width: 100%; border-collapse: collapse;} th, td {border: 1px solid black; padding: 8px; text-align: left;}</style>');
            printWindow.document.write('</head><body>');
            printWindow.document.write(table);
            printWindow.document.write('</body></html>');
            printWindow.document.close();
            printWindow.print();
          }
        }
      }
    },
    async mounted() {
      await getLocalUser().then( async (admin) => {
        if(admin) {
          this.admin = admin;
          await this.fetchReport().then( async () => {
            console.log("Reports:", toRaw(this.$data));
          });
        }
        else {
          this.$router.replace('/');
        }
      });
    },
  });

</script>