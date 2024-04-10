// script.js
document.addEventListener('DOMContentLoaded', () => {
    const filterCatalog = document.querySelector('.filter-catalog');
    const cameraStream = document.getElementById('camera-stream');
    const cameraCanvas = document.getElementById('camera-canvas');
    const capturePhotoBtn = document.getElementById('capture-photo');
    const retakePhotoBtn = document.getElementById('retake-photo');
    const savePhotoBtn = document.getElementById('save-photo');
    const filterSearchInput = document.getElementById('filter-search');
    const cancelSearchBtn = document.getElementById('cancel-search');
    const sortAZBtn = document.getElementById('sort-az');
    const sortZABtn = document.getElementById('sort-za');

    let currentFilters = [...filters];

    // Populate the filter catalog
    function displayFilters() {
        filterCatalog.innerHTML = '';
        currentFilters.forEach(filter => {
            const filterItem = document.createElement('div');
            filterItem.classList.add('filter-item');

            const filterIcon = document.createElement('img');
            filterIcon.src = filter.src;
            filterIcon.alt = filter.name;
            filterIcon.classList.add('filter-icon');

            const filterName = document.createElement('h3');
            filterName.textContent = filter.name;

            const applyFilterBtn = document.createElement('button');
            applyFilterBtn.classList.add('apply-filter');
            applyFilterBtn.textContent = 'Apply';
            applyFilterBtn.addEventListener('click', () => {
                applyFilter(filter.effect);
            });

            filterItem.appendChild(filterIcon);
            filterItem.appendChild(filterName);
            filterItem.appendChild(applyFilterBtn);
            filterCatalog.appendChild(filterItem);
        });
    }

    displayFilters();

    // Access the user's camera
    navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
            cameraStream.srcObject = stream;
            cameraStream.play();
        })
        .catch(error => {
            console.error('Error accessing the camera:', error);
        });

    // Apply a filter to the camera preview
    function applyFilter(effect) {
        const ctx = cameraCanvas.getContext('2d');
        ctx.filter = effect;
        ctx.drawImage(cameraStream, 0, 0, cameraCanvas.width, cameraCanvas.height);
    }

    // Capture a photo
    let capturedPhoto = null;
    capturePhotoBtn.addEventListener('click', () => {
        const ctx = cameraCanvas.getContext('2d');
        ctx.drawImage(cameraStream, 0, 0, cameraCanvas.width, cameraCanvas.height);
        capturedPhoto = cameraCanvas.toDataURL('image/jpeg');
    });

    // Retake a photo
    retakePhotoBtn.addEventListener('click', () => {
        capturedPhoto = null;
    });

    // Save a photo
    savePhotoBtn.addEventListener('click', () => {
        if (capturedPhoto) {
            downloadPhoto(capturedPhoto, 'photo.jpg');
        }
    });

    // Download a photo
    function downloadPhoto(dataUrl, filename) {
        const link = document.createElement('a');
        link.download = filename;
        link.href = dataUrl;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    // Search and sort filters
    filterSearchInput.addEventListener('input', () => {
        const searchTerm = filterSearchInput.value.toLowerCase();
        currentFilters = filters.filter(filter => filter.name.toLowerCase().includes(searchTerm));
        displayFilters();
    });

    cancelSearchBtn.addEventListener('click', () => {
        filterSearchInput.value = '';
        currentFilters = [...filters];
        displayFilters();
    });

    sortAZBtn.addEventListener('click', () => {
        currentFilters.sort((a, b) => a.name.localeCompare(b.name));
        displayFilters();
    });

    sortZABtn.addEventListener('click', () => {
        currentFilters.sort((a, b) => b.name.localeCompare(a.name));
        displayFilters();
    });

    // Add animated divider
    const animatedDivider = document.createElement('div');
    animatedDivider.classList.add('animated-divider');
    document.body.appendChild(animatedDivider);
});
