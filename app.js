'use strict';
const T={ru:{maintenanceTitle:'VPN временно недоступен',maintenanceDescription:'Ввиду новых сетевых ограничений в РФ подключение к VPN временно не работает. Мы работаем над восстановлением доступа.',monitorKicker:'СОСТОЯНИЕ ПОДПИСКИ',monitorTitle:'Мониторинг подключения',monitorIdle:'Ожидает токен',monitorDescription:'Введи токен подписки — панель запросит состояние сервера, остаток трафика и задержку.',monitorTokenLabel:'Токен подписки',monitorTokenPlaceholder:'Токен подписки',monitorCheck:'Проверить состояние',monitorLoading:'Проверяем…',monitorUpstream:'Сервер',monitorTraffic:'Использовано',monitorExpiry:'Подписка до',monitorProtocols:'Протоколы',monitorDevice:'Устройство',monitorCopy:'Копировать VPN-ссылку',monitorOpenHapp:'Открыть в Happ',monitorFootnote:'Статус показывает доступность upstream и данные подписки, а не состояние VPN-туннеля на этом устройстве.',monitorConnected:'Upstream доступен',monitorUnavailable:'Upstream недоступен',monitorError:'Не удалось получить данные. Проверь токен, API и доступность сервера.',monitorNeedToken:'Сначала введи токен подписки и проверь его.',monitorCopied:'VPN-ссылка скопирована.',monitorCopyFailed:'Не удалось скопировать ссылку. Разреши доступ к буферу обмена.',monitorNoLink:'Сначала проверь токен подписки.',monitorNoExpiry:'Не указано',monitorRemaining:'Остаток',monitorNoLimit:'Без данных о лимите',monitorNoQuota:'Нет данных о лимите',monitorUsed:'использовано',monitorDaysLeft:'дн. осталось',monitorExpired:'Срок истёк',monitorPeriod:'Период подписки',monitorElapsed:'срока прошло',monitorNoProtocols:'Не определены',happDownload:'Скачать Happ с официального сайта',designCopy:'Копировать VPN-ссылку',designOpen:'Открыть в Happ',authCardLabel:'ДОСТУП К ПОДПИСКЕ',authCardDescription:'Токен подписки и подключение',telegramLabel:'Открыть Telegram Limupy',authEyebrow:'ЛИЧНЫЙ КАБИНЕТ',authTitle:'Управляй VPN-подпиской Limupy',authDescription:'Введи токен подписки, чтобы проверить состояние сервера, трафик и срок действия, а также получить ссылку для подключения.',authPrivacy:'Вход по логину и паролю пока не поддерживается.',authTabRegister:'Регистрация',authTabLogin:'Войти',navAccount:"Подписка",authTokenOnly:"Войти только по токену",authIdentityPlaceholder:"Введи логин или токен",authIdentityLabel:"Логин или токен",authTokenLabel:'Токен подписки',authTokenPlaceholder:'Введи токен подписки',authStatusLabel:'Статус регистрации токена',authStatusUnverified:'Не проверен',authStatusPending:'Ожидает серверной проверки',authTokenHint:'Проверка «зарегистрирован / не зарегистрирован» появится после подключения серверного API.',authUsernameLabel:'Логин',authUsernamePlaceholder:'Придумай логин',authLoginUsernamePlaceholder:'Твой логин',authPasswordLabel:'Пароль',authPasswordPlaceholder:'Не менее 8 символов',authLoginPasswordPlaceholder:'Твой пароль',authConfirmLabel:'Повтори пароль',authConfirmPlaceholder:'Повтори пароль',authCreateButton:'Создать аккаунт',authLoginButton:'Войти в аккаунт',authRegisterNote:'Проверка токена и создание аккаунта активируются после подключения серверной части.',authLoginNote:'Вход активируется после подключения серверной авторизации.',authMsgToken:'Введи токен подписки.',authMsgLogin:'Логин: 3–32 символа, латиница, цифры, точка, дефис или подчёркивание.',authMsgPassword:'Пароль должен содержать от 8 до 128 символов.',authMsgMismatch:'Пароли не совпадают.',authMsgNoServerRegister:'Регистрация аккаунтов пока не поддерживается. Используй токен подписки для проверки доступа.',authMsgNoServerLogin:'Вход по логину и паролю пока не поддерживается. Выбери вход по токену подписки.',heroSecondary:'Аккаунт',navFeatures:'Возможности',navPrinciples:'Подключение',navApproach:'Подход',githubLabel:'Открыть репозиторий GitHub',languageLabel:'Сменить язык',themeLabel:'Переключить тему',menuOpen:'Открыть меню',menuClose:'Закрыть меню',heroBadge:'LIMUPY VPN · ЛИЧНЫЙ КАБИНЕТ',heroLead:'VPN под',heroAccent:'контролем.',heroDescription:'Проверяй подписку, следи за трафиком и управляй подключением Limupy в одном месте.',heroPrimary:'Управлять подпиской',heroSecondary:'Подробнее',heroFootnote:'Подписка · Трафик · Статус сервера',featuresEyebrow:'ПОДПИСКА И СТАТУС',featuresTitle:'Всё под контролем.',featuresDescription:'Проверяй доступность сервера, расход трафика и срок действия подписки.',cardOneTitle:'Состояние VPN-сервера',cardOneDescription:'Проверь доступность сервера и задержку ответа перед подключением.',cardTwoTitle:'Использование трафика',cardTwoDescription:'Следи за объёмом использованного трафика и доступным остатком по подписке.',cardThreeTitle:'Срок подписки',cardThreeDescription:'Проверяй дату окончания подписки и оставшееся время доступа.',principlesEyebrow:'ПОДКЛЮЧЕНИЕ',principlesTitle:'Подключись за пару шагов.',principlesDescription:'Установи Happ, проверь подписку по токену и используй готовую VPN-ссылку для импорта конфигурации.',principlesLink:'Перейти к подключению',principleOneTitle:'Установи приложение',principleOneDescription:'Скачай Happ с официального сайта для своего устройства.',principleTwoTitle:'Импортируй подписку',principleTwoDescription:'Скопируй VPN-ссылку из кабинета или открой её напрямую в Happ.',principleThreeTitle:'Следи за подпиской',principleThreeDescription:'Проверяй доступность сервера, расход трафика и срок действия подписки.',approachEyebrow:'СЛЕДУЮЩИЙ ШАГ',approachTitle:'Сначала качество основы.',approachDescription:'Это чистый каркас новой версии. Подключение сервиса, аккаунты и остальные функции добавим отдельными этапами — с проверкой безопасности и удобства.',backToTop:'Вернуться наверх',footerText:'© 2026 Limupy. Все права защищены.',footerTop:'Наверх ↑',pageTitle:'Limupy VPN — временно недоступен',pageDescription:'Limupy VPN временно недоступен ввиду новых сетевых ограничений в РФ. Работаем над восстановлением доступа.'},en:{maintenanceTitle:'VPN temporarily unavailable',maintenanceDescription:'Due to new network restrictions in Russia, VPN access is temporarily unavailable. We are working to restore access.',monitorKicker:'SUBSCRIPTION STATUS',monitorTitle:'Connection monitor',monitorIdle:'Waiting for token',monitorDescription:'Enter your subscription token to check upstream availability, remaining traffic, and latency.',monitorTokenLabel:'Subscription token',monitorTokenPlaceholder:'Subscription token',monitorCheck:'Check status',monitorLoading:'Checking…',monitorUpstream:'Server',monitorTraffic:'Used traffic',monitorExpiry:'Subscription expires',monitorProtocols:'Protocols',monitorDevice:'Device',monitorCopy:'Copy VPN link',monitorOpenHapp:'Open in Happ',monitorFootnote:'This checks upstream availability and subscription data, not the VPN tunnel state on this device.',monitorConnected:'Upstream available',monitorUnavailable:'Upstream unavailable',monitorError:'Could not load data. Check the token, API, and server availability.',monitorNeedToken:'Enter and verify a subscription token first.',monitorCopied:'VPN link copied.',monitorCopyFailed:'Could not copy the link. Allow clipboard access.',monitorNoLink:'Verify a subscription token first.',monitorNoExpiry:'Not specified',monitorRemaining:'Remaining',monitorNoLimit:'No quota data',monitorNoQuota:'No quota data',monitorUsed:'used',monitorDaysLeft:'days left',monitorExpired:'Expired',monitorPeriod:'Subscription period',monitorElapsed:'elapsed',monitorNoProtocols:'Not detected',happDownload:'Download Happ from the official website',designCopy:'Copy VPN link',designOpen:'Open in Happ',authCardLabel:'SUBSCRIPTION ACCESS',authCardDescription:'Subscription token and connection',telegramLabel:'Open Limupy on Telegram',authEyebrow:'ACCOUNT DASHBOARD',authTitle:'Manage your Limupy VPN subscription',authDescription:'Enter your subscription token to check server status, traffic usage, expiry, and get your connection link.',authPrivacy:'Username and password sign-in is not supported yet.',authTabRegister:'Create account',authTabLogin:'Sign in',navAccount:"Subscription",authTokenOnly:"Sign in with token only",authIdentityPlaceholder:"Enter username or token",authIdentityLabel:"Username or token",authTokenLabel:'Subscription token',authTokenPlaceholder:'Enter your subscription token',authStatusLabel:'Token registration status',authStatusUnverified:'Not checked',authStatusPending:'Waiting for server check',authTokenHint:'The registered / not registered status will be available after the server API is connected.',authUsernameLabel:'Username',authUsernamePlaceholder:'Choose a username',authLoginUsernamePlaceholder:'Your username',authPasswordLabel:'Password',authPasswordPlaceholder:'At least 8 characters',authLoginPasswordPlaceholder:'Your password',authConfirmLabel:'Confirm password',authConfirmPlaceholder:'Enter password again',authCreateButton:'Create account',authLoginButton:'Sign in',authRegisterNote:'Token verification and account creation will be enabled when the server is connected.',authLoginNote:'Sign-in will be enabled when server authentication is connected.',authMsgToken:'Enter your subscription token.',authMsgLogin:'Username must be 3–32 characters: letters, numbers, dot, dash, or underscore.',authMsgPassword:'Password must be 8–128 characters.',authMsgMismatch:'Passwords do not match.',authMsgNoServerRegister:'Account registration is not supported yet. Use your subscription token to check access.',authMsgNoServerLogin:'Username and password sign-in is not supported yet. Choose subscription-token sign-in.',heroSecondary:'Account',navFeatures:'Features',navPrinciples:'Connection',navApproach:'Approach',githubLabel:'Open GitHub repository',languageLabel:'Change language',themeLabel:'Toggle theme',menuOpen:'Open menu',menuClose:'Close menu',heroBadge:'LIMUPY VPN · PERSONAL ACCOUNT',heroLead:'Your VPN,',heroAccent:'under control.',heroDescription:'Check your subscription, monitor traffic, and manage your Limupy connection in one place.',heroPrimary:'Manage subscription',heroSecondary:'Discover more',heroFootnote:'Subscription · Traffic · Server status',featuresEyebrow:'SUBSCRIPTION STATUS',featuresTitle:'Everything at a glance.',featuresDescription:'Check server availability, traffic usage, and subscription expiry.',cardOneTitle:'VPN server status',cardOneDescription:'Check server availability and response latency before connecting.',cardTwoTitle:'Traffic usage',cardTwoDescription:'Track used traffic and the remaining allowance on your subscription.',cardThreeTitle:'Subscription expiry',cardThreeDescription:'See the expiry date and how much access time remains.',principlesEyebrow:'GET CONNECTED',principlesTitle:'Connect in a few simple steps.',principlesDescription:'Install Happ, verify your subscription token, and use your VPN link to import the configuration.',principlesLink:'Go to connection steps',principleOneTitle:'Install the app',principleOneDescription:'Download Happ from its official website for your device.',principleTwoTitle:'Import your subscription',principleTwoDescription:'Copy your VPN link from the dashboard or open it directly in Happ.',principleThreeTitle:'Track your subscription',principleThreeDescription:'Check server availability, traffic usage, and subscription expiry.',approachEyebrow:'WHAT COMES NEXT',approachTitle:'Build the foundation well.',approachDescription:'This is the clean framework for the next version. Service connections, accounts, and other features will be added in separate stages, with security and usability in mind.',backToTop:'Back to top',footerText:'© 2026 Limupy. All rights reserved.',footerTop:'Back to top ↑',pageTitle:'Limupy VPN — temporarily unavailable',pageDescription:'Limupy VPN is temporarily unavailable due to new network restrictions in Russia. We are working to restore access.'}};
const root=document.documentElement,menu=document.getElementById('menuToggle'),nav=document.getElementById('primaryNav'),langBtn=document.getElementById('languageToggle'),themeBtn=document.getElementById('themeToggle'),reduced=matchMedia('(prefers-reduced-motion: reduce)');
function read(k){try{return localStorage.getItem(k)}catch(_){return null}}function write(k,v){try{localStorage.setItem(k,v)}catch(_){}}

let apiConnectionState = 'checking';
let apiConnectionLatency = null;
function renderApiConnectionState() {
  const label = document.getElementById('serverStatusLabel');
  const dot = document.getElementById('serverStatusDot');
  if (!label || !dot) return;
  let text;
  if (apiConnectionState === 'online') {
    text = root.lang === 'ru'
      ? 'Сервер доступен' + (apiConnectionLatency == null ? '' : ' · ' + apiConnectionLatency + ' мс')
      : 'Server reachable' + (apiConnectionLatency == null ? '' : ' · ' + apiConnectionLatency + ' ms');
  } else if (apiConnectionState === 'offline') {
    text = root.lang === 'ru' ? 'Нет связи с сервером' : 'Server unreachable';
  } else {
    text = root.lang === 'ru' ? 'Проверяем связь с сервером…' : 'Checking server connection…';
  }
  label.textContent = text;
  dot.classList.remove('is-checking', 'is-online', 'is-offline');
  dot.classList.add(apiConnectionState === 'online' ? 'is-online' : apiConnectionState === 'offline' ? 'is-offline' : 'is-checking');
}

function language(l){l=l==='en'?'en':'ru';const d=T[l];root.lang=l;document.title=d.pageTitle;document.querySelector('meta[name="description"]').content=d.pageDescription;document.querySelectorAll('[data-i18n]').forEach(e=>{if(Object.hasOwn(d,e.dataset.i18n))e.textContent=d[e.dataset.i18n]});document.querySelectorAll('[data-i18n-placeholder]').forEach(e=>{const key=e.dataset.i18nPlaceholder;if(Object.prototype.hasOwnProperty.call(d,key))e.setAttribute('placeholder',d[key])});document.querySelectorAll('[data-i18n-aria]').forEach(e=>{const k=e.dataset.i18nAria;if(Object.hasOwn(d,k)){e.setAttribute('aria-label',d[k]);if(e.hasAttribute('title'))e.title=d[k]}});document.querySelectorAll('[data-language-code]').forEach(e=>{const on=e.dataset.languageCode===l;e.classList.toggle('is-active',on);if(on)e.setAttribute('aria-current','true');else e.removeAttribute('aria-current')});menu.setAttribute('aria-label',nav.classList.contains('is-open')?d.menuClose:d.menuOpen);write('limupy-language',l);renderApiConnectionState()}
function theme(t){t=t==='light'?'light':'dark';root.dataset.theme=t;themeBtn.setAttribute('aria-label',T[root.lang].themeLabel);themeBtn.title=T[root.lang].themeLabel;document.querySelector('meta[name="theme-color"]').content=t==='light'?'#f5f2fa':'#17151D';write('limupy-theme',t)}
function close(){nav.classList.remove('is-open');menu.setAttribute('aria-expanded','false');menu.setAttribute('aria-label',T[root.lang].menuOpen)}menu.addEventListener('click',()=>{const open=!nav.classList.contains('is-open');nav.classList.toggle('is-open',open);menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',T[root.lang][open?'menuClose':'menuOpen'])});langBtn.addEventListener('click',()=>language(root.lang==='ru'?'en':'ru'));themeBtn.addEventListener('click',()=>theme(root.dataset.theme==='dark'?'light':'dark'));nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',close));document.addEventListener('click',e=>{if(!nav.contains(e.target)&&!menu.contains(e.target))close()});document.addEventListener('keydown',e=>{if(e.key==='Escape')close()});window.addEventListener('resize',()=>{if(matchMedia('(min-width: 761px)').matches)close()});
const links=[...document.querySelectorAll('.nav-link')],sections=links.map(a=>document.querySelector(a.getAttribute('href'))).filter(Boolean);function active(id){links.forEach(a=>{const yes=a.hash==='#'+id;a.classList.remove('active');if(yes)a.setAttribute('aria-current','location');else a.removeAttribute('aria-current')})}
if('IntersectionObserver'in window&&!reduced.matches){const reveal=new IntersectionObserver(entries=>entries.forEach(e=>e.target.classList.toggle('is-visible',e.isIntersecting)),{threshold:.08,rootMargin:'0px 0px -36px 0px'});document.querySelectorAll('.reveal').forEach(e=>reveal.observe(e));document.body.classList.add('motion-ready');const spy=new IntersectionObserver(entries=>{const e=entries.filter(x=>x.isIntersecting).sort((a,b)=>b.intersectionRatio-a.intersectionRatio)[0];if(e)active(e.target.id)},{threshold:[.2,.45,.7],rootMargin:'-18% 0px -55% 0px'});sections.forEach(s=>spy.observe(s))}else document.querySelectorAll('.reveal').forEach(e=>e.classList.add('is-visible'));
language(read('limupy-language')||'ru');theme(read('limupy-theme')||'dark');


// Subscription data is loaded after token sign-in and shown in the original foundation cards.
const API_URLS = [
  'https://limupy.tail8f792b.ts.net/api.php',
  'https://[2a03:d000:4308:20bf:feaa:14ff:fe07:bcd5]/api.php'
];

async function checkApiConnection() {
  if (document.hidden) return;
  let connected = false;
  for (const url of API_URLS) {
    const controller = new AbortController();
    const started = performance.now();
    const timeout = window.setTimeout(() => controller.abort(), 3500);
    try {
      const response = await fetch(url, {
        method: 'OPTIONS',
        mode: 'cors',
        cache: 'no-store',
        credentials: 'omit',
        signal: controller.signal
      });
      if (response.status === 204) {
        apiConnectionLatency = Math.round(performance.now() - started);
        connected = true;
        break;
      }
    } catch (_) {
    } finally {
      window.clearTimeout(timeout);
    }
  }
  apiConnectionState = connected ? 'online' : 'offline';
  if (!connected) apiConnectionLatency = null;
  renderApiConnectionState();
}
checkApiConnection();
window.setInterval(checkApiConnection, 30000);
document.addEventListener('visibilitychange', () => {
  if (!document.hidden) checkApiConnection();
});

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
  const options = { method: 'POST', mode: 'cors', cache: 'no-store', headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token }, body: JSON.stringify({ action: 'subscription', device_id: 'web-' + device }) };
  let res = null;
  let lastError = null;
  for (const url of API_URLS) {
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 5000);
    try {
      const response = await fetch(url, { ...options, signal: controller.signal });
      if (response.status >= 500) {
        lastError = new Error('API request failed (' + response.status + ')');
        continue;
      }
      res = response;
      break;
    } catch (error) {
      lastError = error;
    } finally {
      window.clearTimeout(timeout);
    }
  }
  if (!res) throw lastError || new Error('API unavailable');
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
  serverTitle.removeAttribute('data-i18n'); serverCopy.removeAttribute('data-i18n');
  trafficTitle.removeAttribute('data-i18n'); trafficCopy.removeAttribute('data-i18n');
  expiryTitle.removeAttribute('data-i18n'); expiryCopy.removeAttribute('data-i18n');
  serverTitle.textContent = u.available ? T[root.lang].monitorConnected : T[root.lang].monitorUnavailable;
  serverCopy.textContent = (data.subscription_name || 'Limupy') + ' · RTT ' + (u.rtt_ms == null ? '—' : u.rtt_ms + ' ms');
  trafficTitle.textContent = T[root.lang].monitorTraffic;
  const used = Number(s.used_bytes);
  const total = Number(s.total_bytes);
  const hasQuota = Number.isFinite(used) && Number.isFinite(total) && total > 0;
  const usedPct = hasQuota ? Math.max(0, Math.min(100, used / total * 100)) : null;
  trafficCopy.textContent = formatBytes(s.used_bytes) + ' · ' + (s.remaining_bytes == null ? T[root.lang].monitorNoLimit : T[root.lang].monitorRemaining + ': ' + formatBytes(s.remaining_bytes));
  const trafficAnalytics = document.getElementById('trafficAnalytics');
  trafficAnalytics.hidden = false;
  document.getElementById('trafficProgress').style.width = (usedPct == null ? 0 : usedPct) + '%';
  document.getElementById('trafficPercent').textContent = usedPct == null ? T[root.lang].monitorNoQuota : Math.round(usedPct) + '% ' + T[root.lang].monitorUsed;
  document.getElementById('trafficRemainingLabel').textContent = s.remaining_bytes == null ? T[root.lang].monitorNoLimit : T[root.lang].monitorRemaining + ' ' + formatBytes(s.remaining_bytes);
  expiryTitle.textContent = T[root.lang].monitorExpiry;
  expiryCopy.textContent = formatExpiry(s.expire) + ' · ' + (s.total_bytes == null ? T[root.lang].monitorNoLimit : formatBytes(s.total_bytes) + ' total');
  const expiryAnalytics = document.getElementById('expiryAnalytics');
  expiryAnalytics.hidden = false;
  const expirySeconds = Number(s.expire);
  const daysLeft = expirySeconds > 0 ? Math.ceil((expirySeconds * 1000 - Date.now()) / 86400000) : null;
  document.getElementById('expiryDays').textContent = daysLeft == null ? T[root.lang].monitorNoExpiry : daysLeft < 0 ? T[root.lang].monitorExpired : daysLeft + ' ' + T[root.lang].monitorDaysLeft;
  const lifetime = Number(s.start) > 0 && expirySeconds > Number(s.start) ? expirySeconds - Number(s.start) : null;
  const timePct = lifetime && daysLeft != null ? Math.max(0, Math.min(100, (1 - (daysLeft * 86400) / lifetime) * 100)) : null;
  document.getElementById('expiryProgress').style.width = (timePct == null ? 0 : timePct) + '%';
  document.getElementById('expiryProgressLabel').textContent = timePct == null ? T[root.lang].monitorPeriod : Math.round(timePct) + '% ' + T[root.lang].monitorElapsed;
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
const authCard = document.querySelector('.auth-card');

function setAuthTab(tab) {
  const registering = tab === 'register';
  if ((registering && !registerPanel.hidden) || (!registering && !loginPanel.hidden)) return;

  const startHeight = authCard.getBoundingClientRect().height;
  authCard.style.transition = 'none';
  authCard.style.height = startHeight + 'px';
  authCard.style.overflow = 'hidden';
  void authCard.offsetHeight;

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

  // Measure the natural height with the new panel visible, then animate from
  // the previous fixed height to that measured height in the next frame.
  authCard.style.height = 'auto';
  const targetHeight = authCard.getBoundingClientRect().height;
  authCard.style.height = startHeight + 'px';
  void authCard.offsetHeight;

  requestAnimationFrame(() => {
    authCard.style.transition = '';
    void authCard.offsetHeight;
    authCard.style.height = targetHeight + 'px';
  });
}
authCard.addEventListener('transitionend', event => {
  if (event.target !== authCard || event.propertyName !== 'height') return;
  authCard.style.height = 'auto';
  authCard.style.overflow = '';
});
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