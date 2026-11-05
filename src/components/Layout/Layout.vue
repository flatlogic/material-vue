<template>
    <v-app class="pa-6">
        <AppHeader />
        <Sidebar />
        <v-main class="content">
            <router-view />
            <AppFooter />
        </v-main>
    </v-app>
</template>

<script>
    import AppHeader from '@/components/Header/Header.vue';
    import Sidebar from '@/components/Sidebar/Sidebar.vue';
    import AppFooter from "@/components/Footer/Footer.vue";
    import './Layout.scss';

    export default {
        name: 'Layout',
        components: {AppFooter, AppHeader, Sidebar },
    };
</script>

<style src="./Layout.scss" lang="scss" />
