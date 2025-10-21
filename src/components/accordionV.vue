<template>
  <div class="w-full flex flex-col space-y-4">
    <div class="w-full flex flex-col space-y-1 appText" v-for="(i, index) in items">
      <button
        class="border w-full p-4 flex justify-between rounded-xl items-center border-[#E6A421]"
        @click="toggle(index)"
      >
        <span class="font-bold">{{ i.title }}</span>
        <span class="">
          <svg
            data-accordion-icon
            class="w-3 h-3 rotate-180 shrink-0"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5 5 1 1 5"
            />
          </svg>
        </span>
      </button>
      <div
        v-html="i.body"
        class="w-full p-4 border rounded-xl border-[#E6A421] shadow-md"
        v-show="activeIndex === index"
      />
    </div>
  </div>
</template>
<script>
export default {
  props: {
    items: Array,
  },
  data() {
    return {
      activeIndex: null,
    }
  },
  methods: {
    toggle(index) {
      this.activeIndex = this.activeIndex === index ? null : index
    },
  },
}
</script>
