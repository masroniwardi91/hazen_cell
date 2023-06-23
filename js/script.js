function list_produk() {
    var elm_produk = ``
    $.ajax({
        url: "data.json",
        type: "GET",
        success: function (result) {
            result['arabica'].forEach((produk) => {
                elm_produk += ` <div class="col pb-3">
               <div class="card arabica">
                   <img src="${produk['foto']}" class="card-img-top" alt="...">
                   <div class="card-body">
                       <h3 class="card-title">${produk['nama']}</h3>
                       <div class="hargaukuran row my-3">
                           <div class="col">${produk['size']}</div>
                           <div class="col harga">Rp. ${produk['harga']}</div>
                       </div>
                       <div class="btn btn-beli"><i class="bi bi-cart-dash me-2"></i> Beli</div>
                   </div>
               </div>
           </div>`
            });
            result['robusta'].forEach((dtab) => {
                console.log(dtab);
            });
            $("#baris_produk").append(elm_produk);
        }
    });
}
list_produk()