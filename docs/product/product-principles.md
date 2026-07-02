# Product Principles

## Purpose

This document defines the core product principles of FitCoach AI.

These principles guide product, design, and engineering decisions throughout the project.

---

# Product Vision

FitCoach AI is an AI-powered personal coaching system that helps users make better health and training decisions using wearable data and personal context.

The product is not just a fitness dashboard.

The product should transform complex health and training data into clear insights, explanations, and useful actions.

---

# Mission

Help users understand their body, avoid common training mistakes, and make better decisions every day.

---

# North Star

> Help users make better daily decisions using their personal health context.

Every feature should support this goal.

If a feature does not help the user understand their condition, avoid mistakes, or make a better decision, it should be reconsidered.

---

# Core Product Idea

FitCoach AI builds a personal context for each user.

This context includes:

- Wearable data
- Health metrics
- Recovery state
- Sleep
- Heart rate
- HRV
- Training history
- Goals
- User feedback
- Personal limitations

The product uses this context to generate:

- Insights
- Explanations
- Recommendations
- Training adjustments
- Long-term guidance

---

# Product Principles

## Decisions Over Data

The product should not show data just because data exists.

Raw metrics are useful only when they help the user answer a real question.

Examples:

- Should I train today?
- Why is my recovery lower?
- Am I improving?
- What should I change?
- Am I moving toward my goal?

---

## Context Over Single Metrics

No recommendation should be based on one metric alone.

The product should combine multiple signals before generating guidance.

For example, recovery should consider:

- HRV
- Resting heart rate
- Sleep
- Recent training load
- Historical baseline
- User feedback
- Current goal

---

## Explain Every Important Recommendation

Users should understand both:

- What is recommended
- Why it is recommended

A recommendation without explanation feels random.

A recommendation with clear reasoning builds trust.

---

## Coach Everywhere

AI Coach is not only a separate screen.

Coach is a decision-making layer across the whole product.

Examples:

- On Today, Coach explains readiness.
- On Progress, Coach explains trends.
- On Goals, Coach explains whether the user is on track.
- After a workout, Coach explains training impact.

---

## Simplicity Before Complexity

The first experience should be simple.

Advanced data should be available, but it should not dominate the main interface.

The product should show the most important conclusion first, then allow the user to explore details.

---

## Progressive Disclosure

The interface should reveal information step by step.

Recommended order:

```text
Insight
↓
Explanation
↓
Supporting metrics
↓
Raw data
```

Users should not be forced to interpret raw data manually.

---

# What FitCoach AI Should Not Become

FitCoach AI should not become:

- A clone of Garmin Connect
- A passive metrics dashboard
- A generic habit tracker
- A collection of disconnected charts
- A social network first
- A motivational app without real analysis

---

# Success Criteria

FitCoach AI succeeds when the user can quickly understand:

- How their body is doing today
- Whether they should train
- Why a recommendation was made
- What action matters most
- How their behavior affects long-term progress

The ideal experience is:

> Open the app, understand the situation, make a better decision.
