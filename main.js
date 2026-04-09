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
    { "id": 10, "ism": "Guli", "familiya": "Abdurazzoqova", "yosh": 25, "email": "guli.a@example.com", "shahar": "Guliston" }
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