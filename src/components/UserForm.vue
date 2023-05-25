<template>
    <form action="" @submit="saveData">
        <div class="personal">
            <div class="personal__top">
                <h2 class="personal__title">Персональные данные</h2>
            </div>
            <div class="personal__content">
                <div class="personal__line">
                    <InputUi label="Имя" :modelValue="fullName" @update:modelValue="fullName = $event" :isRequired="true" />
                </div>
                <div class="personal__line">
                    <InputUi label="Возраст" type="number" :modelValue="age" @update:modelValue="age = $event"
                        :isRequired="true" />
                </div>
            </div>
        </div>

        <div class="personal">
            <div class="personal__top">
                <h2 class="personal__title">Дети (макс. 5)</h2>
                <div class="personal__control">
                    <ButtonUi v-if="children.length < 5" type="button" class="blue-transp" buttonText="Добавить ребенка"
                        icon="cross.svg" @handleClick="addChild" />
                </div>
            </div>
            <div class="personal__content">
                <div class="personal__line" v-for="child in children" :key="child.id">
                    <div class="personal__line-item">
                        <InputUi label="Имя" :modelValue="child.name" @update:modelValue="child.name = $event"
                            :isRequired="true" />
                    </div>
                    <div class="personal__line-item">
                        <InputUi label="Возраст" type="number" :modelValue="child.age"
                            @update:modelValue="child.age = $event" :isRequired="true" />
                    </div>
                    <button type="button" @click="removeChild(child.id)" class="personal__link">Удалить</button>
                </div>
            </div>
            <div class="personal__bottom">
                <ButtonUi class="blue-fill" type="submit" buttonText="Сохранить"></ButtonUi>
            </div>
        </div>
    </form>
</template>

<script>
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router'

import { useStore } from 'vuex';
import { useLocalStorage } from '@/mixins/storageMixin';

import InputUi from './UI/InputUi.vue';
import ButtonUi from './UI/ButtonUi.vue';

import { nanoid } from 'nanoid';

export default {
    setup() {
        const store = useStore()
        const router = useRouter();

        const { setDataToLS } = useLocalStorage("userData");

        const userInfo = computed(() => store.state.userData.userInfo);

        let fullName = ref(userInfo.value.fullName);
        let age = ref(userInfo.value.age);
        let children = ref([...userInfo.value.children]);

        function addChild() {
            const newChild = { id: nanoid(), name: "", age: "" }
            children.value.push(newChild);
        }
        function removeChild(id) {
            children.value = children.value.filter(child => child.id !== id);
        }
        function saveData() {
            const userData = {
                fullName: fullName.value,
                age: age.value,
                children: children.value
            };
            setDataToLS(userData);
            store.commit('userData/setUserData', userData);
            router.push("/preview");
        }
        return {
            userInfo,
            addChild,
            removeChild,
            saveData,
            fullName,
            age,
            children,
        };
    },
    components: { InputUi, ButtonUi }
};
</script>

<style lang="scss">
.personal {
    margin-bottom: 33px;

    &__top {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 11px;
        min-height: 44px;
    }

    &__title {
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        color: #111111;
    }

    &__line {
        margin-bottom: 10px;
        display: flex;
        align-items: center;

        &:last-child {
            margin-bottom: 0;
        }

        &-item {
            margin-right: 18px;
            flex-grow: 1;

            &:last-child {
                margin-right: 0;
            }
        }
    }

    &__link {
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 24px;
        color: #01A7FD;
        border: none;
        background: transparent;
        cursor: pointer;
    }

    &__bottom {
        margin-top: 30px;
    }
}
</style>