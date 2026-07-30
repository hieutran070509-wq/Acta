# Architecture

## Overview

ACTA is an action-first productivity platform built around a simple belief:

> People make progress through actions, not plans.

Traditional productivity tools often prioritize schedules, deadlines, priorities, and predefined workflows. ACTA takes a different approach. Instead of focusing on what users intend to do, it focuses on what they actually accomplish.

Life is rarely predictable. Priorities change, routines shift, and many meaningful actions happen without planning. ACTA is designed to adapt to that reality rather than forcing users into rigid systems.

Every completed action becomes part of a long-term record of progress. This philosophy influences every architectural decision throughout the platform.

---

## Architectural Philosophy

The architecture of ACTA is guided by several fundamental principles.

### Action First

Actions are the primary unit of information throughout the system.

Rather than building the platform around tasks, schedules, or projects, ACTA records completed actions and derives higher-level insights from them.

### Low Friction

Recording progress should require minimal effort.

Every unnecessary click, dialog, or workflow interruption reduces the likelihood of long-term consistency.

### Local Ownership

Users should be able to use ACTA immediately without creating an account.

Cloud services enhance the experience but are never required to begin.

### Modularity

Each system within ACTA is responsible for a clearly defined area of functionality.

This separation allows the platform to evolve without introducing unnecessary coupling between features.

### Long-Term Growth

The platform is designed around accumulated progress rather than isolated productivity sessions.

A single action matters, but long-term consistency matters more.

---

## High-Level Architecture

ACTA follows a modular, event-driven architecture.

Every interaction passes through a unified processing pipeline.

```text
User
  │
  ▼
Capture Layer
  │
  ▼
Parser Layer
  │
  ▼
Core Processing
  │
  ├── Tasks
  ├── History
  ├── Progress
  ├── Statistics
  ├── Achievements
  │
  ▼
Storage Layer
  │
  ▼
Presentation Layer
```

Rather than allowing individual features to modify data independently, all user interactions flow through a predictable lifecycle.

This approach improves consistency, maintainability, and scalability.

---

## Core Domains

ACTA is organized around functional domains rather than application pages.

Each domain owns a specific responsibility while remaining loosely coupled from the rest of the system.

### Capture Domain

Responsible for collecting user input.

Includes:

- Quick Add
- Action Input
- Command Input
- Keyboard Shortcuts
- Mobile Interactions
- Toolbar Actions

Primary goal:

> Capture actions with the lowest possible friction.

---

### Interpretation Domain

Responsible for understanding user intent.

The parser determines whether an input represents:

- A completed action
- A command
- A system request
- Future extensible operations

Separating interpretation from execution allows the platform to remain flexible and extensible.

---

### Task Domain

Responsible for temporary actionable items.

Includes:

- Todo Management
- Task Completion
- Task Removal
- Task Synchronization
- Task Lifecycle
- Undo / Redo Integration

Tasks are considered temporary planning tools rather than permanent records.

---

### History Domain

Responsible for preserving completed actions.

Includes:

- Action Records
- Daily Logs
- Historical Search
- Timeline Tracking
- Historical Queries

History is designed to remain permanent and immutable whenever possible.

It serves as the foundation for most other systems within ACTA.

---

### Progress Domain

Responsible for long-term progression.

Includes:

- Action Points (AP)
- Levels
- Streaks
- Milestones
- Achievements
- Motivational Systems

Progress is designed to reward consistency rather than complexity.

---

### Analytics Domain

Responsible for transforming historical data into insights.

Includes:

- Statistics
- Daily Summaries
- Search
- Charts
- Monthly Activity Graphs
- Heatmaps
- Contribution Visualizations
- Trend Analysis

Analytics help users understand how their actions accumulate over time.

---

### Persistence Domain

Responsible for data durability.

Includes:

- Local Storage
- Import
- Export
- Backup
- Restore

The application remains functional even without cloud connectivity.

---

### Synchronization Domain

Responsible for user identity and cloud persistence.

Includes:

- Authentication
- Cloud Storage
- Cross-Device Synchronization
- Profile Management

Cloud functionality extends the platform without replacing local ownership principles.

---

### Sharing Domain

Responsible for presenting progress outside the application.

Includes:

- ACTA Card
- Public Profiles
- Progress Sharing
- Statistics Export
- PDF Reports

Sharing focuses on accomplishments rather than social engagement.

---

## Data Flow

Every interaction inside ACTA follows the same lifecycle.

```text
User Action
      │
      ▼
Capture
      │
      ▼
Interpretation
      │
      ▼
Core Processing
      │
      ▼
Storage
      │
      ├── History
      ├── Tasks
      ├── Progress
      ├── Statistics
      └── Achievements
      │
      ▼
UI Update
```

A unified data flow reduces complexity and ensures that all systems remain synchronized.

New features integrate into existing flows instead of creating independent execution paths.

---

## Source of Truth

History serves as the primary source of truth throughout ACTA.

Most systems derive their information from recorded actions.

Examples include:

```text
History
├── Statistics
├── AP
├── Levels
├── Achievements
├── Streaks
├── Reports
└── ACTA Cards
```

If necessary, many higher-level systems can be reconstructed entirely from historical records.

This approach improves transparency, consistency, and long-term data integrity.

---

## Storage Strategy

ACTA supports two distinct storage modes.

### Guest Mode

Guest users operate entirely through local storage.

Characteristics:

- No account required
- Immediate access
- Fully offline capable
- Local import and export support

Guest mode prioritizes simplicity and accessibility.

---

### Account Mode

Authenticated users operate through cloud-backed storage.

Characteristics:

- Persistent cloud data
- Cross-device synchronization
- Profile support
- Future multi-device continuity

Cloud services exist to enhance portability rather than create dependency.

---

## Scalability Strategy

ACTA is designed as a platform rather than a fixed application.

The architecture intentionally separates responsibilities so future systems can integrate naturally without requiring major redesigns.

Potential future expansions include:

- Advanced analytics
- AI-assisted insights
- Recommendation systems
- Cross-device continuity
- Public profile enhancements
- Community features
- Plugin architecture
- Developer APIs
- Wearable integrations
- Native desktop and mobile clients

Because domains remain isolated, future growth can occur incrementally.

---

## Architectural Principles

All future architectural decisions should align with the following principles.

### Action Over Planning

Prioritize recording meaningful actions rather than enforcing schedules.

### History Over Temporary State

Historical records should remain more important than transient interface state.

### Local Ownership First

Users should control their own data from the first interaction.

### Low Friction

Reduce the distance between completing an action and recording it.

### Modularity

Each domain should have a single, clearly defined responsibility.

### Consistency

Similar interactions should behave similarly across the platform.

### Scalability

New systems should extend existing architecture rather than replace it.

### User-Centered Evolution

Features should solve real user problems rather than increase complexity.

---

## Summary

ACTA is built around a simple but fundamental idea:

> Progress should reflect what people actually do, not what they planned to do.

Its architecture combines action-first workflows, modular domains, event-driven processing, and local-first principles into a cohesive productivity platform.

Rather than becoming another task manager, ACTA aims to provide a sustainable system for capturing actions, preserving history, recognizing progress, and helping users understand their long-term growth.

Every architectural decision ultimately serves the same goal:

**Turn meaningful actions into meaningful progress.**
