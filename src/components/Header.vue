<template>
<div class="navbar bg-base-100">
  <div class="flex-1">
    <a class="btn btn-ghost text-xl">CastaDev</a>
  </div>
  <div class="flex-none">
    <ul class="menu menu-horizontal px-1">
      <li>
        <a>
          <RouterLink to="/">Home</RouterLink>
        </a>
      </li>
      <li>
        <a>
          <RouterLink to="/about">About</RouterLink>
        </a>
      </li>
      <li>
        <a>
          <RouterLink to="/chats">Chats</RouterLink>
        </a>
      </li>
    </ul>
  </div>
</div>
</template>

<script>
import { RouterLink } from 'vue-router'
</script>