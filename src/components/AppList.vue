<template>
    <!-- list all registered apps -->
    <ion-list>
        <ion-item v-for="app in apps" :key="app.id">
            {{app.title}}
        </ion-item>
    </ion-list>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
    props: {
        apps: {
            required: true,
        },
    },
})

export default class Home extends Vue {}
</script>

<style lang="scss" scoped>

</style>
