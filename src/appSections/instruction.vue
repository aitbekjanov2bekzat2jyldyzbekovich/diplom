<template>
  <section-layout :title="title">
    <div class="bg-[#fff] border rounded-2xl shadow-md flex" data-aos="zoom-in">
      <div
        class="w-1/2 border-r-2 border-r-[#E6A421] border-dashed p-8 max-sm:w-full max-sm:border-none"
      >
        <accordion-v :items="accordion" />
      </div>
      <div
        v-if="this.appStore.sizeWindow > 639"
        class="w-1/2 p-8 flex items-center justify-center border-l-2 border-l-[#E6A421] border-dashed"
      >
        <component :is="icon" class="fill-[#E6A421] w-96" />
      </div>
    </div>
  </section-layout>
</template>

<script>
import instruction from '@/assets/objects/instruction.svg'
import accordionV from '@/components/accordionV.vue'
import { markRaw } from 'vue'

export default {
  data() {
    return {
      title: 'Инструкция по cозданию курса',
      icon: markRaw(instruction),
      accordion: [
        {
          id: 1,
          title: 'Как создать курс?',
          body: '<ul class="list-disc pl-5"><li>Тебе нужно войти в аккаунт или зарегистрироваться.</li> <li>Затем зайди в раздел <b>Мои курсы</b> в профиле и нажми <b>Создать</b>, либо нажми <b>Создать курс</b> на главной странице.</li><li>В появившемся окне заполни нужные поля и нажми <b>Создать</b>.</li></ul>',
        },
        {
          id: 2,
          title: 'Какие поля нужно заполнять обязательно?',
          body: '<ul class="list-disc pl-5"><li>Название курса.</li><li>Заполнить поле о курсе.</li> <li><b>Обязательно нужно пройти тест на знание.</b> </li></ul>',
        },
        {
          id: 3,
          title: 'Как редактировать?',
          body: '<ul class="list-disc pl-5"><li>Нажми на <b>Курсы </b>или <b>Профиль</b> и нажми на <b>Мои курсы</b> </li><li>Потом заходишь в курс, который хочешь изменить.</li><li>Нажми на кнопку <b>Редактировать</b>, потом откроется админ-панель.</li><li>Введи свой пароль, потом можешь изменить его как хочешь.</li></ul>',
        },
      ],
    }
  },
  components: {
    accordionV,
  },
}
</script>
