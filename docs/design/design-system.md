# Design System

## Purpose

This document defines the visual language and UI principles of FitCoach AI.

The goal of the design system is not only to create a consistent interface, but to support the product philosophy:

> Help users make better decisions every day.

Every visual element should contribute to understanding, confidence, and action.

---

# Design Philosophy

FitCoach AI is not a dashboard.

It is an AI-powered coaching system.

The interface should feel like guidance rather than reporting.

Users should never feel overwhelmed by numbers.

Instead, the interface should progressively reveal information.

The most important conclusion should always appear before the supporting metrics.

---

# Core Design Principles

## Decision First

Every screen should answer a question before displaying data.

Examples:

- Should I train today?
- Am I recovering well?
- What should I improve?
- Am I progressing?

The answer should appear before graphs or raw metrics.

---

## Progressive Disclosure

Information should be presented in layers.

```text
Insight
↓
Explanation
↓
Metrics
↓
Raw Data
```

Most users should never need to reach the last level.

---

## Context Before Numbers

Numbers without context are difficult to interpret.

Example:

Instead of:

```text
HRV
58 ms
```

Prefer:

```text
Recovery is slightly below normal.

HRV:
58 ms
```

The interface should explain why the number matters.

---

## Coach Everywhere

Coach guidance is available throughout the application.

Coach is not a dedicated page.

Coach appears naturally within each screen.

Examples:

- Daily Brief
- Workout Review
- Progress Summary
- Goal Analysis

---

## Mobile First

The primary platform is mobile.

Desktop should extend the mobile experience rather than redefine it.

Every component should be designed for small screens first.

---

## Simplicity Before Density

Less information is often more valuable.

Do not display additional metrics unless they help answer a user question.

---

# Visual Language

The interface should feel:

- Calm
- Professional
- Modern
- Trustworthy
- Focused
- Minimal

Avoid:

- Bright gradients
- Excessive shadows
- Decorative animations
- Visual noise

The product should communicate confidence rather than excitement.

---

# Color System

Colors should communicate meaning.

Not decoration.

## Semantic Colors

Primary

Used for:

- Main actions
- Highlights
- Active navigation

---

Success

Used for:

- Positive progress
- Healthy recovery
- Completed goals

---

Warning

Used for:

- Attention
- Medium fatigue
- Training adjustments

---

Danger

Used for:

- High injury risk
- Severe fatigue
- Critical warnings

---

Neutral

Used for:

- Backgrounds
- Borders
- Secondary text

Exact color values should be stored as CSS variables.

---

# Typography

Typography should emphasize hierarchy.

Recommended scale:

```text
Display
40px

H1
32px

H2
24px

H3
20px

Body
16px

Small
14px

Caption
12px
```

Weights:

- Regular
- Medium
- SemiBold
- Bold

---

# Spacing System

Use an 8-point spacing system.

Recommended spacing:

```text
4
8
12
16
24
32
40
48
64
```

Consistent spacing improves readability.

---

# Border Radius

Recommended values:

```text
8
12
16
24
```

Cards should primarily use:

```text
16px
```

Buttons:

```text
12px
```

Pills:

```text
9999px
```

---

# Shadows

Shadows should be subtle.

They should separate layers rather than attract attention.

Use elevation sparingly.

---

# Icons

Icons should support understanding.

Icons should never replace text.

Every important icon should have an accompanying label.

---

# Component Hierarchy

Components should be built in layers.

```text
Primitive

↓

Base Component

↓

Feature Component

↓

Page Section

↓

Screen
```

---

# Card System

Cards are the primary building block of the interface.

Every card should answer one user question.

Planned card types:

```text
Base Card

↓

Metric Card

↓

Insight Card

↓

Action Card

↓

Trend Card

↓

Goal Card
```

Every specialized card should inherit from the Base Card.

---

# Information Priority

Information should always appear in this order:

```text
Insight

↓

Recommendation

↓

Explanation

↓

Supporting Metrics

↓

Historical Data
```

Raw charts should never dominate the screen.

---

# Responsiveness

Breakpoints should follow content rather than devices.

Layouts should adapt smoothly.

Recommended strategy:

- Mobile
- Tablet
- Desktop

Do not create completely different interfaces for different devices.

---

# Accessibility

The interface should support:

- Keyboard navigation
- Screen readers
- High contrast
- Clear focus states
- Sufficient touch targets

Accessibility should be considered from the beginning rather than added later.

---

# Animations

Animations should communicate change.

Examples:

- State transitions
- Card expansion
- Loading
- Navigation

Avoid decorative animations.

Animations should never distract from decision making.

---

# Design Tokens

Global design tokens should include:

- Colors
- Typography
- Spacing
- Border radius
- Shadows
- Animation duration
- Z-index
- Breakpoints

All tokens should be stored centrally using CSS variables.

---

# Future Evolution

The design system should support:

- Dark mode
- Themes
- Wearable companion UI
- Tablet layouts
- Desktop layouts
- Widget design
- Notification design
- AI conversation UI

The visual language should remain consistent across all platforms.

---

# Design Goal

The ideal experience is:

The user opens the application.

Within a few seconds they understand:

- How they are doing
- Why
- What they should do next

The interface succeeds when the user leaves with confidence rather than questions.
