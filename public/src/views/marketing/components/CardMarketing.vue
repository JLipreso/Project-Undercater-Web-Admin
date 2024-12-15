<template>
  <div class="card my-4">
    <img class="marketing-cover-photo w-100 bg-dark" :src="marketing?.photo ? marketing?.fullpath : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK9aVGeIwDc_9na_hcvbjcH4oqbm-nWiMs-g&s' "/>
    <div class="card-body">
      <h3 class="text-primary">{{ marketing?.title }}</h3>
      <div>
        <h6 class="p-0 m-0 fw-bold">Date Posted:</h6>
        <p class="p-0 m-0"><small>{{ marketing?.created_at }}</small></p>
      </div>
      <p class="marketing-description mt-4">{{ marketing?.content }}</p>
      <div class="d-flex justify-content-end align-items-center">
        <button class="btn btn-primary w-50 me-3" @click="editModal(marketing)" >Edit</button>
        <button class="btn btn-danger w-50" @click="deleteMarketing()" >Delete</button>
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
    emits: ['edit', 'refresh'],
    props: ['marketing'],
    methods: {
      async deleteMarketing() {
        Swal.fire({
          title: 'Confirmation',
          text: 'Delete ' + this.marketing?.title + '?',
          icon: 'question',
          showCancelButton: true,
          confirmButtonText: 'Delete',
        }).then( async (result) => {
          if(result.isConfirmed) {
            await axios.get( variable()['api_main'] + "marketing/delete?dataid=" + this.marketing?.dataid ).then( async (response) => {
              if(response.data?.success) {
                Swal.fire({
                  title: 'Success',
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
      editModal(marketing: any) {
        this.$emit('edit', { data: marketing });
      }
    }
  });

</script>
<style scoped>
  p.marketing-description {
    display: -webkit-box;
    overflow : hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical; 
  }
  img.marketing-cover-photo {
    height: 250px;
    object-fit: cover;
    object-position: center;
  }
</style>