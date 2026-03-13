<template>
  <div class="h-screen flex flex-col bg-gray-900 text-white">
    <!-- HEADER -->
    <div class="flex justify-between items-center bg-gray-800 px-4 py-2">
      <div class="flex gap-2">
        <button
          v-for="tab in tabs"
          :key="tab"
          @click="changeTab(tab)"
          class="px-4 py-1 rounded text-sm"
          :class="currentTab === tab ? 'bg-green-500' : 'bg-gray-700'"
        >
          {{ tab }}
        </button>
      </div>

      <div class="flex gap-2">
        <button @click="runCode" class="bg-green-500 px-4 py-1 rounded">Run</button>
        <button @click="resetCode" class="bg-red-500 px-4 py-1 rounded">Reset</button>
      </div>
    </div>

    <!-- EDITOR -->
    <div class="flex flex-1">
      <!-- CODE -->
      <div class="w-1/2 border-r border-gray-700 flex">
        <!-- LINE NUMBERS -->
        <div class="bg-gray-950 text-gray-500 text-sm font-mono px-3 py-4 select-none">
          <div v-for="n in lineCount" :key="n" class="leading-6">
            {{ n }}
          </div>
        </div>

        <!-- TEXTAREA -->
        <textarea
          v-model="codes[currentTab]"
          @input="updateLines"
          @scroll="syncScroll"
          class="flex-1 bg-gray-900 text-green-400 font-mono text-sm p-4 outline-none resize-none leading-6 h-screen overflow-y-auto"
        ></textarea>
      </div>

      <!-- OUTPUT -->
      <div class="w-1/2 bg-white text-black flex flex-col overflow-y-auto h-screen">
        <div class="bg-gray-200 px-3 py-1 text-xs">Output</div>

        <iframe v-if="currentTab !== 'Python'" ref="preview" class="flex-1 w-full"></iframe>

        <pre
          v-if="currentTab === 'Python'"
          class="flex-1 p-4 overflow-auto bg-gray-900 text-green-400 font-mono"
          >{{ pythonOutput }}</pre
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabs: ['HTML', 'CSS', 'JS', 'Python'],
      currentTab: 'HTML',
      lineCount: 1,
      pyodide: null,
      pythonOutput: '',

      defaultCodes: {
        HTML: '',
        CSS: '',
        JS: '',
        Python: '',
      },

      codes: {
        HTML: '',
        CSS: '',
        JS: '',
        Python: '',
      },
    }
  },

  computed: {
    cours() {
      const id = this.$route.params.id
      const cours = this.appStore.courses.find((i) => i.id === id)
      return cours?.lessons || null
    },

    lesson() {
      const lessonIndex = parseInt(this.$route.params.lessonIndex)
      if (!this.cours) return null
      const lesson = this.cours[this.$route.params.lessonId]
      return lesson?.content?.[lessonIndex] || null
    },
  },

  async mounted() {
    this.updateLines()
    this.pyodide = await loadPyodide()
  },
  watch: {
    lesson: {
      immediate: true,
      handler(val) {
        console.log('fgfgf')

        if (val) {
          this.initCode(val)
        }
      },
    },
  },

  methods: {
    initCode(lesson) {
      this.codes = {
        HTML: lesson?.about || '',
        CSS: lesson?.about || '',
        JS: lesson?.about || '',
        Python: lesson?.about || '',
      }

      this.updateLines()
      this.runCode()
    },
    syncScroll(e) {
      const lineNumbers = e.target.previousElementSibling
      lineNumbers.scrollTop = e.target.scrollTop
    },
    changeTab(tab) {
      this.currentTab = tab
      // Если для новой вкладки кода нет, используем default
      if (!this.codes[tab]) {
        this.codes[tab] = this.defaultCodes[tab] || ''
      }
      this.updateLines()
    },

    updateLines() {
      const code = this.codes[this.currentTab] || ''
      this.lineCount = code.split('\n').length
    },

    runCode() {
      if (this.currentTab === 'Python') {
        this.runPython()
        return
      }

      const html = this.codes.HTML
      const css = `<style>${this.codes.CSS}</style>`
      const js = `<script>${this.codes.JS}<\/script>`

      this.$refs.preview.srcdoc = `
${html}
${css}
${js}
`
    },

    async runPython() {
      try {
        const result = await this.pyodide.runPythonAsync(`
import sys
from io import StringIO

sys.stdout = StringIO()

${this.codes.Python}

sys.stdout.getvalue()
`)
        this.pythonOutput = result
      } catch (e) {
        this.pythonOutput = e.toString()
      }
    },

    resetCode() {
      this.codes = {
        HTML: this.lesson?.about || this.defaultCodes.HTML,
        CSS: this.lesson?.about || this.defaultCodes.CSS,
        JS: this.lesson?.about || this.defaultCodes.JS,
        Python: this.lesson?.about || this.defaultCodes.Python,
      }
      this.updateLines()
      this.runCode()
    },
  },
}
</script>
