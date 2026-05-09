# Phase 0 Benchmark Template

## 1. Benchmark 目的

Benchmark 用于衡量 SignalReach AI 是否能在真实 people search 任务中返回更相关、更可解释、更可行动的人选。

Phase 0 只需要建立数据集和人工标注标准，不需要自动化评测系统。

## 2. Query YAML 模板

```yaml
- id: b2b_001
  scenario: b2b_outbound
  source: user_interview
  target_user:
    role: founder
    company: example_company
    goal: book_sales_calls
  raw_query: >
    Find US-based B2B SaaS companies with RevOps or Sales Ops leaders,
    company size 50-500, recently hiring sales roles, preferably using Salesforce or HubSpot.
  parsed_criteria:
    target_roles:
      - RevOps
      - Sales Ops
    industries:
      - B2B SaaS
    locations:
      - United States
    company_size:
      min: 50
      max: 500
    signals:
      - recent sales hiring
      - Salesforce or HubSpot usage
  must_have:
    - person has relevant role
    - company matches target segment
    - evidence source exists
  nice_to_have:
    - recent company growth
    - public email
    - active LinkedIn profile
  disqualifiers:
    - consultant only
    - irrelevant industry
    - no evidence for current role
  required_evidence:
    - profile_url
    - company_url
    - role_evidence
  success_criteria:
    min_relevant_people: 10
    min_average_relevance: 2
    min_contactable_ratio: 0.3
```

## 3. 场景配额

| 场景 | 数量 |
| --- | --- |
| B2B outbound | 10 |
| Creator sourcing | 5 |
| Recruiting | 3 |
| Expert / networking | 2 |

## 4. 人工标注表

| 字段 | 取值 | 说明 |
| --- | --- | --- |
| result_id | text | 候选结果 ID |
| person_name | text | 人名 |
| relevance | 0 / 1 / 2 / 3 | 与目标匹配程度 |
| evidence_quality | 0 / 1 / 2 / 3 | 来源和证据质量 |
| contactability | 0 / 1 / 2 / 3 | 是否可触达 |
| utility | 0 / 1 / 2 / 3 | 是否可直接用于业务行动 |
| confidence | low / medium / high | 标注置信度 |
| notes | text | 标注理由 |

## 5. 评分定义

### Relevance

- 0：明显不相关。
- 1：部分相关，但缺失关键条件。
- 2：基本相关，少量条件不明确。
- 3：高度相关，符合主要条件。

### Evidence Quality

- 0：无来源。
- 1：来源弱或无法证明关键事实。
- 2：有来源，能证明部分关键事实。
- 3：来源充分，能证明主要匹配点。

### Contactability

- 0：无法触达。
- 1：只有弱触达渠道。
- 2：有社交主页或公司渠道。
- 3：有高置信度邮箱、LinkedIn 或明确联系入口。

### Utility

- 0：无法行动。
- 1：需要大量人工补充。
- 2：可用于进一步研究。
- 3：可直接进入外联或候选名单。

## 6. Phase 1 质量目标

Phase 1 PoC 通过标准：

- 20 条 query 至少 10 条能返回可用结果。
- 每条可用 query 至少 10 个候选人。
- 每个候选人至少 1 个来源链接。
- 平均 relevance 大于等于 2。
- contactable ratio 大于等于 30%。

