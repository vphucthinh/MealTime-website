// Sử dụng JavaScript để thêm các sự kiện khi người dùng thêm món vào giỏ hàng và thực hiện thanh toán.

const menu = document.getElementById("menu");
const cart = document.getElementById("cart");
const checkoutButton = document.getElementById("checkout");

checkoutButton.addEventListener("click", function () {
    // Xử lý thanh toán, ví dụ: gửi yêu cầu thanh toán đến máy chủ.
    alert("Thanh toán thành công!");
});

// Hãy viết mã JavaScript để thêm món vào giỏ hàng và cập nhật tổng cộng ở đây.