<template>
    <img :src="wordmark" alt="asyncy wordmark logo">
</template>

<script>
    import wordmark from '../../assets/images/asyncy-wordmark.svg'

    export default {
        name: 'a-wordmark',
        data() {
            return {
                wordmark
            }
        }
    }
</script>