<template>
  <v-container fluid class="icons-page">
    <v-row no-gutters class="d-flex justify-space-between mt-10 mb-6">
      <h1 class="page-title">Icons</h1>
      <v-menu
          offset-y
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
              v-bind="attrs"
              v-on="on"
              color="error"
              class="text-capitalize button-shadow"
          >Actions</v-btn>
        </template>
        <v-list>
          <v-list-item
              link
              v-for="(item, index) in lastReports"
              :key="index"
          >
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-tabs
          light
          centered
          grow
        >
          <v-tabs-slider></v-tabs-slider>

          <v-tab
               :href="`#tab-font-awesome`"
          >
            Font Awesome
          </v-tab>
          <v-tab
            :href="`#tab-material-icons`"
          >
            Material Icons
          </v-tab>

          <v-tab-item
            :value="'tab-material-icons'"
          >
            <v-card
              flat
              tile
            >
              <v-card-text>
                <v-row no-gutters>
                  <template v-for="icon in materialIcons" >
                    <v-col md="3" lg="2" sm="6" cols="12" :key="icon" class="mb-5">
                      <v-icon class="mr-3"> {{ icon }} </v-icon>
                      <span> {{ icon }}</span>
                    </v-col>
                  </template>
                </v-row>
              </v-card-text>
            </v-card>
          </v-tab-item>
          <v-tab-item
            :value="'tab-font-awesome'"
          >
            <v-card
              flat
              tile
            >
              <v-card-text>
                <v-row no-gutters>
                  <template v-for="icon in fontAwesome" >
                    <v-col md="3" lg="2" sm="6" cols="12" :key="icon" class="mb-5">
                      <v-icon class="mr-3"> {{ toFontAwesomeText(icon) }} </v-icon>
                      <span> {{ icon }}</span>
                    </v-col>
                  </template>
                </v-row>
              </v-card-text>
            </v-card>
          </v-tab-item>
        </v-tabs>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        fontAwesome: [
          'Bed',
          'Bank',
          'Behance',
          'Behance-square',
          'Bomb',
          'Building',
          'Cab',
          'Car',
          'Child',
          'Circle-o-notch',
          'Circle-thin',
          'Codepen',
          'Cube',
          'Cubes',
          'Database',
          'Delicious',
          'Deviantart',
          'Digg',
          'Drupal',
          'Empire',
          'Envelope-square',
          'Fax',
          'File-archive-o',
          'File-audio-o',
          'File-code-o',
          'File-excel-o',
          'File-image-o',
          'File-movie-o',
          'File-pdf-o',
          'File-photo-o',
          'File-picture-o',
          'File-powerpoint-o',
          'File-sound-o',
          'File-video-o',
          'File-word-o',
          'File-zip-o',
          'Ge',
          'Git',
          'Git-square',
          'Google',
          'Graduation-cap',
          'Hacker-news',
          'Header',
          'History',
          'Institution',
          'Joomla',
          'Jsfiddle',
          'Language',
          'Life-bouy',
          'Life-ring',
          'Life-saver',
          'Mortar-board',
          'Openid',
          'Paper-plane',
          'paper-plane-o',
          'Paragraph',
          'Paw',
          'Pied-piper',
          'Pied-piper-alt',
          'Pied-piper-pp',
          'Qq',
          'Ra',
          'Rebel',
          'Recycle',
          'Reddit',
          'Reddit-square',
          'Send',
          'Send-o',
          'Share-alt',
          'Share-alt-square',
          'Slack',
          'Sliders',
          'Soundcloud',
          'Space-shuttle',
          'Spoon',
          'Spotify',
          'Steam',
          'Steam-square',
          'Stumbleupon',
          'Stumbleupon-circle',
          'Support',
          'Taxi',
          'Tencent-weibo',
          'Tree',
          'University',
          'Vine',
          'Wechat',
          'Weixin',
          'Wordpress',
          'Yahoo',
        ],
        materialIcons: [
          "mdi-access-point",
          "mdi-access-point-network",
          "mdi-account",
          "mdi-account-alert",
          "mdi-account-box",
          "mdi-account-box-outline",
          "mdi-account-check",
          "mdi-account-circle",
          "mdi-account-convert",
          "mdi-account-key",
          "mdi-account-minus",
          "mdi-account-multiple",
          "mdi-account-multiple-minus",
          "mdi-account-multiple-outline",
          "mdi-account-multiple-plus",
          "mdi-account-network",
          "mdi-account-off",
          "mdi-account-outline",
          "mdi-account-plus",
          "mdi-account-remove",
          "mdi-account-search",
          "mdi-account-settings",
          "mdi-account-star",
          "mdi-account-switch",
          "mdi-adjust",
          "mdi-air-conditioner",
          "mdi-airballoon",
          "mdi-airplane",
          "mdi-airplane-landing",
          "mdi-airplane-off",
          "mdi-airplane-takeoff",
          "mdi-alarm",
          "mdi-alarm-check",
          "mdi-alarm-multiple",
          "mdi-alarm-off",
          "mdi-alarm-plus",
          "mdi-alarm-snooze",
          "mdi-album",
          "mdi-alert",
          "mdi-alert-box",
          "mdi-alert-circle",
          "mdi-alert-circle-outline",
          "mdi-alert-octagon",
          "mdi-alert-outline",
          "mdi-alpha",
          "mdi-alphabetical",
          "mdi-altimeter",
          "mdi-amazon",
          "mdi-ambulance",
          "mdi-amplifier",
          "mdi-anchor",
          "mdi-android",
          "mdi-android-debug-bridge",
          "mdi-android-studio",
          "mdi-angular",
          "mdi-animation",
          "mdi-apple",
          "mdi-apple-finder",
          "mdi-apple-ios",
          "mdi-apple-keyboard-caps",
          "mdi-apple-keyboard-command",
          "mdi-arrow-up-drop-circle-outline",
          "mdi-assistant",
          "mdi-at",
          "mdi-car-connected",
          "mdi-car-wash",
          "mdi-cards",
          "mdi-cards-outline",
          "mdi-cards-playing-outline",
          "mdi-music-circle",
          "mdi-music-note",
          "mdi-music-note-bluetooth",
          "mdi-music-note-bluetooth-off",
          "mdi-music-note-eighth",
          "mdi-steam",
          "mdi-steering",
          "mdi-step-backward",
          "mdi-step-backward-2",
          "mdi-step-forward",
          "mdi-step-forward-2",
          "mdi-stethoscope",
          "mdi-sticker",
          "mdi-stocking",
          "mdi-stop",
          "mdi-stop-circle",
          "mdi-stop-circle-outline",
          "mdi-store",
          "mdi-store-24-hour",
          "mdi-stove",
          "mdi-subdirectory-arrow-left",
          "mdi-thumb-down-outline",
          "mdi-thumb-up",
          "mdi-thumb-up-outline",
          "mdi-thumbs-up-down",
          "mdi-ticket",
          "mdi-ticket-account",
          "mdi-ticket-confirmation",
          "mdi-tie",
          "mdi-timelapse",
          "mdi-timer",
          "mdi-timer-3",
          "mdi-timer-10",
          "mdi-timer-off",
          "mdi-timer-sand",
          "mdi-timer-sand-empty",
          "mdi-timetable",
          "mdi-toggle-switch",
          "mdi-toggle-switch-off",
          "mdi-tooltip",
          "mdi-tooltip-edit",
          "mdi-tooltip-image",
          "mdi-tooltip-outline",
          "mdi-tooltip-text",
          "mdi-tooth",
          "mdi-tower-beach",
          "mdi-tower-fire",
          "mdi-traffic-light",
          "mdi-train",
          "mdi-tram",
          "mdi-transcribe",
          "mdi-transcribe-close",
          "mdi-transfer",
          "mdi-transit-transfer",
          "mdi-translate",
          "mdi-tree",
          "mdi-trello",
          "mdi-trending-down",
          "mdi-trending-neutral",
          "mdi-trending-up",
          "mdi-triangle",
          "mdi-triangle-outline",
          "mdi-trophy",
          "mdi-trophy-award",
          "mdi-trophy-outline",
          "mdi-trophy-variant",
          "mdi-trophy-variant-outline",
          "mdi-truck",
          "mdi-truck-delivery",
          "mdi-tshirt-crew",
          "mdi-tshirt-v",
          "mdi-tune",
          "mdi-tune-vertical",
          "mdi-twitch",
          "mdi-twitter",
          "mdi-twitter-retweet",
          "mdi-ubuntu",
          "mdi-umbraco",
          "mdi-umbrella",
          "mdi-umbrella-outline",
          "mdi-undo",
          "mdi-ungroup",
          "mdi-unity",
          "mdi-untappd",
          "mdi-update",
          "mdi-upload",
          "mdi-usb",
          "mdi-vector-arrange-above",
          "mdi-vector-arrange-below",
          "mdi-vector-circle",
          "mdi-vector-circle-variant",
          "mdi-vector-combine",
          "mdi-vector-curve",
          "mdi-vector-difference",
          "mdi-vector-difference-ab",
          "mdi-vector-difference-ba",
          "mdi-vector-intersection",
          "mdi-vector-line",
          "mdi-vector-point",
          "mdi-vector-polygon",
          "mdi-vector-polyline",
          "mdi-vector-rectangle",
          "mdi-vector-selection",
          "mdi-vector-square",
          "mdi-view-module",
          "mdi-view-quilt",
          "mdi-view-stream",
          "mdi-view-week",
          "mdi-vimeo",
          "mdi-violin",
          "mdi-vk",
          "mdi-wordpress",
          "mdi-wrap",
          "mdi-wrench",
          "mdi-xing",
          "mdi-xml",
          "mdi-yeast",
          "mdi-yin-yang",
          "mdi-zip-box"
        ],
        lastReports: [
          {title: 'Print PDF', icon: 'mdi-printer'},
          {title: 'Download', icon: 'mdi-download'},
          {title: 'Send by mail', icon: 'mdi-email'},
          {title: 'Share', icon: 'mdi-share-variant'}
        ],
      }
    },
    methods: {
      toFontAwesomeText(name) {
        return 'fa-' + name.toLowerCase();
      }
    }
  }
</script>

<style src="./Icons.scss" lang="scss"/>
