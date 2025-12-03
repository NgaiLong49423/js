/* * Bước 3: Hàm upDate
 * Hàm này được gọi qua sự kiện onmouseover của các ảnh thumbnail
 */
function upDate(previewPic) {
    // 3a: Kiểm tra sự kiện có kích hoạt không
    console.log("Event triggered! Hàm upDate đang chạy.");

    // 3b: In ra thông tin của ảnh (alt và src) để kiểm tra
    console.log("Alt text:", previewPic.alt);
    console.log("Source:", previewPic.src);

    // Lấy tham chiếu đến thẻ div có id="image"
    var imageDiv = document.getElementById("image");

    // 3c: Thay đổi văn bản của thẻ div thành thuộc tính alt của ảnh previewPic
    imageDiv.innerHTML = previewPic.alt;

    // 3e: Thay đổi hình nền của thẻ div thành đường dẫn src của ảnh previewPic
    // Lưu ý cú pháp: "url('" + ... + "')"
    imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
}

/* * Bước 4: Hàm undo
 * Hàm này được gọi qua sự kiện onmouseout
 */
function undo() {
    // Lấy tham chiếu đến thẻ div có id="image"
    var imageDiv = document.getElementById("image");

    // 4a: Cập nhật lại hình nền về rỗng
    imageDiv.style.backgroundImage = "url('')";

    // 4b: Cập nhật lại văn bản về nội dung gốc
    imageDiv.innerHTML = "Hover over an image below to display here.";
}