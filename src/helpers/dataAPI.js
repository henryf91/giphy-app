export const fetchData = (queryString, setSearchResults, setIsLoadingResults, setIsSearchDone) => {
    setIsLoadingResults(true)
    fetch(`https://api.giphy.com/v1/gifs/search?api_key=17gNbwq47Uc5lBqpqWbKZJ3KcEmIL1mX&q=${queryString}&limit=25&offset=0&rating=r&lang=en`)
    .then(response => {
        return response.json()
    })
    .then( data => {
         setSearchResults(data.data)
         setIsLoadingResults(false)
         setIsSearchDone(true)
    })
    .catch(err => {
        console.error(err);
    });
}