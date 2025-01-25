/*
Çok sayfalı projelerde eğer pek çok eleman için bir sayfayı render edeceksek bu noktada sayfa içeriği dinamik şekilde render ederiz.Bunu yaparken herbir eleman için url'e bir paramtre geçilir.Devamında bu parametreye sahip ürün verileriyle sayfa renderlanır.

*/

import fetchMenu from "./api.js";
import { elements, renderDetailPage, renderNotFound } from "./ui.js";



// Js içerisindeki URLSearchParams classı parametreleri alıp kullanmas noktasında bize kolaylık sağlar
const params = new URLSearchParams(window.location.search);

// urlden gelen ıd paameteresini number a çevir
const id = +params.get("id");

document.addEventListener("DOMContentLoaded", async () => {
    // sayfa yuklendiğinde apıye istek at
    const data = await fetchMenu("../db.json");

    // urlden alınan ıdye sahip ürünü bul
    const product = data.find((item) => item.id === id);

    
    if (!product) {
        // ürün bulunamadıysa not founder dönder
        renderNotFound(elements.detailContainer);
    } else {
        //detay verisi bilinen ürün ile arayüzü renderla
    renderDetailPage(product, elements.detailContainer);
    }

});