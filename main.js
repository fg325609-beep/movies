let container = document.getElementById("container");
let searchInput = document.getElementById("searchInput");

let datas = [
    { "id": 1, "ism": "Alisher", "familiya": "Usmonov", "yosh": 28, "email": "alisher@example.com", "shahar": "Toshkent" },
    { "id": 2, "ism": "Madina", "familiya": "Sattorova", "yosh": 24, "email": "madina.s@example.com", "shahar": "Samarqand" },
    { "id": 3, "ism": "Javohir", "familiya": "Aliyev", "yosh": 31, "email": "javohir95@example.com", "shahar": "Buxoro" },
    { "id": 4, "ism": "Dilnoza", "familiya": "Karimova", "yosh": 22, "email": "dilnoza.k@example.com", "shahar": "Namangan" },
    { "id": 5, "ism": "Sardor", "familiya": "Rahimov", "yosh": 29, "email": "sardor_r@example.com", "shahar": "Farg'ona" },
    { "id": 6, "ism": "Nigora", "familiya": "Toshpo'latova", "yosh": 26, "email": "nigora.t@example.com", "shahar": "Andijon" },
    { "id": 7, "ism": "Bobur", "familiya": "Mansurov", "yosh": 35, "email": "bobur.m@example.com", "shahar": "Xiva" },
    { "id": 8, "ism": "Zilola", "familiya": "Hamidova", "yosh": 23, "email": "zilola_h@example.com", "shahar": "Qarshi" },
    { "id": 9, "ism": "Farrux", "familiya": "Ismoilov", "yosh": 27, "email": "farrux.i@example.com", "shahar": "Jizzax" },
    { "id": 10, "ism": "Guli", "familiya": "Abdurazzoqova", "yosh": 25, "email": "guli.a@example.com", "shahar": "Guliston" },
    { "id": 21, "ism": "Temur", "familiya": "Po'latov", "yosh": 30, "email": "temur.p@example.com", "shahar": "Toshkent" },
    { "id": 22, "ism": "Laylo", "familiya": "Xamidova", "yosh": 25, "email": "laylo.x@example.com", "shahar": "Samarqand" },
    { "id": 23, "ism": "Mirali", "familiya": "Sodiqov", "yosh": 27, "email": "mirali.s@example.com", "shahar": "Buxoro" },
    { "id": 24, "ism": "Sevinch", "familiya": "Mo'minova", "yosh": 22, "email": "sevinch.m@example.com", "shahar": "Xiva" },
    { "id": 25, "ism": "Behruz", "familiya": "Toshtemirov", "yosh": 31, "email": "behruz.t@example.com", "shahar": "Andijon" },
    { "id": 26, "ism": "Nozima", "familiya": "Qodirova", "yosh": 24, "email": "nozima.q@example.com", "shahar": "Namangan" },
    { "id": 27, "ism": "Akmal", "familiya": "Saidov", "yosh": 29, "email": "akmal.s@example.com", "shahar": "Qarshi" },
    { "id": 28, "ism": "Diyora", "familiya": "Baxtiyorova", "yosh": 21, "email": "diyora.b@example.com", "shahar": "Jizzax" },
    { "id": 29, "ism": "Sherzod", "familiya": "Eshonov", "yosh": 34, "email": "sherzod.e@example.com", "shahar": "Navoiy" },
    { "id": 30, "ism": "Mohira", "familiya": "Ziyodullayeva", "yosh": 26, "email": "mohira.z@example.com", "shahar": "Guliston" },
    { "id": 31, "ism": "Iskandar", "familiya": "Karimov", "yosh": 32, "email": "iskandar.k@example.com", "shahar": "Marg'ilon" },
    { "id": 32, "ism": "Shirin", "familiya": "G'ofurova", "yosh": 23, "email": "shirin.g@example.com", "shahar": "Termiz" },
    { "id": 33, "ism": "Abror", "familiya": "Azimov", "yosh": 28, "email": "abror.a@example.com", "shahar": "Nukus" },
    { "id": 34, "ism": "Rayhona", "familiya": "Asadova", "yosh": 25, "email": "rayhona.a@example.com", "shahar": "Olmaliq" },
    { "id": 35, "ism": "Javlon", "familiya": "Odilov", "yosh": 30, "email": "javlon.o@example.com", "shahar": "Bekobod" },
    { "id": 36, "ism": "Kamola", "familiya": "Ismatova", "yosh": 27, "email": "kamola.i@example.com", "shahar": "Chirchiq" },
    { "id": 37, "ism": "Mansur", "familiya": "Hoshimov", "yosh": 33, "email": "mansur.h@example.com", "shahar": "Qo'qon" },
    { "id": 38, "ism": "Go'zal", "familiya": "Tursunova", "yosh": 24, "email": "guzal.t@example.com", "shahar": "Farg'ona" },
    { "id": 39, "ism": "Rustam", "familiya": "Sobirov", "yosh": 29, "email": "rustam.s@example.com", "shahar": "Angren" },
    { "id": 40, "ism": "Zubayda", "familiya": "Yo'ldosheva", "yosh": 22, "email": "zubayda.y@example.com", "shahar": "Urganch" }

];

function renderUsers(usersList) {
    container.innerHTML = usersList.map(user => `
        <div class="card">
            <img src="https://picsum.photos/id/${user.id + 10}/200/200" alt="avatar">
            <h3>${user.ism} ${user.familiya}</h3>
            <p>Yosh: ${user.yosh}</p>
            <a href="mailto:${user.email}">${user.email}</a>
        </div>
    `).join("");
}

renderUsers(datas);

searchInput.addEventListener("input", (e) => {
    let text = e.target.value.toLowerCase();
    
    let filteredUsers = datas.filter(user => {
        return user.ism.toLowerCase().includes(text) || 
               user.familiya.toLowerCase().includes(text);
    });

    renderUsers(filteredUsers);
});