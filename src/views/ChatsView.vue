<template>
  <ul class="menu bg-dracula w-56 rounded-box">
    <li>
      <h2 class="menu-title">Chats</h2>
      <ul>
        <li v-for="chat in chats" :key="chat.id">
          <RouterLink :to="`/chats/${chat.id}`">{{ chat.title }}</RouterLink>
        </li>
      </ul>
    </li>
  </ul>
  <div>
    <article>
      <RouterView />
    </article>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        chats: [
          { id: 1, title: 'Sara' },
          { id: 2, title: 'Camila' },
          { id: 3, title: 'Andrea' },
        ],
      }
    }
  }
</script>