// Menambahkan produk ke keranjang
function addToCart(id, name, price) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    let product = cart.find(item => item.id === id);
    if (product) {
        product.quantity += 1;
    } else {
        cart.push({ id, name, price, quantity: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${name} berhasil ditambahkan ke keranjang.`);
    updateCartView(); // Perbarui tampilan keranjang
}

// Melihat isi keranjang
function viewCart() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (cart.length === 0) {
        alert("Keranjang Anda kosong.");
    } else {
        let cartDetails = "Isi Keranjang Anda:\n";
        let totalPrice = 0;

        cart.forEach(item => {
            cartDetails += `${item.name} - Rp${item.price.toLocaleString()} x ${item.quantity} = Rp${(item.price * item.quantity).toLocaleString()}\n`;
            totalPrice += item.price * item.quantity;
        });

        cartDetails += `\nTotal: Rp${totalPrice.toLocaleString()}`;
        alert(cartDetails);
    }
}

// Perbarui tampilan keranjang di halaman
function updateCartView() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let cartList = document.getElementById('cart-list');
    let cartTotal = document.getElementById('cart-total');

    cartList.innerHTML = '';
    let totalPrice = 0;

    if (cart.length === 0) {
        cartList.innerHTML = '<li>Keranjang Anda kosong.</li>';
        cartTotal.innerText = '';
        return;
    }

    cart.forEach(item => {
        let listItem = document.createElement('li');
        listItem.textContent = `${item.name} - Rp${item.price.toLocaleString()} x ${item.quantity} = Rp${(item.price * item.quantity).toLocaleString()}`;
        cartList.appendChild(listItem);
        totalPrice += item.price * item.quantity;
    });

    cartTotal.innerText = `Total: Rp${totalPrice.toLocaleString()}`;
}

// Checkout keranjang
function checkout() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (cart.length === 0) {
        alert("Keranjang Anda kosong. Silakan tambahkan produk sebelum checkout.");
        return;
    }

    let cartDetails = "Checkout - Rincian Belanja:\n";
    let totalPrice = 0;

    cart.forEach(item => {
        cartDetails += `${item.name} - Rp${item.price.toLocaleString()} x ${item.quantity} = Rp${(item.price * item.quantity).toLocaleString()}\n`;
        totalPrice += item.price * item.quantity;
    });

    cartDetails += `\nTotal Pembayaran: Rp${totalPrice.toLocaleString()}`;
    alert(cartDetails);

    let confirmCheckout = confirm("Apakah Anda ingin melanjutkan ke pembayaran?");
    if (confirmCheckout) {
        localStorage.removeItem('cart'); // Hapus keranjang setelah checkout
        alert("Terima kasih telah berbelanja! Pesanan Anda sedang diproses.");
        updateCartView(); // Perbarui tampilan keranjang
    }
}

// Panggil fungsi updateCartView saat halaman dimuat
document.addEventListener('DOMContentLoaded', updateCartView);
