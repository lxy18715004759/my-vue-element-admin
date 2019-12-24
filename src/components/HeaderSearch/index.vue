<template>
    <section :class="{'show':show}" class="header-search">
        <svg-icon class-name="search-icon" icon-class="search" @click.stop="click" />
        <el-select
            ref="headerSearchSelect"
            v-model="search"
            :remote-method="querySearch"
            filterable
            default-first-option
            remote
            placeholder="Search"
            class="header-search-select"
            @change="change"
        >
            <el-option v-for="item in options" :key="item.patch" :value="item" :label="item.title.join(' > ')" />
        </el-select>
    </section>
</template>

<script>
    export default {
        name: "HeaderSearch"
    }
</script>

<style scoped>

</style>
