import { reactive } from 'vue';

export function useLocalStorage(key) {
    const data = reactive({
        value: null,
    });

    const fetchDataFromLS = () => {
        const storedData = localStorage.getItem(key);
        data.value = storedData ? JSON.parse(storedData) : null;
    };

    const setDataToLS = (value) => {
        localStorage.setItem(key, JSON.stringify(value));
        data.value = value;
    };

    const clearDataFromLS = () => {
        localStorage.removeItem(key);
        data.value = null;
    };

    fetchDataFromLS();

    return {
        data,
        fetchDataFromLS,
        setDataToLS,
        clearDataFromLS,
    };
}