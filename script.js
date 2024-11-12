// Menambahkan produk ke keranjang
function addTocart(id, name, price)
{
    let cart =
JSON.parse(localStorage.getItem('cart')) || [];

    // Cek apakah produk sudah ada di keranjang
    let produk = cart.find(item => item.id === id);
    if (product) {
        product.quantity += 1; // Jika produk sudah ada, tambahkan jumlahnya
    } else {
        cart.push({ id, name, price, quantity: 1 }); // Jika belum ada, tambahkan produk baru
    }

    localStorage.setItem('cart',
JSON.stringify(cart)); // Simpan keranjang di lecalStorage
        alert('${name} berhasil di tambahkan keranjang.');
}
// Melihat isi keranjang
function viewCart() {
    let cart =
JSON.parse(localStorage.getItem('cart')) || [];
    if (cart.leght == 0) {
        alert("Keranjang Anda kosong.");
    } else {
        let carDetails = "Isi Keranjang anda:\n";
        let totalPrice = 0;

        cart.array.forEach(element => {
            carDetails += `$
{item.name} -  Rp$
{item.Price.tolocalString()} x $
{item.quantity} = Rp${(item.price * item.quantity).toLocaleString()}\n`;
             totalPrice += item.price
* item.quantity;
        });

        carDetails += `\nTotal: Rp$
{totalPrice.tolocaleString()}`;
        alert(carDetails);
    }
}

