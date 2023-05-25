<template>
    <div class="personal">
        <div class="personal__top">
            <h2 class="personal__title">Персональные данные</h2>
        </div>
        <div class="personal__content">
            <div v-if="isDataEntered" class="personal__name">{{ userInfo.fullName }}, {{ userInfo.age }}</div>
            <div v-else>Не заполнены</div>
        </div>
    </div>

    <div v-if="userInfo.children.length" class="personal">
        <div class="personal__top">
            <h2 class="personal__title">Дети</h2>
        </div>
        <div class="personal__content">
            <div class="personal__tags">
                <div v-for="child in userInfo.children" :key="child.id" class="personal__tag">{{ child.name }}, {{ child.age
                }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
    setup() {
        const store = useStore()
        const userInfo = computed(() => store.state.userData.userInfo);

        const isDataEntered = computed(() => userInfo.value.fullName && userInfo.value.age);

        return {
            userInfo,
            isDataEntered
        };
    }
};
</script>

<style lang="scss">
.personal {
    &__name {
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 24px;
        color: #111111;
    }

    &__tags {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

    &__tag {
        background: #F1F1F1;
        border-radius: 5px;
        padding: 10px 20px;
        margin-bottom: 20px;
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 24px;
        color: #000000;
        display: inline-block;
    }
}
</style>