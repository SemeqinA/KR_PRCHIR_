// Функции для модальных окон

function showLoginModal() {
    document.getElementById('loginModal').classList.add('is-open');
}

function hideLoginModal() {
    document.getElementById('loginModal').classList.remove('is-open');
}

function showRegisterModal() {
    document.getElementById('registerModal').classList.add('is-open');
}

function hideRegisterModal() {
    document.getElementById('registerModal').classList.remove('is-open');
}



// Регистрация пользователя
function registerUser() {
    const name = document.getElementById('reg-name').value;
    const email = document.getElementById('reg-email').value;
    const password = document.getElementById('reg-password').value;
    const password2 = document.getElementById('reg-password2').value;
    
    if (password !== password2) {
        alert("Пароли не совпадают!");
        return;
    }
    
    // Сохраняем в localStorage (упрощенная версия)
    localStorage.setItem('userName', name);
    localStorage.setItem('userEmail', email);
    
    alert(`Добро пожаловать, ${name}! Регистрация успешна.`);
    hideRegisterModal();
    
    // Показываем кнопку выхода
    updateAuthUI();
}

// Обновление UI после авторизации
function updateAuthUI() {
    const userName = localStorage.getItem('userName');
    const headerAuth = document.querySelector('.header-auth');
    
    if (userName) {
        headerAuth.innerHTML = `
            <div class="user-info">
                <span>Привет, ${userName}!</span>
                <button onclick="logout()" class="logout-btn">Выйти</button>
            </div>
        `;
    }
}

// Выход из аккаунта
function logout() {
    localStorage.removeItem('userName');
    localStorage.removeItem('userEmail');
    updateAuthUI();
    alert("Вы вышли из аккаунта");
}

// Проверяем авторизацию при загрузке
document.addEventListener('DOMContentLoaded', function() {
    updateAuthUI();
    
    // Закрытие модалок по клавише Esc
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            hideLoginModal();
            hideRegisterModal();
        }
    });
});