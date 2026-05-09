# SignalReach AI Roadmap

## 1. Roadmap 目标

本文档定义 SignalReach AI 从概念验证、MVP、私测、公开发布到商业化增长的执行路线。

SignalReach AI 的产品核心不是“又一个联系人数据库”，而是一个 AI-native people search and outreach agent。路线规划必须围绕一个关键问题展开：

> 用户描述目标人群后，SignalReach 是否能比传统关键词搜索、人工搜索和现有 lead 工具更快找到更合适、可触达、可解释的人？

因此前 6 个月的核心不是做全量平台，而是验证三件事：

1. **搜索质量**：结果是否足够相关、覆盖足够好、能直接行动。
2. **信任链路**：每个推荐是否有证据、来源和解释。
3. **转化价值**：搜索结果是否能带来回复、会议、候选人沟通或合作机会。

## 2. 产品战略

### 2.1 推荐切入点

优先切入 **B2B outbound lead generation**。

原因：

- 付费意愿明确。
- 结果价值容易衡量，例如回复率、会议预约率、合格线索数。
- 用户痛点强烈，现有流程高度重复。
- 与后续 CRM、邮件、自动 follow-up 集成天然衔接。
- 相比招聘和创作者合作，B2B 销售场景更容易形成稳定复购。

第二优先场景是 **creator / influencer sourcing**。

原因：

- 公开信息丰富。
- 搜索质量和解释能力容易展示。
- 适合做公开 demo 和内容传播。
- 但商业化路径可能更分散，需要更明确的垂直行业切口。

招聘场景建议放到第三阶段，因为候选人数据、合规、ATS 集成和隐私要求更复杂。

### 2.2 产品定位

初期定位：

> AI people search agent for high-signal outbound.

中文表达：

> 面向高质量 outbound 的 AI 找人和触达助手。

不要一开始宣传成：

- CRM 替代品。
- 邮件群发工具。
- LinkedIn 爬虫。
- 万能 AI 销售代理。

更准确的宣传重点是：

- Describe who you want.
- Get evidence-backed matches.
- Turn search results into personalized outreach.

### 2.3 核心差异化

| 维度 | 传统工具 | SignalReach AI |
| --- | --- | --- |
| 输入方式 | 关键词、筛选器、布尔搜索 | 自然语言目标描述 |
| 搜索范围 | 单一数据库或平台 | 跨公开网络和多来源证据 |
| 结果形式 | 联系人列表 | 带证据、解释、评分的人选 |
| 操作链路 | 搜索和外联分散 | 从搜索到触达草稿闭环 |
| 质量优化 | 靠手动筛选 | 用户反馈驱动排序和搜索策略 |

## 3. 总体阶段规划

| 阶段 | 时间 | 目标 | 核心产出 |
| --- | --- | --- | --- |
| Phase 0 | 第 0-2 周 | 问题验证和定位收敛 | 目标客群、benchmark、落地页、demo 脚本 |
| Phase 1 | 第 3-6 周 | 技术 PoC | 最小 people search pipeline |
| Phase 2 | 第 7-12 周 | MVP 私测 | 可用 Web App、搜索结果、解释、导出 |
| Phase 3 | 第 13-18 周 | Design Partner 试点 | 10-20 个真实团队使用 |
| Phase 4 | 第 19-24 周 | Public Beta | 公开发布、内容增长、早期付费 |
| Phase 5 | 第 25-36 周 | 商业化和规模化 | 定价、集成、团队协作、稳定增长 |
| Phase 6 | 第 37 周以后 | 平台化 | API、Skills、生态和高级自动化 |

## 4. Phase 0: 问题验证与定位收敛

### 4.1 时间

第 0-2 周。

### 4.2 阶段目标

在写大量代码前，确认用户真的愿意为“更快找到高质量可触达人选”付费，并确定第一个垂直场景。

### 4.3 核心任务

#### 用户访谈

访谈 15-25 个潜在用户：

- B2B founder。
- SDR / AE / growth lead。
- Agency owner。
- Creator marketing manager。
- Recruiter。

重点问题：

- 你现在如何找目标人？
- 一次完整 sourcing 要花多久？
- 最痛苦的是找不到人、判断不准、找不到联系方式，还是写外联？
- 你用过 Apollo、Clay、LinkedIn Sales Navigator、Exa、Juicebox、PhantomBuster、Instantly、n8n 吗？
- 如果一个工具能给你 30 个高匹配且有解释的人选，你愿意付多少钱？
- 你最希望第一版支持哪个场景？

#### 建立 benchmark

创建 20 条真实搜索任务：

- 10 条 B2B sales leads。
- 5 条 creator sourcing。
- 5 条 hiring / expert discovery。

每条任务需要人工标注：

- 理想结果示例。
- 合格标准。
- 不合格标准。
- 必须有的证据类型。
- 可接受的联系方式类型。

#### 品牌和定位验证

完成：

- 项目名初步确认：SignalReach AI。
- 购买或保留域名候选。
- Landing page 文案。
- 3 个 demo query。
- 1 个 90 秒产品演示脚本。
- Waitlist 表单。

### 4.4 宣传动作

此阶段不要大规模宣传产品能力，重点宣传问题和观点。

可发布内容：

- “Why people search is still broken in the AI era”
- “Filters are the wrong interface for finding people”
- “The future of outbound is evidence-backed search, not bigger lead lists”
- 公开构建日志：正在做一个自然语言找人的 AI agent。

发布渠道：

- X / Twitter。
- LinkedIn。
- Indie Hackers。
- Hacker News 的 Show HN 准备稿。
- Product Hunt upcoming page。
- 目标用户所在 Slack / Discord / founder communities。

### 4.5 成功标准

- 至少 15 个有效访谈。
- 至少 50 个 waitlist 注册。
- 至少 5 个用户愿意提供真实 search query。
- 明确第一个垂直场景，建议选择 B2B outbound。
- 完成 20 条 benchmark query。

## 5. Phase 1: 技术 PoC

### 5.1 时间

第 3-6 周。

### 5.2 阶段目标

验证 AI people search pipeline 是否能跑通，并在至少一个垂直场景中明显优于人工关键词搜索。

### 5.3 产品范围

PoC 可以没有完整 UI，但必须有可演示闭环：

1. 输入自然语言 search query。
2. 系统解析目标条件。
3. 系统生成搜索计划。
4. 系统调用搜索 API。
5. 系统抓取公开网页。
6. 系统抽取人物信号。
7. 系统合并同一人物。
8. 系统生成匹配评分和解释。
9. 系统输出结构化结果。

### 5.4 技术任务

- 建立 repo 结构。
- 搭建 FastAPI。
- 搭建 Postgres + pgvector。
- 搭建 Redis + Celery。
- 实现 `search_tasks`、`sources`、`persons`、`match_scores` 数据表。
- 接入一个搜索 API，例如 Serper 或 Brave Search API。
- 接入 Firecrawl 或 Crawlee。
- 实现 intent parser。
- 实现 search planner。
- 实现 evidence extractor。
- 实现 entity resolver 的第一版规则。
- 实现 scoring engine。
- 保存 prompt version 和 model name。

### 5.5 AI / Agent 策略

PoC 阶段可以尝试两条线并行：

- 主线：LangGraph 可控 workflow。
- 实验线：Hermes Agent / hermes-agent Skills 做独立 worker 原型。

判断标准：

- 哪条线更稳定。
- 哪条线更容易输出结构化 JSON。
- 哪条线更容易审计和复现。
- 哪条线成本更可控。
- 哪条线更容易接入产品后端。

生产默认仍以自有 API + Postgres + LangGraph workflow 为主。

### 5.6 宣传动作

开始展示真实搜索案例，但不要夸大自动化能力。

可发布内容：

- “I gave an AI agent this target customer description. Here are the people it found.”
- “Evidence-backed lead search: every recommendation should cite its source.”
- “Building the benchmark for AI people search.”
- Demo GIF：输入一句话，返回带证据的人选列表。

### 5.7 成功标准

- 20 条 benchmark query 中，至少 10 条能稳定返回可用结果。
- 每个候选人至少有 1 个来源链接。
- 人工评估 relevant result rate 超过 40%。
- 单个任务可在 5-10 分钟内完成。
- 能生成一份可演示的 markdown / JSON report。

## 6. Phase 2: MVP 私测版

### 6.1 时间

第 7-12 周。

### 6.2 阶段目标

做出第一版真实用户可用的 Web App，让用户能自己创建搜索任务、查看结果、保存候选人、生成外联草稿和导出。

### 6.3 产品功能

必须有：

- 登录和团队空间。
- New Search 页面。
- Search Task 列表。
- Search Results 页面。
- Person Detail 页面。
- 匹配评分和解释。
- 证据链接展示。
- 保存、隐藏、不相关反馈。
- 外联草稿生成。
- CSV 导出。

暂不做：

- 自动发送邮件。
- 完整 CRM。
- 复杂团队权限。
- 自定义字段系统。
- 大规模批量导入。

### 6.4 技术任务

- Next.js Web App。
- Tailwind + shadcn/ui。
- TanStack Table。
- 任务状态轮询。
- 搜索结果分页。
- 基础错误处理。
- 后台任务重试。
- 任务事件日志。
- 导出服务。
- Prompt 和 schema 版本化。
- 基础 analytics：PostHog。

### 6.5 UX 原则

- 结果页不要像搜索引擎，要像可行动的工作台。
- 每个人选必须展示“为什么推荐”。
- 每个 AI 结论都尽量有证据入口。
- 外联草稿默认是草稿，不是自动发送。
- 用户反馈按钮要明显：Save、Hide、Not relevant、Find similar。

### 6.6 宣传动作

启动私测名单。

动作：

- 从 waitlist 中选择 20-30 人。
- 每周发布一次 build log。
- 公开展示前后对比：人工搜索 vs SignalReach。
- 做 3 个垂直案例页面。
- 给每个私测用户提供一次 onboarding call。

可发布内容：

- “From target description to qualified leads in 8 minutes”
- “How SignalReach ranks people: relevance, coverage, utility”
- “Why AI people search needs citations”

### 6.7 成功标准

- 20 个私测用户。
- 每周至少 50 个真实 search task。
- Relevant result rate 超过 50%。
- Saved person rate 超过 20%。
- 30% 以上用户使用外联草稿。
- 至少 5 个用户每周重复使用。

## 7. Phase 3: Design Partner 试点

### 7.1 时间

第 13-18 周。

### 7.2 阶段目标

从“工具可用”进入“业务有价值”。找到 10-20 个 design partners，围绕真实 outbound 或 creator sourcing 任务迭代质量。

### 7.3 Design Partner 标准

优先选择：

- 每周有稳定 sourcing 需求。
- 愿意提供真实 query 和结果反馈。
- 愿意参与访谈。
- 有明确业务结果指标。
- 愿意在产品有效后付费。

不优先选择：

- 只想试用一次。
- 需求过于泛化。
- 希望自动化大规模群发。
- 无法提供反馈。

### 7.4 产品任务

- 改进搜索质量。
- 支持搜索任务模板。
- 支持“找更多类似对象”。
- 支持更强的候选人去重。
- 支持更清晰的证据面板。
- 支持导出到 HubSpot / Salesforce CSV 格式。
- 支持 Gmail 草稿创建，仍需用户确认发送。
- 支持团队共享搜索任务。

### 7.5 运营动作

- 每个 design partner 建立 shared Slack / email channel。
- 每周同步一次使用情况。
- 帮用户手动分析失败 query。
- 记录高质量案例。
- 要求用户提供 before / after 工作流对比。

### 7.6 宣传动作

开始做有证据的案例宣传。

内容方向：

- Case study：一个用户如何从 3 小时搜索降到 20 分钟。
- Benchmark report：SignalReach vs manual Google search。
- Teardown：为什么某些 leads 被判断为高匹配。
- Public changelog：搜索质量如何提升。

### 7.7 成功标准

- 10-20 个 design partners。
- 至少 3 个愿意付费。
- 每周 200+ search tasks。
- Relevant result rate 超过 60%。
- Contact availability rate 超过 35%。
- 外联草稿使用率超过 40%。
- 至少 2 个可公开或匿名案例。

## 8. Phase 4: Public Beta 与公开发布

### 8.1 时间

第 19-24 周。

### 8.2 阶段目标

完成 Public Beta，建立稳定获客渠道，并验证早期定价。

### 8.3 发布前检查

产品必须具备：

- 稳定登录。
- 任务失败可解释。
- 结果可导出。
- 基础计费或 usage tracking。
- 使用条款、隐私政策、反滥用政策。
- Demo workspace。
- Landing page。
- Documentation。
- Public changelog。
- Customer support 入口。

### 8.4 定价建议

Public Beta 可使用简单定价：

| 套餐 | 价格 | 适合用户 |
| --- | --- | --- |
| Free | 免费 | 体验，每月少量 search credits |
| Pro | $39-$99 / 月 | founder、solo growth、recruiter |
| Team | $199-$499 / 月 | 小型销售或增长团队 |
| Custom | 定制 | 高用量、API、集成需求 |

核心计费单位建议：

- Search credits。
- Enrichment credits。
- Seats。

不要只按 seat 收费，因为 AI 搜索和抓取有真实成本。

### 8.5 发布渠道

优先渠道：

- Product Hunt。
- Hacker News Show HN。
- LinkedIn founder-led content。
- X / Twitter build in public。
- Reddit 相关社区，但要避免硬广。
- Indie Hackers。
- AI tools directory。
- Sales / growth newsletters。

### 8.6 Product Hunt 发布准备

至少提前 4 周准备：

- 1 分钟产品视频。
- 3 张清晰截图。
- 1 个强 demo query。
- Founder story。
- 前 20 个支持者。
- 3 个 design partner quote。
- FAQ。
- Launch offer。

Product Hunt tagline 建议：

> Find high-signal leads from a natural language description.

Short description：

> SignalReach AI finds evidence-backed people matches across the web and turns them into personalized outreach drafts.

### 8.7 宣传节奏

发布前 2 周：

- 每 2 天发一个真实 demo。
- 公布 benchmark 方法。
- 发 waitlist 邀请。

发布当天：

- Founder post。
- Demo video。
- Case study。
- Product Hunt。
- LinkedIn 长文。
- X thread。

发布后 2 周：

- 分享发布数据。
- 分享用户反馈。
- 发布改进日志。
- 继续 case study。

### 8.8 成功标准

- Public Beta 注册 500+。
- 激活用户 100+。
- 付费用户 10+。
- MRR 达到 $1k-$3k。
- 每周 search tasks 500+。
- 生成 3 个可复用案例。

## 9. Phase 5: 商业化与规模化

### 9.1 时间

第 25-36 周。

### 9.2 阶段目标

从 beta 工具变成稳定 SaaS，重点提升 retention、搜索质量、团队协作和集成能力。

### 9.3 产品重点

- CRM 导出和轻量同步。
- Gmail / Outlook 草稿。
- Follow-up sequence 草稿。
- Team workspace。
- Saved audience。
- Search templates。
- Result quality feedback loop。
- Usage dashboard。
- Admin billing。
- 失败任务自动重试和补偿。

### 9.4 增长重点

建立 3 条稳定获客渠道：

1. Founder-led content。
2. SEO landing pages。
3. Partner / agency channel。

SEO 页面方向：

- AI lead search tool。
- Find B2B SaaS decision makers。
- AI influencer discovery。
- Sales lead research automation。
- Apollo alternative for high-signal leads。
- Clay alternative for AI people search。

内容资产：

- Benchmark reports。
- Search templates library。
- Outreach examples library。
- Industry lead lists, 但要注意合规和质量。
- Playbooks for founders, SDRs, agencies。

### 9.5 销售动作

- 对高活跃 free/pro 用户做 founder-led sales。
- 给 agency 和 outbound consultants 提供 team plan。
- 建立每周 demo webinar。
- 对 design partners 转正式合同。

### 9.6 成功标准

- MRR 达到 $10k-$25k。
- 付费用户 100+ 或团队客户 20+。
- 月留存超过 40%。
- 付费团队每周使用 3 次以上。
- Search-to-saved-person 转化率超过 20%。
- 外联草稿使用率超过 50%。

## 10. Phase 6: 平台化与生态

### 10.1 时间

第 37 周以后。

### 10.2 阶段目标

将 SignalReach 从单一产品扩展为 people search 基础设施。

### 10.3 产品方向

- API。
- SDK。
- Webhooks。
- Custom Skills。
- Bring your own data。
- Private knowledge base。
- Advanced enrichment。
- Workflow builder。
- CRM / ATS 双向同步。
- Role-based access control。

### 10.4 开源策略

可以开源部分 Skills，但不要开源核心排名、评分和数据 pipeline。

适合开源：

- Search query planner examples。
- Company research skill。
- Contact enrichment interface。
- Benchmark schema。
- Prompt templates。
- Demo workflow。

不建议开源：

- 核心 entity resolution 策略。
- 评分权重和质量优化细节。
- 生产级数据源策略。
- 商业化 enrichment 适配器。

### 10.5 成功标准

- API 客户 10+。
- 生态集成 5+。
- 月搜索任务 50k+。
- MRR 达到 $50k+。
- 有明确的高留存垂直场景。

## 11. 产品宣传路线

### 11.1 宣传主线

宣传不要围绕“我们用了很强的 agent”，而要围绕用户结果：

- 找人更快。
- 推荐更准。
- 每个推荐有证据。
- 外联更具体。
- 从搜索到触达在一个流程里完成。

### 11.2 核心 message

英文：

> Stop searching with filters. Describe your ideal person and get evidence-backed matches ready for outreach.

中文：

> 不再用筛选器慢慢找人。直接描述目标对象，获得带证据、可触达、可行动的人选推荐。

### 11.3 内容栏目

| 栏目 | 频率 | 内容 |
| --- | --- | --- |
| Build log | 每周 1 次 | 产品进展、技术挑战、搜索质量改进 |
| Search teardown | 每周 1-2 次 | 公开拆解一个搜索任务和推荐理由 |
| Benchmark update | 每月 1 次 | 搜索质量、覆盖率、结果可用率 |
| Customer story | 每月 1-2 次 | 用户如何用产品找到 leads / creators |
| Template drop | 每周 1 次 | 发布可复用搜索模板和外联模板 |

### 11.4 Demo 场景

推荐准备 5 个稳定 demo：

1. 找美国 B2B SaaS 的 RevOps 负责人。
2. 找最近融资的 AI 工具公司增长负责人。
3. 找做 AI productivity 内容的 YouTube 创作者。
4. 找适合 podcast guest outreach 的创始人。
5. 找有特定技术背景的专家或顾问。

每个 demo 都要展示：

- 用户输入。
- 搜索计划。
- 候选人结果。
- 匹配理由。
- 证据来源。
- 外联草稿。

## 12. 关键指标体系

### 12.1 产品质量指标

| 指标 | 目标 |
| --- | --- |
| Relevant Result Rate | Phase 2 达到 50%，Phase 3 达到 60% |
| Saved Person Rate | Phase 2 达到 20% |
| Contact Availability Rate | Phase 3 达到 35% |
| Outreach Draft Usage Rate | Phase 3 达到 40% |
| Task Success Rate | Phase 2 达到 80% |
| Median Task Completion Time | MVP 小于 10 分钟 |

### 12.2 增长指标

| 指标 | 目标 |
| --- | --- |
| Waitlist | Phase 0 达到 50，Phase 2 达到 300 |
| Activated Users | Public Beta 达到 100 |
| Weekly Search Tasks | Public Beta 达到 500 |
| Paid Customers | Public Beta 达到 10+ |
| MRR | Phase 5 达到 $10k-$25k |

### 12.3 留存指标

| 指标 | 目标 |
| --- | --- |
| Week 1 Retention | 30%+ |
| Monthly Retention | 40%+ |
| Repeat Search Rate | 50%+ |
| Team Expansion | 20% 付费团队增加 seat 或 credits |

## 13. 风险与调整策略

| 风险 | 信号 | 调整策略 |
| --- | --- | --- |
| 搜索质量不稳定 | 用户保存率低 | 缩小垂直场景，先做好一种 ICP |
| 成本过高 | 单次任务成本超过可接受价格 | 限制抓取深度，缓存来源，优化模型路由 |
| 用户只试不用 | 搜索多但保存少 | 增强模板、onboarding、结果解释和示例 |
| 用户想要群发工具 | 需求偏离产品定位 | 明确限制自动发送，强化高质量 outbound |
| 合规风险 | 用户要求抓私密或平台受限数据 | 建立数据来源策略和黑名单 |
| 竞争难差异化 | 用户认为只是 lead list | 强调证据、解释、反馈学习和端到端 workflow |

## 14. 推荐执行节奏

### 每周

- 迭代 1-2 个产品功能。
- 跑一次 benchmark。
- 发布 1 篇 build log。
- 访谈 3-5 个用户。
- 分析失败 search task。

### 每月

- 发布一次质量报告。
- 更新 landing page。
- 整理 1-2 个 case study。
- 复盘 pricing 和 conversion。
- 清理低价值功能需求。

### 每季度

- 重新确认目标市场。
- 复盘 retention。
- 评估是否扩展第二个垂直场景。
- 评估技术架构是否需要升级，例如 Celery 到 Temporal。

## 15. 当前下一步

建议立即执行以下 10 件事：

1. 确认第一个垂直场景：建议 B2B outbound。
2. 写出 20 条 benchmark query。
3. 做一个 landing page 和 waitlist。
4. 准备 3 个手动完成的 demo report。
5. 访谈 15 个潜在用户。
6. 搭建最小技术 PoC。
7. 每周公开记录构建过程。
8. 找 5 个 design partner。
9. 用真实 query 优化搜索和评分。
10. 在能稳定交付结果后再公开发布 Product Hunt。

## 16. 一句话路线总结

SignalReach AI 的路线应该是：先聚焦 B2B outbound，用高质量、带证据的人物搜索证明价值；再补齐外联草稿、导出和团队工作流；随后通过 design partners、案例和公开 benchmark 建立信任；最后扩展为可集成、可编排、可平台化的 AI people search infrastructure。

