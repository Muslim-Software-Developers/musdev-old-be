<template>
  <div class="app">
    <DefaultHeaderFe/>
    <router-view></router-view>
    <DefaultFooterFe/>
  </div>
</template>

<script>
import nav from '../_navfe'
import { Sidebar as AppSidebar, SidebarFooter, SidebarForm, SidebarHeader, SidebarMinimizer, SidebarNav, Breadcrumb } from '@coreui/vue'
//import DefaultAside from './DefaultAside'
import DefaultHeaderFe from './DefaultHeaderFe'
import DefaultFooterFe from './DefaultFooterFe'

export default {
  name: 'DefaultContainerFe',
  components: {
    AppSidebar,
    //AppAside,
    Breadcrumb,
    //DefaultAside,
    SidebarForm,
    SidebarFooter,
    SidebarHeader,
    SidebarNav,
    SidebarMinimizer,
    DefaultFooterFe,
    DefaultHeaderFe
  },
  data () {
    return {
      nav: nav.items
    }
  },
  computed: {
    name () {
      return this.$route.name
    },
    list () {
      return this.$route.matched.filter((route) => route.name || route.meta.label )
    }
  }
}
</script>
