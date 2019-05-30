<template>
    <div class="forum">
        <forum-canvas></forum-canvas>
        <others></others>
    </div>
</template>

<script>
    import ForumCanvas from './components/ForumCanvas'
    import Others from './components/Others'
    export default {
        name: "Forum",
        components: { ForumCanvas, Others }
    }
</script>

<style scoped>
</style>