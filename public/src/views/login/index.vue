<template>
<div class="container-xxl">
      <div class="authentication-wrapper authentication-basic container-p-y">
        <div class="authentication-inner">
          <div class="card">
            <div class="card-body">
              <div class="app-brand justify-content-center">
                <h1>Undercater</h1>
              </div>
              <!-- /Logo -->
              <h4 class="mb-2">Welcome back👋</h4>
              <p class="mb-4">Please sign-in to your account and start the adventure</p>

              <div id="formAuthentication" class="mb-3">
                <div class="mb-3">
                  <label for="email" class="form-label">Email or Username</label>
                  <input type="text" class="form-control" id="email" name="email-username" placeholder="Enter your email or username" autofocus/>
                </div>
                <div class="mb-3 form-password-toggle">
                    <label class="form-label" for="password">Password</label>
                  <div class="input-group input-group-merge">
                    <input type="password" id="password" class="form-control" name="password" placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"/>
                    <span class="input-group-text cursor-pointer"><i class="bx bx-hide"></i></span>
                  </div>
                </div>
                <div class="mb-3">
                  <button class="btn btn-primary d-grid w-100" @click="login()">Sign in</button>
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

    export default defineComponent({
        name: "LoginPage",
        methods: {
            login() {

            }
        }
    });

</script>