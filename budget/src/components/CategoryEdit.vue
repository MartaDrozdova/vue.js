<template>
  <div class="col s12 m6">
          <div>
            <div class="page-subtitle">
              <h4>Редагувати</h4>
            </div>

            <form @submit.prevent="submitHandler">
              <div class="input-field">
                <select ref="select" v-model="current">
                  <option
                    v-for="c in categories"
                    :key="c.id"
                    :value="c.id"
                  >
                    {{ c.title }}
                  </option>
                </select>
                <label>Виберіть категорию</label>
              </div>

              <div class="input-field">
                <input
                  id="name"
                  type="text"
                  v-model="title"
                  :class="{invalid: $v.title.$dirty && !$v.title.required}"
                >
                <label for="name">Назва</label>
                <span
                  v-if="$v.title.$dirty && !$v.title.required"
                  class="helper-text invalid"
                >
                  Ведіть назву категорії
                </span>
              </div>

              <div class="input-field">
                <input
                  id="limit"
                  type="number"
                  v-model.number="limit"
                  :class="{invalid: $v.limit.$dirty && !$v.limit.minValue}"
                >
                <label for="limit">Ліміт</label>
                <span
                v-if="$v.limit.$dirty && !$v.limit.minValue"
                  class="helper-text invalid"
                >
                  Мінімальна значення {{ $v.limit.$params.minValue.min }}
                </span>
              </div>

              <button class="btn waves-effect waves-light" type="submit">
                Обновить
                <i class="material-icons right">send</i>
              </button>
            </form>
          </div>
        </div>
</template>

<script>
import { required, minValue } from 'vuelidate/lib/validators'

export default {
  data: () => ({
    select: null,
    title: '',
    limit: 1,
    current: null
  }),
  validations: {
    title: { required },
    limit: { minValue: minValue(1) }
  },
  mounted () {
    window.M.updateTextFields()
    this.select = window.M.FormSelect.init(this.$refs.select)
  },
  watch: {
    current (catId) {
      const { title, limit } = this.categories.find(c => c.id === catId)
      this.title = title
      this.limit = limit
    }
  },
  created () {
    const { id, title, limit } = this.categories[0]
    this.current = id
    this.title = title
    this.limit = limit
  },
  props: {
    categories: {
      type: Array,
      required: true
    }
  },
  methods: {
    async submitHandler () {
      if (this.$v.$invalid) {
        this.$v.$touch()
      }
      try {
        const categoryData = {
          id: this.current,
          title: this.title,
          limit: this.limit
        }
        await this.$store.dispatch('updateCategory', categoryData)
        this.$message('Категорія успішно обновлена')
        this.$emit('update', categoryData)
      } catch (e) {}
    }
  },
  destroyed () {
    if (this.select && this.select.destroyed) {
      this.select.destroyed()
    }
  }
}
</script>
