const fetchMenu = async () => {
    // apı istek at
   const res = await fetch("./db.json");

   // apıden gelen verileri js nesnesine çevir
const data = await res.json();

// data içerisindeki menu dizisinin return et
return data.menu;


};

export default fetchMenu;