import fetchMenu from "./api.js";
import { renderCards, elements } from "./ui.js";

document.addEventListener("DOMContentLoaded", async () => {
    // sayfa yuklendiğinde apıye istek at gelen veriyi dataya aktar
    const data = await fetchMenu();

    // card elemanları render et
renderCards(data);

 elements.inputs.forEach((input) => {
    input.addEventListener("change", () => {
// inputun ıd sine eriş
const selected = input.id;

if(selected==="all") {
    //eger seçili kategori all ise tüm ürünleri render et ama başka bir kategori seçiliyse bu kategorideki ürünleri render et
    renderCards(data);
} else {
const filtred = data.filter((item) => item.category == selected);

renderCards(filtred);
}
    });
 });

});