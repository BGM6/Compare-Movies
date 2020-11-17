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

let timeOutId;
const onInput = event => {
    if (timeOutId) {
        clearTimeout(timeOutId);
    }
    timeOutId = setTimeout(() => {
        fetchData(event.target.value);
    }, 500)
};

input.addEventListener('input', onInput);








