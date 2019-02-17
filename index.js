const adminLogin = 'admin';
const adminPassword = 'm4ngo1zh4ackz0r';
let userLogin = prompt ('Введите логин'),
    userPassword;

if (userLogin == adminLogin) {
    userPassword = prompt ('Введите пароль');
    if (userPassword == adminPassword) {
        alert ('Добро пожаловать!');
    }
    else if (userPassword == null) {
        alert ('Отменено пользователем!');
    }
    else  {
        alert ('Доступ запрещен, неверный пароль!');
    }
}
else if (userLogin == null) {
    alert ('Отменено пользователем!');
}
else  {
    alert ('Доступ запрещен, неверный логин!');
}