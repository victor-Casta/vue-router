<template>
<div class="navbar bg-base-100">
  <div class="flex-1">
    <a class="btn btn-ghost text-xl">CastaDev</a>
  </div>
  <div class="flex-none">
    <ul class="menu menu-horizontal px-1">
      <li>
        <a>
          <RouterLink :to="{ name: 'home' }">Home</RouterLink>
        </a>
      </li>
      <li>
        <a>
          <RouterLink to="/session">Session</RouterLink>
        </a>
      </li>
      <li>
        <a>
          <RouterLink :to="{ name: 'about' }">About</RouterLink>
        </a>
      </li>
      <li>
        <a>
          <RouterLink to="/chats">Chats</RouterLink>
        </a>
      </li>
      <li>
        <a>
          <RouterLink v-show="isTest" to="/profile">Profile</RouterLink>
        </a>
      </li>
    </ul>
  </div>
</div>
</template>

<script>
import { RouterLink } from 'vue-router'

const isTest = import.meta.env.VITE_STAGE === 'test'
</script>