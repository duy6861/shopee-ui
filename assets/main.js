var headerRegisterBtn = document.getElementById('header__register')
var headerLoginBtn = document.getElementById('header__log-in-btn')
var modal = document.querySelector('.modal')
var registerForm = document.querySelector('#register')
var logInForm = document.querySelector('#log-in')
var switchLoginBtn = document.getElementById('auth-form__switch-btn-login')
var switchRegisterBtn = document.getElementById('auth-form__switch-btn-register')
var homeProductAction = document.querySelector('.home-product-item__action')
// var likeProductBtn = document.querySelector('.home-product-item__like-icon')
// var unLikeProductBtn = document.querySelector('.home-product-item__like-active')

var disPlayProduct = document.getElementById('list-product')
var product = [
    {
        id: 1,
        name: "Baseus Củ Sạc Bộ Cáp Nhanh PD 20W GaN 5 Sạc điện cho Không Nóng Máy An Toàn Ổn Định Học Tích Điện, Đèn Bàn Học Chống Cận Gấp Gọn, 3 Chế Độ Sáng chính hãng baseus",
        old_price: '300.000',
        new_price: '270.000',
        img: "assets/img/sacnhanh20w.webp",
        brand: "Baseus",
        made_in: "China"
    },
    {
        id: 2,
        name: "Đèn Học Tích Điện, Đèn Bàn Học Chống Cận Gấp Gọn, 3 Chế Độ Sáng chính hãng baseus",
        old_price: '250.000',
        new_price: '225.000',
        img: "assets/img/den-hoc-tich-dien.webp",
        brand: "Baseus",
        made_in: "China"
    },
    {
        id: 3,
        name: "Đèn Treo Màn Hình Gắn Máy Tính Bảo Vệ Mắt Baseus i-Work Chiếu Sáng Rộng Ánh Sáng Đều Thiết Kế Sang Trọng - TopLink Tích Điện, Đèn Bàn Học Chống Cận Gấp Gọn, 3 Chế Độ Sáng chính hãng baseus",
        old_price: '150.000',
        new_price: '135.000',
        img: "assets/img/den-treo-man-hinh.webp",
        brand: "Baseus",
        made_in: "China"
    },
    {
        id: 4,
        name: "Tai nghe nhét tai không dây BASEUS WM02 bluetooth 5.3 TWS chống ồn",
        old_price: '150.000',
        new_price: '135.000',
        img: "assets/img/tai_nghe_bluetooth.webp",
        brand: "Baseus",
        made_in: "China"
    },
    {
        id: 5,
        name: "Sạc Dự Phòng 20000mah mini Không Dây Có Nam Châm Tự Động Bật / Tắt Cho iphone 15 14 13 12 pro max",
        old_price: '150.000',
        new_price: '135.000',
        img: "assets/img/sac-du-phong-mini.webp",
        brand: "Baseus",
        made_in: "China"
    },
    {
        id: 6,
        name: "Bộ 4 móc treo đồ trên xe hơi Baseus sắp xếp gọn dây cáp/chìa khóa tiện dụngĐèn Đèn Treo Màn Hình Gắn Máy Tính Bảo Vệ Mắt Baseus i-Work Chiếu Sáng Rộng Ánh Sáng Đều Thiết Kế Sang Trọng - TopLink Tích Điện, Đèn Bàn Học Chống Cận Gấp Gọn, 3 Chế Độ Sáng chính hãng baseus",
        old_price: '150.000',
        new_price: '135.000',
        img: "assets/img/moctreoxehoi.webp",
        brand: "Baseus",
        made_in: "China"
    },
    {
        id: 7,
        name: "Tẩu sạc nhanh Baseus 3.1A 2 cổng USB dùng trong xe ô tô",
        old_price: '150.000',
        new_price: '135.000',
        img: "assets/img/tau-sac-oto.webp",
        brand: "Baseus",
        made_in: "China"
    },
    {
        id: 8,
        name: "Bảng số điện thoại Baseus dạ quang dùng khi đỗ xe tạm thời",
        old_price: '150.000',
        new_price: '135.000',
        img: "assets/img/bang-so-dien-thoai.webp",
        brand: "Baseus",
        made_in: "China"
    },
    {
        id: 9,
        name: "Đầu Chuyển Đổi OTG Baseus Cổng Micro Usb/ Type C",
        old_price: '150.000',
        new_price: '135.000',
        img: "assets/img/dau-chuyen-doi.webp",
        brand: "Baseus",
        made_in: "China"
    },
    {
        id: 10,
        name: "BASEUS Tai nghe nhét tai không dây W15 kết nối bluetooth 5.2 đa năng tiện lợi",
        old_price: '150.000',
        new_price: '135.000',
        img: "assets/img/tai-nghe-nhet-tai.webp",
        brand: "Baseus",
        made_in: "China"
    },
    {
        id: 11,
        name: "Dây Cáp Baseus PD 20W Nối Đầu USB-C Sang Đầu Lightning Sạc Nhanh Hỗ Trợ Truyền Dữ Liệu 480Mbps",
        old_price: '150.000',
        new_price: '135.000',
        img: "assets/img/cap-sac-nhanh.webp",
        brand: "Baseus",
        made_in: "China"
    },
    {
        id: 12,
        name: "Bút cảm ứng từ tính không dây Baseus kèm sạc không dây thích hợp cho Apple Pencil 2 ipad air4/pro/10/mini6",
        old_price: '150.000',
        new_price: '135.000',
        img: "assets/img/but-cam-ung.webp",
        brand: "Baseus",
        made_in: "China"
    },
    {
        id: 13,
        name: "Baseus Ốp Điện Thoại Trong Suốt Đơn Giản Cho Iphone 15 / 2",
        old_price: '150.000',
        new_price: '135.000',
        img: "assets/img/op-dt.webp",
        brand: "Baseus",
        made_in: "China"
    },
    {
        id: 14,
        name: "Cáp HDMI kỹ thuật số Baseus 8K/60Hz 4K/120HZ 48Gbps cho Xiaomi Mi Box / PS5 /PS4 / laptop / TV / màn hình / máy chiếu",
        old_price: '150.000',
        new_price: '135.000',
        img: "assets/img/capHDMI.webp",
        brand: "Baseus",
        made_in: "China"
    },
    {
        id: 15,
        name: "Kính Cường Lực Baseus Bảo Vệ Ống Kính Máy Ảnh Cho iPhone 14 Pro Max / 14 Pro Max",
        old_price: '150.000',
        new_price: '135.000',
        img: "assets/img/kinh-cuong-luc.webp",
        brand: "Baseus",
        made_in: "China"
    }


]
const listProduct = product.map((productItem) => {
    return `
  <div class="grid__column-2-4">
                    <!-- product-item -->
                    <a class="home-product-item" href="#">
                      <div
                        class="home-product-item__img"
                        style="
                          background-image: url(${productItem.img});
                        "
                      ></div>
                      <h4 class="home-product-item__name">
                        ${productItem.name}
                      </h4>
                      <div class="home-product-item__price">
                        <span class="home-product-item__price-old"
                          >${productItem.old_price}đ</span
                        >
                        <span class="home-product-item__price-new"
                          >${productItem.new_price}đ</span
                        >
                      </div>
                      <div class="home-product-item__action">
                        <span
                          class="home-product-item__like home-product-item__liked"
                          ><i
                            class="home-product-item__like-icon fa-regular fa-heart"
                          ></i>
                          <i
                            class="home-product-item__like-active fa-solid fa-heart"
                          ></i>
                        </span>
                        <div class="home-product-item__rating">
                          <i
                            class="home-product-item__rating-gold fa-regular fa-star"
                          ></i>
                          <i
                            class="home-product-item__rating-gold fa-regular fa-star"
                          ></i>
                          <i
                            class="home-product-item__rating-gold fa-regular fa-star"
                          ></i>
                          <i
                            class="home-product-item__rating-gold fa-regular fa-star"
                          ></i>
                          <i class="fa-regular fa-star"></i>
                        </div>
                        <span class="home-product-item__sold">88 đã bán </span>
                      </div>
                      <div class="home-product-item__origin">
                        <span class="home-product-item__brand">Baseus</span>
                        <span class="home-product-item__made-in">China</span>
                      </div>
                      <div class="home-product-item__favourite">
                        <i class="fa-solid fa-check"></i> <span>Yêu thích</span>
                      </div>
                      <div class="home-product-item__sale-off">
                        <span class="home-product-item__sale-off-percent"
                          >10%</span
                        >
                        <span class="home-product-item__sale-off-label"
                          >GIẢM</span
                        >
                      </div>
                    </a>
                  </div>
`
})
console.log(listProduct)
disPlayProduct.innerHTML = listProduct.join('')
var likeBtn = document.querySelector('.home-product-item__like')
headerRegisterBtn.addEventListener('click', () => {
    modal.style.display = 'flex'
    logInForm.style.display = 'none'
    registerForm.style.display = 'block'
})

headerLoginBtn.addEventListener('click', () => {
    modal.style.display = 'flex'
    registerForm.style.display = 'none'
    logInForm.style.display = 'block'
})
modal.onclick = (e) => {
    if (e.target.closest(".auth-form__controls-back")) {
        modal.style.display = 'none'
    }
}
var modalOverlay = document.querySelector('.modal__overlay')
modalOverlay.onclick = () => {
    modal.style.display = 'none'
}
switchLoginBtn.onclick = () => {
    registerForm.style.display = 'none'
    logInForm.style.display = 'block'
}

switchRegisterBtn.onclick = () => {
    logInForm.style.display = 'none'
    registerForm.style.display = 'block'
}
// likeBtn.addEventListener('click', () => {
//     likeBtn.classList.toggle('home-product-item__liked')
// })
likeBtn.onclick = (e) => {
    if (e.target.closest('.home-product-item__like-icon') || e.target.closest('.home-product-item__like-active')) {
        likeBtn.classList.toggle('home-product-item__liked')
    }
}