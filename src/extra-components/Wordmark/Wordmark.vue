<template>
    <img :src="wordmark"/>
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