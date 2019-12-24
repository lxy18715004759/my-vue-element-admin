<template>
    <section :class="classObj" class="app-wrapper">
        <section v-if="device==='mobile'&&sidebar.opened" class="drawer-bg" @click="handleClickOutside"></section>
        <Sidebar class="sidebar-container"></Sidebar>
        <section :class="{hasTagsView:needTagsView}" class="main-container">
            <section :class="{'fixed-header':fixedHeader}">
                <Navbar />
                <TagsView v-if="needTagsView" />
            </section>
            <AppMain />
            <RightPanel v-if="showSettings">
                <Settings/>
            </RightPanel>
        </section>
    </section>
</template>

<script>
    import ResizeMixin from './mixin/ResizeHandler'
    import RightPanel from "@/components/RightPanel"
    import {AppMain, Navbar, Settings, Sidebar, TagsView} from "./components"
    export default {
        name: "Layout",
        mixins: [ResizeMixin],
        components: {
            RightPanel,
            AppMain,
            Navbar,
            Settings,
            Sidebar,
            TagsView
        },

    }
</script>

<style scoped>

</style>
