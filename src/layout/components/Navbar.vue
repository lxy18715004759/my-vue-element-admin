<template>
    <section class="navbar">
        <Hamburger id="hamburger-container" :is-active="sidebar.opened" class="hamburger-container" @toggleClick="toggleSideBar" />

        <Breadcrumb id="breadcrumb-container" class="breadcrumb-container" />

        <section class="right-menu">
            <template v-if="device!=='mobile'">
                <Search id="header-search" class="right-menu-item" />

                <ErrorLog class="errLog-container right-menu-item hover-effect" />

                <Screenfull id="screenfull" class="right-menu-item hover-effect" />

                <el-tooltip content="Global Size" effect="dark" placement="bottom">
                    <SizeSelect id="size-select" class="right-menu-item hover-effect" />
                </el-tooltip>
            </template>

            <el-dropdown class="avatar-container right-menu-item hover-effect" trigger="click">
                <section class="avatar-wrapper">
                    <img :src="avatar+'?imageView2/1/w/80/h/80'" class="user-avatar">
                    <i class="el-icon-caret-bottom" />
                </section>
                <el-dropdown-menu slot="dropdown">
                    <router-link to="/profile/index">
                        <el-dropdown-item>Profile</el-dropdown-item>
                    </router-link>
                    <router-link to="/">
                        <el-dropdown-item>Dashboard</el-dropdown-item>
                    </router-link>
                    <a target="_blank" href="https://github.com/PanJiaChen/vue-element-admin/">
                        <el-dropdown-item>Github</el-dropdown-item>
                    </a>
                    <a target="_blank" href="https://panjiachen.github.io/vue-element-admin-site/#/">
                        <el-dropdown-item>Docs</el-dropdown-item>
                    </a>
                    <el-dropdown-item divided>
                        <span style="display:block;" @click="logout">Log Out</span>
                    </el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>

        </section>
    </section>
</template>

<script>
    import Breadcrumb from "@/components/Breadcrumb"
    import Hamburger from '@/components/Hamburger'
    import ErrorLog from "@/components/ErrorLog"
    import Screenfull from "@/components/Screenfull"
    import SizeSelect from '@/components/SizeSelect'
    import Search from "@/components/HeaderSearch"
    export default {
        name: "Navbar",
        components: {
            Breadcrumb,
            Hamburger,
            ErrorLog,
            Screenfull,
            SizeSelect,
            Search
        },
    }
</script>

<style scoped>

</style>
