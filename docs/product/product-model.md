# Product Model

## Purpose

This document describes how FitCoach AI transforms wearable data and personal context into useful coaching decisions.

It defines the core product loop and separates the responsibilities between analytics and coaching.

---

# Core Product Loop

FitCoach AI works as a continuous feedback loop.

```text
Collect
↓
Normalize
↓
Enrich
↓
Analyze
↓
Detect Patterns
↓
Build Context
↓
Generate Insights
↓
Recommend Actions
↓
User Decision
↓
Execute
↓
Measure Results
↓
Learn
```

The product does not end when a recommendation is generated.

The user can accept, ignore, or adjust the recommendation.
The result becomes new context for future recommendations.

---

# Information Transformation

FitCoach AI transforms data through several levels.

```text
Wearable Data
↓
Raw Data
↓
Normalized Data
↓
Enriched Data
↓
Metrics
↓
Patterns
↓
Insights
↓
Recommended Actions
↓
Feedback
```

Each level adds more meaning.

Raw data describes what was measured.
Metrics describe what it means.
Patterns describe what is changing.
Insights explain why it matters.
Actions suggest what the user should do next.

---

# Analytics Engine

## Purpose

The Analytics Engine is responsible for understanding what is happening with the user.

It works with data, metrics, trends, and patterns.

It does not directly tell the user what to do.

---

## Main Question

> What is happening?

---

## Responsibilities

The Analytics Engine is responsible for:

- Collecting data from wearable devices
- Normalizing data from different providers
- Enriching data with user profile and historical context
- Calculating processed metrics
- Detecting trends
- Detecting patterns
- Detecting anomalies
- Preparing structured information for the Decision Engine

---

## Outputs

Examples:

- Recovery trend
- Sleep quality trend
- Training load status
- HRV deviation
- Resting heart rate deviation
- Weekly consistency
- Fatigue pattern
- Performance trend
- Anomaly detection

---

# Decision Engine

## Purpose

The Decision Engine is responsible for helping the user decide what to do next.

It uses the outputs of the Analytics Engine together with goals, preferences, limitations, feedback, and current context.

The Decision Engine represents the AI Coach.

---

## Main Question

> What should the user do next?

---

## Responsibilities

The Decision Engine is responsible for:

- Building user context
- Generating insights
- Explaining recommendations
- Suggesting actions
- Adjusting training guidance
- Learning from user feedback
- Improving future recommendations

---

## Outputs

Examples:

- Daily Brief
- Coach Insight
- Training Recommendation
- Recovery Recommendation
- Goal Adjustment
- Plan Adjustment
- Explanation
- Next Action

---

# Responsibility Boundary

The boundary between the two engines must remain clear.

```text
Analytics Engine
= facts, metrics, trends, patterns

Decision Engine
= insights, explanations, recommendations, actions
```

The Analytics Engine prepares structured understanding.

The Decision Engine turns that understanding into coaching decisions.

---

# Example Flow

## Morning Context

```text
User wakes up.
Wearable data is available.
Today has a planned threshold workout.
The user has a marathon goal.
```

---

## Analytics Engine Output

```text
Sleep duration is below baseline.
HRV is slightly reduced.
Resting heart rate is stable.
Training load is within normal range.
No strong fatigue pattern detected.
```

---

## Decision Engine Output

```text
Daily Brief:
You are ready for training today.

Explanation:
Recovery is slightly lower than usual, but resting heart rate is stable and training load is controlled.

Recommended action:
Complete the planned threshold workout, but avoid adding extra volume.
```

---

## Result

```text
User completes the workout.
Performance and recovery data are collected.
The system uses this outcome to improve future recommendations.
```

---

# Product Principle

The user should not be forced to manually interpret raw data.

FitCoach AI should transform:

```text
Data
↓
Context
↓
Insights
↓
Actions
```

The final goal is not to display information.

The final goal is to help the user make a better decision.

---

# Future Evolution

The product model can later support:

- Smart notifications
- Adaptive training plans
- Race preparation
- Injury risk detection
- Nutrition recommendations
- Weather-aware training advice
- Calendar-aware scheduling
- Wearable notifications
- Chat-based coaching
