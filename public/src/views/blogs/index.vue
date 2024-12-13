<template>
  <div class="layout-wrapper layout-content-navbar">
    <div class="layout-container">
      <SectionSidebar/>
      <div class="layout-page">
        <SectionHeader/>
        <div class="content-wrapper">
          <div class="container-xxl flex-grow-1 container-p-y">
            <div class="d-flex justify-content-between align-items-center py-3">
              <h4 class="fw-bold">Manage Blog</h4>
              <div class="d-flex">
                <input type="text" class="form-control me-3" placeholder="Search" />
                <button class="btn btn-primary" style="width: 180px;" @click="()=>{ modal.create_blog_open = true; }">Create Blog</button>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-12 col-md-6 col-lg-4" v-for="(blog, bi) in 8" :key="bi">
                <CardBlog/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <ModalCreateBlog :open="modal.create_blog_open" @closed="()=>{ modal.create_blog_open = false; }" />
  </div>
</template>
<script lang="ts">

  import { defineComponent } from 'vue';
  import SectionSidebar from "@/components/SectionSidebar.vue";
  import SectionHeader from "@/components/SectionHeader.vue";
  import CardBlog from './components/CardBlog.vue';
  import ModalCreateBlog from './components/ModalCreateBlog.vue';

  export default defineComponent({
    components: { ModalCreateBlog, CardBlog, SectionSidebar, SectionHeader },
    data() {
      return {
        modal: {
          create_blog_open: false
        }
      }
    }
  });

</script>
