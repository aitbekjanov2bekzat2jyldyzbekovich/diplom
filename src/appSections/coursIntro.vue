<template>
  <div class="w-full rounded-2xl bg-[#fff] p-4 shadow-md border flex justify-between items-center ">
   <div>
     <div class="flex gap-3 items-center border p-2 rounded-2xl w-max border-[#E6A421]" v-if="profile">
      <div class=" w-14 h-14 rounded-full">
      <img :src="profile?.avatar" alt="Profile Image" class="w-full h-full rounded-full object-cover" />
      </div>
      <div class="flex flex-col gap-1  font-semibold">
        <div class="flex  items-center gap-2 heading text-lg">
           <h5>{{ profile?.surname }}</h5>
           <h5 >{{ profile?.name }}</h5>
        </div>
        <div class="flex items-center justify-center">
          <span class="">{{ profile?.createrIs || 'Неизвестный автор' }}</span>
        </div>
      </div>
      
    </div>
    <div v-else class="flex items-center gap-2">
      <div class="w-14 h-14 rounded-full bg-[#5857538e]"/>
      <div class="flex flex-col gap-2">
        <div class=" w-80 h-4 bg-[#5857538e] rounded-md"/>
        <div class=" w-80 h-4 bg-[#5857538e] rounded-md"/>

      </div>
    </div>
   </div>
<div>
  <span class="mr-4 cursor-pointer" @click="shareOnWhatsApp">
    <i class="pi pi-whatsapp text-2xl text-[#25D366]"></i>
  </span>
  <span class="appText">{{ formattedDate(dataIntro?.createdAt) }}</span>
</div>
  </div>
  <div class="w-full rounded-2xl bg-[#fff]  shadow-md overflow-hidden ">
    <div class="bg-[#E6A421] p-4 rounded-t-2xl">
      <div >
        <buttonV></buttonV>
        
      </div>
      <h3 class=" font-bold text-[#fff] heading text-5xl">{{ dataIntro?.title }}</h3>

    </div>
  </div>
</template>
<script>
export default {

  props: {
    dataIntro: Object,
  },
  data() {
    return {
      profile: null,
      load: true,
      href: window.location.href,
    }
  },
  methods: {
    formattedDate(timestamp) {
      return new Intl.DateTimeFormat('ru-RU', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      }).format(new Date(timestamp))
    },
    shareOnWhatsApp() {
      const courseTitle = 'Мой крутой курс'
      const courseLink = window.location.href // текущий URL курса
      const message = `Смотри этот курс: ${courseTitle} - ${courseLink}`

      // Кодируем ссылку для WhatsApp
      const url = `https://wa.me/?text=${encodeURIComponent(message)}`

      window.open(url, '_blank')
    },
  },
  async mounted() {
    try {
      this.profile = await this.appStore.getUserProfile(this.dataIntro?.createdId)
    } catch (err) {
      this.profile = null
      this.appStore.validate(err.massage)
    } finally {
      this.load = false
    }
  },
}
</script>
