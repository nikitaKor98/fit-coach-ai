# User Flows

## Purpose

This document describes the primary user journeys within FitCoach AI.

The goal is to define what users want to accomplish rather than how screens should look.

Every screen, component, and interaction should support one or more of these flows.

---

# Product Philosophy

Users do not open FitCoach AI to inspect metrics.

They open the application to answer questions such as:

- Should I train today?
- Why do I feel different?
- Am I improving?
- What should I do next?

The application exists to support these decisions.

---

# Core User Journey

Every interaction should follow the same high-level flow.

```text
Open App
↓
Understand Current State
↓
Understand Why
↓
Receive Recommendation
↓
Make Decision
↓
Take Action
↓
Measure Results
```

The product should minimize the time required to reach a confident decision.

---

# Flow 1 — Morning Check

## User Goal

Understand today's condition before training.

---

## Questions

- How is my body today?
- Should I train?
- Why?
- What should I focus on?

---

## Expected Experience

The user opens the application.

The first thing they see is a Daily Brief.

Example:

```text
Recovery is good today.

You are ready for your planned threshold session.

Pay attention to hydration because temperatures are expected to be high.
```

Supporting metrics are available below.

The user should understand today's situation in less than 10 seconds.

---

# Flow 2 — Workout Review

## User Goal

Understand how today's workout affected progress.

---

## Questions

- Was today's workout successful?
- Did I train too hard?
- Did I improve?
- What should I do tomorrow?

---

## Expected Experience

The workout summary appears first.

The coach explains the result.

Only then are detailed metrics presented.

Examples:

- Pace
- Heart rate
- Training load
- Splits
- Zones

---

# Flow 3 — Weekly Review

## User Goal

Understand long-term progress.

---

## Questions

- Am I improving?
- Am I recovering enough?
- Is my training balanced?
- What should change next week?

---

## Expected Experience

The coach summarizes the week.

The application highlights:

- Successes
- Risks
- Trends
- Recommendations

Supporting charts remain secondary.

---

# Flow 4 — Goal Tracking

## User Goal

Understand progress toward a personal goal.

Examples:

- Marathon
- Weight loss
- Weekly running distance
- Recovery consistency

---

## Questions

- Am I on track?
- What is limiting progress?
- What should I change?

---

## Expected Experience

The application explains:

Current status

↓

Progress trend

↓

Recommendation

↓

Supporting data

---

# Flow 5 — Coach Interaction

## User Goal

Ask for additional guidance.

Coach is available throughout the application.

Examples:

- Why is recovery lower?
- Why did today's recommendation change?
- Should I replace tomorrow's workout?
- Why is my HRV decreasing?

Coach always responds using the user's current context.

The user should never need to manually explain which workout or metric they are referring to.

---

# Decision Flow

Every recommendation follows the same structure.

```text
Context
↓
Insight
↓
Explanation
↓
Recommendation
↓
User Decision
↓
Outcome
```

The explanation is mandatory.

Recommendations without explanations reduce trust.

---

# Information Priority

Each screen should prioritize information in this order.

```text
Coach Insight
↓
Recommended Action
↓
Explanation
↓
Supporting Metrics
↓
Historical Data
```

Raw data should never appear before the conclusion.

---

# Cross-Screen Coach

AI Coach is not a dedicated page.

Coach appears naturally throughout the application.

Examples:

Today

- Daily Brief
- Readiness explanation

Workout

- Performance analysis
- Recovery impact

Progress

- Trend explanation

Goals

- Goal guidance
- Progress prediction

---

# User Feedback Loop

The application continuously improves recommendations.

```text
Recommendation
↓
User Decision
↓
Workout
↓
New Data
↓
Updated Context
↓
Better Recommendation
```

Every interaction helps the system understand the user better.

---

# Success Criteria

Every primary flow should allow the user to answer three questions quickly.

1. What is happening?
2. Why is it happening?
3. What should I do next?

If the interface fails to answer these questions clearly, the flow should be redesigned.

---

# Future Flows

The architecture should support future scenarios without major redesign.

Examples:

- Smart notifications
- Wearable notifications
- Adaptive training plans
- Injury prevention
- Nutrition guidance
- AI chat
- Race preparation
- Calendar integration

Future functionality should extend existing flows rather than introduce completely different interaction patterns.

---

# Design Principle

Every user flow should end with confidence.

The user should leave the application knowing exactly what to do next.

If the product creates uncertainty instead of clarity, the flow has failed.
