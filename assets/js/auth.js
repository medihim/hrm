const AUTH_KEY = "medihim_hr_auth";
const PW_HASH = "a8a51447029ff0e189f47fbcd2c58f4e5b3abe8d6d490be1a2d408cec6786dd2";
let pendingUrl = null;
async function sha256(text) {
  const data = new TextEncoder().encode(text);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(hashBuffer)).map(b => b.toString(16).padStart(2,"0")).join("");
}
function isAuthed() { return sessionStorage.getItem(AUTH_KEY) === "1"; }
function getRootPath() {
  const path = window.location.pathname;
  if (path.includes('/hr/interviewees/')) return '../../';
  if (path.includes('/hr/')) return '../';
  return './';
}
function requireAuth() {
  if (!isAuthed()) window.location.href = getRootPath() + "index.html";
}
function logout() {
  sessionStorage.removeItem(AUTH_KEY);
  window.location.href = getRootPath() + "index.html";
}
function goAfterAuth(target) {
  window.location.href = target || "hr/index.html";
}
async function checkPassword(value) {
  const hashed = await sha256((value || '').trim());
  return hashed === PW_HASH;
}
async function handleLogin(event) {
  event.preventDefault();
  const input = document.getElementById('password');
  const msg = document.getElementById('message');
  if (await checkPassword(input.value)) {
    sessionStorage.setItem(AUTH_KEY, "1");
    goAfterAuth("hr/index.html");
  } else {
    msg.textContent = "비밀번호가 일치하지 않습니다.";
    msg.className = "alert err";
    input.value = "";
    input.focus();
  }
}
async function handleGateLogin(event) {
  event.preventDefault();
  const input = document.getElementById('password');
  const msg = document.getElementById('message');
  if (await checkPassword(input.value)) {
    sessionStorage.setItem(AUTH_KEY, "1");
    goAfterAuth("hr/index.html");
  } else {
    msg.textContent = "비밀번호가 일치하지 않습니다.";
    msg.className = "alert err";
    input.value = "";
    input.focus();
  }
}
function openAuthModal(targetUrl) {
  pendingUrl = targetUrl || "hr/index.html";
  const modal = document.getElementById('authModal');
  const input = document.getElementById('modalPassword');
  const msg = document.getElementById('modalMessage');
  if (!modal) return goAfterAuth(pendingUrl);
  msg.textContent = "인증 후 선택한 페이지로 이동합니다.";
  msg.className = "alert info";
  modal.classList.add('open');
  modal.setAttribute('aria-hidden','false');
  setTimeout(() => input && input.focus(), 40);
}
function closeAuthModal() {
  const modal = document.getElementById('authModal');
  const input = document.getElementById('modalPassword');
  if (modal) {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden','true');
  }
  if (input) input.value = "";
}
async function handleModalLogin(event) {
  event.preventDefault();
  const input = document.getElementById('modalPassword');
  const msg = document.getElementById('modalMessage');
  if (await checkPassword(input.value)) {
    sessionStorage.setItem(AUTH_KEY, "1");
    goAfterAuth(pendingUrl || "hr/index.html");
  } else {
    msg.textContent = "비밀번호가 일치하지 않습니다.";
    msg.className = "alert err";
    input.value = "";
    input.focus();
  }
}
function initGateBoard() {
  document.querySelectorAll('[data-protected-link]').forEach(el => {
    el.addEventListener('click', (event) => {
      event.preventDefault();
      const target = el.getAttribute('data-protected-link');
      if (isAuthed()) goAfterAuth(target);
      else openAuthModal(target);
    });
    el.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        const target = el.getAttribute('data-protected-link');
        if (isAuthed()) goAfterAuth(target);
        else openAuthModal(target);
      }
    });
  });
  const modal = document.getElementById('authModal');
  if (modal) {
    modal.addEventListener('click', (event) => {
      if (event.target === modal) closeAuthModal();
    });
  }
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeAuthModal();
  });
}
