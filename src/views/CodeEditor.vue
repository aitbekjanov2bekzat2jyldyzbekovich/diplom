<template>
  <div class="h-screen flex flex-col bg-gray-900 text-white">
    <!-- HEADER -->
    <div class="flex justify-between items-center bg-gray-800 px-4 py-2">
      <div class="flex gap-2">
        <button
          v-for="tab in tabs"
          :key="tab"
          @click="currentTab = tab"
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

        <!-- EDITOR -->
        <textarea
          v-model="codes[currentTab]"
          @input="updateLines"
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
          >{{ pythonOutput }}
    </pre
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
        HTML: `<h1>Hello</h1>`,

        CSS: `body{
font-family:sans-serif;
text-align:center;
}`,

        JS: `console.log("Hello JS")`,

        Python: `print("Hello Python")`,
      },

      codes: {},
    }
  },
  computed: {
    cours() {
      const id = this.$route.params.id
      this.appStore.courses.forEach((i) => {
        i.status = false
      })
      return this.appStore.courses.find((i) => i.id === id) || null
    },
    lesson() {
      return this.cours.lessons ? Object.values(this.cours.lessons)[0] : null
    },
  },

  async mounted() {
    this.codes = JSON.parse(JSON.stringify(this.defaultCodes))

    this.runCode()
    this.updateLines()
    this.pyodide = await loadPyodide()
  },

  methods: {
    updateLines() {
      this.lineCount = this.codes[this.currentTab].split('\n').length
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
      this.codes = JSON.parse(JSON.stringify(this.defaultCodes))
      this.runCode()
    },
  },
}
</script>
