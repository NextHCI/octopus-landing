const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
const revealItems = [...document.querySelectorAll('.reveal')]

const serviceItems = [
  {
    name: '手机第二大脑',
    title: '把手机里的线索带回桌面',
    desc: '记录、通知、录音和即时想法会被整理成可回顾的个人线索。',
    steps: ['收集', '理解', '提醒'],
    mockup: `
      <div class="mockup-device mockup-phone-ui">
        <div class="mockup-topbar"><span>Today</span><b>Octopus</b></div>
        <div class="mockup-phone-body">
          <div class="mockup-note is-strong"><strong>会议后想到的事</strong><span>整理成 3 条待办</span></div>
          <div class="mockup-note"><strong>录音 12:40</strong><span>已生成摘要</span></div>
          <div class="mockup-note"><strong>提醒</strong><span>今晚回看项目资料</span></div>
        </div>
      </div>`
  },
  {
    name: '微信消息',
    title: '重要对话不再散落',
    desc: '把沟通里的任务、关系和上下文沉淀下来，需要时可以继续接上。',
    steps: ['对话', '提炼', '跟进'],
    mockup: `
      <div class="mockup-window mockup-chat-ui">
        <div class="mockup-sidebar"><span></span><span></span><span></span></div>
        <div class="mockup-chat-main">
          <div class="mockup-chat-row"><i></i><p>明天上午确认方案。</p></div>
          <div class="mockup-chat-row is-mine"><p>已加入待跟进。</p><i></i></div>
          <div class="mockup-summary"><strong>对话重点</strong><span>方案确认、时间、负责人</span></div>
        </div>
      </div>`
  },
  {
    name: '微信自动处理',
    title: '重复消息交给系统',
    desc: '常见回复、提醒和整理动作可以自动完成，减少反复切换。',
    steps: ['识别', '处理', '完成'],
    mockup: `
      <div class="mockup-window mockup-rules-ui">
        <div class="mockup-rule is-on"><strong>收到资料</strong><span>保存并生成摘要</span></div>
        <div class="mockup-rule"><strong>出现时间</strong><span>创建提醒</span></div>
        <div class="mockup-rule"><strong>需要回复</strong><span>准备草稿</span></div>
      </div>`
  },
  {
    name: '飞书消息',
    title: '团队信息自动进入个人节奏',
    desc: '工作消息、项目线索和待办事项可以更自然地汇入个人时间线。',
    steps: ['同步', '归纳', '推进'],
    mockup: `
      <div class="mockup-window mockup-team-ui">
        <div class="mockup-channel-list"><span>项目</span><span>设计</span><span>发布</span></div>
        <div class="mockup-feed">
          <div><strong>今日讨论</strong><span>3 个决定</span></div>
          <div><strong>待确认</strong><span>2 个事项</span></div>
          <div class="mockup-feed-action">加入个人节奏</div>
        </div>
      </div>`
  },
  {
    name: '邮件收件箱',
    title: '把邮件变成可处理事项',
    desc: '邮件里的关键信息、附件和后续动作会被整理成清晰线索。',
    steps: ['收件', '摘要', '提醒'],
    mockup: `
      <div class="mockup-window mockup-mail-ui">
        <div class="mockup-mail-list">
          <span class="is-selected">产品更新</span><span>会议纪要</span><span>账单提醒</span>
        </div>
        <div class="mockup-mail-detail">
          <h4>邮件摘要</h4><p>需要在周五前确认附件中的两处内容。</p>
          <button type="button">加入提醒</button>
        </div>
      </div>`
  },
  {
    name: '随手记录',
    title: '想法可以随时落下',
    desc: '一句话、一个链接或一段语音，都能成为之后可继续使用的记录。',
    steps: ['记录', '归档', '回看'],
    mockup: `
      <div class="mockup-window mockup-notes-ui">
        <div class="mockup-note-card large"><strong>新想法</strong><span>把早会内容自动归到项目里</span></div>
        <div class="mockup-note-card"><strong>链接</strong><span>设计参考</span></div>
        <div class="mockup-note-card"><strong>语音</strong><span>00:26</span></div>
      </div>`
  },
  {
    name: '屏幕内容',
    title: '屏幕里的信息也能被看见',
    desc: '截图和屏幕内容可以被整理，帮助你回到当时的工作现场。',
    steps: ['捕捉', '理解', '整理'],
    mockup: `
      <div class="mockup-window mockup-screen-ui">
        <div class="mockup-browser-bar"></div>
        <div class="mockup-screen-grid"><span></span><span></span><span></span><span></span></div>
        <div class="mockup-highlight">识别到关键内容</div>
      </div>`
  },
  {
    name: '桌面动态',
    title: '让桌面活动形成上下文',
    desc: '应用切换、工作节奏和关键动作会帮助系统理解你正在做什么。',
    steps: ['感知', '关联', '建议'],
    mockup: `
      <div class="mockup-window mockup-activity-ui">
        <div class="mockup-timeline"><span></span><span></span><span></span></div>
        <div class="mockup-activity-card"><strong>写文档</strong><span>42 分钟</span></div>
        <div class="mockup-activity-card muted"><strong>查资料</strong><span>12 个页面</span></div>
      </div>`
  },
  {
    name: '桌面通知',
    title: '提醒在合适的地方出现',
    desc: '重要事项可以在桌面上及时出现，不重要的信息则安静收好。',
    steps: ['判断', '提醒', '完成'],
    mockup: `
      <div class="mockup-window mockup-notify-ui">
        <div class="mockup-notification"><strong>项目提醒</strong><span>10 分钟后开始会议</span></div>
        <div class="mockup-notification soft"><strong>资料已整理</strong><span>可稍后查看</span></div>
        <div class="mockup-focus-ring">专注中</div>
      </div>`
  },
  {
    name: '灵感记录',
    title: '灵感不会掉进空白处',
    desc: '突然想到的点子可以快速保存，之后自动回到相关项目里。',
    steps: ['捕捉', '关联', '复用'],
    mockup: `
      <div class="mockup-window mockup-ideas-ui">
        <div class="mockup-sticky one">新版首页文案</div>
        <div class="mockup-sticky two">下载区更简单</div>
        <div class="mockup-sticky three">服务做成轮播</div>
      </div>`
  },
  {
    name: '语音转文字',
    title: '把语音变成可搜索记录',
    desc: '会议、备忘和手机录音可以转成文字，方便回看和整理。',
    steps: ['聆听', '转写', '总结'],
    mockup: `
      <div class="mockup-window mockup-voice-ui">
        <div class="mockup-wave"><span></span><span></span><span></span><span></span><span></span></div>
        <div class="mockup-transcript"><strong>转写完成</strong><p>我们先确认目标，再拆成三步推进。</p></div>
      </div>`
  },
  {
    name: '文字朗读',
    title: '让内容可以被听见',
    desc: '长文本、提醒和摘要可以朗读出来，适合通勤或离开屏幕时继续处理。',
    steps: ['选择', '朗读', '继续'],
    mockup: `
      <div class="mockup-window mockup-reader-ui">
        <div class="mockup-article-lines"><span></span><span></span><span></span><span></span></div>
        <div class="mockup-player"><b></b><span>正在朗读摘要</span></div>
      </div>`
  },
  {
    name: '图片识字',
    title: '图片里的文字也能使用',
    desc: '截图、照片和扫描件里的文字可以被提取，变成可复制的内容。',
    steps: ['识别', '提取', '保存'],
    mockup: `
      <div class="mockup-window mockup-image-text-ui">
        <div class="mockup-photo"><span>PHOTO</span></div>
        <div class="mockup-extracted"><strong>提取文字</strong><p>费用、时间、地点已识别</p></div>
      </div>`
  },
  {
    name: '文档整理',
    title: '文件不只是文件',
    desc: '文档里的重点、附件和行动项会被梳理成更容易处理的结构。',
    steps: ['读取', '提炼', '归档'],
    mockup: `
      <div class="mockup-window mockup-doc-ui">
        <div class="mockup-doc-page"><h4>项目文档</h4><span></span><span></span><span></span></div>
        <div class="mockup-doc-outline"><strong>重点</strong><p>目标、风险、下一步</p></div>
      </div>`
  },
  {
    name: '长文解析',
    title: '快速抓住长内容重点',
    desc: '报告、资料和长文章可以被拆出重点，让你先看结论再深入。',
    steps: ['浏览', '摘要', '深入'],
    mockup: `
      <div class="mockup-window mockup-report-ui">
        <div class="mockup-report-text"><span></span><span></span><span></span><span></span><span></span></div>
        <div class="mockup-summary-box"><strong>三点总结</strong><p>趋势、机会、行动</p></div>
      </div>`
  },
  {
    name: '日程提醒',
    title: '把下一步安排好',
    desc: '待办、会议和长期事项可以被持续跟进，不再靠临时想起。',
    steps: ['安排', '提醒', '复盘'],
    mockup: `
      <div class="mockup-window mockup-calendar-ui">
        <div class="mockup-calendar-grid"><span></span><span></span><span class="is-today"></span><span></span><span></span><span class="has-dot"></span></div>
        <div class="mockup-agenda"><strong>今天</strong><p>14:00 方案确认</p><p>18:30 回顾资料</p></div>
      </div>`
  },
  {
    name: '远程连接',
    title: '需要时回到自己的环境',
    desc: '在不同设备之间继续处理事情，重要上下文不被地点打断。',
    steps: ['连接', '继续', '完成'],
    mockup: `
      <div class="mockup-window mockup-remote-ui">
        <div class="mockup-laptop"><span></span></div>
        <div class="mockup-connection-line"></div>
        <div class="mockup-mini-phone"><span></span></div>
        <div class="mockup-online">已连接</div>
      </div>`
  }
]

function isInViewport(item) {
  const rect = item.getBoundingClientRect()
  return rect.top < window.innerHeight && rect.bottom > 0
}

if (prefersReducedMotion || !('IntersectionObserver' in window)) {
  revealItems.forEach((item) => item.classList.add('is-visible'))
} else {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        entry.target.classList.add('is-visible')
        observer.unobserve(entry.target)
      })
    },
    { threshold: 0.16 }
  )

  revealItems.forEach((item) => {
    if (isInViewport(item)) {
      item.classList.add('is-visible')
    } else {
      observer.observe(item)
    }
  })
}

const serviceTabs = [...document.querySelectorAll('[data-service-index]')]
const serviceKicker = document.querySelector('[data-service-kicker]')
const serviceTitle = document.querySelector('[data-service-title]')
const serviceDesc = document.querySelector('[data-service-desc]')
const serviceMockup = document.querySelector('[data-service-mockup]')
const serviceVisual = serviceMockup?.closest('.service-visual')
const serviceProgress = document.querySelector('[data-service-progress]')
const serviceStepA = document.querySelector('[data-service-step-a]')
const serviceStepB = document.querySelector('[data-service-step-b]')
const serviceStepC = document.querySelector('[data-service-step-c]')
let activeServiceIndex = 0
let serviceTimer = 0

function setActiveService(index, shouldRestart = true) {
  const nextService = serviceItems[index]
  if (!nextService) return

  activeServiceIndex = index
  serviceTabs.forEach((tab, tabIndex) => {
    const isActive = tabIndex === index
    tab.classList.toggle('is-active', isActive)
    tab.setAttribute('aria-pressed', String(isActive))
  })

  if (serviceKicker) serviceKicker.textContent = nextService.name
  if (serviceTitle) serviceTitle.textContent = nextService.title
  if (serviceDesc) serviceDesc.textContent = nextService.desc
  if (serviceStepA) serviceStepA.textContent = nextService.steps[0]
  if (serviceStepB) serviceStepB.textContent = nextService.steps[1]
  if (serviceStepC) serviceStepC.textContent = nextService.steps[2]

  if (serviceMockup) {
    const shouldAnimate = serviceMockup.innerHTML.trim() !== ''
    if (shouldAnimate) serviceVisual?.classList.add('is-switching')
    window.setTimeout(() => {
      serviceMockup.innerHTML = nextService.mockup
      serviceVisual?.classList.remove('is-switching')
    }, shouldAnimate ? 120 : 0)
  }

  if (serviceProgress) {
    serviceProgress.style.animation = 'none'
    serviceProgress.offsetHeight
    serviceProgress.style.animation = ''
  }

  if (shouldRestart) startServiceRotation()
}

function startServiceRotation() {
  window.clearInterval(serviceTimer)
  if (prefersReducedMotion || serviceTabs.length === 0) return

  serviceTimer = window.setInterval(() => {
    const nextIndex = (activeServiceIndex + 1) % serviceItems.length
    setActiveService(nextIndex, false)
  }, 6000)
}

serviceTabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    const index = Number(tab.dataset.serviceIndex)
    setActiveService(index)
  })
})

if (serviceTabs.length > 0) {
  setActiveService(0)
}
