<template>
    <el-dropdown trigger="click" @command="handleSetSize">
        <section>
            <svg-icon class-name="size-icon" icon-class="size" />
        </section>
        <el-dropdown-menu slot="dropdown">
            <el-dropdown-item v-for="item of sizeOptions" :key="item.value" :disabled="size===item.value" :command="item.value">
                {{item.label}}
            </el-dropdown-item>
        </el-dropdown-menu>
    </el-dropdown>
</template>

<script>
    export default {
        name: "index.vue",
        data(){
            return {
                sizeOptions:[
                    { label: 'Default', value: 'default' },
                    { label: 'Medium', value: 'medium' },
                    { label: 'Small', value: 'small' },
                    { label: 'Mini', value: 'mini' }
                ]
            }
        }
    }
</script>

<style scoped>

</style>
