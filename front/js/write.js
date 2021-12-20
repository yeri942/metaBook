//-------파일 업로드 커스텀---------
const filename = document.querySelector("#write-form .display_box span");
const inputFile = document.querySelector("#upload-file");
const thumb_img = document.querySelector(".display_box .display_thumb");

inputFile.addEventListener("change", (e) => {
    // console.log(e.target.files[0]);
    const file = e.target.files[0];
    showFileName(file);
});

function showFileName(file) {
    console.log(URL.createObjectURL(file));
    // const img = document.createElement("img");
    thumb_img.classList.add("show");
    thumb_img.src = URL.createObjectURL(file);
    // body.appendChild(img);
    filename.textContent = file.name;
}

function uploadImg(file) {
    const data = new FormData();
    data.append("file", file.name);
}
