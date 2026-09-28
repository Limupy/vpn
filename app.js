'use strict';

const API_URL = 'https://78.17.112.158/api.php';

function base64Url(bytes) {
  let binary = '';
  for (const b of bytes) binary += String.fromCharCode(b);
  return btoa(binary).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/g, '');
}

function makeDeviceId() {
  const bytes = new Uint8Array(32);
  crypto.getRandomValues(bytes);
  return base64Url(bytes);
}

function getDeviceId() {
  const key = 'limupy_device_id_v2';
  let value = localStorage.getItem(key);
  if (!value || !/^[A-Za-z0-9._~-]{43}$/.test(value)) {
    value = makeDeviceId();
    localStorage.setItem(key, value);
  }
  return value;
}

function readToken() {
  const params = new URLSearchParams(location.hash.replace(/^#/, ''));
  return (params.get('key') || '').trim();
}

async function collect() {
  const token = readToken();
  if (!token) {
    throw new Error('Ключ подписки не найден');
  }

  const response = await fetch(API_URL, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-store',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache',
    },
    body: JSON.stringify({ device_id: getDeviceId() }),
  });

  let payload = null;
  try {
    payload = await response.json();
  } catch (_) {
    payload = null;
  }

  if (!response.ok || !payload?.ok) {
    throw new Error(payload?.error || `HTTP ${response.status}`);
  }

  return payload;
}

window.Limupy = {
  collect,
  openHapp(payload) {
    if (!payload?.launch_url) {
      throw new Error('launch_url отсутствует');
    }
    window.location.href = payload.launch_url;
  },
};
