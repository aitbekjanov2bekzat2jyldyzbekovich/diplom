<template>
  <div class="bg-[#fff] border rounded-2xl shadow-md p-8" data-aos="zoom-in">
    <div>
      <input :type="img.type" :id="img.id" v-show="img.status" />
      <label
        :for="img.id"
        class="flex items-center justify-center w-full py-14 border-2 border-[#E6A421] rounded-2xl text-[#E6A421] appText font-bold cursor-pointer"
      >
        <i class="pi pi-image" />
      </label>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      img: {
        type: 'file',
        status: false,
        id: 'createCoursImg',
      },
    }
  },
}
</script>
