<template>
  <div class="card my-4">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK9aVGeIwDc_9na_hcvbjcH4oqbm-nWiMs-g&s"/>
    <div class="card-body">
      <h1>{{ blog?.title }}</h1>
      <div>
        <h6 class="p-0 m-0 fw-bold">Date Posted:</h6>
        <p class="p-0 m-0"><small>{{ blog?.created_at }}</small></p>
      </div>
      <p class="blog-description mt-4">{{ blog?.description }}</p>
      <div class="d-flex justify-content-end align-items-center">
        <button class="btn btn-primary w-50 me-3" @click="()=>{ $emit('edit', { data: blog }); }" >Edit</button>
        <button class="btn btn-danger w-50">Delete</button>
      </div>
    </div>
  </div>
</template>
<script lang="ts">

  import { defineComponent } from 'vue';

  export default defineComponent({
    emits: ['edit'],
    props: ['blog']
  });

</script>
<style scoped>
  p.blog-description {
    display: -webkit-box;
    overflow : hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical; 
  }
</style>