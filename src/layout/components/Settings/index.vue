<template>
    <section class="drawer-container">
        <section>
            <h3 class="drawer-title">Page sytle setting</h3>

            <section class="drawer-item">
                <span>Theme Color</span>
                <theme-picker style="float: right;height: 26px;margin: -3px 8px 0 0;"  @change="themeChange" />
            </section>
            <section class="drawer-item">
                <span>Open Tags-View</span>
                <el-switch v-model="tagsView" class="drawer-switch" />
            </section>
            <section class="drawer-item">
                <span>Fixed Header</span>
                <el-switch v-model="fixedHeader" class="drawer-switch" />
            </section>
            <section class="drawer-item">
                <span>Sidebar Logo</span>
                <el-switch v-model="sidebarLog" class="drawer-switch" />
            </section>
        </section>
    </section>
</template>

<script>
    import ThemePicker from "@/components/ThemePicker"
    export default {
        name: "Settings",
        components:{ThemePicker}
    }
</script>

<style scoped>

</style>
