<template>
  <div class="layout-wrapper layout-content-navbar">
    <div class="layout-container">
      <SectionSidebar/>
      <div class="layout-page">
        <SectionHeader/>
        <div class="content-wrapper">
          <div class="container-xxl flex-grow-1 container-p-y">
            <div class="row">
              <div class="col-sm-12 col-md-3 col-lg-2" v-for="(count, ci) in 12" :key="ci">
                <CardCounts/>
              </div>
            </div>
            <div class="row mt-4">
              <div class="col-sm-12 col-md-6">
                <CardBookingChart/>
              </div>
              <div class="col-sm-12 col-md-6">
                <CardBookingRevenue/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">

  import { defineComponent } from 'vue';
  import SectionSidebar from "@/components/SectionSidebar.vue";
  import SectionHeader from "@/components/SectionHeader.vue";
  import CardCounts from './components/CardCounts.vue';
  import CardBookingChart from './components/CardBookingChart.vue';
  import CardBookingRevenue from "./components/CardBookingRevenue.vue";

  export default defineComponent({
    components: { CardBookingChart, CardBookingRevenue, CardCounts, SectionSidebar, SectionHeader }
  });

</script>