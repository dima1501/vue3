<template>
    <div class="ui-text-field">
        <label :for="inputId" class="ui-text-field__label">{{ label }}</label>
        <input :type="type" :id="inputId" :required="isRequired" class="ui-text-field__input" v-model="inputData">
    </div>
</template>
<script>
import { ref, watch } from 'vue';

export default {
    props: {
        label: {
            type: String,
            default: '',
        },
        modelValue: {
            type: [String, Number],
            default: null,
        },
        isRequired: {
            type: Boolean,
            default: false
        },
        type: {
            type: String,
        }
    },
    setup(props, { emit }) {
        const inputData = ref(props.modelValue)
        const inputId = `input-${Math.random().toString(36).slice(2, 9)}`

        watch(inputData, (newValue) => {
            emit('update:modelValue', newValue);
        });

        return {
            inputData,
            inputId,
        }
    }
}
</script>
<style lang="scss">
.ui-text-field {
    position: relative;
    width: 100%;
    appearance: none;
    -webkit-appearance: none;

    &__input {
        display: block;
        width: 100%;
        border: 1px solid #F1F1F1;
        border-radius: 4px;
        padding: 26px 16px 6px;
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 24px;
        outline: none;
        transition: border-color .3s;

        &:focus,
        &:active,
        &:hover {
            border-color: #d7d7d7;
        }
    }

    &__label {
        position: absolute;
        top: 8px;
        left: 16px;
        color: rgba(17, 17, 17, 0.48);
        font-style: normal;
        font-weight: 400;
        font-size: 13px;
        line-height: 16px;
    }
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

input[type=number] {
    appearance: textfield;
    -moz-appearance: textfield;
}
</style>