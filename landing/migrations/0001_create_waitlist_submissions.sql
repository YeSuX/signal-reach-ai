-- 中文注释：存储 waitlist 表单提交，保留 UTM 与基础请求信息便于后续筛选 demo report。
CREATE TABLE IF NOT EXISTS waitlist_submissions (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  email TEXT NOT NULL,
  role TEXT NOT NULL,
  company TEXT,
  use_case TEXT NOT NULL,
  query TEXT NOT NULL,
  locale TEXT NOT NULL,
  utm_source TEXT,
  utm_medium TEXT,
  utm_campaign TEXT,
  ip_hash TEXT,
  user_agent TEXT,
  created_at TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now'))
);

CREATE INDEX IF NOT EXISTS idx_waitlist_submissions_email
ON waitlist_submissions(email);

CREATE INDEX IF NOT EXISTS idx_waitlist_submissions_created_at
ON waitlist_submissions(created_at);
