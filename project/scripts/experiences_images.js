// function changeImage(imageSrc, title, description) {  
//     var largeImage =  document.getElementById('largeImage');
//     var largeImageTitle = document.getElementById('large_image_title');
//     var largeImageText = document.getElementById('large_image_text')

//     largeImage.src = imageSrc;

//     largeImageTitle.innerHTML = title;
//     largeImageText.innerHTML = description;
// }


// // Grid image change to larger image
// function changeImage(imageSrc, description, href) { 
//     document.getElementById('largeImage').src = imageSrc;
//     document.getElementById('largeDescription').textContent = description;
// }

function changeImage(imageSrc, description, href) {
    document.getElementById('largeImage').src = imageSrc;
    document.getElementById('largeDescription').textContent = description;
    document.getElementById('bookNow').href = href;
}