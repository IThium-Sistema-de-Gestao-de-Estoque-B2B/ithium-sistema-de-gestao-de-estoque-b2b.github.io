<template>
    <v-btn 
        :dark="!isButtonValid"
        :type="myType" 
        :color="color"
        :disabled="isButtonValid"
    >{{label}}</v-btn>
</template>

<script>
export default {
    name: 'Button',
    props: {
        label: {
            type: String,
            required: true
        },
        myType: {
            type: String,
            required: true
        },
        color: {
            type: String,
            required: true
        },
        isButtonValid: Boolean,
    }
}
</script>

<style>

</style>