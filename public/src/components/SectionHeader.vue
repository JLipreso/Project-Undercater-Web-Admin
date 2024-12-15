<template>
  <nav class="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme" id="layout-navbar">
    <div class="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none">
      <a class="nav-item nav-link px-0 me-xl-4">
        <i class="bx bx-menu bx-sm"></i>
      </a>
    </div>
    <div class="navbar-nav-right d-flex align-items-center" id="navbar-collapse">
      <ul class="navbar-nav flex-row align-items-center ms-auto">
        <li class="nav-item navbar-dropdown dropdown-user dropdown">
          <a class="nav-link dropdown-toggle hide-arrow" href="javascript:void(0);" data-bs-toggle="dropdown">
            <div class="avatar avatar-online">
              <img src="/src/assets/img/avatars/1.png" class="w-px-40 h-auto rounded-circle" />
            </div>
          </a>
          <ul class="dropdown-menu dropdown-menu-end">
            <li>
              <a class="dropdown-item" href="#">
                <div class="d-flex">
                          <div class="flex-shrink-0 me-3">
                            <div class="avatar avatar-online">
                              <img src="/src/assets/img/avatars/1.png" class="w-px-40 h-auto rounded-circle" />
                            </div>
                          </div>
                          <div class="flex-grow-1">
                            <span class="fw-semibold d-block">{{ user?.first_name + ' ' + user?.last_name }}</span>
                            <small class="text-muted">Role: {{ user?.role == 1 ? 'Admin' : 'Staff' }}</small>
                          </div>
                </div>
              </a>
            </li>
            <li>
              <button class="dropdown-item" @click="logoutSystem()">
                <i class="bx bx-power-off me-2"></i>
                <span class="align-middle">Log Out</span>
              </button>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </nav>
</template>
<script lang="ts">

  import { getLocalUser } from '@/assets/ts/localStorage';
import Swal from 'sweetalert2';
  import { defineComponent } from 'vue';

  export default defineComponent({
    data() {
      return {
        user: {} as any
      }
    },
    methods: {
      async logoutSystem() {
        Swal.fire({
          title: 'Confirmation',
          text: 'Logout Undercater Portal?',
          icon: 'question',
          showCancelButton: true,
          confirmButtonText: 'Logout'
        }).then( async (result) => {
          if(result.isConfirmed) {
            localStorage.clear();
            this.$router.replace('/');
          }
        });
      }
    },
    async mounted() {
      await getLocalUser().then( async (user) => {
        this.user = user;
      });
    },
  });

</script>