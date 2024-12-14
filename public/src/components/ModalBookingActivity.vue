<template>
  <div class="modal fade" :class="{ show: open, display: open }" tabindex="-1" role="dialog">
    <div class="modal-dialog modal-xl" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Booking Activity</h5>
        </div>
        <div class="modal-body bg-light-gray" style="max-height: calc(100vh - 300px);overflow: auto;">
          <div class="row">
            <div class="col-sm-12 col-md-4">
              <swiper :slides-per-view="1" :space-between="0" @swiper="onSwiper">
                <swiper-slide>
                  <div class="card">
                    <div class="card-body">
                      <h5 class="text-primary fw-bold">Event Details</h5>
                      <table class="table">
                        <tbody>
                          <tr>
                            <td class="px-0" style="width: 130px;">Event</td>
                            <td class="px-0">: {{ booking?.event?.name }}</td>
                          </tr>
                          <tr>
                            <td class="px-0">Location Type</td>
                            <td class="px-0">: {{ booking?.location?.value }}</td>
                          </tr>
                          <tr>
                            <td class="px-0">Date</td>
                            <td class="px-0">: {{ booking?.header?.event_date }}</td>
                          </tr>
                          <tr>
                            <td class="px-0">Check In</td>
                            <td class="px-0">: {{ booking?.header?.event_start_time }}</td>
                          </tr>
                          <tr>
                            <td class="px-0">Check Out</td>
                            <td class="px-0">: {{ booking?.header?.event_end_time }}</td>
                          </tr>
                          <tr>
                            <td class="px-0">Status</td>
                            <td class="px-0">: {{ booking?.status?.value }}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </swiper-slide>
                <swiper-slide>
                  <div class="card">
                    <div class="card-body">
                      <h5 class="text-primary fw-bold">Update Activity</h5>
                      <div class="mb-3">
                        <label>Title</label>
                        <input v-model="form_update.title" type="text" class="form-control form-control-lg">
                      </div>
                      <div class="mb-3">
                        <label>Description</label>
                        <textarea v-model="form_update.description" class="form-control form-control-lg" style="min-height: 150px"></textarea>
                      </div>
                      <div class="mb-3">
                        <label>Status</label>
                        <select v-model="form_update.status" class="form-control form-control-lg">
                          <option value="0">Select status</option>
                          <option value="Pending">Pending</option>
                          <option value="Ongoing">Ongoing</option>
                          <option value="Done">Done</option>
                        </select>
                      </div>
                      <div class="d-flex justify-content-end mb-3">
                        <button class="btn btn-clear-secondary" @click="cancelUpdateTask()">Cancel</button>
                        <button class="btn btn-primary" @click="updateActivity()">Update Activity</button>
                      </div>
                    </div>
                  </div>
                </swiper-slide>
                <swiper-slide>
                  <div class="card">
                    <div class="card-body">
                      <h5 class="text-primary fw-bold">Add Activity</h5>
                      <div class="mb-3">
                        <label>Title</label>
                        <input v-model="form_add.title" type="text" class="form-control form-control-lg">
                      </div>
                      <div class="mb-3">
                        <label>Description</label>
                        <textarea v-model="form_add.description" class="form-control form-control-lg" style="min-height: 150px"></textarea>
                      </div>
                      <div class="mb-3">
                        <label>Status</label>
                        <select v-model="form_add.status" class="form-control form-control-lg">
                          <option value="0">Select status</option>
                          <option value="Pending">Pending</option>
                          <option value="Ongoing">Ongoing</option>
                          <option value="Done">Done</option>
                        </select>
                      </div>
                      <div class="d-flex justify-content-end mb-3">
                        <button class="btn btn-clear-secondary" @click="cancelUpdateTask()">Cancel</button>
                        <button class="btn btn-primary" @click="saveActivity()">Save</button>
                      </div>
                    </div>
                  </div>
                </swiper-slide>
              </swiper>
            </div>
            <div class="col-sm-12 col-md-8">
              <div class="card">
                <div class="card-body">
                  <div class="d-flex justify-content-between align-items-center py-3">
                    <h5 class="text-primary fw-bold">Event Activities</h5>
                    <button class="btn btn-primary" @click="()=>{ swiper.slideTo(2) }" >Add Activity</button>
                  </div>
                  <div class="table-responsive text-nowrap">
                    <table class="table">
                      <thead>
                        <tr>
                          <th style="max-width: calc(100% - 200px)">Task</th>
                          <th style="width: 100px;">Update</th>
                          <th style="width: 100px;">Delete</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="(activity, ai) in activities" :key="ai">
                          <td>
                            <div >
                              <p class="p-0 m-0"><strong><small class="text-primary">{{ activity?.title }}</small> | <small class="text-warning">{{ activity?.status }}</small></strong></p>
                              <p class="p-0 m-0 text-wrap"><small>{{ activity?.description }}</small></p>
                            </div>
                          </td>
                          <td><button class="btn btn-primary btn-sm" @click="updateActivitySwipe(activity)">Update</button></td>
                          <td><button class="btn btn-danger btn-sm" @click="deleteActivity(activity)" >Delete</button></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal" @click="closeModal()">Close</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">

  import { defineComponent } from 'vue';
  import { variable } from '@/var';
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import axios from 'axios';
  import Swal from 'sweetalert2';

  export default defineComponent({
    emits: ['closed', 'refresh'],
    props: {
      open: {
        default: false,
        type: Boolean
      },
      booking: {
        default: {},
        type: Object
      }
    },
    components: { Swiper, SwiperSlide },
    data() {
      return {
        swiper: {} as any,
        activities: {} as any,
        form_update: {
          dataid: '',
          title: '',
          description: '',
          status: '0'
        },
        form_add: {
          booking_dataid: '',
          title: '',
          description: '',
          status: '0'
        }
      }
    },
    methods: {
      closeModal() {
        this.$emit("closed");
      },
      onSwiper(event: any) {
        this.swiper = event;
      },
      cancelUpdateTask() {
        this.swiper.slideTo(0);
      },
      updateActivitySwipe(activity: any) {
        this.form_update.dataid           = activity?.dataid;
        this.form_update.title            = activity?.title;
        this.form_update.description      = activity?.description;
        this.form_update.status           = activity?.status;
        this.swiper.slideTo(1);
      },
      async updateActivity() {
        await axios.get( variable()['api_main'] + "booking_activity/update?" + $.param(this.form_update) ).then( async (response) => {
          if(response.data?.success) {
            Swal.fire({
              title: 'Updated!',
              text: response.data?.message,
              icon: 'success'
            }).then( async () => {
              this.form_update.dataid     = '';
              this.form_update.title       = '';
              this.form_update.description = '';
              this.form_update.status      = '0';
              await this.fetchActivities();
            });
          }
          else {
            Swal.fire({
              title: 'Warning',
              text: response.data?.message,
              icon: 'warning'
            });
          }
        });
      },
      async saveActivity() {
        await axios.get( variable()['api_main'] + "booking_activity/add?" + $.param(this.form_add)).then( async (response) => {
          if(response.data?.success) {
            Swal.fire({
              title: 'Added!',
              text: response.data?.message,
              icon: 'success'
            }).then( async () => {
              this.form_add.title       = '';
              this.form_add.description = '';
              this.form_add.status      = '0';
              await this.fetchActivities();
            });
          }
          else {
            Swal.fire({
              title: 'Warning',
              text: response.data?.message,
              icon: 'warning'
            });
          }
        });
      },
      async deleteActivity(activity: any) {
        Swal.fire({
          title: "Confirmation",
          text: "Delete " + activity?.title + "?",
          showCancelButton: true,
          confirmButtonText: "Delete",
          icon: "question"
        }).then( async (result) => {
          if (result.isConfirmed) {
            await axios.get( variable()['api_main'] + "booking_activity/delete?dataid=" + activity?.dataid ).then( async (response) => {
              if(response.data?.success) {
                Swal.fire({
                  title: 'Success',
                  text: response.data?.message,
                  icon: 'success'
                }).then( async () => {
                  await this.fetchActivities();
                });
              }
              else {

              }
            });
          }
        });
      },
      async fetchActivities() {
        await axios.get( variable()['api_main'] + "booking_activity/fetchAll?booking_dataid=" + this.booking?.header?.dataid ).then( async (response) => {
          this.activities = response.data;
        });
      }
    },
    watch: {
      open: function () {
        if(this.open) {
          this.fetchActivities().then( async () => {
            this.form_add.booking_dataid = this.booking?.header?.dataid;
          });
        }
      }
    }
  });

</script>
<style scoped>
  .display {
    display: block;
    background-color: #0a0a0a42;
  }
</style>