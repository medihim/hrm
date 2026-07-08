
const AUTH_KEY = "medihim_hr_auth";
const PW_HASH = "a8a51447029ff0e189f47fbcd2c58f4e5b3abe8d6d490be1a2d408cec6786dd2";
async function sha256(text) {
  const data = new TextEncoder().encode(text);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(hashBuffer)).map(b => b.toString(16).padStart(2,"0")).join("");
}
function isAuthed() { return sessionStorage.getItem(AUTH_KEY) === "1"; }
function requireAuth() { if (!isAuthed()) window.location.href = getRootPath() + "index.html"; }
function logout() { sessionStorage.removeItem(AUTH_KEY); window.location.href = getRootPath() + "index.html"; }
function getRootPath() {
  const path = window.location.pathname;
  if (path.includes('/hr/interviewees/')) return '../../';
  if (path.includes('/hr/')) return '../';
  return './';
}
async function handleLogin(event) {
  event.preventDefault();
  const input = document.getElementById('password');
  const msg = document.getElementById('message');
  const hashed = await sha256(input.value.trim());
  if (hashed === PW_HASH) {
    sessionStorage.setItem(AUTH_KEY, "1");
    window.location.href = "hr/index.html";
  } else {
    msg.textContent = "비밀번호가 일치하지 않습니다.";
    msg.className = "alert err";
    input.value = "";
    input.focus();
  }
}
