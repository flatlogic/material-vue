<template>
  <v-app-bar
    class="main-header text-white"
    height="64"
    color='primary'
    >
    <v-btn variant="text" icon class="mx-1" @click.stop="TOGGLE_DRAWER">
      <template v-if="DRAWER_STATE">
        <v-icon  style="font-size: 28px">mdi-arrow-left</v-icon>
      </template>
      <template v-else>
        <v-icon style="font-size: 28px">mdi-menu</v-icon>
      </template>
    </v-btn>
    <v-toolbar-title>Vue Material Admin</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn
      href="https://flatlogic.com/templates/vue-material-template-full/demo"
      class="d-none d-sm-flex mr-5"
      variant="outlined"
      color="error">
      Unlock Full Version</v-btn>
    <HeaderSearch />

    <v-menu
      offset-y
      bottom
      nudge-bottom="10"
      left>
        <template v-slot:activator="{ props }">
          <v-btn
            @click="notificationsBadge ? notificationsBadge = !notificationsBadge : ''"
            v-bind="props"

            style="font-size: 28px"
            icon
            variant="text"
            class="mr-2">
              <v-badge
                :model-value="notificationsBadge"
                color="error"
                content="4"
                overlap>
                  <v-icon
                    style="font-size: 28px"
                    color="rgba(255, 255, 255, 0.35)">mdi-bell-outline</v-icon>
              </v-badge>
          </v-btn>
        </template>
        <v-list>
          <v-list color="primary">
            <v-list-item
              v-for="(item, i) in notifications"
              :key="i">
                <template #prepend><div class="mr-4 mb-1">
                  <v-icon
                    :color="item.color">{{ item.icon }}</v-icon>
                </div></template>
                <div class="v-list-item__content">
                  <v-list-item-title>{{ item.text }}</v-list-item-title>
                </div>
            </v-list-item>
          </v-list>
        </v-list>
    </v-menu>
    <v-menu
      max-width="280"
      offset-y
      bottom
      nudge-bottom="10"
      left>
      <template v-slot:activator="{ props }">
        <v-btn
          @click="messageBadge ? messageBadge = !messageBadge : ''"
          v-bind="props"

          style="font-size: 28px"
          icon
          variant="text"
          class="mr-2">
          <v-badge
              :model-value="messageBadge"
              color="warning"
              content="3"
              overlap>
              <v-icon
                  :color="config.light.iconColor"
                  style="font-size: 28px">
                  mdi-email-outline</v-icon>
            </v-badge>
        </v-btn>
      </template>
      <v-list>
        <div class="text-h5 text-grey text--darken-3 px-4 pt-4">New Messages</div>
        <div class="subtitle-2 text-error font-weight-regular px-4 pb-2 link-item">4 new Messages</div>
        <v-list color="primary">
          <v-list-item
            v-for="(item, i) in messages"
            :key="i">
            <template #prepend><div class="mr-4 mb-1 d-flex flex-column">
              <v-btn
                icon
                size="x-small"
                variant="flat"
                :color="item.color">{{ item.text }}
              </v-btn>
              <div style="font-size: 11px">{{ item.time }}</div>
            </div></template>
            <v-list-item two-line >
              <div class="v-list-item__content" style="width: 190px">
                <v-list-item-title class="pb-2">{{ item.name }}</v-list-item-title>
                <v-list-item-subtitle class="text-truncate">{{ item.message }}</v-list-item-subtitle>
              </div>
            </v-list-item>
          </v-list-item>
          </v-list>
        <div class="d-flex justify-center my-3">
            <v-btn
              size="large"
              color="primary"
              rounded
              elevation="5"
              class="text-capitalize">
              Send New Message
            <v-icon right dark>mdi-send</v-icon>
          </v-btn>
          </div>
      </v-list>
    </v-menu>
    <v-menu
      min-width="180"
      offset-y
      bottom
      left
      nudge-bottom="10">
        <template v-slot:activator="{ props }">
          <v-btn
            class="mr-0"
            icon
            variant="text"
            v-bind="props"
            >
            <v-icon
              style="font-size: 28px"
              :color="config.light.iconColor">mdi-account</v-icon>
            </v-btn>
        </template>
        <v-list >
          <div class="text-h5 text-grey text--darken-3 px-4 pt-4">John Smith</div>
          <div class="subtitle-2 text-primary font-weight-regular px-4">Flatlogic.com</div>
          <v-list color="primary">
            <v-list-item
              v-for="(item, i) in account"
              :key="i">
                <template #prepend><div class="mr-4">
                  <v-icon
                    :color="item.color">{{ item.icon }}</v-icon>
                </div></template>
                <div class="v-list-item__content">
                  <v-list-item-title :color='config.light.textColor'>{{ item.text }}</v-list-item-title>
                </div>
            </v-list-item>
          </v-list>
          <div class="d-flex justify-center my-3">
            <v-btn
              width="80%"
              size="large"
              variant="outlined"
              color="primary"
              class="text-capitalize"
              @click="logOut">Sign Out
            </v-btn>
          </div>
        </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script>
import {mapActions, mapState} from 'vuex'
  import config from '../../config';
  import HeaderSearch from "@/components/Search/Search.vue";

  export default {
    name: 'AppHeader',
    components: { HeaderSearch },
    data: () => ({
      config,
      searchCollapse: true,
      notifications: [
        { text: 'Check out this awesome ticket', icon: 'mdi-tag', color: 'warning' },
        { text: 'What is the best way to get ...', icon: 'mdi-thumb-up', color: 'success'  },
        { text: 'This is just a simple notification', icon: 'mdi-flag', color: 'error'  },
        { text: '12 new orders has arrived today', icon: 'mdi-cart', color: 'primary'  },
      ],
      messages: [
        { text: 'JH', name: 'Jane Hew', message: 'Hey! How is it going?', time: '09:32', color: 'warning' },
        { text: 'LB', name: 'Lloyd Brown', message: 'Check out my new Dashboard', time: '10:02', color: 'success'  },
        { text: 'MW', name: 'Mark Winstein', message: 'I want rearrange the appointment', time: '12:16', color: 'error'  },
        { text: 'LD', name: 'Liana Dutti', message: 'Good news from sale department', time: '14:56', color: 'primary'  },
      ],
      account: [
        { text: 'Profile', icon: 'mdi-account', color: 'textColor' },
        { text: 'Tasks', icon: 'mdi-thumb-up', color: 'textColor'  },
        { text: 'Messages', icon: 'mdi-flag', color: 'textColor'  }
      ],
      notificationsBadge: true,
      messageBadge: true
    }),
    computed: {
      ...mapState(['drawer']),
      DRAWER_STATE :{
        get() {
          return this.drawer
        },
      }
    },
    methods: {
      ...mapActions([ 'TOGGLE_DRAWER' ]),
      logOut: function () {
        window.localStorage.setItem('authenticated', false);
        this.$router.push('/login');
      }
    }
  };
</script>

<style src="./Header.scss" lang="scss"></style>
