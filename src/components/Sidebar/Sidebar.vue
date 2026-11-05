<template>
  <v-navigation-drawer
    v-model="DRAWER_STATE"
    :rail="!DRAWER_STATE"
    :width="sidebarWidth"
    :permanent="$vuetify.display.mdAndUp"
    :temporary="$vuetify.display.smAndDown"
    :rail-width="sidebarMinWidth"
    :class="{'drawer-mini': !DRAWER_STATE}">
    <div class="v-list">
      <a class="v-list-item v-list-item--link text-grey text-sm-h6" target="_blank" href="https://flatlogic.com/generator">Generate App</a>
    </div>
    <v-list>
      <template v-for="(item, i) in items" :key="item.title || item.heading || i">
        <v-row v-if="item.heading" align="center">
          <v-col cols="6" class="py-5">
            <span style="padding-left: 32px" class="text-body-1 subheader" :class="DRAWER_STATE ? 'show' : 'hide'">{{ item.heading }}</span>
          </v-col>
        </v-row>
        <v-divider v-else-if="item.divider" class="my-4" />
        <v-list-group v-else-if="item.children && DRAWER_STATE" :value="item.title" color="primary">
          <template #activator="{ props }">
            <v-list-item v-bind="props" :title="item.title" :prepend-icon="item.icon" />
          </template>
          <v-list-item v-for="child in item.children" :key="child.title" :to="child.link" :title="child.title" :prepend-icon="child.icon" />
        </v-list-group>
        <v-list-item v-else color="primary" :href="item.href" :to="item.link === '#' ? null : item.link" :title="item.title">
          <template #prepend>
            <v-icon size="28" :color="item.color || ''">{{ item.icon }}</v-icon>
          </template>
        </v-list-item>
      </template>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import {mapActions, mapState} from 'vuex'

  export default {
    props: {
        source: String,
    },
    data(){
      return {
        items: [
          { title: 'Dashboard', icon: 'mdi-home', link: '/dashboard' },
          { title: 'Typography', icon: 'mdi-format-size', link: '/typography' },
          { title: 'Tables', icon: 'mdi-grid-large', link: '/tables' },
          { title: 'Notifications', icon: 'mdi-bell-outline', link: '/notifications' },
          {
            title: 'UI Elements',
            icon: 'mdi-image-filter-none',
            link: '/icons',
            model: false,
            children: [
              { title: 'Icons', icon: 'mdi-circle-small', link: '/icons'},
              { title: 'Charts', icon: 'mdi-circle-small', link: '/charts'},
              { title: 'Maps', icon: 'mdi-circle-small', link: '/maps'},
            ],
          },
          { divider: true },
          { heading: 'HELP' },
          { title: 'Library', icon: 'mdi-book-variant-multiple', href: 'https://flatlogic.com/templates'},
          { title: 'Support', icon: 'mdi-forum', href: 'https://flatlogic.com/forum/'},
          { title: 'FAQ', icon: 'mdi-help-circle-outline', href:'https://flatlogic.com/templates/vue-material-template'},
          { divider: true },
          { heading: 'PROJECTS' },
          { title: 'My recent', icon: 'mdi-circle-medium', color: 'warning'},
          { title: 'Starred', icon: 'mdi-circle-medium', color: 'primary'},
          { title: 'Background', icon: 'mdi-circle-medium', color: 'error'}

        ],
        sidebarWidth: 240,
        sidebarMinWidth: 96
      }
    },
    computed: {
      ...mapState(['drawer']),
      DRAWER_STATE: {
        get() {
          return this.drawer
        },
        set(newValue) {
          if (newValue === this.drawer) return;
          this.TOGGLE_DRAWER();
        }
      }
    },
    methods: {
      ...mapActions([ 'TOGGLE_DRAWER' ]),
    }
  }
</script>

<style src="./Sidebar.scss" lang="scss"/>
