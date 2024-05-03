document.addEventListener('DOMContentLoaded', function() {
    fetch('MyActivities.json')
        .then(response => response.json())
        .then(images => {
            const galleryContainer = document.querySelector('.row-1');
            images.forEach(image => {
                galleryContainer.innerHTML += `
                    <div class="gallery-item">
                        <a href="${image.image}" target="_blank">
                            <img src="${image.thumbnail}" alt="Thumbnail">
                        </a>
                    </div>
                `;
            });
        })
        .catch(error => console.error('Error loading the gallery:', error));
  });


  document.addEventListener('DOMContentLoaded', function() {
    fetch('MyActivities2.json')
        .then(response => response.json())
        .then(images => {
            const galleryContainer = document.querySelector('.row-2');
            images.forEach(image => {
                galleryContainer.innerHTML += `
                    <div class="gallery-item">
                        <a href="${image.image}" target="_blank">
                            <img src="${image.thumbnail}" alt="Thumbnail">
                        </a>
                    </div>
                `;
            });
        })
        .catch(error => console.error('Error loading the gallery:', error));
  });


