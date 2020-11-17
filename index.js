// const apiKey = 5e970758

const fetchData = async (searchTerm) => {
    let response = await axios.get('https://www.omdbapi.com/?', {
        params: {
            apikey: '5e970758',
            s: searchTerm,
        }
    })
    return response.data.Search;
};

const input = document.querySelector('input');
const onInput = async event => {
    const movies = await fetchData(event.target.value);
    for (let movie of movies) {
        const div = document.createElement('div');
        div.innerHTML = `
            <img src="${movie.Poster}" alt="movie poster" />
            <h1>${movie.Title}</h1>
     `;
        document.querySelector('#target').appendChild(div);
    }
};
input.addEventListener('input', debounce(onInput, 500));





