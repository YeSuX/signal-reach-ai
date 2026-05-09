# Benchmark Queries

本目录保存 SignalReach AI Phase 0 的第一版 benchmark query 数据集。

## 用途

这些 query 用于 Phase 1 技术 PoC 和后续搜索质量评估。每次调整搜索策略、Agent workflow、prompt、模型、抓取逻辑或评分规则后，都可以用同一批 query 重新运行，比较结果质量是否提升。

## 数据集组成

当前版本包含 20 条 query：

- 10 条 B2B outbound。
- 5 条 creator / influencer sourcing。
- 3 条 recruiting。
- 2 条 expert / networking。

## 评估维度

每条 query 的返回结果建议人工标注：

- `relevance`: 是否符合目标。
- `evidence_quality`: 是否有充分来源证明。
- `contactability`: 是否可触达。
- `utility`: 是否可直接用于业务行动。

## 来源

这些 query 基于 Phase 0 的公开社区调研和访谈候选线索抽象而来，主要参考 Reddit、Hacker News 和 X 中关于 outbound research、lead quality、intent signals、creator sourcing、recruiting 和 expert discovery 的真实讨论。

相关线索见：

- `../interview-candidates.md`
- `../benchmark-template.md`

