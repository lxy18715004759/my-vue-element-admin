<template>
    <section>
        <svg-icon :icon-class="isFullscreen?'exit-fullscreen':'fullscreen'" @click="click"/>
    </section>
</template>

<script>
    import screenfull from 'screenfull'
    export default {
        name: "Screenfull"
    }
</script>

<style scoped>

</style>
