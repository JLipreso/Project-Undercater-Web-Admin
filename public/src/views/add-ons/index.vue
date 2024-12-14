<template>
  <div class="layout-wrapper layout-content-navbar">
    <div class="layout-container">
      <SectionSidebar/>
      <div class="layout-page">
        <SectionHeader/>
        <div class="content-wrapper">
          <div class="container-xxl flex-grow-1 container-p-y">
            <div class="d-flex justify-content-between align-items-center py-3">
              <h4 class="fw-bold py-3">Manage Add-ons</h4>
              <div class="d-flex">
                <button class="btn btn-primary" @click="swipeToAdd()">Add Add-ons</button>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-12 col-md-5">
                <swiper :slides-per-view="1" :space-between="50" @swiper="onSwiper">
                  <swiper-slide class="swiper-no-swiping"><CardAddonsView/></swiper-slide>
                  <swiper-slide class="swiper-no-swiping"><CardAddonsAdd/></swiper-slide>
                  <swiper-slide class="swiper-no-swiping"><CardAddonsUpdate/></swiper-slide>
                </swiper>
              </div>
              <div class="col-sm-12 col-md-7">
                <TableAddons @view="swipeToView" @update="swipeToUpdate" />
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
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import { getLocalUser } from '@/assets/ts/localStorage';
  import SectionSidebar from "@/components/SectionSidebar.vue";
  import SectionHeader from "@/components/SectionHeader.vue";
  import TableAddons from "./components/TableAddons.vue";
  import CardAddonsView from './components/CardAddonsView.vue';
  import CardAddonsAdd from "./components/CardAddonsAdd.vue";
  import CardAddonsUpdate from './components/CardAddonsUpdate.vue';

  export default defineComponent({
    components: { CardAddonsView, Swiper, SwiperSlide, CardAddonsUpdate, CardAddonsAdd, TableAddons, SectionSidebar, SectionHeader },
    data() {
      return {
        swiper: {} as any,
        admin: {} as any,
      }
    },
    methods: {
      onSwiper(event: any) {
        this.swiper = event;
      },
      swipeToView(event: any) {
        this.swiper.slideTo(0);
      },
      swipeToUpdate(event: any) {
        this.swiper.slideTo(2);
      },
      swipeToAdd() {
        this.swiper.slideTo(1);
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