<template lang="">
    <button class='ui-btn' @click="handleClick">
        <span v-if="icon" class="ui-btn__icon">
            <img class="ui-btn__icon-pic" :src="require('@/assets/' + icon)" alt=""/>
        </span>
        {{buttonText}}
    </button>
</template>
<script>
export default {
    props: {
        buttonText: {
            type: String,
            required: true,
        },
        icon: {
            type: String,
            required: false,
        }
    },
    setup(props, { emit }) {
        function handleClick() {
            emit('handleClick')
        }

        return {
            handleClick
        }
    }
}
</script>
<style lang="scss">
.ui-btn {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    padding: 8px 20px;
    border: 2px solid transparent;
    border-radius: 100px;
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: box-shadow 0.3s, transform 0.1s;

    &:hover {
        box-shadow: 0 3px 5px rgba(0, 0, 0, 0.05), 0 4px 5px rgba(0, 0, 0, 0.05);
    }

    &:active {
        transform: scale(0.98);
    }

    &__icon {
        width: 24px;
        height: 24px;
        margin-right: 4px;
        flex-shrink: 0;
        display: flex;
        justify-content: center;
        align-items: center;

        &-pic {
            width: 16px;
            height: 16px;
        }
    }

    &.blue-transp {
        background-color: transparent;
        color: #01A7FD;
        border-color: #01A7FD;
    }

    &.blue-fill {
        background-color: #01A7FD;
        color: #fff;
    }
}
</style>