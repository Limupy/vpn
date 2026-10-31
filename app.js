'use strict';

(() => {
  const translations = {
    ru: {
      heroSubtitle:'Ещё один VPN среди множества других решений для доступа к интернету.',
      statusLabel:'ВАЖНО',statusTitle:'VPN временно недоступен',
      statusDescription:'Ввиду новых сетевых ограничений в РФ подключение к VPN временно не работает. Мы работаем над восстановлением доступа.',
      freeLabel:'FREE VPN',freeTitle:'Бесплатная подписка',
      freeDescription:'Получите бесплатную тестовую подписку без ограничения трафика. Вход и регистрация не требуются.',
      freeAction:'Получить подписку',
      freeLoading:'Создаём подписку…',freeRateLimit:'Слишком много запросов. Подожди минуту и попробуй снова.',freeApiError:'Ошибка API подписки: {error}',freeBackendUnavailable:'Серверная выдача бесплатной подписки ещё не включена. Подписка не была создана.',
      cardAuth:'Вход / Регистрация',cardTemplate:'Моя подписка',registerTab:'Регистрация',loginTab:'Войти',
      usernameLabel:'Логин',usernamePlaceholder:'Придумай логин',loginUsernamePlaceholder:'Твой логин',
      passwordLabel:'Пароль',passwordPlaceholder:'Не менее 8 символов',loginPasswordPlaceholder:'Твой пароль',
      confirmLabel:'Повтори пароль',confirmPlaceholder:'Повтори пароль',
      createAccount:'Создать аккаунт',signIn:'Войти в аккаунт',
      copyVpn:'Копировать VPN-ссылку',openHapp:'Открыть в Happ',
      authBadLogin:'Логин должен содержать 3–32 символа: латинские буквы, цифры, точку, дефис или подчёркивание.',
      authBadPassword:'Пароль должен содержать от 8 до 128 символов.',
      authMismatch:'Пароли не совпадают.',
      authBackendUnavailable:'Серверная регистрация и вход по паролю ещё не включены. Пароль не сохранён, аккаунт не создан.',
      authRequestFailed:'Не удалось выполнить запрос. Проверьте подключение к серверу.',
      registerSuccess:'Аккаунт создан. Теперь можно получить бесплатную подписку.',
      loginSuccess:'Вход выполнен.',accountTitle:'Подписка Limu',
      statUsed:'Использовано',statLimit:'Лимит трафика',statExpires:'Действует до',
      unlimited:'без лимита',noExpiry:'без ограничения по сроку',
      copySuccess:'VPN-ссылка скопирована.',copyError:'Не удалось скопировать VPN-ссылку.',
      noVpnLink:'Сначала получите подписку.',serverOnline:'Сервер доступен',
      serverOffline:'Нет связи с сервером',serverChecking:'Проверяем связь с сервером…'
    },
    en: {
      heroSubtitle:'Another VPN among countless other solutions for accessing the internet.',
      statusLabel:'IMPORTANT',statusTitle:'VPN temporarily unavailable',
      statusDescription:'Due to new network restrictions in Russia, VPN access is temporarily unavailable. We are working to restore access.',
      freeLabel:'FREE VPN',freeTitle:'Free subscription',
      freeDescription:'Get a free test subscription with unlimited traffic. No sign-in or registration required.',
      freeAction:'Get subscription',
      freeLoading:'Creating subscription…',freeRateLimit:'Too many requests. Wait one minute and try again.',freeApiError:'Subscription API error: {error}',
      freeBackendUnavailable:'Server-side free subscription issuance is not enabled yet. No subscription was created.',
      cardAuth:'Sign in / Register',cardTemplate:'My subscription',registerTab:'Register',loginTab:'Sign in',
      usernameLabel:'Username',usernamePlaceholder:'Choose a username',loginUsernamePlaceholder:'Your username',
      passwordLabel:'Password',passwordPlaceholder:'At least 8 characters',loginPasswordPlaceholder:'Your password',
      confirmLabel:'Confirm password',confirmPlaceholder:'Enter password again',
      createAccount:'Create account',signIn:'Sign in',
      copyVpn:'Copy VPN link',openHapp:'Open in Happ',
      authBadLogin:'Username must be 3–32 characters: letters, numbers, dot, dash, or underscore.',
      authBadPassword:'Password must be 8–128 characters.',
      authMismatch:'Passwords do not match.',
      authBackendUnavailable:'Server-side registration and password sign-in are not enabled yet. The password was not saved and no account was created.',
      authRequestFailed:'The request failed. Check the server connection.',
      registerSuccess:'Account created. You can now request a free subscription.',
      loginSuccess:'Signed in.',accountTitle:'Limu subscription',
      statUsed:'Used',statLimit:'Traffic limit',statExpires:'Expires',
      unlimited:'unlimited',noExpiry:'no expiry limit',
      copySuccess:'VPN link copied.',copyError:'Could not copy the VPN link.',
      noVpnLink:'Get a subscription first.',serverOnline:'Server reachable',
      serverOffline:'Server unreachable',serverChecking:'Checking server connection…'
    }
  };

  const root = document.documentElement;
  const apiUrl = 'https://limupy.tail8f792b.ts.net/api.php';
  const deviceId = (() => {
    const create = () => 'web-' + (crypto.randomUUID ? crypto.randomUUID() : Math.random().toString(36).slice(2) + Date.now().toString(36));
    try {
      const key = 'limupy_device_id';
      let value = sessionStorage.getItem(key);
      if (!value || !/^web-[A-Za-z0-9-]{8,128}$/.test(value)) {
        value = create();
        sessionStorage.setItem(key, value);
      }
      return value;
    } catch (_) {
      return create();
    }
  })();
  let language = 'ru';
  let sessionToken = null;
  let subscriptionData = null;
  let apiState = 'checking';

  const authMessage = document.getElementById('authMessage');
  const registerTab = document.getElementById('registerTab');
  const loginTab = document.getElementById('loginTab');
  const registerPanel = document.getElementById('registerPanel');
  const loginPanel = document.getElementById('loginPanel');
  const freeButton = document.getElementById('freeSubscriptionButton');
  const copyButton = document.getElementById('designCopyLink');
  const openButton = document.getElementById('designOpenHapp');
  const themeIcon = document.querySelector('#themeIcon use');

  const t = key => translations[language][key] || key;

  function setLanguage(nextLanguage) {
    language = nextLanguage === 'en' ? 'en' : 'ru';
    root.lang = language;
    document.querySelectorAll('[data-i18n]').forEach(element => {
      element.textContent = t(element.dataset.i18n);
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
      element.placeholder = t(element.dataset.i18nPlaceholder);
    });
    document.querySelectorAll('.lang-btn').forEach(button => {
      const active = button.dataset.lang === language;
      button.classList.toggle('active', active);
      button.setAttribute('aria-pressed', String(active));
    });
    if (subscriptionData) renderAccountResult(subscriptionData);
    updateServerStatus();
  }

  document.querySelectorAll('.lang-btn').forEach(button => {
    button.addEventListener('click', () => setLanguage(button.dataset.lang));
  });

  function setTheme(theme) {
    root.dataset.theme = theme === 'light' ? 'light' : 'dark';
    themeIcon.setAttribute('href', theme === 'dark' ? '#i-sun' : '#i-moon');
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.content = theme === 'dark' ? '#05060a' : '#eef2f5';
  }

  document.getElementById('themeToggle').addEventListener('click', () => {
    setTheme(root.dataset.theme === 'dark' ? 'light' : 'dark');
  });

  function showToast(message) {
    const host = document.getElementById('toastHost');
    const element = document.createElement('div');
    element.className = 'toast';
    const icon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    icon.setAttribute('class', 'icon sm');
    icon.innerHTML = '<use href="#i-check"></use>';
    const textNode = document.createElement('span');
    textNode.textContent = message;
    element.append(icon, textNode);
    host.append(element);
    window.setTimeout(() => {
      element.style.opacity = '0';
      element.style.transform = 'translateY(-8px)';
      window.setTimeout(() => element.remove(), 220);
    }, 2400);
  }

  async function copyText(value) {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(value);
      } else {
        const area = document.createElement('textarea');
        area.value = value;
        area.style.position = 'fixed';
        area.style.opacity = '0';
        document.body.append(area);
        area.select();
        const copied = document.execCommand('copy');
        area.remove();
        if (!copied) throw new Error('copy failed');
      }
      return true;
    } catch (_) {
      return false;
    }
  }

  function setAuthMessage(message, type) {
    authMessage.textContent = message || '';
    authMessage.className = message ? 'auth-message ' + (type || 'info') : 'auth-message';
  }

  function setAuthTab(tab) {
    const registering = tab === 'register';
    registerPanel.hidden = !registering;
    loginPanel.hidden = registering;
    registerTab.classList.toggle('active', registering);
    loginTab.classList.toggle('active', !registering);
    registerTab.setAttribute('aria-selected', String(registering));
    loginTab.setAttribute('aria-selected', String(!registering));
    setAuthMessage('', '');
  }

  registerTab.addEventListener('click', () => setAuthTab('register'));
  loginTab.addEventListener('click', () => setAuthTab('login'));

  function validCredentials(username, password) {
    if (!/^[A-Za-z0-9._-]{3,32}$/.test(username)) {
      setAuthMessage(t('authBadLogin'), 'error');
      return false;
    }
    if (password.length < 8 || password.length > 128) {
      setAuthMessage(t('authBadPassword'), 'error');
      return false;
    }
    return true;
  }

  async function apiAction(action, payload, token) {
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 20000);
    const headers = {'Content-Type':'application/json'};
    if (token) headers.Authorization = 'Bearer ' + token;
    try {
      const response = await fetch(apiUrl, {
        method:'POST',
        mode:'cors',
        cache:'no-store',
        credentials:'omit',
        headers,
        body:JSON.stringify({action,device_id:deviceId,...(payload || {})}),
        signal:controller.signal
      });
      let data = {};
      try { data = await response.json(); } catch (_) {}
      if (!response.ok || data.ok !== true) {
        const error = new Error(data.error || ('HTTP ' + response.status));
        error.status = response.status;
        throw error;
      }
      return data;
    } finally {
      window.clearTimeout(timeout);
    }
  }

  function apiErrorMessage(error, action) {
    if (error && error.message === 'Unsupported action') {
      return action === 'free_subscription' ? t('freeBackendUnavailable') : t('authBackendUnavailable');
    }
    if (action === 'free_subscription' && error && error.status === 429) {
      return t('freeRateLimit');
    }
    if (action === 'free_subscription' && error && error.status && error.message) {
      return t('freeApiError').replace('{error}', String(error.message));
    }
    return t('authRequestFailed');
  }

  function formatBytes(value) {
    if (value == null || !Number.isFinite(Number(value))) return '—';
    const units = ['B','KB','MB','GB','TB'];
    let amount = Math.max(0, Number(value));
    let index = 0;
    while (amount >= 1024 && index < units.length - 1) {
      amount /= 1024;
      index++;
    }
    return amount.toLocaleString(language === 'ru' ? 'ru-RU' : 'en-US', {maximumFractionDigits:1}) + ' ' + units[index];
  }

  function formatExpiry(value) {
    const timestamp = Number(value);
    if (!timestamp) return t('noExpiry');
    const date = new Date(timestamp * 1000);
    return Number.isFinite(date.getTime())
      ? date.toLocaleDateString(language === 'ru' ? 'ru-RU' : 'en-US', {year:'numeric',month:'short',day:'numeric'})
      : t('noExpiry');
  }

  function renderAccountResult(data) {
    subscriptionData = data;
    const subscription = data.subscription || {};
    const used = formatBytes(subscription.used_bytes);
    const total = subscription.total_bytes == null || Number(subscription.total_bytes) <= 0 ? t('unlimited') : formatBytes(subscription.total_bytes);
    const expires = formatExpiry(subscription.expire);
    document.getElementById('accountResultTitle').textContent = data.subscription_name || t('accountTitle');
    const stats = document.getElementById('accountResultText');
    stats.replaceChildren();
    [
      [t('statUsed'), used],
      [t('statLimit'), total],
      [t('statExpires'), expires]
    ].forEach(([label, value]) => {
      const item = document.createElement('div');
      item.className = 'subscription-stat';
      const caption = document.createElement('span');
      caption.className = 'subscription-stat-label';
      caption.textContent = label;
      const amount = document.createElement('strong');
      amount.className = 'subscription-stat-value';
      amount.textContent = value;
      item.append(caption, amount);
      stats.append(item);
    });
    document.getElementById('accountResult').hidden = false;
    copyButton.disabled = !data.proxy_url;
    openButton.disabled = !data.happ_url;
  }

  function applySession(data) {
    const token = data.session_token || data.access_token || data.token;
    if (!token) throw new Error('Missing session token');
    sessionToken = token;
    if (data.proxy_url) renderAccountResult(data);
  }

  registerPanel.addEventListener('submit', async event => {
    event.preventDefault();
    const username = document.getElementById('registerUsername').value.trim();
    const password = document.getElementById('registerPassword').value;
    const confirmation = document.getElementById('registerConfirm').value;
    if (!validCredentials(username, password)) return;
    if (password !== confirmation) {
      setAuthMessage(t('authMismatch'), 'error');
      return;
    }
    const submit = registerPanel.querySelector('button[type="submit"]');
    const previousLabel = submit.textContent;
    submit.disabled = true;
    submit.textContent = t('freeLoading');
    try {
      const data = await apiAction('register', {username,password}, null);
      applySession(data);
      registerPanel.reset();
      setAuthMessage(t('registerSuccess'), 'info');
    } catch (error) {
      setAuthMessage(apiErrorMessage(error, 'register'), 'error');
    } finally {
      submit.disabled = false;
      submit.textContent = previousLabel;
    }
  });

  loginPanel.addEventListener('submit', async event => {
    event.preventDefault();
    const username = document.getElementById('loginIdentity').value.trim();
    const password = document.getElementById('loginPassword').value;
    if (!validCredentials(username, password)) return;
    const submit = loginPanel.querySelector('button[type="submit"]');
    const previousLabel = submit.textContent;
    submit.disabled = true;
    submit.textContent = t('freeLoading');
    try {
      const data = await apiAction('login', {username,password}, null);
      applySession(data);
      loginPanel.reset();
      setAuthMessage(t('loginSuccess'), 'info');
    } catch (error) {
      setAuthMessage(apiErrorMessage(error, 'login'), 'error');
    } finally {
      submit.disabled = false;
      submit.textContent = previousLabel;
    }
  });

  freeButton.addEventListener('click', async () => {
    const previousLabel = freeButton.textContent;
    freeButton.disabled = true;
    freeButton.textContent = t('freeLoading');
    try {
      const data = await apiAction('free_subscription', {}, null);
      renderAccountResult(data);
      document.getElementById('mySubscription').scrollIntoView({behavior:'smooth',block:'center'});
    } catch (error) {
      showToast(apiErrorMessage(error, 'free_subscription'));
    } finally {
      freeButton.disabled = false;
      freeButton.textContent = previousLabel;
    }
  });

  copyButton.addEventListener('click', async () => {
    if (!subscriptionData || !subscriptionData.proxy_url) {
      showToast(t('noVpnLink'));
      return;
    }
    if (await copyText(subscriptionData.proxy_url)) {
      showToast(t('copySuccess'));
    } else {
      showToast(t('copyError'));
    }
  });

  openButton.addEventListener('click', () => {
    if (!subscriptionData || !subscriptionData.happ_url) {
      showToast(t('noVpnLink'));
      return;
    }
    window.location.href = subscriptionData.happ_url;
  });

  function updateServerStatus() {
    const label = document.getElementById('serverStatusLabel');
    if (!label) return;
    label.textContent = apiState === 'online' ? t('serverOnline') : apiState === 'offline' ? t('serverOffline') : t('serverChecking');
  }

  async function checkApiConnection() {
    if (document.hidden) return;
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 4000);
    try {
      const response = await fetch(apiUrl, {
        method:'OPTIONS',
        mode:'cors',
        cache:'no-store',
        credentials:'omit',
        signal:controller.signal
      });
      apiState = response.status === 204 ? 'online' : 'offline';
    } catch (_) {
      apiState = 'offline';
    } finally {
      window.clearTimeout(timeout);
      updateServerStatus();
    }
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        observer.unobserve(entry.target);
      }
    });
  }, {threshold:.08});
  document.querySelectorAll('[data-reveal]').forEach(element => observer.observe(element));

  const balls = [
    {x:20,y:30,vx:(Math.random()-.5)*.2,vy:(Math.random()-.5)*.2},
    {x:80,y:90,vx:(Math.random()-.5)*.2,vy:(Math.random()-.5)*.2}
  ];
  const nodes = Array.from(document.querySelectorAll('.gradient-ball'));
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (nodes.length === 2 && !reduceMotion.matches) {
    let frame = 0;
    const tick = () => {
      const dx = balls[0].x - balls[1].x;
      const dy = balls[0].y - balls[1].y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      if (distance < 20) {
        const force = (20 - distance) * .001;
        balls[0].vx += dx * force;
        balls[0].vy += dy * force;
        balls[1].vx -= dx * force;
        balls[1].vy -= dy * force;
      }
      balls.forEach((ball, index) => {
        ball.vx += (Math.random()-.5) * .008;
        ball.vy += (Math.random()-.5) * .008;
        const velocity = Math.sqrt(ball.vx * ball.vx + ball.vy * ball.vy);
        if (velocity > .2) {
          ball.vx = ball.vx / velocity * .2;
          ball.vy = ball.vy / velocity * .2;
        }
        ball.x += ball.vx;
        ball.y += ball.vy;
        if (ball.x < 5 || ball.x > 95) ball.vx *= -1;
        if (ball.y < 5 || ball.y > 95) ball.vy *= -1;
        ball.x = Math.min(95, Math.max(5, ball.x));
        ball.y = Math.min(95, Math.max(5, ball.y));
        nodes[index].style.transform = 'translate(calc(' + ball.x + 'vw - 50%), calc(' + ball.y + 'vh - 50%))';
      });
      frame = window.requestAnimationFrame(tick);
    };
    frame = window.requestAnimationFrame(tick);
    window.addEventListener('pagehide', () => window.cancelAnimationFrame(frame), {once:true});
  }

  setTheme('dark');
  setLanguage('ru');
  checkApiConnection();
  window.setInterval(checkApiConnection, 30000);
  document.addEventListener('visibilitychange', () => {
    if (!document.hidden) checkApiConnection();
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') setAuthTab('login');
  });
})();