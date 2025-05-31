// Version
const version = 'Version 1.5.5';
document.getElementById('app-version').innerText = version;

// Open Information Menu
document.getElementById('information-button-open').addEventListener('click', () => {
    document.getElementById('information-container').className = 'container-overlay-active poppins';
});

// Close Information Menu
document.getElementById('information-button-close').addEventListener('click', () => {
    document.getElementById('information-container').className = 'container-overlay-inactive poppins';
});

// Add Information

const list_qna = [
    {'question':'What is TeraDL?', 'answer':'TeraDL is a platform for streaming or downloading Terabox files quickly and for free'},
    {'question':'How to use it?', 'answer':'Simply enter the Terabox URL you want to download, press submit, wait until the file list appears, then choose the Download or Play Streaming option'},
    {'question':'What\'s the difference between download options 1, 2, and 3?', 'answer':'Option 1 is a download URL with slow but steady speed<div class="divisor-spacing"></div>Option 2 is a download URL with medium speed<div class="divisor-spacing"></div>Option 3 is a download URL with high speed but often errors'},
    {'question':'Is this platform official?', 'answer':'This platform is created independently and has no association with Terabox. All actions are the responsibility of the user'},
];

function addInfo() {
    const box_info = document.getElementById('container-qna');
    list_qna.forEach((item) => {
        const new_element = document.createElement('div');
        new_element.className = 'box-qna';
        new_element.innerHTML = `
            <span class="question">${item.question}</span>
            <span class="answer">${item.answer}</span>`;
        box_info.appendChild(new_element);
    });
}

addInfo();

// Add Contact

const list_contact = [
    {'href':'https://www.facebook.com/Dapunta.Khurayra.X', 'icon':'<i class="fa-brands fa-square-facebook"></i>', 'text':'Dapunta Khurayra X'},
    {'href':'https://www.instagram.com/dapunta.ratya/#', 'icon':'<i class="fa-brands fa-square-instagram"></i>', 'text':'Dapunta Ratya'},
    {'href':'https://github.com/dapunta', 'icon':'<i class="fa-brands fa-square-github"></i>', 'text':'Dapunta'},
];

function AddContact() {
    const box_contact = document.getElementById('container-contact');
    list_contact.forEach((item) => {
        const new_element = document.createElement('a');
        Object.assign(new_element, { href: item.href, target: '_blank', rel: 'noopener' });
        new_element.innerHTML = `${item.icon}<span>${item.text}</span>`;
        box_contact.appendChild(new_element);
    });
}

AddContact();

// Zoom Image

function zoom(element) {
    const overlay_zoom = document.getElementById('zoom-container');
    overlay_zoom.className = 'container-zoom-active poppins';
    overlay_zoom.innerHTML = `<img src="${element.src}">`;
}

function unzoom(element) {
    const overlay_zoom = document.getElementById('zoom-container');
    overlay_zoom.innerHTML = '';
    overlay_zoom.className = 'container-zoom-inactive poppins';
}

// Add animations for a smoother experience
document.addEventListener('DOMContentLoaded', () => {
    // Fade in main content
    const fullContainer = document.querySelector('.full-container');
    fullContainer.style.opacity = '0';
    fullContainer.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        fullContainer.style.opacity = '1';
    }, 100);
    
    // Animate placeholder text
    const inputField = document.getElementById('terabox_url');
    const placeholders = ['Enter Terabox URL', 'Paste link here...', 'Try a Terabox link'];
    let currentPlaceholder = 0;
    
    // Only run this if we're not on a mobile device to avoid distractions
    if (window.innerWidth > 768) {
        setInterval(() => {
            inputField.setAttribute('placeholder', placeholders[currentPlaceholder]);
            currentPlaceholder = (currentPlaceholder + 1) % placeholders.length;
        }, 3000);
    }
});