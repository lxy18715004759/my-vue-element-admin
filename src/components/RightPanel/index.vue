<template>
    <section class="rightPanel-container" :class="{show:show}" ref="rightPanel">
        <div class="rightPanel-background" />
        <div class="rightPanel">
            <div class="handle-button" :style="{'top':buttonTop+'px','background-color':theme}" @click="show=!show">
                <i :class="show?'el-icon-close':'el-icon-setting'" />
            </div>
            <div class="rightPanel-items">
                <slot />
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "RightPanel"
    }
</script>

<style scoped>

</style>
