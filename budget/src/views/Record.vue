<template>
    <div>
  <div class="page-title">
    <h3>Навий запис</h3>
  </div>

  <Loader v-if="loading" />
  <p v-else-if="!categories.length" class="center">Категій поки немає. <router-link to='/categories'>Добавити категорію</router-link> </p>
  <form class="form" v-else @submit.prevent="handlerSabmit">
    <div class="input-field" >
      <select ref="select" v-model="category">
        <option
          v-for="c in categories"
          :key="c.id"
          :value="c.id"
        >
          {{ c.title }}
        </option>
      </select>
      <label>Виберіть категорію</label>
    </div>

    <p>
      <label>
        <input
            class="with-gap"
            name="type"
            type="radio"
            value="income"
            v-model="type"
        />
        <span>Дохід</span>
      </label>
    </p>

    <p>
      <label>
        <input
            class="with-gap"
            name="type"
            type="radio"
            value="outcome"
            v-model="type"
        />
        <span>Витрати</span>
      </label>
    </p>

    <div class="input-field">
      <input
          id="amount"
          type="number"
          v-model.number="amount"
          :class="{invalid: $v.amount.$dirty && !$v.amount.minValue}"
      >
      <label for="amount">Сумма</label>
      <span
        v-if="$v.amount.$dirty && !$v.amount.minValue"
        class="helper-text invalid"
      >
        Мінімальне значення {{ $v.amount.$params.minValue.min }}
      </span>
    </div>

    <div class="input-field">
      <input
          id="description"
          type="text"
          v-model="description"
          :class="{invalid: $v.description.$dirty && !$v.description.required}"
      >
      <label for="description">Опис</label>
      <span
        v-if="$v.description.$dirty && !$v.description.required"
        class="helper-text invalid"
      >
        Ведіть опис
      </span>
    </div>

    <button class="btn waves-effect waves-light" type="submit">
      Создать
      <i class="material-icons right">send</i>
    </button>
  </form>
</div>
</template>

<script>
import { required, minValue } from 'vuelidate/lib/validators'
import { mapGetters } from 'vuex'

export default {
  name: 'record',
  data: () => ({
    loading: true,
    categories: [],
    select: null,
    category: null,
    type: 'outcome',
    amount: 1,
    description: ''
  }),
  async mounted () {
    this.categories = await this.$store.dispatch('fetchCategories')
    this.loading = false
    if (this.categories.length) {
      this.category = this.categories[0].id
    }
    setTimeout(() => {
      this.select = window.M.FormSelect.init(this.$refs.select)
      window.M.updateTextFields()
    }, 0)
  },
  destroyed () {
    if (this.select && this.select.destroyed) {
      this.select.destroyed()
    }
  },
  validations: {
    amount: { minValue: minValue(1) },
    description: { required }
  },
  computed: {
    ...mapGetters(['info']),
    canCreateRecord () {
      if (this.type === 'income') {
        return true
      }
      return this.info.bill >= this.amount
    }
  },
  methods: {
    async handlerSabmit () {
      if (this.$v.$invalid) {
        this.$v.$touch()
      }
      if (this.canCreateRecord) {
        try {
          await this.$store.dispatch('createRecord', {
            categoryId: this.category,
            amount: this.amount,
            description: this.description,
            type: this.type,
            data: new Date().toJSON()
          })
          const bill = this.type === 'income'
            ? this.info.bill + this.amount
            : this.info.bill - this.amount
          await this.$store.dispatch('updateInfo', { bill })
          this.$message('Запис успішно створений')
          this.$v.$reset()
          this.amount = 1
          this.description = ''
        } catch (e) {}
      } else {
        this.$message(`Недостатня сумма на рахунку. Нехватає ${this.amount - this.info.bill}`)
      }
    }
  }
}
</script>
