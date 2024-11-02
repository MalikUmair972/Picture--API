async function galleryApi() {
    const response = await fetch ('https://picsum.photos/v2/list?page=1&limit=100');
    const data = await response.json();
    console.log(data)
    bindData(data);
}

function bindData(imagesData) {
    const container = document.getElementById('container');
    container.innerHTML = '';

    imagesData.forEach(image => {
        const content = document.getElementById('content');
        const imageElement = document.createElement('img');
        imageElement.src = image.download_url;
        imageElement.alt = image.author;
        imageElement.style.width = '400px'
        imageElement.style.margin = '10px'

        container.appendChild(imageElement)


        imageElement.addEventListener('click',()=> {
            imageElement.classList.toggle('.content')
        });
    })
}

galleryApi()