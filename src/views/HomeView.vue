<template>
  <main class="w-screen h-screen flex flex-col items-center justify-center">
    <img src="https://firebasestorage.googleapis.com/v0/b/assets-3ce98.appspot.com/o/login.png?alt=media&token=afed9e4e-e351-4b7c-b349-7ed2770f2d8c" alt="login image" class="drop-shadow-purple mb-10">
    <label class="input input-bordered flex items-center gap-2 mb-8">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4 opacity-70">
        <path
          d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
      </svg>
      <input type="text" class="grow" placeholder="Username" v-model="username" />
    </label>
    <button class="btn btn-outline" @click="login">Login</button>
  </main>
</template>

<script setup>
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'

  const username = ref('')
  const router = useRouter()

  const login = () => {
    router.push({ path: '/chats', query: { username: username.value } })
  }
</script>