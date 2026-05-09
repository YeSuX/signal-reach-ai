export type LandingContent = {
  nav: {
    product: string;
    examples: string;
    useCases: string;
    faq: string;
    language: string;
  };
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
    queryLabel: string;
    query: string;
    signalsLabel: string;
    signals: string[];
    topMatch: string;
    matchRole: string;
    scoreLabel: string;
    score: string;
    evidence: string;
  };
  problem: {
    eyebrow: string;
    title: string;
    body: string;
    traditional: string;
    signalreach: string;
    oldSteps: string[];
    newSteps: string[];
  };
  how: {
    eyebrow: string;
    title: string;
    steps: Array<{ title: string; body: string }>;
  };
  example: {
    eyebrow: string;
    title: string;
    query: string;
    cards: Array<{
      role: string;
      segment: string;
      score: string;
      why: string;
      evidence: string[];
      angle: string;
    }>;
  };
  useCases: {
    eyebrow: string;
    title: string;
    items: Array<{ title: string; query: string; result: string }>;
  };
  difference: {
    eyebrow: string;
    title: string;
    not: string[];
    pillars: Array<{ title: string; body: string }>;
  };
  form: {
    eyebrow: string;
    title: string;
    body: string;
    email: string;
    role: string;
    company: string;
    useCase: string;
    query: string;
    placeholderEmail: string;
    placeholderRole: string;
    placeholderCompany: string;
    placeholderQuery: string;
    submit: string;
    success: string;
    privacy: string;
    options: string[];
  };
  faq: {
    eyebrow: string;
    title: string;
    items: Array<{ q: string; a: string }>;
  };
  footer: {
    tagline: string;
    privacy: string;
  };
};

