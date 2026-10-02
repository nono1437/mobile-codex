'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { JSDOM } = require('jsdom');

const localeScript = fs.readFileSync(
  path.join(__dirname, '..', 'app', 'src', 'main', 'assets', 'web', 'locale.js'),
  'utf8'
);
const zhApkWorkflow = fs.readFileSync(
  path.join(__dirname, '..', '.github', 'workflows', 'zh-cn-apk.yml'),
  'utf8'
);

function setup(systemLanguage = 'zh-CN') {
  const dom = new JSDOM(`<!doctype html><html><body>
    <select id="language">
      <option value="system">기기 설정 따르기</option>
      <option value="en">English</option>
      <option value="ko">한국어</option>
    </select>
    <strong id="settings-label">설정</strong>
    <div id="user-content">用户自己的内容</div>
  </body></html>`, {
    url: 'https://appassets.androidplatform.net/index.html',
    runScripts: 'dangerously'
  });
  const { window } = dom;
  window.MobileCodexEnglish = {
    '기기 설정 따르기': 'Follow device language',
    '설정': 'Settings'
  };
  window.Native = {
    locale: () => JSON.stringify({ choice: 'system', systemLanguage })
  };
  window.eval(localeScript);
  return window;
}

test('Simplified Chinese device locale selects zh-CN and translates core UI', () => {
  const window = setup('zh-CN');
  assert.equal(window.MobileCodexLocale.language(), 'zh-CN');
  assert.equal(window.document.documentElement.lang, 'zh-CN');
  assert.equal(window.document.getElementById('settings-label').textContent, '设置');
  const option = window.document.querySelector('#language option[value="zh-CN"]');
  assert.ok(option);
  assert.equal(option.textContent, '简体中文');
});

test('language switching preserves user content and supports English round-trip', () => {
  const window = setup('zh-Hans-CN');
  const label = window.document.getElementById('settings-label');
  const user = window.document.getElementById('user-content');
  assert.equal(label.textContent, '设置');
  assert.equal(user.textContent, '用户自己的内容');

  window.MobileCodexLocale.set('en');
  assert.equal(window.MobileCodexLocale.language(), 'en');
  assert.equal(label.textContent, 'Settings');
  assert.equal(user.textContent, '用户自己的内容');

  window.MobileCodexLocale.set('zh-CN');
  assert.equal(label.textContent, '设置');
  assert.equal(user.textContent, '用户自己的内容');
});

test('Traditional Chinese device locale falls back to English in this first pass', () => {
  const window = setup('zh-TW');
  assert.equal(window.MobileCodexLocale.language(), 'en');
  assert.equal(window.document.getElementById('settings-label').textContent, 'Settings');
});

test('zh-CN test APK refreshes the rolling Termux lock before preparing devtools', () => {
  const commands = zhApkWorkflow.split('\n').map((line) => line.trim());
  const refresh = commands.indexOf('python3 tools/prepare_devtools.py --write-lock');
  const prepare = commands.indexOf('python3 tools/prepare_devtools.py');
  assert.notEqual(refresh, -1, 'workflow must refresh the Termux package lock');
  assert.notEqual(prepare, -1, 'workflow must prepare the devtools runtime');
  assert.ok(refresh < prepare, 'lock refresh must happen before devtools preparation');
});
