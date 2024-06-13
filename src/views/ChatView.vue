<template>
  <div v-for="message in filteredMessages" :key="message.id">
    {{ message.text }}
  </div>
</template>

<script>
  export default {
    props: {
      chatId: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
        messages: [
          { id: 0, text: 'Hello!', author: 1 },
          { id: 1, text: 'Hi!', author: 2 },
          { id: 2, text: 'How are you?', author: 1 },
          { id: 3, text: 'I\'m fine, thanks!', author: 2 },
          { id: 4, text: 'What\'s up?', author: 2 }
        ]
      }
    },
    computed: {
      filteredMessages() {
        return this.messages.filter((message) => {
          return `${message.author}` === this.chatId
        } )    
      }
    }
  }
</script>