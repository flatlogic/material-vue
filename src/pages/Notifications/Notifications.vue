<template xmlns:div="http://www.w3.org/1999/html">
  <v-container fluid class="notification-page">
    <h1 class="page-title mt-10 mb-9">Notifications</h1>
    <v-row class="mb-5">
      <v-card width="100%" class="d-flex flex-row mx-3">
       <v-row no-gutters>
         <v-col lg="4" cols=12>
           <v-card-title class="pa-6 pb-3">
             <p>Layout Options</p>
           </v-card-title>
           <v-card-text class="pa-6 pt-0">
             <p>There are few position options available for notifications. You can click any of them to change notifications position:</p>
             <div class="location-selector">
               <div class="bit top left" :class="position === 'top-left' ? 'active' : ''" @click="toggleLocation('top-left')"/>
               <div class="bit top right" :class="position === 'top-right' ? 'active' : ''" @click="toggleLocation('top-right')"/>
               <div class="bit top center" :class="position === 'top-center' ? 'active' : ''" @click="toggleLocation('top-center')"/>
               <div class="bit bottom left" :class="position === 'bottom-left' ? 'active' : ''" @click="toggleLocation('bottom-left')"/>
               <div class="bit bottom right" :class="position === 'bottom-right' ? 'active' : ''" @click="toggleLocation('bottom-right')"/>
               <div class="bit bottom center" :class="position === 'bottom-center' ? 'active' : ''" @click="toggleLocation('bottom-center')"/>
              <div class="text-position">Click any position</div>
             </div>
           </v-card-text>
         </v-col>
         <v-col lg="4" cols=12>
           <v-card-title class="pa-6 pb-3">
             <p>Notifications Types</p>
           </v-card-title>
           <v-card-text class="pa-6 pt-0">
             <p>Different types of notifications for lost of use cases. Custom classes are also supported.</p>
             <v-row no-gutters class="action-buttons pb-6">
               <v-col cols="12">
                 <v-btn
                     block
                     @click="addInfoNotification"
                     color="primary"
                     class="text-capitalize my-2"
                 >Info Message</v-btn>
                 <div class="w-100"></div>
                 <v-btn
                     block
                     @click="addErrorNotification"
                     color="error"
                     class="text-capitalize my-2"
                 >Error + Retry Message</v-btn>
                 <div class="w-100"></div>
                 <v-btn
                     block
                     @click="addSuccessNotification"
                     color="success"
                     class="text-capitalize my-2"
                 >Success Message</v-btn>
               </v-col>
             </v-row>
           </v-card-text>
         </v-col>
         <v-col lg="4" cols=12>
           <v-card-title class="pa-6 pb-3">
             <p>Usage</p>
           </v-card-title>
           <v-card-text class="pa-6 pt-0">
             <p>Notifications are created with the help of <a href="https://maronato.github.io/vue-toastification/">vue-toastification</a></p>
             <v-row no-gutters class="">
               <v-col cols="12">
              <pre class='text-caption pa-3' style="background-color: #F3F5FF"><span>// register the plugin on vue</span>
<span>import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";</span>

<span>Vue.use(Toast)</span>

<span>// you can call like this in your component</span>
<span>this.$toast.show("I'm a toast!", {options})</span></pre>
                 <p class="pt-4">For more API information refer to the library documentation</p>
               </v-col>
             </v-row>
           </v-card-text>
         </v-col>
       </v-row>
      </v-card>
    </v-row>
    <v-row>
      <v-col lg=4 md="12" cols=12>
        <v-card class="mx-1 mb-1">
          <v-card-title class="pa-6 pb-0">
            <p>Notification Types Examples</p>
          </v-card-title>
          <v-card-text class="pa-6 pt-0">
            <v-row no-gutters>
              <v-col cols="12">
                <template v-for="item in notificationsType" >
                  <v-chip
                    large
                    class="d-block mt-4"
                    :color="item.color"
                    :key="item.text"
                  >
                    <v-icon left size="28" color="rgba(255,255,255, 0.5)" class="ml-0 mr-2">{{ item.icon }}</v-icon>
                    {{  item.text }}
                  </v-chip>
                </template>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col lg=4 md="6" cols=12>
        <v-card class="mx-1 mb-1">
          <v-card-title class="pa-6 pb-0">
            <p>Notification Types Examples</p>
          </v-card-title>
          <v-card-text class="pa-6 pt-0">
            <v-row no-gutters>
              <v-col cols="12">
                <template v-for="item in notificationsTypeLight" >
                  <v-chip
                      large
                      text-color="black"
                      class="d-block mt-4 font-weight-regular"
                      :color="item.color"
                      :key="item.text"
                  >
                    <v-icon :color="item.iconColor" left size="28" class="ml-0 mr-2">{{ item.icon }}</v-icon>
                    {{  item.text }}
                  </v-chip>
                </template>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col lg=4 md="6" cols=12>
        <v-card class="mx-1 mb-1">
          <v-card-title class="pa-6 pb-0">
            <p>Notification Types Examples</p>
          </v-card-title>
          <v-card-text class="pa-6 pt-0">
            <v-row no-gutters >
              <v-col cols="12">
                <template v-for="item in notificationsTypeButton" >
                  <div :key="item.text" class="mt-4">
                  <v-btn
                    small
                    height="45"
                    width="45"
                    class="mr-2"
                    fab
                    elevation="0"
                    :color="item.color"
                  >
                    <v-icon size="28" :color="item.iconColor">{{ item.icon }}</v-icon>
                  </v-btn>
                  <span>{{ item.text }}</span>
                  </div>
                </template>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: 'Notifications',
  data() {
    return {
      notificationsType: [
        {
          icon: 'mdi-email',
          text: 'Thanks for Checking out Messenger',
          color: "error"
        },
        {
          icon: 'mdi-message-alert',
          text: 'New user feedback received',
          color: 'primary'
        },
        {
          icon: 'mdi-account-box',
          text: 'New customer is registered',
          color: 'success'
        },
        {
          icon: 'mdi-check',
          text: 'The order was shipped',
          color: 'warning'
        },
        {
          icon: 'mdi-briefcase-variant',
          text: 'The order was deliver',
          color: 'primary'
        },
        {
          icon: 'mdi-information-outline',
          text: '5 Defence alerts',
          color: 'info'
        },
      ],
      notificationsTypeLight: [
        {
          icon: 'mdi-alert-octagon',
          text: 'New report has been received',
          color: '#ff5c9326',
          iconColor: 'error'
        },
        {
          icon: 'mdi-message-alert',
          text: 'New user feedback received',
          color: '#e5e9ff',
          iconColor: 'primary'
        },
        {
          icon: 'mdi-check',
          text: 'The item was shipped',
          color: '#e2f9f1',
          iconColor: 'success'
        },
        {
          icon: 'mdi-email',
          text: 'The new message from user @nahawaii',
          iconColor: 'warning',
          color: '#fff6e7',
        },
        {
          icon: 'mdi-arrow-collapse-up',
          text: 'Your file is ready to upload',
          iconColor: 'primary',
          color: '#e5e9ff',
        },
        {
          icon: 'mdi-disc-alert',
          text: 'The disc is full',
          iconColor: 'info',
          color: '#eedcff',
        },
      ],
      notificationsTypeButton: [
        {
          icon: 'mdi-alert-octagon',
          text: 'New report has been received',
          iconColor: 'error',
          color: '#ff5c9326',
        },
        {
          icon: 'mdi-message-alert',
          text: 'New user feedback received',
          iconColor: 'primary',
          color: '#e5e9ff',
        },
        {
          icon: 'mdi-check',
          text: 'The item was shipped',
          iconColor: 'success',
          color: '#e2f9f1',
        },
        {
          icon: 'mdi-email',
          text: 'The new message from user @nahawaii',
          iconColor: 'warning',
          color: '#fff6e7',
        },
        {
          icon: 'mdi-arrow-collapse-up',
          text: 'Your file is ready to upload',
          iconColor: 'primary',
          color: '#e5e9ff',
        },
        {
          icon: 'mdi-disc-alert',
          text: 'The disc is full',
          iconColor: 'info',
          color: '#eedcff',
        },
      ],
      position: 'top-right'
    }
  },
  methods: {
    addInfoNotification() {
      this.$toast.info("New user feedback received", {
        position: this.position,
        timeout: 6000,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        draggablePercent: 0.6,
        showCloseButtonOnHover: false,
        hideProgressBar: true,
        closeButton: "button",
        icon: true
      });
    },
    addErrorNotification() {
      this.$toast.error("Message was not sent!", {
        position: this.position,
        timeout: 6000,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        draggablePercent: 0.6,
        showCloseButtonOnHover: false,
        hideProgressBar: true,
        closeButton: "button",
        icon: true
      });
    },
    addSuccessNotification() {
      this.$toast.success("The item was shipped", {
        position: this.position,
        timeout: 6000,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        draggablePercent: 0.6,
        showCloseButtonOnHover: false,
        hideProgressBar: true,
        closeButton: "button",
        icon: true
      });
    },

    toggleLocation(position) {
      this.position = position;
      this.$toasted.options.position = this.position;
      this.$toasted.show(null);
    },
  }
};

</script>

<style src="./Notifications.scss" lang="scss"></style>
