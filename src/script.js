(function(){
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ----- i18n translation ----- */
  var i18n = {
    zh: {
      nav_brand: 'Octopus',
      nav_capture: '超级入口', nav_smart: '个性化', nav_sync: '多端协同', nav_privacy: '本地存储',
      nav_contact: '联系我们', nav_download: '立即下载', nav_menu: '菜单',
      hero_title_a: '让信息', hero_title_b: '跟上你',
      hero_lead: '微信、飞书、邮件、语音、截图、文档，随手丢进去<br>Octopus 替你<strong>记好、连好、找好</strong>',
      hero_tagline: '跨设备 · 越用越准 · 隐私敢记', hero_cta_primary: '立即下载', hero_cta_secondary: '快速接入指南',
      spec_1_suffix: '+', spec_1_lbl: '服务来源', spec_2_suffix: ' 端同步', spec_2_lbl: '手机、电脑、网页',
      spec_3_num: '本地', spec_3_lbl: '数据优先保留在本地', spec_4_num: '开箱即用', spec_4_lbl: '零注册门槛，越用越懂你',
      pain_title_a: '想法来时无处可去', pain_title_b: '需要时又无处可寻', pain_lead: '每次查找都需要翻遍不同应用？记录、整理、找回，现在它们是一件事',
      f1_eyebrow: 'AI时代的超级入口', f1_title: '抬手就能说，抬手就能记',
      f1_lead: '不限格式，不用切换。微信里敲定的方案、随手拍的白板、一段语音、一份文档，丢进来，Octopus 都能收',
      f1_list_1: '<b>多通道接入</b>　微信 / 飞书 / 邮件 / 网页 / 语音 / 本地文档',
      f1_list_2: '<b>自动处理</b>　语音转文字、图片识字、文档整理、长文解析',
      f1_list_3: '<b>个性化整理</b>　丢进去,剩下的交给它', f1_alt: '汇入界面预览',
      f2_eyebrow: '个性化', f2_title: '越用越懂你',
      f2_lead: '不依赖关键词检索，直接映射信息间的关联：持续学习你的行为模式与表达习惯，在你需要时，随时推荐',
      f2_list_1: '<b>关联记忆</b>　新记录自动牵出相关笔记', f2_list_2: '<b>理解偏好</b>　表达、关注重点持续沉淀',
      f2_list_3: '<b>主动递送</b>　在你需要前，把材料准备好',
      f2_graph_main: '新的会议记录', f2_graph_title_1: '项目 A 排期', f2_graph_sub_1: '3 天前',
      f2_graph_title_2: '和 老师 的沟通', f2_graph_sub_2: '上周',
      f2_graph_title_3: '方案 v2 草稿', f2_graph_sub_3: '2 周前',
      f3_eyebrow: '多端协同', f3_title: '手机命令，电脑执行',
      f3_lead: '从手机到电脑，从路上到桌前，不挑屏幕，不分设备，动动手指，电脑替你干活。手机记的，电脑无缝继续用',
      f3_list_1: '<b>三端共用上下文</b>　手机、电脑、网页，同一个上下文',
      f3_list_2: '<b>无缝接力</b>　在哪台设备想到，就在哪台记录',
      f3_list_3: '<b>手机PC联动</b>　远程登录，随时 vibe working', f3_alt: '多端协同预览',
      f4_eyebrow: '隐私保护', f4_title: '本地优先，数据只留在你手里',
      f4_lead: '东西默认都存在你自己的设备上,只有你允许的内容才会同步。没有"上传"这个默认动作,就没有意外的泄露。',
      f4_list_1: '<b>本地优先</b>　关键数据默认留在本地运行', f4_list_2: '<b>你说了算</b>　只有授权的内容才会同步',
      f4_list_3: '<b>没有默认上传</b>　从源头杜绝意外外传', f4_alt: '隐私安全',
      eco_title: '把分散的工具，变成懂你的系统',
      eco_lead: 'Octopus 把消息、语音、文件、屏幕和常用工具整理成连续的个人上下文，并支持在此基础上开发定制各种工具、生态',
      eco_wechat_msg: '微信消息', eco_wechat_auto: '微信自动处理', eco_feishu_msg: '飞书消息',
      eco_email: '邮件收件箱', eco_note: '随手记录', eco_screen: '屏幕内容',
      eco_desktop: '桌面动态', eco_notification: '桌面通知', eco_bulb: '灵感记录',
      eco_voice: '语音转文字', eco_speak: '文字朗读', eco_ocr: '图片识字',
      eco_doc: '文档整理', eco_longdoc: '长文解析', eco_cal: '日程提醒', eco_remote: '远程连接',
      cta_title: '随手记，随时找', cta_lead: '让信息跟上你，而不是去找它',
      dl_desktop_label: '桌面版', dl_mobile_label: '移动端', dl_windows: '下载 Windows',
      dl_macos: '下载 macOS', dl_ios: '加入 iOS 内测', dl_android: '下载安卓 APK',
      footer_tagline: '更懂你的第二大脑：本地优先、多端协同,让信息跟上你,而不是去找它',
      footer_col1_title: '能力', footer_col2_title: '下载', footer_col3_title: '关于',
      footer_capture: '超级入口', footer_smart: '个性化', footer_sync: '多端协同', footer_privacy: '本地存储',
      footer_windows: 'Windows', footer_macos: 'macOS', footer_ios: 'iOS 内测', footer_android: '安卓 APK',
      footer_top: '回到顶部',
      footer_copyright: '\u00a9 2026 Octopus \u00b7 NextHCI\u3000保留所有权利',
      footer_weibo: '微博', footer_weibo_alt: '微博',
      footer_github: 'GitHub', footer_github_alt: 'GitHub',
      footer_wechat: '微信', footer_wechat_alt: '微信',
    },
    en: {
      nav_brand: 'Octopus', nav_capture: 'Capture All', nav_smart: 'Personalized',
      nav_sync: 'Multi-Device', nav_privacy: 'Local-First',
      nav_contact: 'Contact Us', nav_download: 'Download', nav_menu: 'Menu',
      hero_title_a: 'Information', hero_title_b: 'follows you',
      hero_lead: 'WeChat, Lark, Email, Voice, Screenshots, Docs, just drop them in. Octopus <strong>remembers, connects, and finds</strong> everything for you',
      hero_tagline: 'Cross-Device \u00b7 Smarter Over Time \u00b7 Privacy You Can Trust',
      hero_cta_primary: 'Download Now', hero_cta_secondary: 'Quick Start',
      spec_1_suffix: '+', spec_1_lbl: 'Service Sources', spec_2_suffix: '-Device Sync', spec_2_lbl: 'Phone, Computer, Browser',
      spec_3_num: 'Local-First', spec_3_lbl: 'Your data stays on your device',
      spec_4_num: 'Zero Setup', spec_4_lbl: 'No sign-up, just start using it',
      pain_title_a: 'Ideas come, but nowhere to put them', pain_title_b: 'When you need them, nowhere to find',
      pain_lead: 'Jumping between apps just to search? Capture, organize, recall\u2014now it\'s all one thing.',
      f1_eyebrow: 'The AI Super Gateway', f1_title: 'Speak, snap, or drop\u2014it\'s captured',
      f1_lead: 'No format restrictions, no app switching. A plan from WeChat, a whiteboard photo, a voice memo, a document\u2014drop them in, Octopus handles everything.',
      f1_list_1: '<b>Multi-Channel</b>\u3000WeChat / Lark / Email / Web / Voice / Local Files',
      f1_list_2: '<b>Auto Process</b>\u3000Voice-to-text, OCR, document parsing, long-form analysis',
      f1_list_3: '<b>Smart Tidy</b>\u3000Just drop it in, let Octopus handle the rest',
      f1_alt: 'Capture interface preview',
      f2_eyebrow: 'Personalized', f2_title: 'Smarter the more you use it',
      f2_lead: 'No more keyword hunting. Octopus maps connections between your information\u2014learning your patterns and habits, surfacing what you need before you ask.',
      f2_list_1: '<b>Associative Memory</b>\u3000New notes automatically link to related ones',
      f2_list_2: '<b>Understands You</b>\u3000Your interests and focus areas are continuously refined',
      f2_list_3: '<b>Proactive Delivery</b>\u3000Have it ready before you need it',
      f2_graph_main: 'Meeting Notes', f2_graph_title_1: 'Project A Timeline', f2_graph_sub_1: '3 days ago',
      f2_graph_title_2: 'Chat with Teacher', f2_graph_sub_2: 'Last week',
      f2_graph_title_3: 'Proposal v2 Draft', f2_graph_sub_3: '2 weeks ago',
      f3_eyebrow: 'Multi-Device', f3_title: 'Start on phone, finish on desktop',
      f3_lead: 'From phone to computer, from commute to desk\u2014every screen works. Tap on your phone, get it done on your PC. Capture anywhere, continue seamlessly.',
      f3_list_1: '<b>Shared Context</b>\u3000Phone, computer, browser\u2014same context, always',
      f3_list_2: '<b>Seamless Handoff</b>\u3000Capture on whatever device you\'re on',
      f3_list_3: '<b>Phone-PC Link</b>\u3000Remote control, vibe working anywhere',
      f3_alt: 'Multi-device preview',
      f4_eyebrow: 'Privacy', f4_title: 'Local-first, your data stays yours',
      f4_lead: 'Everything stays on your device by default. Only what you allow gets synced. No automatic upload\u2014no accidental leaks.',
      f4_list_1: '<b>Local-First</b>\u3000Critical data runs locally by default',
      f4_list_2: '<b>You\'re in Control</b>\u3000Only authorized content is synced',
      f4_list_3: '<b>No Default Upload</b>\u3000Prevent leaks at the source',
      f4_alt: 'Privacy security',
      eco_title: 'Turn scattered tools into a system that knows you',
      eco_lead: 'Octopus weaves messages, voice, files, screenshots, and daily tools into a continuous personal context\u2014and lets you build custom extensions on top.',
      eco_wechat_msg: 'WeChat Messages', eco_wechat_auto: 'WeChat Auto-Process', eco_feishu_msg: 'Lark Messages',
      eco_email: 'Email Inbox', eco_note: 'Quick Notes', eco_screen: 'Screen Content',
      eco_desktop: 'Desktop Activity', eco_notification: 'Notifications', eco_bulb: 'Inspiration',
      eco_voice: 'Voice to Text', eco_speak: 'Text to Speech', eco_ocr: 'Image OCR',
      eco_doc: 'Document Parsing', eco_longdoc: 'Long-Form Analysis', eco_cal: 'Calendar Reminders',
      eco_remote: 'Remote Access',
      cta_title: 'Capture fast, find faster', cta_lead: 'Let information follow you, not the other way around',
      dl_desktop_label: 'Desktop', dl_mobile_label: 'Mobile',
      dl_windows: 'Download for Windows', dl_macos: 'Download for macOS',
      dl_ios: 'Join iOS Beta', dl_android: 'Download APK',
      footer_tagline: 'Your second brain: local-first, multi-device. Let information follow you, not the other way around.',
      footer_col1_title: 'Features', footer_col2_title: 'Download', footer_col3_title: 'About',
      footer_capture: 'Capture All', footer_smart: 'Personalized', footer_sync: 'Multi-Device', footer_privacy: 'Local-First',
      footer_windows: 'Windows', footer_macos: 'macOS', footer_ios: 'iOS Beta', footer_android: 'Android APK',
      footer_top: 'Back to Top',
      footer_copyright: '\u00a9 2026 Octopus \u00b7 NextHCI\u3000All rights reserved',
      footer_weibo: 'Weibo', footer_weibo_alt: 'Weibo',
      footer_github: 'GitHub', footer_github_alt: 'GitHub',
      footer_wechat: 'WeChat', footer_wechat_alt: 'WeChat',
    }
  };

  var currentLang = localStorage.getItem('octopus_lang');
  if (['zh','en'].indexOf(currentLang) === -1) currentLang = 'zh';

  window.setLanguage = function(lang) {
    currentLang = lang;
    var dict = i18n[lang];
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
    document.querySelectorAll('[data-i18n]').forEach(function(el){
      var key = el.getAttribute('data-i18n');
      if (!dict[key]) return;
      var attr = el.getAttribute('data-i18n-attr');
      if (attr) { el.setAttribute(attr, dict[key]); }
      else { el.innerHTML = dict[key]; }
    });
    var tb = document.getElementById('langToggle');
    if(tb) tb.textContent = lang === 'zh' ? 'EN' : '中';
    renderEcoTiles(lang);
    localStorage.setItem('octopus_lang', lang);
  }
  window.toggleLang = function(){
    setLanguage(currentLang === 'zh' ? 'en' : 'zh');
  }
  var langButton = document.getElementById('langToggle');
  if (langButton) {
    langButton.addEventListener('click', function(){
      toggleLang();
    });
  }

  /* ----- ecosystem tiles ----- */
  var eco = [
    {key:'eco_wechat_msg',icon:'cloud-fill'},{key:'eco_wechat_auto',icon:'cloud-fill'},
    {key:'eco_feishu_msg',icon:'cloud-fill'},{key:'eco_email',icon:'cloud-fill'},
    {key:'eco_note',icon:'cloud-fill'},{key:'eco_screen',icon:'cloud-fill'},
    {key:'eco_desktop',icon:'cloud-fill'},{key:'eco_notification',icon:'cloud-fill'},
    {key:'eco_bulb',icon:'cloud-fill'},{key:'eco_voice',icon:'cloud-fill'},
    {key:'eco_speak',icon:'cloud-fill'},{key:'eco_ocr',icon:'cloud-fill'},
    {key:'eco_doc',icon:'cloud-fill'},{key:'eco_longdoc',icon:'cloud-fill'},
    {key:'eco_cal',icon:'cloud-fill'},{key:'eco_remote',icon:'cloud-fill'},
  ];
  function renderEcoTiles(lang) {
    var grid = document.querySelector('.eco-grid');
    if (!grid) return;
    grid.innerHTML = '';
    eco.forEach(function(item, i){
      var d = document.createElement('div');
      d.className = 'eco-tile';
      d.setAttribute('data-reveal', '');
      d.setAttribute('data-delay', String((i % 4) + 1));
      d.innerHTML = '<span class="ic"><img src="./assets/icons/'+item.icon+'.svg" alt="" width="19" height="19"></span><span class="nm">'+i18n[lang][item.key]+'</span>';
      grid.appendChild(d);
      if(window.__io) window.__io.observe(d);
    });
  }

  // Initialize language
  setLanguage(currentLang);

  /* ----- nav scroll ----- */
  var nav = document.getElementById('nav');
  function onScroll(){ if(window.scrollY>18) nav.classList.add('scrolled'); else nav.classList.remove('scrolled'); }
  onScroll(); window.addEventListener('scroll', onScroll, {passive:true});

  /* ----- reveal ----- */
  var io = window.__io = new IntersectionObserver(function(es){
    es.forEach(function(en){ if(en.isIntersecting){ en.target.classList.add('in'); if(en.target.classList.contains('viz')) en.target.classList.add('reveal'); io.unobserve(en.target); } });
  },{threshold:.14, rootMargin:'0px 0px -8% 0px'});
  document.querySelectorAll('[data-reveal]').forEach(function(el){ io.observe(el); });
  document.querySelectorAll('.viz').forEach(function(el){ io.observe(el); });

  /* ----- count up ----- */
  var co = new IntersectionObserver(function(es){
    es.forEach(function(en){
      if(!en.isIntersecting) return;
      var el=en.target, target=+el.getAttribute('data-count'), t0=null, dur=900;
      if(reduce){ el.textContent=target; co.unobserve(el); return; }
      function step(ts){ if(!t0)t0=ts; var p=Math.min((ts-t0)/dur,1); el.textContent=Math.round(p*target); if(p<1)requestAnimationFrame(step); }
      requestAnimationFrame(step); co.unobserve(el);
    });
  },{threshold:.6});
  document.querySelectorAll('[data-count]').forEach(function(el){ co.observe(el); });

  if(reduce) return;

  /* ----- magnetic buttons + cursor glow ----- */
  document.querySelectorAll('[data-magnetic]').forEach(function(btn){
    var strength=12;
    btn.addEventListener('mousemove', function(e){
      var r=btn.getBoundingClientRect();
      var x=e.clientX-r.left, y=e.clientY-r.top;
      var dx=(x-r.width/2)/(r.width/2), dy=(y-r.height/2)/(r.height/2);
      btn.style.transform='translate('+(dx*strength)+'px,'+(dy*strength*.6)+'px)';
      btn.style.setProperty('--mx', x+'px');
      btn.style.setProperty('--my', y+'px');
    });
    btn.addEventListener('mouseleave', function(){ btn.style.transform=''; });
  });

  /* ----- tilt cards + spotlight ----- */
  document.querySelectorAll('[data-tilt]').forEach(function(card){
    var max=6;
    card.addEventListener('mousemove', function(e){
      var r=card.getBoundingClientRect();
      var px=(e.clientX-r.left)/r.width, py=(e.clientY-r.top)/r.height;
      var rx=(.5-py)*max, ry=(px-.5)*max;
      card.style.transform='perspective(900px) rotateX('+rx+'deg) rotateY('+ry+'deg)';
    });
    card.addEventListener('mouseleave', function(){ card.style.transform=''; });
    card.style.transition='transform .3s ease-out';
  });

  /* ----- dark CTA cursor spotlight ----- */
  var cta=document.querySelector('.cta');
  if(cta) {
    cta.addEventListener('mousemove', function(e){
      var r=cta.getBoundingClientRect();
      cta.style.setProperty('--mx',((e.clientX-r.left)/r.width*100)+'%');
      cta.style.setProperty('--my',((e.clientY-r.top)/r.height*100)+'%');
    });
  }

  /* mobile menu (simple scroll) */
  var mb=document.querySelector('.menu-btn');
  if(mb) mb.addEventListener('click', function(){ document.getElementById('download').scrollIntoView({behavior:'smooth'}); });
})();
