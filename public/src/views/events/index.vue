<template>
  <div class="layout-wrapper layout-content-navbar">
    <div class="layout-container">
      <SectionSidebar/>
      <div class="layout-page">
        <SectionHeader/>
        <div class="content-wrapper">
          <div class="container-xxl flex-grow-1 container-p-y">
            <div class="d-flex justify-content-between align-items-center py-3">
              <h4 class="fw-bold">Manage Events</h4>
              <div class="d-flex">
                <button class="btn btn-primary">Add Event</button>
              </div>
            </div>
            <div class="card">
              <h5 class="card-header">Manage Events</h5>
              <div class="table-responsive text-nowrap">
                <table class="table">
                  <thead>
                    <tr>
                      <th>No.</th>
                      <th>Event</th>
                      <th>Price/pax</th>
                      <th>Max. Occupancy</th>
                      <th style="width: 100px;">View</th>
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
                      <td><button class="btn btn-primary btn-sm">View</button></td>
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
  </div>
</template>
<script lang="ts">

  import { defineComponent } from 'vue';
  import { getLocalUser } from '@/assets/ts/localStorage';
  import SectionSidebar from "@/components/SectionSidebar.vue";
  import SectionHeader from "@/components/SectionHeader.vue";

  export default defineComponent({
    components: { SectionSidebar, SectionHeader },
    data() {
      return {
        admin: {} as any,
      }
    },
    async mounted() {
      await getLocalUser().then( async (admin) => {
        if(admin) {
          this.admin = admin;
        }
        else {
          this.$router.replace('/');
        }
      });
    },
  });

</script>