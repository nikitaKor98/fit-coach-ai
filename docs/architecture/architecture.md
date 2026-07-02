# Architecture

## Purpose

This document describes the technical architecture of FitCoach AI.

The goal of the architecture is to keep the project scalable, understandable, and ready to grow from a frontend MVP into a complete AI-powered coaching platform.

---

# Architecture Goals

## Scalability

The project should grow without requiring a complete restructuring.

The architecture should support:

- Multiple pages
- Reusable UI components
- Health and training domains
- Analytics logic
- AI coaching logic
- External data integrations
- Future backend services

---

## Separation of Concerns

Each layer should have a clear responsibility.

UI should not contain business rules.

Pages should compose functionality rather than own complex logic.

Domain logic should stay close to the business area it belongs to.

Engines should contain cross-domain logic that transforms data into analysis or decisions.

---

## Reusability

Reusable logic should be extracted only when it is genuinely shared.

The project should avoid both extremes:

- Duplicating the same logic everywhere
- Over-abstracting too early

---

## Product-Oriented Structure

The codebase should reflect how the product works.

FitCoach AI is built around:

- User context
- Health and training data
- Analytics
- AI-powered decision support

These concepts should be visible in the project structure.

---

# High-Level Structure

```text
src/
├── app/
├── pages/
├── domains/
├── engines/
├── shared/
├── styles/
└── main.tsx
```

---

# Layers

## app

Application-level setup.

Contains:

```text
App.tsx
router.tsx
providers/
```

Responsibilities:

- Application initialization
- Routing
- Global providers
- App-level configuration

The `app` layer should not contain domain business logic.

---

## pages

Route-level screens.

Examples:

```text
Dashboard/
Analytics/
Goals/
Profile/
```

Responsibilities:

- Compose domains, engines, and shared UI
- Define page layout
- Connect route-level data

Pages should stay thin.

They should not become a place for complex business logic.

---

## domains

Product-specific business areas.

Planned domains:

```text
health/
training/
goals/
coach/
user/
integrations/
```

A domain owns logic related to one area of the product.

A domain may include:

```text
components/
hooks/
services/
types/
utils/
constants/
```

Folders should be created only when needed.

---

## engines

Cross-domain processing systems.

Planned engines:

```text
engines/
├── analytics/
└── decision/
```

Engines are not pages and not simple shared utilities.

They represent higher-level product logic.

---

## Analytics Engine

Responsible for understanding what is happening.

It works with:

- Raw data
- Normalized data
- Metrics
- Trends
- Patterns
- Anomalies

Main question:

> What is happening?

The Analytics Engine prepares structured information for the Decision Engine.

---

## Decision Engine

Responsible for helping the user decide what to do next.

It works with:

- Analytics outputs
- User goals
- Preferences
- Feedback
- Planned workouts
- Personal context

Main question:

> What should the user do next?

The Decision Engine represents the AI Coach.

---

## shared

Reusable generic code.

Examples:

```text
shared/
├── ui/
├── types/
├── utils/
├── hooks/
├── api/
└── constants/
```

Use `shared` only for things that are truly reusable across multiple domains or engines.

If something belongs to one product area, keep it inside its domain.

---

## styles

Global style foundation.

Examples:

```text
styles/
├── variables.css
├── reset.css
└── global.css
```

Responsibilities:

- Design tokens
- CSS reset
- Global styles

Component-specific styles should live near their components.

---

# Dependency Rules

Recommended dependency direction:

```text
pages
↓
engines
↓
domains
↓
shared
```

Allowed:

- Pages can import from engines, domains, and shared.
- Engines can import from domains and shared.
- Domains can import from shared.

Not allowed:

- Circular dependencies
- Shared depending on product-specific logic
- Domains depending directly on pages
- Pages containing complex business logic

---

# Domain Map

## health

Responsible for physical state.

Examples:

- Recovery
- Sleep
- HRV
- Heart rate
- Resting heart rate
- Stress
- Calories
- Steps
- Weight

---

## training

Responsible for workout and performance data.

Examples:

- Workouts
- Running
- Cycling
- Strength training
- Pace
- Distance
- Duration
- Training load
- Training zones

---

## goals

Responsible for user goals and progress.

Examples:

- Race goals
- Weekly volume goals
- Recovery goals
- Weight goals
- Progress tracking

---

## coach

Responsible for coach-related UI and user-facing coach concepts.

Important:

The AI Coach itself belongs to the Decision Engine.

The `coach` domain may contain:

- Coach messages
- Feedback UI
- Coach presentation models
- Coach-specific components

---

## user

Responsible for personal profile and preferences.

Examples:

- Profile
- Experience level
- Available training days
- Limitations
- Injuries
- Preferences

---

## integrations

Responsible for external data providers.

Examples:

- Garmin
- Apple Health
- Google Fit
- Fitbit
- Polar
- Manual import

---

# Target Folder Structure

```text
src/
├── app/
│   ├── App.tsx
│   └── router.tsx
│
├── pages/
│   ├── Dashboard/
│   ├── Analytics/
│   ├── Goals/
│   └── Profile/
│
├── domains/
│   ├── health/
│   ├── training/
│   ├── goals/
│   ├── coach/
│   ├── user/
│   └── integrations/
│
├── engines/
│   ├── analytics/
│   └── decision/
│
├── shared/
│   ├── ui/
│   ├── types/
│   ├── utils/
│   ├── hooks/
│   ├── api/
│   └── constants/
│
├── styles/
│   ├── variables.css
│   ├── reset.css
│   └── global.css
│
└── main.tsx
```

This structure should grow gradually.

Empty folders should be avoided unless they clarify an already accepted architectural direction.

The `engines` layer is an accepted direction because Analytics Engine and Decision Engine are core parts of the product model.

---

# State Management Strategy

The project should start with local React state where possible.

Global state should be introduced only when data is shared across multiple distant parts of the application.

Possible future tools:

- React Context for simple app-level state
- Zustand or Redux Toolkit for complex global state
- TanStack Query for server state and caching

State should be categorized as:

```text
UI state
Server state
Domain state
Engine output
```

These categories should not be mixed without reason.

---

# Styling Strategy

FitCoach AI uses custom CSS instead of UI component libraries.

Preferred approach:

- CSS Modules for component-level styles
- CSS variables for design tokens
- Global styles only for base application styles

Reasons:

- Full control over visual identity
- Better long-term scalability
- Stronger portfolio value
- No dependency on external UI design decisions

---

# Design Decisions

## Why Domain-Driven Frontend Architecture?

A simple structure like this:

```text
components/
hooks/
services/
utils/
types/
```

works for small projects but becomes difficult to maintain as the product grows.

FitCoach AI uses product-oriented folders because the product is built around meaningful business areas.

---

## Why Engines?

Analytics and decision-making are not simple utilities.

They are central product systems.

They work across several domains and should not be hidden inside one domain folder.

The `engines` layer makes this responsibility visible.

---

## Why Not Treat Coach as a Page?

AI Coach is not only a screen.

Coach is a decision-making system that should appear across the product.

The user should receive coach guidance on:

- Today screen
- Progress screen
- Goals screen
- Workout review
- Future notifications

The Decision Engine owns coaching logic.

UI surfaces only display its outputs.

---

# Future Evolution

The architecture may later evolve to include:

- Backend services
- Authentication
- Real device integrations
- Server-side analytics
- AI recommendation service
- Notification system
- Mobile application
- Offline support
- Testing strategy
- Performance monitoring

The frontend architecture should remain aligned with the future backend architecture where possible.

Potential future backend services:

```text
Analytics Service
Decision Service
Integration Service
Notification Service
User Service
```

---

# Current Status

Current stage:

```text
Documentation foundation
Design system foundation
Shared domain types
Global styles
```

Next implementation focus:

```text
Card System
Base Card
Metric Card
Insight Card
Today screen layout
Mobile-first navigation
```
