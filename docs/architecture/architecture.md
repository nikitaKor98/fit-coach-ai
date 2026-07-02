# Architecture

## Purpose

This document describes the architectural principles and project structure of FitCoach AI.

The goal of the architecture is to build an application that remains scalable, maintainable, and easy to understand throughout its entire lifecycle.

The architecture should support both the initial MVP and future expansion into a complete AI-powered fitness platform.

---

# Architecture Goals

## Scalability

The project should grow naturally without requiring major restructuring.

The same architecture should support:

- MVP
- Hundreds of UI components
- Multiple business domains
- Mobile and desktop applications
- AI services
- Third-party integrations

---

## Separation of Concerns

Each part of the application has a single responsibility.

Business logic, presentation, routing, and shared utilities should remain independent whenever possible.

Pages compose the application.

Domains implement business logic.

Shared contains reusable building blocks.

---

## Reusability

Reusable code should exist only once.

UI components, utilities, data models, and business logic should be shared whenever possible.

Specialized implementations should only be created when generic solutions no longer satisfy the requirements.

---

## Product-Oriented Structure

The project structure should reflect the business domain instead of technical file categories.

Instead of organizing code only by component type, the application is organized around real product concepts.

---

# Architectural Principles

## Domain-Driven Organization

The application is organized around business domains.

Examples:

- Health
- Training
- Coach
- Goals
- User
- Integrations

Each domain owns its own logic and evolves independently.

---

## Mobile First

FitCoach AI is designed primarily for mobile devices.

Desktop layouts extend the mobile experience instead of replacing it.

All new features should be designed for mobile before desktop adaptations are considered.

---

## Dark Theme First

Dark mode is the primary visual target.

Light mode should provide the same user experience without changing layouts or interaction patterns.

---

## Data First

The interface exists to explain data.

Visual effects should improve understanding rather than decoration.

Every visual element must support decision making.

---

## Progressive Disclosure

Show only the information necessary for the current context.

Additional information should become available through navigation or expansion.

Users should never feel overwhelmed by large amounts of data.

---

# Project Structure

```text
src/
├── app/
├── pages/
├── domains/
├── shared/
├── styles/
└── main.tsx
```

---

# Application Layers

## app

Responsible for application initialization.

Contains:

- Application entry point
- Routing
- Providers
- Global configuration

Examples:

```text
App.tsx
router.tsx
providers/
```

Business logic should not live here.

---

## pages

Contains route-level screens.

Examples:

```text
Dashboard
Analytics
Coach
Profile
Settings
```

Responsibilities:

- Compose domains
- Compose shared UI
- Arrange layouts

Pages should contain as little business logic as possible.

---

## domains

Contains the application's business domains.

Each domain owns its own models, logic, services, and UI.

Current planned domains:

```text
health/
training/
goals/
coach/
user/
integrations/
```

Domains represent business knowledge rather than pages.

A domain may contain:

```text
components/
hooks/
services/
types/
utils/
constants/
```

Folders should only be added when they become necessary.

---

## shared

Contains reusable resources that are independent from any single business domain.

Examples:

```text
ui/
api/
types/
hooks/
utils/
constants/
styles/
```

Anything placed inside `shared` should be generic enough to be reused across multiple domains.

If something belongs to only one business area, it should remain inside its domain.

---

## styles

Contains global styling foundations.

Examples:

```text
variables.css
reset.css
global.css
```

This layer defines the design system foundation:

- Design tokens
- CSS reset
- Global styles

Component-specific styles should live alongside their components.

---

# Domain Map

## Health

Responsible for understanding the user's physical condition.

Includes:

- Recovery
- Sleep
- HRV
- Heart Rate
- Resting Heart Rate
- Stress
- Readiness
- Steps
- Calories
- Weight
- Body Composition

Main question:

> What is the current state of the user's body?

---

## Training

Responsible for workout analysis.

Includes:

- Workouts
- Running
- Cycling
- Strength
- Swimming
- Pace
- Distance
- Duration
- Training Load
- Training Zones
- Personal Records

Main question:

> How is the user training?

---

## Goals

Responsible for user objectives.

Includes:

- Race goals
- Weight goals
- Weekly targets
- Sleep goals
- Recovery goals
- Strength goals

Main question:

> What is the user trying to achieve?

---

## Coach

Responsible for AI-generated guidance.

Includes:

- Daily Brief
- Insights
- Recommendations
- Training Suggestions
- Recovery Advice
- Feedback Analysis
- Adaptive Planning
- Chat

Main question:

> What should the user do next?

---

## User

Responsible for user profile and personalization.

Includes:

- Profile
- Physical characteristics
- Experience
- Preferences
- Available training days
- Injuries
- Connected devices

Main question:

> Who is the user?

---

## Integrations

Responsible for external data providers.

Includes:

- Garmin
- Apple Health
- Google Fit
- Fitbit
- Polar
- Manual Import

Main question:

> Where does the data come from?

---

# Dependency Rules

Dependencies should follow a single direction.

```text
pages
   ↓
domains
   ↓
shared
```

Allowed:

- Pages may import domains and shared.
- Domains may import shared.

Not allowed:

- Shared importing domains.
- Shared importing pages.
- Circular dependencies between domains.

If multiple domains require the same functionality, it should be moved into `shared`.

---

# Architectural Decisions

## Why not Layer-Based Architecture?

A traditional structure like:

```text
components/
hooks/
services/
utils/
types/
```

becomes increasingly difficult to maintain as the project grows.

Large folders organized only by file type make navigation harder and disconnect the codebase from the product itself.

---

## Why Domain-Driven Architecture?

Business concepts remain together.

Everything related to Recovery belongs together.

Everything related to Training belongs together.

This makes the project easier to understand, extend, and maintain.

---

## Why Custom CSS?

FitCoach AI uses a custom design system instead of UI component libraries.

Reasons:

- Full control over the visual language.
- Consistent branding.
- Better long-term scalability.
- No dependency on third-party design decisions.
- Stronger engineering and portfolio value.

Specialized libraries may still be used when they solve a focused technical problem (for example, data visualization).

---

# Current Status

Completed:

- Project initialization
- Initial README
- Shared domain types
- Design tokens
- Global styles
- Documentation foundation

Next milestones:

- Design System
- Card System
- Dashboard Layout
- Navigation
- Dashboard MVP
- Analytics
- AI Coach
- Device Integrations

---

# Future Evolution

This document is expected to evolve together with the project.

Future revisions will include:

- State management strategy
- API architecture
- Authentication flow
- Offline support
- Caching strategy
- Testing strategy
- Performance guidelines
- Mobile application architecture
- Backend architecture
