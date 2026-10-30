'use strict';
const T={ru:{maintenanceTitle:'VPN временно недоступен',maintenanceDescription:'Ввиду новых сетевых ограничений в РФ подключение к VPN временно не работает. Мы работаем над восстановлением доступа.',monitorKicker:'СОСТОЯНИЕ ПОДПИСКИ',monitorTitle:'Мониторинг подключения',monitorIdle:'Ожидает токен',monitorDescription:'Введи токен подписки — панель запросит состояние сервера, остаток трафика и задержку.',monitorTokenLabel:'Токен подписки',monitorTokenPlaceholder:'Токен подписки',monitorCheck:'Проверить состояние',monitorLoading:'Проверяем…',monitorUpstream:'Сервер',monitorTraffic:'Использовано',monitorExpiry:'Подписка до',monitorProtocols:'Протоколы',monitorDevice:'Устройство',monitorCopy:'Копировать VPN-ссылку',monitorOpenHapp:'Открыть в Happ',monitorFootnote:'Статус показывает доступность upstream и данные подписки, а не состояние VPN-туннеля на этом устройстве.',monitorConnected:'Upstream доступен',monitorUnavailable:'Upstream недоступен',monitorError:'Не удалось получить данные. Проверь токен, API и доступность сервера.',monitorNeedToken:'Сначала введи токен подписки и проверь его.',monitorCopied:'VPN-ссылка скопирована.',monitorCopyFailed:'Не удалось скопировать ссылку. Разреши доступ к буферу обмена.',monitorNoLink:'Сначала проверь токен подписки.',monitorNoExpiry:'Не указано',monitorRemaining:'Остаток',monitorNoLimit:'Без данных о лимите',monitorNoQuota:'Нет данных о лимите',monitorUsed:'использовано',monitorDaysLeft:'дн. осталось',monitorExpired:'Срок истёк',monitorPeriod:'Период подписки',monitorElapsed:'срока прошло',monitorNoProtocols:'Не определены',happDownload:'Скачать Happ с официального сайта',designCopy:'Копировать VPN-ссылку',designOpen:'Открыть в Happ',authCardLabel:'ДОСТУП К ПОДПИСКЕ',authCardDescription:'Токен подписки и подключение',telegramLabel:'Открыть Telegram Limupy',authEyebrow:'ЛИЧНЫЙ КАБИНЕТ',authTitle:'Управляй VPN-подпиской Limupy',authDescription:'Введи токен подписки, чтобы проверить состояние сервера, трафик и срок действия, а также получить ссылку для подключения.',authPrivacy:'Вход по логину и паролю пока не поддерживается.',authTabRegister:'Регистрация',authTabLogin:'Войти',navAccount:"Подписка",authTokenOnly:"Войти только по токену",authIdentityPlaceholder:"Введи логин или токен",authIdentityLabel:"Логин или токен",authTokenLabel:'Токен подписки',authTokenPlaceholder:'Введи токен подписки',authStatusLabel:'Статус регистрации токена',authStatusUnverified:'Не проверен',authStatusPending:'Ожидает серверной проверки',authTokenHint:'Проверка «зарегистрирован / не зарегистрирован» появится после подключения серверного API.',authUsernameLabel:'Логин',authUsernamePlaceholder:'Придумай логин',authLoginUsernamePlaceholder:'Твой логин',authPasswordLabel:'Пароль',authPasswordPlaceholder:'Не менее 8 символов',authLoginPasswordPlaceholder:'Твой пароль',authConfirmLabel:'Повтори пароль',authConfirmPlaceholder:'Повтори пароль',authCreateButton:'Создать аккаунт',authLoginButton:'Войти в аккаунт',authRegisterNote:'Проверка токена и создание аккаунта активируются после подключения серверной части.',authLoginNote:'Вход активируется после подключения серверной авторизации.',authMsgToken:'Введи токен подписки.',authMsgLogin:'Логин: 3–32 символа, латиница, цифры, точка, дефис или подчёркивание.',authMsgPassword:'Пароль должен содержать от 8 до 128 символов.',authMsgMismatch:'Пароли не совпадают.',authMsgNoServerRegister:'Регистрация аккаунтов пока не поддерживается. Используй токен подписки для проверки доступа.',authMsgNoServerLogin:'Вход по логину и паролю пока не поддерживается. Выбери вход по токену подписки.',heroSecondary:'Аккаунт',navFeatures:'Возможности',navPrinciples:'Подключение',navApproach:'Подход',githubLabel:'Открыть репозиторий GitHub',languageLabel:'Сменить язык',themeLabel:'Переключить тему',menuOpen:'Открыть меню',menuClose:'Закрыть меню',heroBadge:'LIMUPY VPN · ЛИЧНЫЙ КАБИНЕТ',heroLead:'VPN под',heroAccent:'контролем.',heroDescription:'Проверяй подписку, следи за трафиком и управляй подключением Limupy в одном месте.',heroPrimary:'Управлять подпиской',heroSecondary:'Подробнее',heroFootnote:'Подписка · Трафик · Статус сервера',featuresEyebrow:'ПОДПИСКА И СТАТУС',featuresTitle:'Всё под контролем.',featuresDescription:'Проверяй доступность сервера, расход трафика и срок действия подписки.',cardOneTitle:'Состояние VPN-сервера',cardOneDescription:'Проверь доступность сервера и задержку ответа перед подключением.',cardTwoTitle:'Использование трафика',cardTwoDescription:'Следи за объёмом использованного трафика и доступным остатком по подписке.',cardThreeTitle:'Срок подписки',cardThreeDescription:'Проверяй дату окончания подписки и оставшееся время доступа.',principlesEyebrow:'ПОДКЛЮЧЕНИЕ',principlesTitle:'Подключись за пару шагов.',principlesDescription:'Установи Happ, проверь подписку по токену и используй готовую VPN-ссылку для импорта конфигурации.',principlesLink:'Перейти к подключению',principleOneTitle:'Установи приложение',principleOneDescription:'Скачай Happ с официального сайта для своего устройства.',principleTwoTitle:'Импортируй подписку',principleTwoDescription:'Скопируй VPN-ссылку из кабинета или открой её напрямую в Happ.',principleThreeTitle:'Следи за подпиской',principleThreeDescription:'Проверяй доступность сервера, расход трафика и срок действия подписки.',approachEyebrow:'СЛЕДУЮЩИЙ ШАГ',approachTitle:'Сначала качество основы.',approachDescription:'Это чистый каркас новой версии. Подключение сервиса, аккаунты и остальные функции добавим отдельными этапами — с проверкой безопасности и удобства.',backToTop:'Вернуться наверх',footerText:'© 2026 Limupy. Все права защищены.',footerTop:'Наверх ↑',pageTitle:'Limupy VPN — временно недоступен',pageDescription:'Limupy VPN временно недоступен ввиду новых сетевых ограничений в РФ. Работаем над восстановлением доступа.'},en:{maintenanceTitle:'VPN temporarily unavailable',maintenanceDescription:'Due to new network restrictions in Russia, VPN access is temporarily unavailable. We are working to restore access.',monitorKicker:'SUBSCRIPTION STATUS',monitorTitle:'Connection monitor',monitorIdle:'Waiting for token',monitorDescription:'Enter your subscription token to check upstream availability, remaining traffic, and latency.',monitorTokenLabel:'Subscription token',monitorTokenPlaceholder:'Subscription token',monitorCheck:'Check status',monitorLoading:'Checking…',monitorUpstream:'Server',monitorTraffic:'Used traffic',monitorExpiry:'Subscription expires',monitorProtocols:'Protocols',monitorDevice:'Device',monitorCopy:'Copy VPN link',monitorOpenHapp:'Open in Happ',monitorFootnote:'This checks upstream availability and subscription data, not the VPN tunnel state on this device.',monitorConnected:'Upstream available',monitorUnavailable:'Upstream unavailable',monitorError:'Could not load data. Check the token, API, and server availability.',monitorNeedToken:'Enter and verify a subscription token first.',monitorCopied:'VPN link copied.',monitorCopyFailed:'Could not copy the link. Allow clipboard access.',monitorNoLink:'Verify a subscription token first.',monitorNoExpiry:'Not specified',monitorRemaining:'Remaining',monitorNoLimit:'No quota data',monitorNoQuota:'No quota data',monitorUsed:'used',monitorDaysLeft:'days left',monitorExpired:'Expired',monitorPeriod:'Subscription period',monitorElapsed:'elapsed',monitorNoProtocols:'Not detected',happDownload:'Download Happ from the official website',designCopy:'Copy VPN link',designOpen:'Open in Happ',authCardLabel:'SUBSCRIPTION ACCESS',authCardDescription:'Subscription token and connection',telegramLabel:'Open Limupy on Telegram',authEyebrow:'ACCOUNT DASHBOARD',authTitle:'Manage your Limupy VPN subscription',authDescription:'Enter your subscription token to check server status, traffic usage, expiry, and get your connection link.',authPrivacy:'Username and password sign-in is not supported yet.',authTabRegister:'Create account',authTabLogin:'Sign in',navAccount:"Subscription",authTokenOnly:"Sign in with token only",authIdentityPlaceholder:"Enter username or token",authIdentityLabel:"Username or token",authTokenLabel:'Subscription token',authTokenPlaceholder:'Enter your subscription token',authStatusLabel:'Token registration status',authStatusUnverified:'Not checked',authStatusPending:'Waiting for server check',authTokenHint:'The registered / not registered status will be available after the server API is connected.',authUsernameLabel:'Username',authUsernamePlaceholder:'Choose a username',authLoginUsernamePlaceholder:'Your username',authPasswordLabel:'Password',authPasswordPlaceholder:'At least 8 characters',authLoginPasswordPlaceholder:'Your password',authConfirmLabel:'Confirm password',authConfirmPlaceholder:'Enter password again',authCreateButton:'Create account',authLoginButton:'Sign in',authRegisterNote:'Token verification and account creation will be enabled when the server is connected.',authLoginNote:'Sign-in will be enabled when server authentication is connected.',authMsgToken:'Enter your subscription token.',authMsgLogin:'Username must be 3–32 characters: letters, numbers, dot, dash, or underscore.',authMsgPassword:'Password must be 8–128 characters.',authMsgMismatch:'Passwords do not match.',authMsgNoServerRegister:'Account registration is not supported yet. Use your subscription token to check access.',authMsgNoServerLogin:'Username and password sign-in is not supported yet. Choose subscription-token sign-in.',heroSecondary:'Account',navFeatures:'Features',navPrinciples:'Connection',navApproach:'Approach',githubLabel:'Open GitHub repository',languageLabel:'Change language',themeLabel:'Toggle theme',menuOpen:'Open menu',menuClose:'Close menu',heroBadge:'LIMUPY VPN · PERSONAL ACCOUNT',heroLead:'Your VPN,',heroAccent:'under control.',heroDescription:'Check your subscription, monitor traffic, and manage your Limupy connection in one place.',heroPrimary:'Manage subscription',heroSecondary:'Discover more',heroFootnote:'Subscription · Traffic · Server status',featuresEyebrow:'SUBSCRIPTION STATUS',featuresTitle:'Everything at a glance.',featuresDescription:'Check server availability, traffic usage, and subscription expiry.',cardOneTitle:'VPN server status',cardOneDescription:'Check server availability and response latency before connecting.',cardTwoTitle:'Traffic usage',cardTwoDescription:'Track used traffic and the remaining allowance on your subscription.',cardThreeTitle:'Subscription expiry',cardThreeDescription:'See the expiry date and how much access time remains.',principlesEyebrow:'GET CONNECTED',principlesTitle:'Connect in a few simple steps.',principlesDescription:'Install Happ, verify your subscription token, and use your VPN link to import the configuration.',principlesLink:'Go to connection steps',principleOneTitle:'Install the app',principleOneDescription:'Download Happ from its official website for your device.',principleTwoTitle:'Import your subscription',principleTwoDescription:'Copy your VPN link from the dashboard or open it directly in Happ.',principleThreeTitle:'Track your subscription',principleThreeDescription:'Check server availability, traffic usage, and subscription expiry.',approachEyebrow:'WHAT COMES NEXT',approachTitle:'Build the foundation well.',approachDescription:'This is the clean framework for the next version. Service connections, accounts, and other features will be added in separate stages, with security and usability in mind.',backToTop:'Back to top',footerText:'© 2026 Limupy. All rights reserved.',footerTop:'Back to top ↑',pageTitle:'Limupy VPN — temporarily unavailable',pageDescription:'Limupy VPN is temporarily unavailable due to new network restrictions in Russia. We are working to restore access.'}};

Object.assign(T.ru,{
 freeTitle:'Бесплатная подписка',freeLimit:'1 ГБ в день',
 freeDescription:'Получи бесплатный доступ к Limupy. Для выдачи подписки сначала войди или зарегистрируй аккаунт.',
 freeLoading:'Создаём бесплатную подписку…',freeNeedLogin:'Сначала войди или зарегистрируй аккаунт.',
 freeUnavailable:'Сервер пока не поддерживает бесплатную выдачу подписки.',
 registerSuccess:'Аккаунт создан. Теперь можно получить бесплатную подписку.',
 loginSuccess:'Вход выполнен.',authPassword:'Пароль должен содержать от 8 до 128 символов.',
 authMismatch:'Пароли не совпадают.',authBadLogin:'Логин: 3–32 символа, латиница, цифры, точка, дефис или подчёркивание.',
 authServerUnavailable:'Сервер авторизации ещё не настроен. Данные не сохранены.'
});
Object.assign(T.en,{
 freeTitle:'Free subscription',freeLimit:'1 GB per day',
 freeDescription:'Get free access to Limupy. Sign in or create an account first.',
 freeLoading:'Creating free subscription…',freeNeedLogin:'Sign in or create an account first.',
 freeUnavailable:'The server does not support free subscription issuance yet.',
 registerSuccess:'Account created. You can now request a free subscription.',
 loginSuccess:'Signed in.',authPassword:'Password must be 8–128 characters.',
 authMismatch:'Passwords do not match.',authBadLogin:'Username must be 3–32 characters: letters, numbers, dot, dash, or underscore.',
 authServerUnavailable:'Server-side authentication is not configured yet. No data was stored.'
});

Object.assign(T.ru,{
 navHome:'Главная',navLogin:'Вход / Регистрация',navTemplate:'Шаблон',cardImportant:'ВАЖНО',freeCard:'FREE VPN',
 freeAction:'Получить бесплатную подписку',freeNote:'Выдача выполняется через сервер; VPN-ссылка не хранится в браузере.',
 cardAuth:'Вход / Регистрация',cardTemplate:'Шаблон',authNoteSafe:'Пароль и сессионный ключ не сохраняются в браузере. Сессия действует только пока открыта страница.'
});
Object.assign(T.en,{
 navHome:'Home',navLogin:'Sign in / Register',navTemplate:'Template',cardImportant:'IMPORTANT',freeCard:'FREE VPN',
 freeAction:'Get a free subscription',freeNote:'The server creates the subscription; the VPN link is not stored in the browser.',
 cardAuth:'Sign in / Register',cardTemplate:'Template',authNoteSafe:'Your password and session key are not stored in the browser. The session lasts only while this page is open.',
 authUsernameLabel:'Username',authPasswordLabel:'Password',authConfirmLabel:'Confirm password',
 authUsernamePlaceholder:'Choose a username',authLoginUsernamePlaceholder:'Your username',
 authPasswordPlaceholder:'At least 8 characters',authLoginPasswordPlaceholder:'Your password',
 authConfirmPlaceholder:'Enter password again',authCreateButton:'Create account',authLoginButton:'Sign in',
 designCopy:'Copy VPN link',designOpen:'Open in Happ'
});

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
const browserDeviceId = (crypto.randomUUID ? crypto.randomUUID() : Math.random().toString(36).slice(2) + Date.now().toString(36));
async function requestSubscription(token) {
  const device = browserDeviceId;
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
  const result = document.getElementById('accountResult');
  const title = document.getElementById('accountResultTitle');
  const copy = document.getElementById('accountResultText');
  const s = data.subscription || {};
  title.textContent = data.subscription_name || 'Limupy';
  const used = formatBytes(s.used_bytes);
  const total = s.total_bytes == null ? 'без лимита' : formatBytes(s.total_bytes);
  const expires = formatExpiry(s.expire);
  copy.textContent = 'Трафик: ' + used + ' / ' + total + ' · Подписка до: ' + expires;
  result.hidden = false;
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

// Account credentials and session are kept in memory only.
const registerTab=document.getElementById('registerTab');
const loginTab=document.getElementById('loginTab');
const registerPanel=document.getElementById('registerPanel');
const loginPanel=document.getElementById('loginPanel');
const loginIdentity=document.getElementById('loginIdentity');
const loginPassword=document.getElementById('loginPassword');
const authMessage=document.getElementById('authMessage');
const authCard=document.querySelector('.auth-card');
const freeButton=document.getElementById('freeSubscriptionButton');
let sessionToken=null;

function setAuthTab(tab){
  const registering=tab==='register';
  registerPanel.hidden=!registering;
  loginPanel.hidden=registering;
  registerTab.classList.toggle('active',registering);
  loginTab.classList.toggle('active',!registering);
  registerTab.setAttribute('aria-selected',String(registering));
  loginTab.setAttribute('aria-selected',String(!registering));
  authMessage.textContent='';
  authMessage.className='auth-message';
}
registerTab.addEventListener('click',()=>setAuthTab('register'));
loginTab.addEventListener('click',()=>setAuthTab('login'));

function showAuthMessage(message,type='info'){
  authMessage.textContent=message;
  authMessage.className='auth-message '+type;
}
async function apiAction(action,payload={},token=null){
  const body={action,device_id:'web-'+browserDeviceId,...payload};
  let lastError=null;
  for(const url of API_URLS){
    const controller=new AbortController();
    const timeout=window.setTimeout(()=>controller.abort(),7000);
    try{
      const headers={'Content-Type':'application/json'};
      if(token)headers.Authorization='Bearer '+token;
      const response=await fetch(url,{method:'POST',mode:'cors',cache:'no-store',credentials:'omit',headers,body:JSON.stringify(body),signal:controller.signal});
      let data={};try{data=await response.json()}catch(_){}
      if(response.status>=500){lastError=new Error('HTTP '+response.status);continue;}
      if(!response.ok||data.ok!==true)throw new Error(data.error||('HTTP '+response.status));
      return data;
    }catch(error){lastError=error;if(error&&error.message&&!['Failed to fetch','Load failed'].includes(error.message))throw error;}
    finally{window.clearTimeout(timeout);}
  }
  throw lastError||new Error('API unavailable');
}
function validCredentials(username,password){
  if(!/^[A-Za-z0-9._-]{3,32}$/.test(username)){
    showAuthMessage(T[root.lang].authBadLogin,'error');return false;
  }
  if(password.length<8||password.length>128){
    showAuthMessage(T[root.lang].authPassword,'error');return false;
  }
  return true;
}
function applySession(data){
  sessionToken=data.session_token||data.access_token||data.token||null;
  if(!sessionToken)throw new Error('API did not return a session token');
  freeButton.disabled=false;
  if(data.proxy_url){monitorData=data;renderFoundation(data);}
}
registerPanel.addEventListener('submit',async event=>{
  event.preventDefault();
  const username=document.getElementById('registerUsername').value.trim();
  const password=document.getElementById('registerPassword').value;
  const confirmation=document.getElementById('registerConfirm').value;
  if(!validCredentials(username,password))return;
  if(password!==confirmation)return showAuthMessage(T[root.lang].authMismatch,'error');
  const submit=registerPanel.querySelector('button[type="submit"]');
  submit.disabled=true;const label=submit.textContent;submit.textContent=T[root.lang].monitorLoading;
  try{
    const data=await apiAction('register',{username,password});
    applySession(data);
    registerPanel.reset();
    showAuthMessage(T[root.lang].registerSuccess,'info');
  }catch(error){
    showAuthMessage(error.message==='Unsupported action'?T[root.lang].authServerUnavailable:(T[root.lang].authServerUnavailable+' ('+error.message+')'),'error');
  }finally{submit.disabled=false;submit.textContent=label;}
});
loginPanel.addEventListener('submit',async event=>{
  event.preventDefault();
  const username=loginIdentity.value.trim();
  const password=loginPassword.value;
  if(!validCredentials(username,password))return;
  const submit=loginPanel.querySelector('button[type="submit"]');
  submit.disabled=true;const label=submit.textContent;submit.textContent=T[root.lang].monitorLoading;
  try{
    const data=await apiAction('login',{username,password});
    applySession(data);
    loginPanel.reset();
    showAuthMessage(T[root.lang].loginSuccess,'info');
  }catch(error){
    showAuthMessage(error.message==='Unsupported action'?T[root.lang].authServerUnavailable:(T[root.lang].authServerUnavailable+' ('+error.message+')'),'error');
  }finally{submit.disabled=false;submit.textContent=label;}
});
freeButton.addEventListener('click',async()=>{
  if(!sessionToken){
    showAuthMessage(T[root.lang].freeNeedLogin,'error');
    document.getElementById('account').scrollIntoView({behavior:'smooth',block:'center'});
    return;
  }
  freeButton.disabled=true;
  const label=freeButton.textContent;
  freeButton.textContent=T[root.lang].freeLoading;
  try{
    const data=await apiAction('free_subscription',{},sessionToken);
    monitorData=data;renderFoundation(data);
    showAuthMessage('Бесплатная подписка создана. VPN-ссылка готова.','info');
  }catch(error){
    showAuthMessage(error.message==='Unsupported action'?T[root.lang].freeUnavailable:(T[root.lang].freeUnavailable+' ('+error.message+')'),'error');
  }finally{freeButton.disabled=false;freeButton.textContent=label;}
});
if (copyButton) copyButton.disabled=true;
if (openButton) openButton.disabled=true;
if (freeButton) freeButton.disabled=true;
