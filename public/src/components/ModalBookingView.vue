<template>
  <div class="modal fade" :class="{ show: open, display: open }" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Booking Details</h5>
        </div>
        <div class="modal-body bg-light-gray" style="max-height: calc(100vh - 300px);overflow: auto;">
          <h5>Event Details</h5>
          <div class="card">
            <div class="card-body">
              <table class="table-borderless">
                <tr>
                  <td style="width: 180px;">Event</td>
                  <td>{{ booking?.event?.name }}</td>
                </tr>
                <tr>
                  <td style="width: 180px;">Location Type</td>
                  <td>{{ booking?.location?.value }}</td>
                </tr>
                <tr>
                  <td style="width: 180px;">Date</td>
                  <td>{{ booking?.header?.event_date }}</td>
                </tr>
                <tr>
                  <td style="width: 180px;">Check In</td>
                  <td>{{ booking?.header?.event_start_time }}</td>
                </tr>
                <tr>
                  <td style="width: 180px;">Check Out</td>
                  <td>{{ booking?.header?.event_end_time }}</td>
                </tr>
                <tr>
                  <td style="width: 180px;">Status</td>
                  <td>{{ booking?.status?.value }}</td>
                </tr>
              </table>
              <div class="d-flex justify-content-end mt-4">
                <button class="btn btn-danger w-25 me-4" @click="bookingDecline()">Decline</button>
                <button class="btn btn-primary w-25" @click="bookingApprove()" >Approve</button>
              </div>
            </div>
          </div>
          <h5 class="mt-4">Customer Details</h5>
          <div class="card">
            <div class="card-body">
              <table class="table-borderless">
                <tbody>
                  <tr>
                    <td style="width: 180px;">Customer Name</td>
                    <td>: {{ booking?.header?.first_name + ' ' + booking?.header?.last_name }}</td>
                  </tr>
                  <tr>
                    <td>Email</td>
                    <td>: {{ booking?.header?.email }}</td>
                  </tr>
                  <tr>
                    <td>Mobile</td>
                    <td>: {{ booking?.header?.phone }}</td>
                  </tr>
                  <tr>
                    <td>Location</td>
                    <td>: {{ booking?.location?.value }}</td>
                  </tr>
                  <tr>
                    <td>Valid ID</td>
                    <td>:</td>
                  </tr>
                </tbody>
              </table>
              <img class="w-100 mt-3" :src="booking?.valid_id"/>
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
    data() {
      return {}
    },
    methods: {
      closeModal() {
        this.$emit("closed");
      },
      async bookingApprove() {
        Swal.fire({
          title: "Confirmation",
          text: "Approve booking of " + this.booking?.header?.first_name + "?",
          showCancelButton: true,
          confirmButtonText: "Approve",
          icon: "question"
        }).then( async (result) => {
          if (result.isConfirmed) {
            await axios.get( variable()['api_main'] + "booking/approve?booking_dataid=" + this.booking?.header?.dataid ).then( async (response) => {
              if(response.data?.success) {
                Swal.fire({
                  title: 'Approved',
                  text: response.data?.message,
                  icon: 'success'
                }).then( async () => {
                  this.$emit('refresh');
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
          }
        });   
      },
      async bookingDecline() {
        Swal.fire({
          title: "Confirmation",
          text: "Decline booking of " + this.booking?.header?.first_name + "?",
          showCancelButton: true,
          confirmButtonText: "Approve",
          icon: "question"
        }).then( async (result) => {
          if (result.isConfirmed) {
            await axios.get( variable()['api_main'] + "booking/decline?booking_dataid=" + this.booking?.header?.dataid ).then( async (response) => {
              if(response.data?.success) {
                Swal.fire({
                  title: 'Decline',
                  text: response.data?.message,
                  icon: 'success'
                }).then( async () => {
                  this.$emit('refresh');
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
          }
        }); 
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