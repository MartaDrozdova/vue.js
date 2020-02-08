<template>
     <ul class="sidenav app-sidenav" :class="{open: value}">
         <router-link
         v-for="link in links"
         :key="link.url"
          tag="li"
          active-class="active"
          :to="link.url"
          :exact="link.exact"
         >
          <a href="" class="waves-effect waves-orange pointer"> {{ link.title }} </a>
         </router-link>
     </ul>
</template>

<script>
export default {
  props: ['value'],
  data: () => ({
    links: [
      { title: 'Рахунок', url: '/', exact: true },
      { title: 'Історія', url: '/history' },
      { title: 'Планування', url: '/planning' },
      { title: 'Новий запис', url: '/record' },
      { title: 'Категорії', url: '/categories' }
    ]
  })
}
</script>
