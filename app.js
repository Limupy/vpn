'use strict';
const T={ru:{monitorKicker:'СОСТОЯНИЕ ПОДПИСКИ',monitorTitle:'Мониторинг подключения',monitorIdle:'Ожидает токен',monitorDescription:'Введи токен подписки — панель запросит состояние сервера, остаток трафика и задержку.',monitorTokenLabel:'Токен подписки',monitorTokenPlaceholder:'Токен подписки',monitorCheck:'Проверить состояние',monitorLoading:'Проверяем…',monitorUpstream:'Сервер',monitorTraffic:'Использовано',monitorExpiry:'Подписка до',monitorProtocols:'Протоколы',monitorDevice:'Устройство',monitorCopy:'Копировать VPN-ссылку',monitorOpenHapp:'Открыть в Happ',monitorFootnote:'Статус показывает доступность upstream и данные подписки, а не состояние VPN-туннеля на этом устройстве.',monitorConnected:'Upstream доступен',monitorUnavailable:'Upstream недоступен',monitorError:'Не удалось получить данные. Проверь токен, API и доступность сервера.',monitorNeedToken:'Сначала введи токен подписки и проверь его.',monitorCopied:'VPN-ссылка скопирована.',monitorCopyFailed:'Не удалось скопировать ссылку. Разреши доступ к буферу обмена.',monitorNoLink:'Сначала проверь токен подписки.',monitorNoExpiry:'Не указано',monitorRemaining:'Остаток',monitorNoLimit:'Без данных о лимите',monitorNoProtocols:'Не определены',happDownload:'Скачать Happ с официального сайта',designCopy:'Копировать VPN-ссылку',designOpen:'Открыть в Happ',authCardLabel:'ЛИЧНЫЙ КАБИНЕТ',authCardDescription:'Токен и доступ к аккаунту',telegramLabel:'Открыть Telegram Limupy',authEyebrow:'ЛИЧНЫЙ ДОСТУП',authTitle:'Доступ к Limupy — без лишних шагов.',authDescription:'Введи токен, чтобы подготовить регистрацию, или выбери вход по логину и паролю. Подключение сервера будет следующим этапом.',authPrivacy:'Пока сервер не подключён, данные формы не отправляются и не сохраняются.',authTabRegister:'Регистрация',authTabLogin:'Войти',navAccount:"Аккаунт",authTokenOnly:"Войти только по токену",authIdentityPlaceholder:"Введи логин или токен",authIdentityLabel:"Логин или токен",authTokenLabel:'Токен подписки',authTokenPlaceholder:'Введи токен подписки',authStatusLabel:'Статус регистрации токена',authStatusUnverified:'Не проверен',authStatusPending:'Ожидает серверной проверки',authTokenHint:'Проверка «зарегистрирован / не зарегистрирован» появится после подключения серверного API.',authUsernameLabel:'Логин',authUsernamePlaceholder:'Придумай логин',authLoginUsernamePlaceholder:'Твой логин',authPasswordLabel:'Пароль',authPasswordPlaceholder:'Не менее 8 символов',authLoginPasswordPlaceholder:'Твой пароль',authConfirmLabel:'Повтори пароль',authConfirmPlaceholder:'Повтори пароль',authCreateButton:'Создать аккаунт',authLoginButton:'Войти в аккаунт',authRegisterNote:'Проверка токена и создание аккаунта активируются после подключения серверной части.',authLoginNote:'Вход активируется после подключения серверной авторизации.',authMsgToken:'Введи токен подписки.',authMsgLogin:'Логин: 3–32 символа, латиница, цифры, точка, дефис или подчёркивание.',authMsgPassword:'Пароль должен содержать от 8 до 128 символов.',authMsgMismatch:'Пароли не совпадают.',authMsgNoServerRegister:'Регистрация пока недоступна: сервер не подключён.',authMsgNoServerLogin:'Вход пока недоступен: сервер не подключён.',heroSecondary:'Аккаунт',navFeatures:'Основа',navPrinciples:'Принципы',navApproach:'Подход',githubLabel:'Открыть репозиторий GitHub',languageLabel:'Сменить язык',themeLabel:'Переключить тему',menuOpen:'Открыть меню',menuClose:'Закрыть меню',heroBadge:'ПРОСТРАНСТВО LIMUPY',heroLead:'Всё важное.',heroAccent:'Ничего лишнего.',heroDescription:'Чистая цифровая среда, в которой спокойно ориентироваться. Начинаем с продуманной основы — каждую следующую функцию добавим на своём месте.',heroPrimary:'Исследовать интерфейс',heroSecondary:'Наши принципы',heroFootnote:'Основа проекта · этап 01',featuresEyebrow:'ОСНОВА',featuresTitle:'Просто. Понятно. Собрано.',featuresDescription:'Три принципа, на которых строится новый интерфейс Limupy.',cardOneTitle:'Понятная структура',cardOneDescription:'Последовательная иерархия, удобная навигация и только нужные элементы на экране.',cardTwoTitle:'Внимание к деталям',cardTwoDescription:'Спокойная палитра, выверенные отступы и ненавязчивые реакции на действия.',cardThreeTitle:'Развитие по этапам',cardThreeDescription:'Сначала надёжный каркас. Новые возможности появятся постепенно, без перегрузки.',principlesEyebrow:'ДИЗАЙН-СИСТЕМА',principlesTitle:'Каждому элементу — своё место.',principlesDescription:'Интерфейс начинается с визуального порядка. Мы сохраняем достаточно воздуха, ясные состояния и одинаковую логику на любом экране.',principlesLink:'Перейти к подходу',principleOneTitle:'Содержимое прежде декора',principleOneDescription:'Визуальные эффекты поддерживают содержание, а не спорят с ним.',principleTwoTitle:'Единая логика',principleTwoDescription:'Повторяющиеся компоненты ведут себя одинаково и предсказуемо.',principleThreeTitle:'Комфорт на любом экране',principleThreeDescription:'Адаптивная сетка, доступность с клавиатуры и поддержка уменьшения движения.',approachEyebrow:'СЛЕДУЮЩИЙ ШАГ',approachTitle:'Сначала качество основы.',approachDescription:'Это чистый каркас новой версии. Подключение сервиса, аккаунты и остальные функции добавим отдельными этапами — с проверкой безопасности и удобства.',backToTop:'Вернуться наверх',footerText:'Меньше шума. Больше ясности.',footerTop:'Наверх ↑',pageTitle:'Limupy — без лишнего',pageDescription:'Limupy — чистая цифровая среда с вниманием к ясности, безопасности и деталям.'},en:{monitorKicker:'SUBSCRIPTION STATUS',monitorTitle:'Connection monitor',monitorIdle:'Waiting for token',monitorDescription:'Enter your subscription token to check upstream availability, remaining traffic, and latency.',monitorTokenLabel:'Subscription token',monitorTokenPlaceholder:'Subscription token',monitorCheck:'Check status',monitorLoading:'Checking…',monitorUpstream:'Server',monitorTraffic:'Used traffic',monitorExpiry:'Subscription expires',monitorProtocols:'Protocols',monitorDevice:'Device',monitorCopy:'Copy VPN link',monitorOpenHapp:'Open in Happ',monitorFootnote:'This checks upstream availability and subscription data, not the VPN tunnel state on this device.',monitorConnected:'Upstream available',monitorUnavailable:'Upstream unavailable',monitorError:'Could not load data. Check the token, API, and server availability.',monitorNeedToken:'Enter and verify a subscription token first.',monitorCopied:'VPN link copied.',monitorCopyFailed:'Could not copy the link. Allow clipboard access.',monitorNoLink:'Verify a subscription token first.',monitorNoExpiry:'Not specified',monitorRemaining:'Remaining',monitorNoLimit:'No quota data',monitorNoProtocols:'Not detected',happDownload:'Download Happ from the official website',designCopy:'Copy VPN link',designOpen:'Open in Happ',authCardLabel:'ACCOUNT ACCESS',authCardDescription:'Token and account sign-in',telegramLabel:'Open Limupy on Telegram',authEyebrow:'ACCOUNT ACCESS',authTitle:'Access Limupy without extra steps.',authDescription:'Enter a subscription token to prepare registration, or choose to sign in with a username and password. Server integration comes next.',authPrivacy:'Until the server is connected, form data is not sent or saved.',authTabRegister:'Create account',authTabLogin:'Sign in',navAccount:"Account",authTokenOnly:"Sign in with token only",authIdentityPlaceholder:"Enter username or token",authIdentityLabel:"Username or token",authTokenLabel:'Subscription token',authTokenPlaceholder:'Enter your subscription token',authStatusLabel:'Token registration status',authStatusUnverified:'Not checked',authStatusPending:'Waiting for server check',authTokenHint:'The registered / not registered status will be available after the server API is connected.',authUsernameLabel:'Username',authUsernamePlaceholder:'Choose a username',authLoginUsernamePlaceholder:'Your username',authPasswordLabel:'Password',authPasswordPlaceholder:'At least 8 characters',authLoginPasswordPlaceholder:'Your password',authConfirmLabel:'Confirm password',authConfirmPlaceholder:'Enter password again',authCreateButton:'Create account',authLoginButton:'Sign in',authRegisterNote:'Token verification and account creation will be enabled when the server is connected.',authLoginNote:'Sign-in will be enabled when server authentication is connected.',authMsgToken:'Enter your subscription token.',authMsgLogin:'Username must be 3–32 characters: letters, numbers, dot, dash, or underscore.',authMsgPassword:'Password must be 8–128 characters.',authMsgMismatch:'Passwords do not match.',authMsgNoServerRegister:'Registration is not available yet: the server is not connected.',authMsgNoServerLogin:'Sign-in is not available yet: the server is not connected.',heroSecondary:'Account',navFeatures:'Overview',navPrinciples:'Principles',navApproach:'Approach',githubLabel:'Open GitHub repository',languageLabel:'Change language',themeLabel:'Toggle theme',menuOpen:'Open menu',menuClose:'Close menu',heroBadge:'THE LIMUPY SPACE',heroLead:'Everything important.',heroAccent:'Nothing extra.',heroDescription:'A clear digital space that feels natural to navigate. We start with a thoughtful foundation and add each next feature where it belongs.',heroPrimary:'Explore the interface',heroSecondary:'Our principles',heroFootnote:'Project foundation · stage 01',featuresEyebrow:'FOUNDATION',featuresTitle:'Simple. Clear. Considered.',featuresDescription:'Three principles shaping the new Limupy interface.',cardOneTitle:'A clear structure',cardOneDescription:'Consistent hierarchy, straightforward navigation, and only the elements you need on screen.',cardTwoTitle:'Attention to detail',cardTwoDescription:'A calm palette, considered spacing, and subtle feedback for interactions.',cardThreeTitle:'Built in stages',cardThreeDescription:'A reliable foundation first. New capabilities will arrive gradually, without clutter.',principlesEyebrow:'DESIGN SYSTEM',principlesTitle:'Every element has its place.',principlesDescription:'A good interface starts with visual order. We keep enough breathing room, clear states, and consistent logic across every screen.',principlesLink:'Explore our approach',principleOneTitle:'Content before decoration',principleOneDescription:'Visual effects support the content instead of competing with it.',principleTwoTitle:'One consistent logic',principleTwoDescription:'Repeated components behave in consistent and predictable ways.',principleThreeTitle:'Comfort on every screen',principleThreeDescription:'Responsive layouts, keyboard accessibility, and reduced-motion support.',approachEyebrow:'WHAT COMES NEXT',approachTitle:'Build the foundation well.',approachDescription:'This is the clean framework for the next version. Service connections, accounts, and other features will be added in separate stages, with security and usability in mind.',backToTop:'Back to top',footerText:'Less noise. More clarity.',footerTop:'Back to top ↑',pageTitle:'Limupy — nothing extra',pageDescription:'Limupy is a clean digital space designed around clarity, security, and thoughtful details.'}};
const root=document.documentElement,menu=document.getElementById('menuToggle'),nav=document.getElementById('primaryNav'),langBtn=document.getElementById('languageToggle'),themeBtn=document.getElementById('themeToggle'),reduced=matchMedia('(prefers-reduced-motion: reduce)');
function read(k){try{return localStorage.getItem(k)}catch(_){return null}}function write(k,v){try{localStorage.setItem(k,v)}catch(_){}}
function language(l){l=l==='en'?'en':'ru';const d=T[l];root.lang=l;document.title=d.pageTitle;document.querySelector('meta[name="description"]').content=d.pageDescription;document.querySelectorAll('[data-i18n]').forEach(e=>{if(Object.hasOwn(d,e.dataset.i18n))e.textContent=d[e.dataset.i18n]});document.querySelectorAll('[data-i18n-placeholder]').forEach(e=>{const key=e.dataset.i18nPlaceholder;if(Object.prototype.hasOwnProperty.call(d,key))e.setAttribute('placeholder',d[key])});document.querySelectorAll('[data-i18n-aria]').forEach(e=>{const k=e.dataset.i18nAria;if(Object.hasOwn(d,k)){e.setAttribute('aria-label',d[k]);if(e.hasAttribute('title'))e.title=d[k]}});document.querySelectorAll('[data-language-code]').forEach(e=>{const on=e.dataset.languageCode===l;e.classList.toggle('is-active',on);if(on)e.setAttribute('aria-current','true');else e.removeAttribute('aria-current')});menu.setAttribute('aria-label',nav.classList.contains('is-open')?d.menuClose:d.menuOpen);write('limupy-language',l)}
function theme(t){t=t==='light'?'light':'dark';root.dataset.theme=t;themeBtn.setAttribute('aria-label',T[root.lang].themeLabel);themeBtn.title=T[root.lang].themeLabel;document.querySelector('meta[name="theme-color"]').content=t==='light'?'#f5f2fa':'#17151D';write('limupy-theme',t)}
function close(){nav.classList.remove('is-open');menu.setAttribute('aria-expanded','false');menu.setAttribute('aria-label',T[root.lang].menuOpen)}menu.addEventListener('click',()=>{const open=!nav.classList.contains('is-open');nav.classList.toggle('is-open',open);menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',T[root.lang][open?'menuClose':'menuOpen'])});langBtn.addEventListener('click',()=>language(root.lang==='ru'?'en':'ru'));themeBtn.addEventListener('click',()=>theme(root.dataset.theme==='dark'?'light':'dark'));nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',close));document.addEventListener('click',e=>{if(!nav.contains(e.target)&&!menu.contains(e.target))close()});document.addEventListener('keydown',e=>{if(e.key==='Escape')close()});window.addEventListener('resize',()=>{if(matchMedia('(min-width: 761px)').matches)close()});
const links=[...document.querySelectorAll('.nav-link')],sections=links.map(a=>document.querySelector(a.getAttribute('href'))).filter(Boolean);function active(id){links.forEach(a=>{const yes=a.hash==='#'+id;a.classList.toggle('active',yes);if(yes)a.setAttribute('aria-current','location');else a.removeAttribute('aria-current')})}
if('IntersectionObserver'in window&&!reduced.matches){const reveal=new IntersectionObserver((entries,obs)=>entries.forEach(e=>{if(e.isIntersecting&&!e.target.classList.contains('is-visible')){e.target.classList.add('is-visible');obs.unobserve(e.target)}}),{threshold:.08,rootMargin:'0px 0px -36px 0px'});document.querySelectorAll('.reveal').forEach(e=>reveal.observe(e));document.body.classList.add('motion-ready');const spy=new IntersectionObserver(entries=>{const e=entries.filter(x=>x.isIntersecting).sort((a,b)=>b.intersectionRatio-a.intersectionRatio)[0];if(e)active(e.target.id)},{threshold:[.2,.45,.7],rootMargin:'-18% 0px -55% 0px'});sections.forEach(s=>spy.observe(s))}else document.querySelectorAll('.reveal').forEach(e=>e.classList.add('is-visible'));
language(read('limupy-language')||'ru');theme(read('limupy-theme')||'dark');


// Subscription data is loaded after token sign-in and shown in the original foundation cards.
const API_URL = 'https://78.17.112.158/api.php';
let monitorData = null;
const copyButton = document.getElementById('designCopyLink');
const openButton = document.getElementById('designOpenHapp');
function formatBytes(value) {
  if (value == null || !Number.isFinite(Number(value))) return '—';
  const units = ['B', 'KB', 'MB', 'GB', 'TB']; let n = Math.max(0, Number(value)), i = 0;
  while (n >= 1024 && i < units.length - 1) { n /= 1024; i++; }
  return n.toLocaleString(root.lang === 'ru' ? 'ru-RU' : 'en-US', { maximumFractionDigits: 1 }) + ' ' + units[i];
}
function formatExpiry(value) {
  const n = Number(value); if (!n) return T[root.lang].monitorNoExpiry;
  const d = new Date(n * 1000);
  return Number.isFinite(d.getTime()) ? d.toLocaleDateString(root.lang === 'ru' ? 'ru-RU' : 'en-US', { year: 'numeric', month: 'short', day: 'numeric' }) : T[root.lang].monitorNoExpiry;
}
async function requestSubscription(token) {
  let device = read('limupy-device-id');
  if (!device) { device = (crypto.randomUUID ? crypto.randomUUID() : Math.random().toString(36).slice(2) + Date.now().toString(36)); write('limupy-device-id', device); }
  const res = await fetch(API_URL, { method: 'POST', mode: 'cors', cache: 'no-store', headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token }, body: JSON.stringify({ action: 'subscription', device_id: 'web-' + device }) });
  let data; try { data = await res.json(); } catch (_) { throw new Error('Invalid API response'); }
  if (!res.ok || !data || data.ok !== true) throw new Error(data && data.error ? data.error : 'API request failed (' + res.status + ')');
  return data;
}
function renderFoundation(data) {
  const s = data.subscription || {}, u = data.upstream || {};
  const serverTitle = document.querySelector('#foundationServerCard h3');
  const serverCopy = document.querySelector('#foundationServerCard p');
  const trafficTitle = document.querySelector('#foundationTrafficCard h3');
  const trafficCopy = document.querySelector('#foundationTrafficCard p');
  const expiryTitle = document.querySelector('#foundationExpiryCard h3');
  const expiryCopy = document.querySelector('#foundationExpiryCard p');
  serverTitle.textContent = u.available ? T[root.lang].monitorConnected : T[root.lang].monitorUnavailable;
  serverCopy.textContent = (data.subscription_name || 'Limupy') + ' · RTT ' + (u.rtt_ms == null ? '—' : u.rtt_ms + ' ms');
  trafficTitle.textContent = T[root.lang].monitorTraffic;
  trafficCopy.textContent = formatBytes(s.used_bytes) + ' · ' + (s.remaining_bytes == null ? T[root.lang].monitorNoLimit : T[root.lang].monitorRemaining + ': ' + formatBytes(s.remaining_bytes));
  expiryTitle.textContent = T[root.lang].monitorExpiry;
  expiryCopy.textContent = formatExpiry(s.expire) + ' · ' + (s.total_bytes == null ? T[root.lang].monitorNoLimit : formatBytes(s.total_bytes) + ' total');
  document.getElementById('foundationServerMeta').textContent = u.available ? '01 / ONLINE' : '01 / OFFLINE';
  document.getElementById('foundationTrafficMeta').textContent = '02 / ' + (Array.isArray(s.protocols) && s.protocols.length ? s.protocols.join(', ') : T[root.lang].monitorNoProtocols);
  document.getElementById('foundationExpiryMeta').textContent = '03 / ' + (data.device && data.device.name ? data.device.name : T[root.lang].monitorDevice);
  [...document.querySelectorAll('.foundation-card')].forEach(card => card.classList.add('is-account-data'));
  if (copyButton) copyButton.disabled = !data.proxy_url;
  if (openButton) openButton.disabled = !data.happ_url;
}
async function copyVpnLink() {
  if (!monitorData || !monitorData.proxy_url) return showAuthMessage(T[root.lang].monitorNoLink, 'error');
  try { await navigator.clipboard.writeText(monitorData.proxy_url); showAuthMessage(T[root.lang].monitorCopied, 'info'); }
  catch (_) { showAuthMessage(T[root.lang].monitorCopyFailed, 'error'); }
}
function openHapp() {
  if (!monitorData || !monitorData.happ_url) return showAuthMessage(T[root.lang].monitorNoLink, 'error');
  window.location.href = monitorData.happ_url;
}
if (copyButton) copyButton.addEventListener('click', copyVpnLink);
if (openButton) openButton.addEventListener('click', openHapp);

// Account UI only: account registration/password login are not implemented by the supplied API.
const registerTab = document.getElementById('registerTab');
const loginTab = document.getElementById('loginTab');
const registerPanel = document.getElementById('registerPanel');
const loginPanel = document.getElementById('loginPanel');
const loginWithToken = document.getElementById('loginWithToken');
const loginPassword = document.getElementById('loginPassword');
const loginPasswordField = document.getElementById('loginPasswordField');
const loginIdentity = document.getElementById('loginIdentity');
const authMessage = document.getElementById('authMessage');

function setAuthTab(tab) {
  const registering = tab === 'register';
  registerPanel.hidden = !registering;
  loginPanel.hidden = registering;
  registerPanel.classList.toggle('hidden', !registering);
  loginPanel.classList.toggle('hidden', registering);
  registerTab.classList.toggle('active', registering);
  loginTab.classList.toggle('active', !registering);
  registerTab.setAttribute('aria-selected', String(registering));
  loginTab.setAttribute('aria-selected', String(!registering));
  authMessage.textContent = '';
  authMessage.className = 'auth-message';
}
registerTab.addEventListener('click', () => setAuthTab('register'));
loginTab.addEventListener('click', () => setAuthTab('login'));

function syncLoginMode() {
  const tokenMode = loginWithToken.checked;
  loginPasswordField.hidden = tokenMode;
  loginPassword.required = !tokenMode;
  loginPassword.autocomplete = tokenMode ? 'off' : 'current-password';
  if (tokenMode) loginPassword.value = '';
}
loginWithToken.addEventListener('change', syncLoginMode);

function showAuthMessage(message, type = 'info') {
  authMessage.textContent = message;
  authMessage.className = 'auth-message ' + type;
}
registerPanel.addEventListener('submit', event => {
  event.preventDefault();
  const token = document.getElementById('registerToken').value.trim();
  const username = document.getElementById('registerUsername').value.trim();
  const password = document.getElementById('registerPassword').value;
  const confirmation = document.getElementById('registerConfirm').value;
  if (!token) return showAuthMessage(T[root.lang].authMsgToken, 'error');
  if (!/^[A-Za-z0-9._-]{3,32}$/.test(username))
    return showAuthMessage(T[root.lang].authMsgLogin, 'error');
  if (password.length < 8 || password.length > 128)
    return showAuthMessage(T[root.lang].authMsgPassword, 'error');
  if (password !== confirmation)
    return showAuthMessage(T[root.lang].authMsgMismatch, 'error');
  showAuthMessage(T[root.lang].authMsgNoServerRegister, 'info');
});
loginPanel.addEventListener('submit', async event => {
  event.preventDefault();
  const identity = loginIdentity.value.trim();
  if (!identity) return showAuthMessage(T[root.lang].authMsgToken, 'error');
  if (!loginWithToken.checked) {
    if (loginPassword.value.length < 8 || loginPassword.value.length > 128)
      return showAuthMessage(T[root.lang].authMsgPassword, 'error');
    return showAuthMessage(T[root.lang].authMsgNoServerLogin, 'info');
  }
  const submit = loginPanel.querySelector('button[type="submit"]');
  submit.disabled = true;
  const originalLabel = submit.textContent;
  submit.textContent = T[root.lang].monitorLoading;
  showAuthMessage(T[root.lang].monitorLoading, 'info');
  try {
    monitorData = await requestSubscription(identity);
    renderFoundation(monitorData);
    showAuthMessage((monitorData.subscription_name || 'Limupy') + ' · ' + (monitorData.version || ''), 'info');
    loginIdentity.value = '';
  } catch (err) {
    monitorData = null;
    showAuthMessage(T[root.lang].monitorError + (err && err.message ? ' (' + err.message + ')' : ''), 'error');
  } finally {
    submit.disabled = false;
    submit.textContent = originalLabel;
  }
});
