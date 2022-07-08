export const getGifs = async () => {
    const url = 'https://api.giphy.com/v1/gifs/search?api_key=m5ThMiEo7wKfcQqJedLKVbpBsFgr9oQs&q=' + category;
    const response = await fetch(url);
    const { data } = await response.json();

    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));

    return gifs;
}