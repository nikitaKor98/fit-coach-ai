# Card System

## Purpose

This document defines the card system used throughout FitCoach AI.

Cards are the primary building blocks of the user interface.

The goal of the card system is to create a consistent, reusable, and scalable foundation that supports the product philosophy.

Cards should communicate understanding before presenting data.

---

# Design Philosophy

A card is not a visual container.

A card is a container for one complete idea.

Every card should answer one user question.

This principle is the foundation of the entire system.

> One Card = One Question

---

# Core Principles

## One Card = One Question

Every card should answer exactly one question.

Examples:

Recovery Card

> Am I recovered?

Workout Card

> How did today's workout go?

Goal Card

> Am I on track?

Trend Card

> Is something changing?

Action Card

> What should I do next?

If a card attempts to answer multiple questions, it should be split into separate cards.

---

## Decision Before Data

Cards should present conclusions before supporting information.

Information hierarchy:

```text
Insight
↓
Recommendation
↓
Explanation
↓
Supporting Metrics
↓
Raw Data
```

Users should not need to interpret raw metrics before understanding the conclusion.

---

## Progressive Disclosure

Cards should reveal information gradually.

The default state should present only the most important information.

Additional details should become visible only when the user requests them.

---

## Coach Everywhere

Every card should support coaching.

Coach guidance should feel like part of the card rather than an independent feature.

Cards should be capable of displaying:

- Insight
- Explanation
- Recommendation

without requiring navigation to another screen.

---

# Card Hierarchy

The card system is built as a hierarchy.

```text
Base Card
│
├── Summary Card
├── Metric Card
├── Insight Card
├── Trend Card
└── Action Card
```

Specialized cards inherit behavior from these base types.

Examples:

```text
Recovery Card
→ Metric Card

Sleep Card
→ Metric Card

Daily Brief
→ Insight Card

Today's Workout
→ Action Card

Weekly Progress
→ Trend Card
```

The system grows by specialization, not by creating unrelated card types.

---

# Base Card

The Base Card defines the common structure shared by every card.

Structure:

```text
Header
↓
Primary Content
↓
Supporting Content
↓
Footer
```

The Base Card should contain:

- Layout
- Padding
- Border radius
- Background
- Elevation
- Internal spacing

It should not contain business logic.

---

# Header

The header identifies the subject of the card.

Typical content:

- Title
- Optional icon
- Optional status badge
- Optional timestamp

Examples:

Recovery

Sleep

Workout

Goals

---

# Primary Content

The most important information.

This is the reason the card exists.

Examples:

Ready for training

Recovery Score

Today's Workout

Goal Progress

Trend Direction

The user should understand the primary message within a few seconds.

---

# Supporting Content

Provides additional context.

May include:

- Explanation
- Metrics
- Comparison
- Trend
- Secondary information

Supporting content should never compete visually with the primary message.

---

# Footer

Contains optional actions.

Examples:

View Details

Ask Coach

Show History

See Analytics

The footer is optional.

---

# Card Types

## Summary Card

Purpose:

Provide a quick overview.

Typical examples:

- Daily Summary
- Weekly Summary
- Monthly Summary

---

## Metric Card

Purpose:

Present one important metric together with its interpretation.

Examples:

Recovery

Sleep

HRV

Heart Rate

Resting Heart Rate

Stress

Weight

Calories

---

## Insight Card

Purpose:

Explain something important.

Typical examples:

Daily Brief

Coach Insight

Recovery Explanation

Performance Analysis

---

## Trend Card

Purpose:

Show change over time.

Examples:

Weekly Recovery

Training Load

Sleep Trend

Performance Trend

Consistency

---

## Action Card

Purpose:

Recommend an action.

Examples:

Today's Workout

Recovery Day

Hydration Reminder

Sleep Recommendation

Training Adjustment

---

# Composition Rules

Cards should be composable.

Complex screens should be built by combining simple cards rather than creating large, specialized components.

Example:

```text
Today Screen

Summary Card

↓

Insight Card

↓

Action Card

↓

Metric Cards
```

Not:

```text
One massive Today component
```

---

# Visual Rules

Every card should follow the same design language.

Border Radius:

16px

Spacing:

8-point grid

Elevation:

Subtle

Background:

Surface color

Animations:

Minimal

Cards should never compete with one another for attention.

---

# Mobile First

Cards are designed for mobile first.

Desktop layouts should rearrange cards rather than redesign them.

The same card component should work across:

- Mobile
- Tablet
- Desktop

---

# Accessibility

Cards should support:

- Keyboard navigation
- Screen readers
- Clear focus states
- Large touch targets
- High contrast

Accessibility is part of the component design rather than a later enhancement.

---

# Future Evolution

Future card specializations should extend existing card types whenever possible.

Avoid introducing new base card categories unless a genuinely new responsibility appears.

The card system should remain small, predictable, and reusable as the application grows.

---

# Development Guidelines

When implementing a new card, ask the following questions:

1. What user question does this card answer?
2. Can an existing card type be reused?
3. What is the primary message?
4. What supporting information is truly necessary?
5. Does this card help the user make a better decision?

If these questions cannot be answered clearly, the card should be redesigned.

---

# Success Criteria

A successful card allows the user to understand:

- What happened
- Why it happened
- What to do next

without leaving the card.

The user should never feel that they need to search through multiple screens to understand a single concept.
