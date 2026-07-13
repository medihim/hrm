const HR_PASSWORD = '5153370';
const AUTH_KEY = 'medihim_hr_authenticated';

function isAuthed() {
  return sessionStorage.getItem(AUTH_KEY) === 'true';
}

function handleLogin(event) {
  event.preventDefault();
  const input = document.getElementById('password');
  const message = document.getElementById('message');
  const value = input ? input.value.trim() : '';
  if (value === HR_PASSWORD) {
    sessionStorage.setItem(AUTH_KEY, 'true');
    if (message) {
      message.className = 'alert success';
      message.textContent = '인증되었습니다. HR 게이트 페이지로 이동합니다.';
    }
    window.location.href = 'hr/index.html';
  } else {
    if (message) {
      message.className = 'alert error';
      message.textContent = '비밀번호가 일치하지 않습니다.';
    }
    if (input) {
      input.value = '';
      input.focus();
    }
  }
}

function requireAuth() {
  if (!isAuthed()) {
    const path = window.location.pathname;
    const depth = path.split('/').filter(Boolean).length;
    // protected pages are under /hr/; go back to repository root index.html
    const prefix = path.includes('/hr/interviewees/') ? '../../' : '../';
    window.location.href = prefix + 'index.html';
  }
}

function logout() {
  sessionStorage.removeItem(AUTH_KEY);
  const path = window.location.pathname;
  const prefix = path.includes('/hr/interviewees/') ? '../../' : '../';
  window.location.href = prefix + 'index.html';
}
