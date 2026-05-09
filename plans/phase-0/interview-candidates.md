# Phase 0 Interview Candidates

## 1. 说明

本文件记录从公开社区中发现的 Phase 0 用户访谈候选线索。候选人主要来自 Reddit、Hacker News 和 X 的公开讨论，筛选标准是他们明确表达过以下任一需求或痛点：

- outbound lead research 很耗时。
- 静态 lead list 衰减严重。
- ZoomInfo、Apollo 等数据库质量不稳定。
- 需要 intent signals、trigger events、job posts、funding、tech stack 等高信号。
- 需要从“找人”连接到 enrichment、personalized outreach 和 follow-up。
- 正在自己拼接 Clay、Apollo、n8n、Apify、Sales Nav、Reddit/X monitoring 等工具。

注意：这些是公开线索，不代表已经获得对方同意。联系时应尊重平台规则，避免批量骚扰，建议以“用户研究访谈”方式一对一、低频、透明地联系。

## 2. 优先级定义

| 优先级 | 含义 |
| --- | --- |
| P0 | 强相关，明确表达当前痛点，适合优先联系 |
| P1 | 相关，可能是顾问、专家、工具使用者或潜在 design partner |
| P2 | 辅助访谈对象，适合验证相邻场景或补充观点 |

## 3. 候选访谈对象

| # | 优先级 | 平台 | 用户 | 场景 | 观察到的痛点 / 线索 | 建议访谈切入点 | 来源 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | P0 | Reddit | `Any-Concert-8484` | B2B SaaS outbound | 在 startup 做 outbound，觉得最痛苦的是判断谁值得联系；需要从 200 个 leads 中筛出 10 个相关人选；希望有工具自动完成 intent / ICP match、find signals、enrich、trim down to perfect fit ICPs。 | 让他描述最近一次 outbound research 任务，追问“理想工具如何从信号到名单再到外联”。 | https://www.reddit.com/r/SaaS/comments/1rwj03o/outbound_research_is_killing_me_need/ |
| 2 | P0 | Reddit | `Major_Cable_8079` | Sales operations / outbound | 团队过去依赖 ZoomInfo lists，现在 bounce rate 高、title 过期、direct dial 失效、reply rate 下滑；已经尝试 intent data、ICP tightening 和 Sales Nav filters。 | 访谈数据衰减、验证、signal-based sourcing 和当前 outbound stack。 | https://www.reddit.com/r/SalesOperations/comments/1sfotxw/how_are_you_actually_finding_highquality_leads/ |
| 3 | P0 | Reddit | `Character_Cable_1531` | B2B cold outreach research | 正在研究如何选择最值得写进外联的 pain point，认为 CEO 亲自做 manual outbound lead research 是很强的购买信号。 | 访谈“什么样的公开证据能让他认为一个 lead 值得联系”。 | https://www.reddit.com/r/b2b_sales/comments/1rg7zx6/choosing_which_pain_point_was_truly_worth_the/ |
| 4 | P0 | Reddit | `KOPONgwapo` | BDR / agency sales | 作为网站和广告代理的 BDR，想知道如何持续找到 qualified leads、什么 outreach 有效、哪些工具能让 closing 更可预测。 | 访谈早期 BDR 如何从零建立 prospecting workflow。 | https://www.reddit.com/r/salestechniques/comments/1qhrps5/how_do_you_actually_find_leads_and_close_sales/ |
| 5 | P0 | Reddit | `Jaded_Platform1723` | B2B sales | 明确表示自己在 B2B sales 中很混乱，想知道别人如何找 leads 并 close deals。 | 适合做新手 outbound 用户访谈，理解 onboarding 和模板需求。 | https://www.reddit.com/r/salestechniques/comments/1qhrps5/how_do_you_actually_find_leads_and_close_sales/ |
| 6 | P0 | Reddit | `Original-External-93` | Lead data research provider | 自称 B2B Lead Data Research & Prospecting Specialist，但在获客和定位上困难；强调自己提供 ICP-targeted leads，而不是 spray and pray。 | 访谈 lead data service provider 的供给侧流程和客户真正关心的交付标准。 | https://www.reddit.com/r/LeadGeneration/comments/1rhjzpy/struggling_with_client_acquisition/ |
| 7 | P0 | Reddit | `Low_Concentrate_757` | Lead gen service buyer research | 正在询问 lead generation 服务的痛点、期望 lead 数量、服务商经验，尤其关注保险行业 lead 质量。 | 访谈垂直行业 lead gen buyer research 方法和质量定义。 | https://www.reddit.com/r/InsuranceAgent/comments/1sdys5w/problems_and_painpoints_with_leadgen/ |
| 8 | P1 | Reddit | `Conscious-Month-7734` | Outbound enrichment / scoring | 认为多数 data provider 给的是 contact information，不给 context；建议用 Clay 多源 enrichment 和 AI 做 relevance score。 | 访谈从 contact data 到 context / scoring 的工作流。 | https://www.reddit.com/r/SaaS/comments/1rwj03o/outbound_research_is_killing_me_need/ |
| 9 | P1 | Reddit | `mentiondesk` | Community / forum signal monitoring | 提到通过 community 和 forum 发现目标用户，使用 ParseStream 监控 Reddit 和 X 上的相关 conversation 和 leads。 | 访谈 social intent signals、Reddit/X monitoring 的实际效果。 | https://www.reddit.com/r/SaaS/comments/1rwj03o/outbound_research_is_killing_me_need/ |
| 10 | P1 | Reddit | `Safe_Comfortable_211` | Intent-based outbound | 建议用 live conversations、Apollo/Clay enrichment、Pulse for Reddit 等组合，强调先过滤、再发更少但更高上下文的信息。 | 访谈“少量高质量触达”与“自动化找信号”的边界。 | https://www.reddit.com/r/SaaS/comments/1rwj03o/outbound_research_is_killing_me_need/ |
| 11 | P1 | Reddit | `SensitiveCold1662` | Custom outbound automation | 不喜欢泛化 intent tools，自己用 n8n 和 Apify 每日抓 LinkedIn posts、niche websites，做 hyper-personalized outreach。 | 访谈自建 workflow 的原因、维护成本和可替代性。 | https://www.reddit.com/r/SaaS/comments/1rwj03o/outbound_research_is_killing_me_need/ |
| 12 | P1 | Reddit | `mattsand9` | Outbound sales practitioner / builder | 表示自己 full-time 做 outbound sales，正在做 RepBuddy.io，想解决 personalization 和 intent 问题。 | 适合竞品/同类 builder 访谈，了解 SDR 工具使用者视角。 | https://www.reddit.com/r/SaaS/comments/1rwj03o/outbound_research_is_killing_me_need/ |
| 13 | P1 | Reddit | `Patrick_quean` | AI lead search user | 提到 manual filtering 很耗时，改用 ListKit 的 AI-powered search，需要清楚定义 ICP。 | 访谈 AI search 在实际 prospecting 中哪里有效、哪里不足。 | https://www.reddit.com/r/SalesOperations/comments/1sfotxw/how_are_you_actually_finding_highquality_leads/ |
| 14 | P1 | Reddit | `Cautious_Pen_674` | Account selection / data decay | 认为 static lists decay fast，要从真实 evaluation signals 出发映射 actual buyers，但 coverage 和 match rates 是约束。 | 访谈 account signals、buyer mapping 和 coverage tradeoff。 | https://www.reddit.com/r/SalesOperations/comments/1sfotxw/how_are_you_actually_finding_highquality_leads/ |
| 15 | P1 | Reddit | `David_Fastuca` | Outbound quality strategy | 强调不要优化 volume，应关注 intent data、ICP tightening、warm signals 和 account selection。 | 访谈高质量 outbound 的评价体系和团队执行方式。 | https://www.reddit.com/r/SalesOperations/comments/1sfotxw/how_are_you_actually_finding_highquality_leads/ |
| 16 | P1 | Reddit | `domino_27` | Lead decay / signal tracking | 认为 outbound 的问题不是没有更多 leads，而是 lead decay、bad timing、no follow-up、no signal tracking；开始跟踪 funding、hiring、job changes、LinkedIn engagement。 | 访谈 lead decay、重新激活 CRM 和 buying signal tracking。 | https://www.reddit.com/r/salestechniques/comments/1m2bd6l/struggling_to_find_more_leads_heres_what_actually/ |
| 17 | P1 | Reddit | `SlumberJackB` | Signal tracking learner | 在 lead decay 讨论中追问“到底如何 tracking buying signals”。 | 适合访谈普通用户对 signal tracking 的理解门槛。 | https://www.reddit.com/r/salestechniques/comments/1m2bd6l/struggling_to_find_more_leads_heres_what_actually/ |
| 18 | P1 | Reddit | `Tasty_Amount6342` | Trigger-based prospecting | 强调 B2B lead gen 仍主要依赖 outbound，但要基于 funding、new hires、tech stack changes、expansion 等 intent signals；同时强调 contact data quality。 | 访谈 trigger-based prospecting 和数据质量如何一起影响 pipeline。 | https://www.reddit.com/r/LeadGeneration/comments/1ojuxzp/lead_generation/ |
| 19 | P1 | Reddit | `rudythetechie` | Intent data / warm loops | 认为 outbound 在 targeting sharp 时有效，最好的 leads 来自 warm loops、referrals 或能捕捉 buyer mid-problem 的 intent data。 | 访谈“mid-problem buyer”如何被识别。 | https://www.reddit.com/r/LeadGeneration/comments/1ojuxzp/lead_generation/ |
| 20 | P1 | Reddit | `Sensitive-Ease2587` | Insurance lead gen | 认为 raw volume cold outreach 令人疲惫，更喜欢 trigger events、renewal months、透明数据源和低量高 intent；尝试过 Apollo、Clay、Pulse for Reddit。 | 访谈垂直行业中 trigger-based lead gen 的具体信号和数据源。 | https://www.reddit.com/r/InsuranceAgent/comments/1sdys5w/problems_and_painpoints_with_leadgen/ |
| 21 | P2 | Reddit | `Unfair-Connection904` | Insurance / lead quality | 明确说最大痛点是 lead quality 而不是 volume，过去浪费很多时间追逐零 intent 的表单 leads。 | 访谈“高质量 lead”的主观标准和低质量 lead 的成本。 | https://www.reddit.com/r/InsuranceAgent/comments/1sdys5w/problems_and_painpoints_with_leadgen/ |
| 22 | P2 | Reddit | `PossibilityMean5251` | Insurance commercial lines | 提到 contractor niche 的 cold outreach 很难，直拨手机和 verified mobiles 对触达决策人有帮助。 | 访谈 contactability 在垂直行业 outbound 中的价值。 | https://www.reddit.com/r/InsuranceAgent/comments/1sdys5w/problems_and_painpoints_with_leadgen/ |
| 23 | P2 | Hacker News | `adam` | Niche B2B sales | 在 AnswerGrid 发布讨论中提到自己卖 B2B crowd forecasting 软件到政府、智库和研究机构，希望能按 role 搜索 Chief Risk Officers，并 review background、get contact info、contact them。 | 访谈 niche B2B founder 对 role-based people search 的需求。 | https://news.ycombinator.com/item?id=41322730 |
| 24 | P2 | Hacker News | `oliverx0` | Technical founder learning sales | 作为 technical founder 进入 sales-oriented role，询问 sales stack，尤其关注 lead generation、LinkedIn outreach、email sending、公司信息收集和 follow-up sequence。 | 访谈技术创始人第一次做销售时的工具栈和学习成本。 | https://news.ycombinator.com/item?id=27525819 |
| 25 | P2 | X | `@levikmunneke` | Outbound automation operator / creator | 公开分享用 Claude Code、Google Maps、LinkedIn、X monitoring 做高量 outbound 系统，强调 public data hook、low volume/high intent channel 和自动化。 | 适合做专家访谈，理解“自动化 outbound”叙事与合规边界。 | https://x.com/levikmunneke/status/2035123865463267798 |

## 4. 推荐优先联系名单

如果只联系 15 个，建议优先：

1. `Any-Concert-8484`
2. `Major_Cable_8079`
3. `Character_Cable_1531`
4. `KOPONgwapo`
5. `Jaded_Platform1723`
6. `Original-External-93`
7. `Low_Concentrate_757`
8. `Conscious-Month-7734`
9. `mentiondesk`
10. `Safe_Comfortable_211`
11. `SensitiveCold1662`
12. `Patrick_quean`
13. `Cautious_Pen_674`
14. `domino_27`
15. `Tasty_Amount6342`

如果联系 25 个，则使用上表完整名单。

## 5. 建议私信模板

### Reddit / HN

```text
Hi, I saw your comment about outbound research / lead quality / intent signals.

I'm doing customer research for a new AI people-search tool. The goal is to help teams describe who they want to find, get evidence-backed matches, and turn those into personalized outreach drafts.

I'm not selling anything right now. I’m trying to understand how people actually find high-quality leads today.

Would you be open to a 20-minute call? In return, I can manually help with one real search task and send back a short report.
```

### X

```text
Saw your post about outbound automation and signal-based prospecting.

I'm researching how teams find high-quality people for outbound without relying on stale lead lists. Would love to ask a few questions about your workflow and what signals actually matter.

No pitch. Happy to share the notes after.
```

## 6. 访谈记录字段

每次联系或访谈后，建议记录：

```yaml
candidate:
platform:
profile_url:
source_thread:
contact_status: not_contacted | contacted | replied | scheduled | interviewed | declined
segment:
role_guess:
pain_points:
tools_mentioned:
real_query_provided:
pricing_signal:
design_partner_fit: low | medium | high
notes:
next_action:
```

## 7. 初步洞察

从这些公开讨论中已经能看到几个重复模式：

- 用户不缺联系人数据库，缺的是能判断“谁现在值得联系”的上下文。
- ZoomInfo、Apollo 等静态数据源的主要问题是过期、bounce、title 变化、低相关。
- 用户正在把 Sales Nav、Clay、Apollo、n8n、Apify、Reddit/X monitoring、email verifier 拼成工作流。
- “intent signals”被反复提到，但每个人对 intent 的定义不一样。
- 高质量 outbound 的共同方向是少发、发准、基于证据个性化。
- 用户愿意接受 AI，但前提是结果可解释、有来源、可验证。

这些洞察支持 SignalReach AI 在 Phase 0 优先验证 B2B outbound，而不是先做完整 CRM 或自动群发工具。

