/* Only labels captured from the packaged HTML and explicit t() calls are translated. */
(() => {
  'use strict';
  const catalog = window.MobileCodexEnglish || {};
  const chinese = {
    '설정':'设置','일반':'常规','개인 맞춤 지침':'个性化指令','계정':'账户','도구':'工具','고급':'高级','업데이트':'更新',
    '언어':'语言','기기 설정 따르기':'跟随设备语言','앱 화면의 언어를 선택합니다. 대화 내용과 파일은 바뀌지 않습니다.':'选择应用界面语言。聊天内容和文件不会更改。',
    '테마':'主题','시스템':'跟随系统','라이트':'浅色','다크':'深色','글자 크기':'文字大小','폰과 태블릿의 Codex·Chat 화면에 함께 적용됩니다.':'同时应用于手机和平板上的 Codex 与 Chat 界面。','기본 · 100%':'默认 · 100%',
    '대화 아이콘':'对话图标','답변과 작업 상태에 캐릭터 아이콘을 표시합니다.':'在回复和任务状态中显示角色图标。',
    '어떤 작업을 할까요?':'想做点什么？','아이디어부터 코드, 기기의 파일까지. Codex와 함께 작업하세요.':'从想法、代码到设备上的文件，都可以和 Codex 一起处理。',
    'ChatGPT 계정 연결':'连接 ChatGPT 账户','사용 중인 계정으로 시작하세요':'使用现有账户开始','작업 폴더 선택':'选择工作文件夹','프로젝트 폴더를 연결하세요':'连接一个项目文件夹',
    'Codex에게 물어보기':'询问 Codex','새 대화':'新建对话','프로젝트':'项目','일반 대화':'常规对话','대화를 시작하면 여기에 표시됩니다.':'开始对话后会显示在这里。',
    '파일':'文件','폴더 선택':'选择文件夹','폴더 살펴보기':'查看文件夹','프로젝트 이해하기':'了解项目','변경 사항 검토':'审查更改','작업 중':'正在处理','최신 메시지':'最新消息',
    '음성 입력':'语音输入','녹음 시간':'录音时间','마이크 입력 크기':'麦克风输入音量','기기의 음성 인식 서비스를 사용합니다. 확인한 뒤 보내세요.':'使用设备的语音识别服务。确认后再发送。',
    '취소':'取消','완료':'完成','첨부와 대화 컨텍스트':'附件与对话上下文','자동 완성':'自动完成','첨부 및 Pro 자문':'附件与 Pro 咨询','파일 첨부':'附加文件','Pro에게 물어보기':'询问 Pro',
    'Fast 모드':'Fast 模式','승인 방식':'审批方式','승인 받기':'每次询问','자동 검토':'自动审查','모두 허용':'全部允许','음성으로 초안 입력':'使用语音输入草稿','음성 입력 · 확인 후 보내기':'语音输入 · 确认后发送',
    '보내기':'发送','작업 중지':'停止任务','상위 폴더':'上一级文件夹','새 파일':'新建文件','새 폴더':'新建文件夹','파일 탐색 닫기':'关闭文件浏览器','파일 이름 검색':'搜索文件名','작업 폴더':'工作文件夹',
    '대화 설정':'对话设置','모델 및 작업 방식':'模型与工作方式','모델과 추론 강도는 이 대화의 초안에 저장됩니다. 작업 권한은 앱 전체에 적용됩니다.':'模型和推理强度会随此对话草稿保存；工作权限适用于整个应用。',
    '모델':'模型','기본 모델':'默认模型','기본 모델을 사용합니다.':'使用默认模型。','추론 강도':'推理强度','기본':'默认','지원되는 경우에만 선택할 수 있습니다.':'仅在模型支持时可选择。',
    '작업 권한':'工作权限','읽기 전용':'只读','파일을 살펴보고 제안합니다.':'查看文件并提供建议。','프로젝트 쓰기':'项目写入权限','선택한 폴더 안에서 파일을 바꿀 수 있습니다.':'允许修改所选文件夹内的文件。',
    '전체 접근':'完全访问','앱에 허용된 기기 파일과 명령을 사용합니다.':'可使用 Android 已授权给此应用的设备文件和命令。','파일 관리':'文件管理','대화 관리':'对话管理','프로젝트 관리':'项目管理','프로젝트 연결':'项目连接',
    '터미널':'终端','플러그인 · 스킬 · MCP':'插件 · 技能 · MCP','변경 사항':'更改','복구 사본':'恢复副本','닫기':'关闭','아래로 끌거나 눌러서 닫기':'下拉或点击关闭',
    '아래 코드를 복사한 뒤 브라우저에서 로그인하세요.':'复制下方代码，然后在浏览器中登录。','로그인 코드 복사':'复制登录代码','연결 준비 중':'正在准备连接','브라우저에서 로그인':'在浏览器中登录','로그인이 완료되면 이 화면으로 돌아오세요.':'登录完成后返回此页面。',
    '설정 분류':'设置分类','계정과 사용 한도':'账户与使用限额','실행 상태':'运行状态','연결 종료':'未连接','확인 중':'正在检查','등록된 계정':'已添加的账户','계정 추가':'添加账户','사용 한도':'使用限额','로그인 후 사용 한도를 조회할 수 있습니다.':'登录后可查看使用限额。',
    '다시 불러오기':'重新加载','저장':'保存','스킬':'技能','파일 및 앱':'文件与应用','스킬 가져오기':'导入技能','폴더 열기':'打开文件夹','연결된 앱':'已连接的应用','오류가 발생했습니다.':'发生错误。','추가 지시':'追加指令','메시지 보내기':'发送消息'
  };

  let native = {};
  try { native = JSON.parse(window.Native?.locale?.() || '{}'); } catch {}
  let choice = native.choice || localStorage.getItem('language') || 'system';
  const deviceLanguage = native.systemLanguage || navigator.language || 'en';

  const normalize = value => {
    const language = String(value || 'en').toLowerCase().replaceAll('_','-');
    if (language.startsWith('ko')) return 'ko';
    if (language === 'zh-cn' || language === 'zh-sg' || language.startsWith('zh-hans')) return 'zh-CN';
    return 'en';
  };
  const language = () => normalize(choice === 'system' ? deviceLanguage : choice);
  const t = (key, args = {}) => {
    const active = language();
    const value = active === 'ko'
      ? key
      : active === 'zh-CN'
        ? (chinese[key] ?? catalog[key] ?? key)
        : (catalog[key] ?? key);
    return value.replace(/\{([a-zA-Z]+)\}/g, (token, name) => Object.hasOwn(args, name) ? String(args[name]) : token);
  };

  // The packaged HTML predates Simplified Chinese. Add the option without touching user/model content.
  const languageSelect = document.getElementById('language');
  if (languageSelect && !languageSelect.querySelector('option[value="zh-CN"]')) {
    const option = document.createElement('option');
    option.value = 'zh-CN';
    option.textContent = '简体中文';
    languageSelect.appendChild(option);
  }

  const bindings = [];
  const walk = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  while (walk.nextNode()) {
    const node = walk.currentNode, raw = node.textContent, key = raw.trim();
    if (!catalog[key]) continue;
    bindings.push({node, key, raw, last:raw});
  }
  for (const node of document.querySelectorAll('*')) {
    for (const attribute of ['aria-label', 'title', 'placeholder', 'data-prompt']) {
      const key = node.getAttribute(attribute);
      if (catalog[key]) bindings.push({node, key, attribute, last:key});
    }
  }
  function apply() {
    document.documentElement.lang = language() === 'zh-CN' ? 'zh-CN' : language();
    for (const b of bindings) {
      if (!b.node.isConnected) continue;
      const current = b.attribute ? b.node.getAttribute(b.attribute) : b.node.textContent;
      // A dynamic label has taken ownership. Never overwrite its data with static text.
      if (current !== b.last) continue;
      const value = b.attribute ? t(b.key) : b.raw.replace(b.key, t(b.key));
      if (b.attribute) b.node.setAttribute(b.attribute, value); else b.node.textContent = value;
      b.last = value;
    }
  }
  window.MobileCodexLocale = {t, language, choice:() => choice, apply,
    set(value) {
      choice = ['system','en','ko','zh-CN'].includes(value) ? value : 'system';
      localStorage.setItem('language', choice);
      apply();
    }};
  apply();
})();
