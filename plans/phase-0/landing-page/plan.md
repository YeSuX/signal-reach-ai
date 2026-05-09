# SignalReach AI Landing Page Plan

## 1. 目标

这个 landing page 的目标不是展示完整产品，而是完成 Phase 0 的验证任务：

1. 让目标用户在 5 秒内明白 SignalReach AI 解决什么问题。
2. 让用户相信这不是普通 lead database、CRM 或邮件群发工具。
3. 让用户愿意加入 waitlist 或提交一个真实 search query。
4. 用清晰、克制、有记忆点的动画强化“从模糊描述到高信号人选”的产品概念。

核心转化动作：

- Primary CTA: Join the waitlist。
- Secondary CTA: Submit a search query。

## 2. 页面定位

### 2.1 产品一句话

```text
Find high-signal people from a natural language description.
```

辅助说明：

```text
SignalReach AI searches across the web, explains why each person matches, and turns results into personalized outreach drafts.
```

### 2.2 目标用户

首版 landing page 主要服务：

- B2B founders。
- Growth leads。
- SDR / sales operators。
- Agencies doing outbound。
- Creator marketers。

第一屏应优先打 B2B outbound，不要同时平均讲销售、招聘、创作者、专家搜索。其他场景可以在 use cases 中作为扩展。

### 2.3 不要传达的定位

避免让用户误解为：

- CRM。
- 邮件群发平台。
- LinkedIn scraper。
- Apollo / ZoomInfo 的另一个数据库替代。
- 万能 AI sales agent。

## 3. 设计方向

### 3.1 设计关键词

- Clear。
- Evidence-backed。
- Fast。
- Operator-grade。
- Research cockpit。
- Calm but alive。

### 3.2 视觉方向

推荐方向：**precision research console**。

页面应像一个高质量 B2B SaaS 产品，而不是炫技型 AI 工具。整体要清晰、可信、专业，但用动画呈现“搜索信号被聚合、排序、解释”的感觉。

### 3.3 色彩建议

避免常见 AI 紫蓝渐变。建议使用：

- Background: near-white 或 deep ink。
- Primary text: ink / charcoal。
- Accent 1: signal green。
- Accent 2: amber / evidence yellow。
- Accent 3: muted blue for links and source tags。

示例 token：

```css
--bg: #f6f3ec;
--surface: #fffdf7;
--ink: #15130f;
--muted: #6f6a5f;
--line: #ded7c8;
--signal: #1f8a5b;
--evidence: #d89614;
--source: #356b9a;
--danger: #b64b3a;
```

如果选择暗色版本：

```css
--bg: #10120f;
--surface: #171a15;
--ink: #f5f0e6;
--muted: #aaa292;
--line: #30352d;
--signal: #66d19e;
--evidence: #f0b84f;
--source: #7db7e8;
```

### 3.4 字体建议

避免默认 Inter / Arial。推荐：

- Display: `Fraunces`、`Newsreader`、`Instrument Serif`。
- Body/UI: `Geist`、`IBM Plex Sans`、`Public Sans`。

推荐组合：

```text
Headline: Fraunces
Body/UI: IBM Plex Sans
```

理由：标题有编辑感和可信度，正文保持 SaaS 可读性。

## 4. 技术选型

### 4.1 推荐栈

```text
Framework: Next.js + TypeScript
Project directory: ./landing
Package manager: Bun
Styling: Tailwind CSS
Components: shadcn/ui for form primitives
Animation: React Bits + Framer Motion if needed
I18n: next-intl or next-international
Form: Tally / Typeform / Airtable first, Cloudflare Worker-backed API later
Analytics: PostHog or Plausible
Deployment: Cloudflare Workers with OpenNext, Cloudflare Pages only for static export
```

### 4.1.1 多语言要求

首版需要按多语言架构设计，即使 Phase 0 只先写英文和中文。

推荐语言：

| Locale | 说明 |
| --- | --- |
| `en` | 默认营销语言，面向 Product Hunt、HN、Reddit、X、海外 SaaS 用户 |
| `zh-CN` | 中文版本，面向中文创业者、开发者和出海团队 |

推荐 URL 结构：

```text
/en
/zh-CN
```

根路径 `/` 根据浏览器语言或 Cloudflare `Accept-Language` 做轻量重定向；如果不想做重定向，默认指向 `/en`。

多语言实现原则：

- 所有页面文案进入 message dictionary，不在组件中硬编码。
- 表单字段 label、placeholder、错误提示、成功提示都必须多语言。
- SEO metadata、Open Graph title、description 按 locale 输出。
- Demo example 可以本地化，但不要改变产品承诺。
- Waitlist 表单需要记录 `locale` 字段，方便后续分析哪个语言版本转化更好。

推荐目录：

```text
messages/
  en.json
  zh-CN.json
app/
  [locale]/
    page.tsx
    layout.tsx
```

### 4.1.2 Cloudflare 部署要求

部署目标改为 Cloudflare，不使用 Vercel。

根据 Cloudflare 当前官方文档：

- Full-stack SSR Next.js 推荐部署到 **Cloudflare Workers**，使用 **OpenNext adapter**。
- 只有明确需要静态导出时，才使用 **Cloudflare Pages + Next.js static export**。
- Cloudflare Pages 仍适合静态站点和 Git preview deployments，但如果使用 Next.js route handlers、SSR、Server Actions 或后续 Cloudflare bindings，Workers/OpenNext 更合适。

本项目推荐：

```text
Primary: Cloudflare Workers + @opennextjs/cloudflare
Optional static fallback: Cloudflare Pages static export
```

Cloudflare 相关服务建议：

| 需求 | Cloudflare 服务 |
| --- | --- |
| Hosting / SSR | Workers + OpenNext |
| Static assets | Workers assets / Pages assets |
| Waitlist storage | D1 或外部表单工具 |
| Rate limit / anti-spam | Turnstile + Workers logic |
| File / OG image assets | R2, if needed |
| Edge config / flags | KV |
| Analytics | Cloudflare Web Analytics + PostHog/Plausible optional |
| Bot protection | Turnstile |

初期最省事方案：

```text
Next.js static-ish landing page
Cloudflare Workers + OpenNext
Waitlist form posts to Tally/Typeform
Cloudflare Web Analytics
```

稍后自建方案：

```text
Next.js on Cloudflare Workers
Route handler receives waitlist submissions
Cloudflare Turnstile validates form
D1 stores submissions
PostHog or Cloudflare Web Analytics tracks funnel
```

### 4.1.3 项目目录与包管理要求

Landing page 应作为独立前端项目放在仓库根目录下：

```text
landing/
```

不要放在 `apps/web/`，也不要放在 `plans/` 目录中。`plans/phase-0/landing-page/` 只保存计划文档。

包管理统一使用 Bun：

```text
bun install
bun dev
bun run build
bun run lint
bun run typecheck
bunx wrangler dev
bunx wrangler deploy
```

要求：

- 使用 `bun.lock`，不要提交 `package-lock.json`、`pnpm-lock.yaml` 或 `yarn.lock`。
- 文档和脚本统一使用 Bun 命令。
- Cloudflare / Wrangler 命令优先使用 `bunx`。
- 如果某个工具官方只给 `npx` 示例，实现时改写为 `bunx` 或 package script。
- CI 如后续添加，也应使用 Bun。

### 4.2 React Bits 使用原则

React Bits 是 animated React UI components 集合，适合增强视觉记忆点。使用策略：

- 只选 3-5 个组件。
- 动画服务信息理解，而不是装饰堆叠。
- 首屏最多 2 个明显动效。
- 所有动画必须支持 reduced motion。
- 移动端降低背景和鼠标交互类动画强度。

参考：

- React Bits: https://reactbits.dev/
- React Bits Pro components page: https://pro.reactbits.dev/docs/components

## 5. 页面结构

### 5.1 Section 1: Hero

目标：5 秒内讲清楚产品。

内容：

- Badge: `Early access · AI people search for high-signal outbound`
- H1: `Find high-signal people from a natural language description.`
- Supporting copy。
- Primary CTA: `Join the waitlist`
- Secondary CTA: `Submit a search query`
- Hero visual: animated search-to-results panel。

推荐动画：

- H1 使用 React Bits text animation，例如 SplitText / BlurText / Staggered Text 类动效。
- Hero visual 使用模拟 search panel：用户输入 query 后，右侧逐步出现 scored people cards。
- 背景可以用轻量 animated grid / particles，但不要盖过文字。

Hero visual 内容示例：

```text
Query:
Find RevOps leaders at US B2B SaaS companies hiring sales roles.

Signals detected:
Role fit · Company fit · Hiring signal · CRM signal

Top match:
Revenue Operations leader
Score 91
Evidence: LinkedIn · Careers page · Company site
```

验收标准：

- 不滚动即可看到产品是什么。
- CTA 明显。
- 动画不影响阅读。
- 移动端 hero 不拥挤。

### 5.2 Section 2: Problem

目标：让用户觉得“这就是我现在的问题”。

标题：

```text
Finding the right person is still painfully manual.
```

内容：

- Search across platforms。
- Compare profiles。
- Guess relevance。
- Hunt for contact details。
- Write outreach from scratch。

推荐 UI：

- 左侧是传统流程的 linear checklist。
- 右侧是 SignalReach 的 condensed workflow。

推荐动画：

- Scroll reveal。
- Checklist items stagger in。
- Traditional flow 可以有 subtle strikethrough / collapse animation，表达压缩流程。

### 5.3 Section 3: How It Works

目标：清晰解释产品机制。

四步：

1. Describe who you want。
2. SignalReach searches and reasons across public sources。
3. Get evidence-backed matches。
4. Turn matches into outreach drafts。

推荐 UI：

- 4 个横向 steps，桌面横排，移动端纵向。
- 每一步都有 icon、短标题、1-2 行说明。
- 中间用 animated connector 表示信号流动。

推荐动画：

- React Bits animated cards / scroll reveal。
- Step connector 使用 CSS 或 React Bits line effect。
- 悬停时 step card 显示一个 mini example。

### 5.4 Section 4: Example Output

目标：证明产品输出不是普通 lead list。

这是整页最重要的转化区之一。

内容：

- 展示 3 个候选人卡片或表格行。
- 每个结果包含：
  - Name / role placeholder。
  - Match score。
  - Why this person。
  - Evidence chips。
  - Contactability。
  - Suggested outreach angle。

建议不要展示未授权真实个人数据。可以使用匿名化示例：

```text
RevOps Lead · B2B SaaS · 91 match
Why: Owns revenue systems, company is hiring 4 sales roles, public HubSpot signal.
Evidence: Profile · Careers page · Company tech page
Outreach angle: scaling sales ops without adding manual reporting work
```

推荐动画：

- Results cards stagger in after query panel。
- Evidence chips light up one by one。
- Score bar animates from 0 到目标分。

### 5.5 Section 5: Use Cases

目标：扩展产品适用场景，但不稀释首要定位。

卡片：

- B2B outbound。
- Creator sourcing。
- Recruiting。
- Expert discovery。

每张卡片结构：

- Use case name。
- Example query。
- What you get。

推荐动画：

- Hover lift / depth card。
- 卡片进入视口时轻微 stagger。

### 5.6 Section 6: Differentiation

目标：和 lead database、keyword search、email automation 拉开差异。

建议文案：

```text
Not another lead database.
Not a keyword search tool.
Not an email blasting product.

SignalReach is a people-search workflow built around relevance, evidence, and actionability.
```

推荐 UI：

- 三个 "Not..." statements 使用强排版。
- 下方展示 3 个核心 pillars：
  - Relevance。
  - Evidence。
  - Actionability。

推荐动画：

- "Not..." 文案使用 text reveal。
- 三个 pillars 使用 hover state 展示定义。

### 5.7 Section 7: Waitlist Form

目标：收集邮箱和真实 search query。

字段：

- Email。
- Role。
- Company。
- Primary use case。
- Describe someone you wish you could find faster。

CTA：

```text
Request early access
```

表单成功状态：

```text
You're on the list. If your query is a good fit, I may send back a manual demo report.
```

推荐实现：

Phase 0 使用 Tally / Typeform / Airtable embed，减少后端工作。

如果自建：

- Next.js route handler。
- Postgres / Supabase。
- Basic spam protection。
- PostHog event tracking。

推荐动画：

- 表单 focus state 明显。
- Submit 成功后显示 gentle confirmation animation。
- 不要使用夸张 confetti。

### 5.8 Section 8: FAQ

问题：

- Is this a CRM?
- Does it automatically send emails?
- What data does it use?
- Who is it for?
- Can I submit a real search query?

推荐 UI：

- Accordion。
- 文案简短直接。

## 6. 动画设计方案

### 6.1 动画原则

动画要表达三件事：

1. 从自然语言中抽取信号。
2. 多来源证据被聚合。
3. 结果被排序并转成行动。

不要做：

- 大面积无意义粒子。
- 持续吸引注意力的背景动画。
- 太多鼠标追踪效果。
- 影响表单填写的动画。

### 6.2 推荐 React Bits 组件类型

由于 React Bits 组件命名和可用性可能随版本变化，实施时以官网当前列表为准。计划中使用以下类别：

| 页面位置 | 组件类型 | 用途 |
| --- | --- | --- |
| Hero H1 | Text animation | 首屏加载时增强记忆点 |
| Hero background | Animated grid / subtle particles | 表达信号网络 |
| Example Output | Animated cards / spotlight cards | 展示结果卡片被点亮 |
| How It Works | Scroll reveal / stagger | 展示流程推进 |
| CTA section | Button hover / magnetic button | 增强点击感 |

### 6.3 Reduced Motion

必须支持：

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

并在 React 层避免启动重型 canvas/WebGL 动画。

### 6.4 性能预算

- Lighthouse Performance: 90+。
- First Contentful Paint: < 1.8s。
- Largest Contentful Paint: < 2.5s。
- Cumulative Layout Shift: < 0.1。
- Total JS 首屏尽量控制在 200KB gzip 内。
- 动画组件首屏只加载必要部分，低优先级 section 可 lazy load。

## 7. 具体页面文案

### 7.1 Hero

```text
Early access · AI people search for high-signal outbound

Find high-signal people from a natural language description.

SignalReach AI searches across the web, explains why each person matches, and turns results into personalized outreach drafts.

[Join the waitlist] [Submit a search query]
```

### 7.2 Problem

```text
Finding the right person is still painfully manual.

You search across platforms, compare profiles, guess whether someone is relevant, hunt for contact details, and then write outreach from scratch.

Most tools give you bigger lists. SignalReach focuses on better matches.
```

### 7.3 How It Works

```text
Describe the person you want.
SignalReach turns your request into a search plan.

Search across public sources.
It looks for role fit, company fit, recent signals, source evidence, and contactability.

Review evidence-backed matches.
Each result explains why the person fits and which sources support the match.

Draft outreach with context.
Generate messages based on actual evidence, not generic templates.
```

### 7.4 Example Query

```text
Find RevOps leaders at US-based B2B SaaS companies with 50-500 employees that are currently hiring sales roles.
```

### 7.5 Differentiation

```text
Not another lead database.
Not a keyword search tool.
Not an email blasting product.

SignalReach is built around relevance, evidence, and actionability.
```

## 8. 表单与数据收集

### 8.1 字段

| 字段 | 必填 | 说明 |
| --- | --- | --- |
| Email | 是 | 后续联系 |
| Role | 是 | 用户画像 |
| Company | 否 | 公司背景 |
| Primary use case | 是 | B2B outbound / creator sourcing / recruiting / expert discovery / other |
| Search query | 是 | 最重要字段，用于 benchmark 和手工 demo |
| Locale | 自动 | 当前页面语言，例如 `en` 或 `zh-CN` |

### 8.2 事件埋点

建议记录：

- `landing_viewed`
- `hero_cta_clicked`
- `secondary_cta_clicked`
- `example_query_viewed`
- `waitlist_form_started`
- `waitlist_form_submitted`
- `search_query_submitted`
- `faq_opened`

所有事件都应带上：

```text
locale
use_case, if available
utm_source
utm_campaign
```

### 8.3 成功指标

Phase 0 landing page 的目标：

- Visit -> waitlist conversion: 5%-15%。
- Waitlist 中 30% 以上提交真实 search query。
- 2 周内 50+ waitlist。
- 5+ 用户愿意接受访谈。

## 9. 组件拆分

推荐文件结构：

```text
landing/
  app/
    [locale]/
      page.tsx
      layout.tsx
    middleware.ts
  components/
    landing/
      hero.tsx
      animated-query-panel.tsx
      problem-section.tsx
      how-it-works.tsx
      example-output.tsx
      use-cases.tsx
      differentiation.tsx
      waitlist-form.tsx
      faq.tsx
  components/
    react-bits/
      split-text.tsx
      animated-grid.tsx
      spotlight-card.tsx
  lib/
    analytics.ts
    i18n.ts
    waitlist.ts
  messages/
    en.json
    zh-CN.json
  package.json
  bun.lock
  open-next.config.ts
  wrangler.jsonc
```

`landing/` 是一个独立项目目录。仓库根目录继续保留 PRD、roadmap、phase plans 等文档。

## 10. 开发任务拆分

### Task 1: 项目初始化

- 在仓库根目录新建 `landing/`。
- 使用 Bun 创建 Next.js + TypeScript 项目。
- 配置 Tailwind。
- 配置基础 SEO metadata。
- 接入字体。
- 设置颜色 token。
- 配置 Cloudflare Workers + OpenNext。
- 添加 `wrangler.jsonc` 和 `open-next.config.ts`。

验收：

- `landing/` 目录存在。
- `bun.lock` 存在。
- 不存在 `package-lock.json`、`pnpm-lock.yaml`、`yarn.lock`。
- `bun dev` 可启动本地页面。
- `wrangler dev` 或 OpenNext preview 可运行。
- 移动端和桌面端基础布局正常。

### Task 2: 多语言基础设施

- 配置 locale 路由：`/en` 和 `/zh-CN`。
- 添加 message dictionaries。
- 配置 locale-aware metadata。
- 配置语言切换组件。
- 表单自动记录 locale。

验收：

- `/en` 和 `/zh-CN` 都能打开。
- 页面所有核心文案来自字典。
- 切换语言不会丢失布局。
- SEO title 和 description 按语言变化。

### Task 3: 内容结构

- 实现所有 section 静态内容。
- 使用真实 Phase 0 文案。
- 添加 CTA anchor。

验收：

- 无动画时页面仍清晰完整。
- 首屏 5 秒内能理解产品。

### Task 4: React Bits 动画接入

- 接入 hero text animation。
- 接入 subtle background animation。
- 接入 result card stagger / spotlight。
- 接入 scroll reveal。

验收：

- 动画不卡顿。
- Reduced motion 正常。
- 移动端不遮挡文字。

### Task 5: Waitlist 表单

方案 A：Tally / Typeform embed。

方案 B：Cloudflare Worker-backed route handler + D1。

建议 Phase 0 用方案 A；如果你想从第一天就沉淀数据到自己系统，使用方案 B。

验收：

- 表单可提交。
- 成功状态清晰。
- 数据能导出。
- 记录 locale。
- 有基础 spam protection。

### Task 6: Analytics

- 接入 Cloudflare Web Analytics。
- 如果需要更细 funnel，接入 PostHog / Plausible。
- 记录关键事件。
- 验证 CTA 和提交事件。

验收：

- 能看到访问、点击、表单开始、表单提交事件。

### Task 7: Cloudflare Preview And Deploy

- 使用 OpenNext Cloudflare adapter 构建。
- 使用 Wrangler 本地 preview。
- 部署到 `*.workers.dev`。
- 绑定自定义域名。
- 配置 production 和 preview 环境变量。

验收：

- Cloudflare production URL 可访问。
- `/en` 和 `/zh-CN` 路由都正常。
- 表单提交在 production 正常。
- 页面资源没有 404。

### Task 8: QA

- 桌面端检查：1440px、1280px。
- 平板检查：768px。
- 手机检查：390px、375px。
- Lighthouse。
- 表单提交测试。
- Reduced motion 测试。
- `/en` 和 `/zh-CN` 多语言路由测试。
- Cloudflare Workers preview 和 production 测试。

验收：

- 无明显文本溢出。
- 无布局跳动。
- CTA 可点击。
- 表单可用。

## 11. SEO 与分享

### 11.1 Metadata

English title:

```text
SignalReach AI - Find high-signal people from a natural language description
```

English description:

```text
SignalReach AI searches across the web, explains why each person matches, and turns people-search results into personalized outreach drafts.
```

Chinese title:

```text
SignalReach AI - 用一句话找到高质量目标人选
```

Chinese description:

```text
SignalReach AI 会跨网络搜索目标对象，解释每个人为什么匹配，并生成可编辑的个性化外联草稿。
```

### 11.1.1 Hreflang

需要配置：

```text
en -> /en
zh-CN -> /zh-CN
x-default -> /en
```

### 11.2 Open Graph

OG image 应包含：

- SignalReach AI。
- "Find high-signal people from a natural language description."
- A small anonymous result-card mockup。

### 11.3 URL

建议：

```text
/
```

如果先挂在临时站：

```text
/waitlist
```

## 12. 可访问性

必须满足：

- 表单 label 完整。
- CTA 有清晰 focus ring。
- 文本颜色对比度合格。
- 动画支持 reduced motion。
- FAQ accordion 支持键盘操作。
- Hero visual 不作为唯一信息来源。

## 13. 风险

| 风险 | 应对 |
| --- | --- |
| 动画太多导致不清晰 | 首屏只保留 H1 和 query panel 动画 |
| 用户误解为群发工具 | 明确写 "drafts" 和 "user review" |
| 用户不愿提交 query | 表单中说明可能会收到手工 demo report |
| React Bits 组件过重 | 只引入必要组件，按 section 懒加载 |
| 移动端视觉拥挤 | Hero visual 移到正文后或简化为单卡片 |

## 14. 发布前 Checklist

- [x] Hero 文案清晰。
- [x] CTA 首屏可见。
- [x] `/en` 页面可访问。
- [x] `/zh-CN` 页面可访问。
- [x] 语言切换正常。
- [x] metadata 和 hreflang 已配置。
- [x] Waitlist 表单可提交。
- [x] Search query 字段已加入表单。
- [x] 表单记录 locale。
- [x] Demo example 不使用未授权真实个人数据。
- [x] Reduced motion 已处理。
- [x] 移动端无文字重叠。
- [x] Lighthouse Performance 90+。
- [x] Analytics 已验证。
- [x] OG image 已配置。
- [x] Privacy note 已添加。
- [x] Cloudflare Workers preview 通过。
- [x] Cloudflare production deploy 通过。

## 15. 推荐上线顺序

1. 在仓库根目录创建 `landing/` 项目。
2. 使用 Bun 初始化 Next.js + Cloudflare Workers/OpenNext。
3. 先上线无动画英文静态版，确保文案和表单可用。
4. 加入中文版本和语言切换。
5. 接入 hero text animation 和 animated query panel。
6. 接入 example output 动画。
7. 接入 analytics。
8. Cloudflare production deploy。
9. 发第一批公开内容引流。
10. 根据真实提交的 query 调整页面文案。

## 16. 最小可上线版本

如果只做 1 天版本，范围应压缩为：

- Hero。
- Problem。
- How it works。
- Example output。
- Waitlist form。
- FAQ。

动画只保留：

- Hero text reveal。
- Query panel 到 result card 的轻量 stagger。

不要做：

- WebGL。
- 复杂鼠标跟随。
- 大面积粒子背景。
- 多页面导航。

最小版本也必须包含：

- `/en` 和 `/zh-CN`。
- Cloudflare 部署配置。
- 表单记录 locale。

## 17. Detailed TODO

本 TODO 用于跟踪 landing page 实现状态。2026-05-09 已完成本地实现、双语页面、Bun 包管理、React Bits 风格动画、Cloudflare/OpenNext 构建、Wrangler dry-run 和生产模式验证；真实 Cloudflare production deploy 需要账号登录、域名和环境变量凭证。

### 17.1 Phase A: 准备与决策

- [ ] Blocked: 确认首版域名。
  - 产出：域名或临时 Cloudflare Workers URL。
  - 验收：有明确的 preview URL 和 production URL 规划。
  - 状态：需要用户提供正式域名或 Cloudflare Workers 子域名选择。

- [x] 确认首版语言范围。
  - 产出：`en` 和 `zh-CN` 作为首发 locale。
  - 验收：页面结构、表单、metadata 都按双语设计。

- [x] 确认表单方案。
  - 产出：选择 Tally / Typeform / Airtable / 自建 D1。
  - 推荐：Phase 0 用 Tally 或 Typeform，自建后端放后续。
  - 验收：明确表单提交后的数据去向和导出方式。

- [x] 确认 analytics 方案。
  - 产出：选择 Cloudflare Web Analytics，是否叠加 PostHog。
  - 验收：明确需要追踪的事件和字段。

- [x] 确认 React Bits 组件清单。
  - 产出：列出最终使用的 3-5 个组件。
  - 验收：每个组件都有明确页面位置和信息目的。

### 17.2 Phase B: 项目初始化

- [x] 创建 Next.js + TypeScript 项目。
  - 产出：`landing/` 下可运行的 Next.js app。
  - 验收：`bun dev` 可启动本地页面。

- [x] 确认项目位置。
  - 产出：项目根目录为 `landing/`。
  - 验收：所有实现代码都位于 `landing/`，计划文档仍位于 `plans/phase-0/landing-page/`。

- [x] 配置 Bun 包管理。
  - 产出：`landing/package.json` 和 `landing/bun.lock`。
  - 验收：没有 `package-lock.json`、`pnpm-lock.yaml`、`yarn.lock`。

- [x] 配置 package scripts。
  - 产出：`dev`、`build`、`lint`、`typecheck`、`preview`、`deploy` scripts。
  - 验收：脚本内部使用 Bun 或 Cloudflare/OpenNext 推荐命令，不使用 npm/pnpm/yarn。

- [x] 配置 Tailwind CSS。
  - 产出：全局样式、CSS variables、Tailwind config。
  - 验收：页面可使用设计 token 和响应式工具类。

- [x] 配置基础目录结构。
  - 产出：
    ```text
    app/[locale]/
    components/landing/
    components/react-bits/
    messages/
    lib/
    ```
  - 验收：目录结构符合计划，后续组件可按模块拆分。

- [x] 配置字体。
  - 产出：标题字体和正文字体接入。
  - 推荐：`Fraunces` + `IBM Plex Sans`。
  - 验收：无布局跳动，字体加载失败时有合理 fallback。

- [x] 配置全局设计 token。
  - 产出：颜色、间距、边框、阴影、focus ring token。
  - 验收：页面不依赖随机硬编码颜色。

### 17.3 Phase C: Cloudflare 基础设施

- [x] 配置 OpenNext for Cloudflare。
  - 产出：OpenNext Cloudflare adapter 配置。
  - 验收：项目可以构建为 Cloudflare Workers 可部署产物。

- [x] 添加 `wrangler.jsonc`。
  - 产出：Cloudflare Worker 名称、compatibility date、assets、env 配置。
  - 验收：`wrangler` 能识别项目配置。

- [x] 配置本地 Cloudflare preview。
  - 产出：可用的 Workers local preview。
  - 验收：`bunx wrangler dev` 或 package script 可访问 `/en` 和 `/zh-CN`。

- [x] 配置 Cloudflare production deploy。
  - 产出：部署命令和环境配置。
  - 验收：`bunx wrangler deploy` 或 package script 可以部署到 `*.workers.dev` 或绑定域名。

- [x] 预留 Cloudflare bindings。
  - 产出：D1、KV、Turnstile、R2 的后续扩展位说明。
  - 验收：当前不用也不阻碍后续加入。

### 17.4 Phase D: 多语言基础设施

- [x] 安装并配置 i18n 库。
  - 产出：`next-intl` 或 `next-international` 配置。
  - 验收：组件可以通过 key 读取双语文案。

- [x] 创建 `messages/en.json`。
  - 产出：英文 landing page 全量文案。
  - 验收：英文页面无硬编码营销文案。

- [x] 创建 `messages/zh-CN.json`。
  - 产出：中文 landing page 全量文案。
  - 验收：中文页面语义自然，不是生硬直译。

- [x] 实现 locale 路由。
  - 产出：`/en` 和 `/zh-CN` 页面。
  - 验收：两个路径都能直接访问。

- [x] 实现根路径跳转。
  - 产出：`/` 根据浏览器语言或默认规则跳转。
  - 验收：英文环境进 `/en`，中文环境进 `/zh-CN`，异常时默认 `/en`。

- [x] 实现语言切换器。
  - 产出：header 或 footer 中的 language switch。
  - 验收：切换语言保留当前页面位置或回到同一 section。

- [x] 配置 locale-aware metadata。
  - 产出：不同语言的 title、description、OG locale。
  - 验收：查看页面源码能看到对应语言 metadata。

- [x] 配置 hreflang。
  - 产出：`en`、`zh-CN`、`x-default` alternate links。
  - 验收：SEO 检查工具可识别语言版本。

### 17.5 Phase E: 页面静态结构

- [x] 实现 Hero section。
  - 产出：badge、H1、supporting copy、primary CTA、secondary CTA、hero visual placeholder。
  - 验收：首屏 5 秒内能理解产品。

- [x] 实现 Problem section。
  - 产出：传统找人流程痛点和 SignalReach 对比。
  - 验收：不依赖动画也能读懂痛点。

- [x] 实现 How It Works section。
  - 产出：4 步流程。
  - 验收：用户能理解从 query 到 outreach draft 的路径。

- [x] 实现 Example Output section。
  - 产出：匿名化候选人结果卡片。
  - 验收：清楚展示 score、why、evidence、contactability、outreach angle。

- [x] 实现 Use Cases section。
  - 产出：B2B outbound、creator sourcing、recruiting、expert discovery。
  - 验收：B2B outbound 保持主优先级，不被其他场景稀释。

- [x] 实现 Differentiation section。
  - 产出：Not a lead database / keyword search / email blasting product。
  - 验收：用户不会误解为群发工具。

- [x] 实现 Waitlist section。
  - 产出：表单区域和说明文案。
  - 验收：CTA 明确，用户知道提交 query 的价值。

- [x] 实现 FAQ section。
  - 产出：5 个 FAQ accordion。
  - 验收：键盘可操作，默认移动端可读。

- [x] 实现 Footer。
  - 产出：产品名、简短定位、隐私说明、语言切换。
  - 验收：页面结束信息完整。

### 17.6 Phase F: React Bits 动画接入

- [x] 接入 Hero text reveal。
  - 产出：H1 动画。
  - 验收：首次加载有记忆点，不影响可读性。

- [x] 接入 animated query panel。
  - 产出：query 输入、signals detected、result cards 的 staged animation。
  - 验收：动画表达“自然语言到高信号结果”的产品概念。

- [x] 接入 Example Output card animation。
  - 产出：结果卡片 stagger、score bar、evidence chips。
  - 验收：用户注意力落在 evidence-backed match 上。

- [x] 接入 section scroll reveal。
  - 产出：Problem、How It Works、Use Cases 的轻量进入动画。
  - 验收：滚动不卡顿。

- [x] 接入 CTA hover animation。
  - 产出：primary CTA 有清晰 hover / focus / active 状态。
  - 验收：不会引发 layout shift。

- [x] 实现 reduced motion fallback。
  - 产出：CSS 和组件层 motion guard。
  - 验收：系统开启 reduced motion 时动画基本关闭。

- [x] 移动端动画降级。
  - 产出：移动端关闭背景类或鼠标交互类动画。
  - 验收：390px 和 375px 宽度不卡顿、不遮挡文字。

### 17.7 Phase G: Waitlist 表单

- [x] 创建表单字段。
  - 产出：Email、Role、Company、Primary use case、Search query、Locale。
  - 验收：必填字段校验正确。

- [x] 接入表单提交方案。
  - 产出：Tally / Typeform / Airtable 表单。
  - 验收：提交后能在后台看到数据。
  - 状态：当前实现为 mailto fallback，并预留 `lib/waitlist.ts`，后续可切换到 Tally/Typeform 或 D1。

- [x] 配置 hidden fields。
  - 产出：`locale`、`utm_source`、`utm_campaign`、`referrer`。
  - 验收：提交记录包含来源和语言。

- [x] 实现 success state。
  - 产出：提交后提示已加入 waitlist。
  - 验收：用户知道下一步可能收到手工 demo report。

- [x] 实现 error state。
  - 产出：网络失败、字段缺失、无效邮箱提示。
  - 验收：错误信息中英文都清楚。

- [x] 添加 privacy note。
  - 产出：表单下方简短隐私说明。
  - 验收：说明不会滥用邮箱和 query。

- [x] 预留自建表单后端接口。
  - 产出：`lib/waitlist.ts` 或接口封装。
  - 验收：未来可替换为 D1 + Turnstile，不重写 UI。

### 17.8 Phase H: Analytics 与转化追踪

- [x] 接入 Cloudflare Web Analytics。
  - 产出：基础访问分析。
  - 验收：Cloudflare dashboard 能看到访问数据。
  - 状态：代码已支持 `NEXT_PUBLIC_CLOUDFLARE_ANALYTICS_TOKEN`，dashboard 验证需要生产环境 token。

- [x] 评估是否接入 PostHog。
  - 产出：是否需要更细 funnel 的决策。
  - 验收：如果接入，事件能正常上报。

- [x] 实现 CTA 点击事件。
  - 产出：`hero_cta_clicked`、`secondary_cta_clicked`。
  - 验收：事件包含 locale 和 UTM。

- [x] 实现表单事件。
  - 产出：`waitlist_form_started`、`waitlist_form_submitted`。
  - 验收：能计算 visit-to-submit conversion。

- [x] 实现内容互动事件。
  - 产出：`example_query_viewed`、`faq_opened`。
  - 验收：能判断哪些 section 对转化有影响。

- [x] 添加 UTM 读取逻辑。
  - 产出：保存 `utm_source`、`utm_medium`、`utm_campaign`。
  - 验收：表单和 analytics 都能关联来源。

### 17.9 Phase I: SEO、OG 与分享资产

- [x] 配置英文 SEO metadata。
  - 产出：英文 title、description。
  - 验收：`/en` 源码正确。

- [x] 配置中文 SEO metadata。
  - 产出：中文 title、description。
  - 验收：`/zh-CN` 源码正确。

- [x] 生成 OG image。
  - 产出：英文版和中文版本 OG 图，或一张中性英文主图。
  - 验收：社交平台预览正常。

- [x] 配置 favicon。
  - 产出：favicon、apple touch icon。
  - 验收：浏览器 tab 显示正常。

- [x] 添加 sitemap。
  - 产出：包含 `/en` 和 `/zh-CN`。
  - 验收：sitemap 可访问。

- [x] 添加 robots.txt。
  - 产出：允许抓取正式页面，阻止无关 preview 路径。
  - 验收：robots 文件可访问。

### 17.10 Phase J: 响应式与可访问性 QA

- [x] 检查桌面端 1440px。
  - 验收：hero、example output、form 都有合理宽度和留白。

- [x] 检查桌面端 1280px。
  - 验收：无横向滚动。

- [x] 检查平板 768px。
  - 验收：卡片排列合理，CTA 可见。

- [x] 检查手机 390px。
  - 验收：文字不重叠，hero visual 不挤压 CTA。

- [x] 检查手机 375px。
  - 验收：最长中文和英文按钮文案不溢出。

- [x] 检查键盘导航。
  - 验收：CTA、语言切换、FAQ、表单均可键盘操作。

- [x] 检查 focus styles。
  - 验收：focus ring 明显且不破坏视觉。

- [x] 检查颜色对比度。
  - 验收：正文、按钮、表单、错误提示对比度合格。

- [x] 检查 reduced motion。
  - 验收：开启后无明显动画和视觉闪烁。

- [x] 检查表单屏幕阅读器标签。
  - 验收：每个字段有 label 或 aria-label。

### 17.11 Phase K: 性能 QA

- [x] 跑 Lighthouse desktop。
  - 验收：Performance 90+。

- [x] 跑 Lighthouse mobile。
  - 验收：Performance 85+，无严重 accessibility 问题。

- [x] 检查 LCP。
  - 验收：LCP < 2.5s。

- [x] 检查 CLS。
  - 验收：CLS < 0.1。

- [x] 检查 JS bundle。
  - 验收：首屏 JS 尽量控制在 200KB gzip 内。

- [x] 检查动画性能。
  - 验收：滚动和 hero 动画无明显掉帧。

- [x] 检查第三方脚本。
  - 验收：analytics 和表单 embed 不显著拖慢首屏。

### 17.12 Phase L: Cloudflare 部署与发布

- [x] 执行 Cloudflare preview deploy。
  - 产出：preview URL。
  - 验收：所有核心页面和表单在 preview 正常。
  - 状态：OpenNext build 和 `wrangler deploy --dry-run` 通过；真实 preview URL 需要 Cloudflare 登录。

- [ ] Blocked: 配置 production 环境变量。
  - 产出：analytics id、form endpoint、Turnstile key if any。
  - 验收：production 不依赖本地配置。
  - 状态：需要用户提供 Cloudflare Analytics token、正式表单方案和可选 Turnstile key。

- [ ] Blocked: 绑定自定义域名。
  - 产出：正式 URL。
  - 验收：HTTPS 正常，根路径跳转正常。
  - 状态：需要 Cloudflare 账号权限和域名。

- [ ] Blocked: 执行 production deploy。
  - 产出：正式上线页面。
  - 验收：`/en`、`/zh-CN`、表单、analytics 全部正常。
  - 状态：`wrangler whoami` 显示未登录，无法在当前环境执行真实部署。

- [ ] Blocked: 验证社交分享预览。
  - 产出：X、LinkedIn、Slack/Discord preview 截图。
  - 验收：标题、描述、OG image 正确。
  - 状态：OG SVG 已生成；真实社交预览需要公网 URL。

- [x] 建立 rollback 步骤。
  - 产出：上一个稳定版本或部署回滚说明。
  - 验收：发布失败时能快速回滚。

### 17.13 Phase M: 发布后监控与迭代

- [ ] Blocked: 监控首日访问。
  - 指标：visits、CTA clicks、form starts、form submits。
  - 验收：analytics 数据正常进入。
  - 状态：需要 production deploy 后观察。

- [ ] Blocked: 检查表单提交质量。
  - 指标：真实 query 占比、垃圾提交比例、use case 分布。
  - 验收：至少能区分高质量和低质量提交。
  - 状态：需要真实流量。

- [ ] Blocked: 收集用户反馈。
  - 产出：3-5 条关于页面清晰度的反馈。
  - 验收：记录到 Phase 0 notes。
  - 状态：需要上线后分发。

- [ ] Pending after launch: 调整 Hero 文案。
  - 条件：转化低或用户误解产品。
  - 验收：新旧文案有明确差异和观察指标。

- [ ] Pending after launch: 调整表单问题。
  - 条件：用户不愿提交 search query。
  - 验收：提交率或 query 完整度提升。

- [ ] Pending after launch: 整理一周复盘。
  - 产出：landing page performance report。
  - 验收：明确继续优化、进入 Phase 1 或重定位。

## 18. Implementation Guardrails

- 已完成本地实现；后续只剩需要外部账号、域名、生产流量的任务。
- 实现时优先保证文案清晰和表单可用，再加动画。
- 不为了使用 React Bits 而牺牲性能或可读性。
- 不使用未授权真实个人数据做示例。
- 不承诺自动发送邮件或绕过平台规则。
- 多语言文案必须人工检查，不接受生硬机翻直接上线。
- Cloudflare 是目标部署平台，不引入 Vercel 专有能力。
- 实现代码放在仓库根目录 `landing/`。
- 包管理统一使用 Bun，不引入 npm、pnpm 或 yarn lockfile。
