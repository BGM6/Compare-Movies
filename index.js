// const apiKey = 5e970758

const fetchData = async (searchTerm) => {

    let response = await axios.get('https://www.omdbapi.com/?', {
        params: {
            apikey: '5e970758',
            s: searchTerm,
        }
    })
    console.log(response.data);
};

input = document.querySelector('input');

const debounce = (func) => {
    let timeoutId;
    return (...args) => {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            func.apply(null, args);
        }, 1000);
    };
};


const onInput = event => {
    fetchData(event.target.value);
};
input.addEventListener('input', debounce(onInput, 500));





