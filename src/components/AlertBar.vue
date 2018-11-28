<template>
  <div class="alert-bar">
    <v-snackbar :value="hasSuccessMessage" @input="dismiss('success')" color="success">
      {{messages.success}}
      <v-btn flat @click="dismiss('success')">ОК</v-btn>
    </v-snackbar>

    <v-snackbar :value="hasErrorMessages" @input="dismiss('error')" color="error">
      {{formatedErrorMessage}}
      <v-btn flat @click="dismiss('error')">ОК</v-btn>
    </v-snackbar>

    <v-snackbar :value="hasValidationMessages" @input="dismiss('validation')" color="warning">
      {{formatedValidationMessage}}
      <v-btn flat @click="dismiss('validation')">ОК</v-btn>
    </v-snackbar>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  props: ['absolute'],
  computed: {
    ...mapState(['messages']),
    hasSuccessMessage () {
      return this.messages.success !== ''
    },
    hasErrorMessages () {
      return this.messages.error.length > 0
    },
    hasValidationMessages () {
      return this.messages.validation.length > 0
    },
    formatedErrorMessage () {
      return this.messages.error.map(msg => `• ${msg}`).join('<br>')
    },
    formatedValidationMessage () {
      return this.messages.validation.map(msg => `• ${msg}`).join('<br>')
    }
  },
  methods: {
    ...mapActions(['pushMessage']),
    dismiss (type) {
      let obj
      if (type === 'error') {
        obj = { type, message: [] }
      } else if (type === 'validation') {
        obj = { type, message: {} }
      } else {
        obj = { type, message: '' }
      }
      this.pushMessage(obj)
    }
  }
}
</script>

<style>
</style>
