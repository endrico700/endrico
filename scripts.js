// Ambil semua elemen gambar dengan kelas "popup-image"
const popupImages = document.querySelectorAll(".popup-image");

// Ambil elemen popup dan popup content
const popup = document.getElementById("popup");
const popupImg = document.getElementById("popupImg");

// Fungsi untuk menampilkan popup gambar
function showPopup(imagePath) {
    popupImg.src = imagePath;
    popup.style.display = "block";
}

// Fungsi untuk menutup popup gambar
function closePopup() {
    popup.style.display = "none";
}

// Tambahkan event listener untuk setiap gambar dengan kelas "popup-image"
popupImages.forEach((image) => {
    image.addEventListener("click", () => {
        showPopup(image.src);
    });
});

// Tambahkan event listener untuk menutup popup ketika ikon "close" diklik
const closeIcon = document.querySelector(".close");
closeIcon.addEventListener("click", closePopup);

// Tambahkan event listener untuk menutup popup ketika mengklik area di luar gambar
popup.addEventListener("click", (event) => {
    if (event.target === popup) {
        closePopup();
    }
});
