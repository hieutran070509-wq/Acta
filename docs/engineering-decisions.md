# Engineering Decisions

## Introduction

Every software project is shaped by a series of technical decisions.

Some prioritize performance.

Others prioritize scalability, simplicity, or user experience.

ACTA is no different.

Rather than pursuing the most advanced technologies or the largest feature set, every engineering decision in ACTA is evaluated against a single question:

> Does this make meaningful actions easier to record, easier to recognize, and easier to sustain over time?

The following sections document the most significant engineering decisions that define the platform.

---

## Action-First Instead of Plan-First

### Decision

Build the system around completed actions rather than planned tasks.

### Why

Most productivity applications begin with planning.

Users are expected to:

- Create tasks
- Assign priorities
- Estimate effort
- Organize projects
- Predict future work

ACTA intentionally reverses this process.

The primary unit of information is a completed action.

Planning remains available when useful, but it is never required before progress can be recognized.

### Trade-Offs

#### Pros

- Lower interaction friction
- Immediate sense of progress
- Better support for flexible lifestyles
- Simpler daily workflow

#### Cons

- Less suitable for schedule-heavy workflows
- Requires a different productivity mindset

---

## Event-Driven Processing

### Decision

Process all user interactions through a unified event pipeline.

### Why

Every meaningful interaction in ACTA follows the same lifecycle:

```text
User Action
     ↓
Capture
     ↓
Parser
     ↓
Core Processing
     ↓
Storage
     ↓
UI Update
```

This approach keeps systems consistent and reduces coupling between features.

New functionality integrates into an existing flow rather than creating independent execution paths.

### Trade-Offs

#### Pros

- Predictable behavior
- Easier debugging
- Better scalability
- Consistent data flow

#### Cons

- Slightly more architectural complexity
- Requires careful event design

---

## Terminal-Inspired Input

### Decision

Use a terminal-inspired interaction model as the primary method for recording actions.

### Why

The terminal is more than a visual style.

It provides:

- Fast action logging
- Immediate feedback
- Keyboard-first interaction
- Contextual commands
- Continuity with the original Cyber Terminal prototype

Although ACTA has evolved beyond a traditional terminal interface, the philosophy of fast, low-friction input remains central.

### Trade-Offs

#### Pros

- Extremely efficient interaction
- Minimal navigation
- Strong product identity

#### Cons

- Learning curve for new users
- Less familiar than conventional interfaces

---

## Action Points Instead of Weighted Scoring

### Decision

Use Action Points (AP) rather than assigning different values to different activities.

### Why

Early experiments revealed a difficult question:

> Who decides the value of an action?

Should studying be worth more than exercising?

Should reading be worth less than programming?

No universal answer exists.

ACTA therefore avoids evaluating actions.

Instead, every recorded action contributes equally to progression.

AP represents recognition rather than judgment.

### Trade-Offs

#### Pros

- No subjective scoring
- Consistent progression
- Simpler user experience
- Easier balancing

#### Cons

- Does not differentiate task difficulty
- Sacrifices granular weighting for simplicity

---

## History as the Source of Truth

### Decision

Treat history as the most important data source within the platform.

### Why

History records what actually happened.

Statistics, achievements, streaks, and progression are all derived from historical records.

Many higher-level systems can be reconstructed from history if necessary.

This creates a transparent and reliable data model.

### Trade-Offs

#### Pros

- Strong data integrity
- Rebuildable systems
- Reliable analytics
- Clear auditability

#### Cons

- Requires careful synchronization
- Historical records must remain consistent

---

## Immutable Historical Records

### Decision

Treat completed actions as permanent records.

### Why

A completed action represents reality.

Removing historical actions would distort the user's timeline and undermine analytics.

Tasks may be modified or removed.

History should remain an accurate reflection of what actually occurred.

### Trade-Offs

#### Pros

- Consistent statistics
- Reliable streak calculations
- Strong historical integrity

#### Cons

- More complex synchronization logic
- Requires thoughtful data management

---

## Synchronizing Tasks and History

### Decision

Synchronize task management with action history rather than treating them as separate systems.

### Why

Traditional productivity tools often separate planning from execution.

ACTA intentionally connects them.

Tasks represent temporary intent.

History represents permanent reality.

Synchronizing both systems reduces duplicate input and creates a more natural workflow.

### Trade-Offs

#### Pros

- Less manual work
- Better consistency
- Improved long-term tracking

#### Cons

- More complex implementation
- Greater synchronization requirements

---

## Local-First Architecture

### Decision

Make local storage the default data layer.

### Why

Users should not need an account before receiving value from the platform.

ACTA is designed to work immediately.

Cloud services enhance the experience but do not enable it.

Users maintain ownership of their data from the very first interaction.

### Trade-Offs

#### Pros

- Immediate usability
- Better privacy
- Reduced dependency on external services
- Offline resilience

#### Cons

- Synchronization becomes more complex
- Additional cloud logic is required

---

## Modular Domain Architecture

### Decision

Organize the platform around functional domains rather than pages.

### Why

Each domain has a single responsibility.

Examples include:

- Capture
- Interpretation
- Tasks
- Progress
- Analytics
- Persistence
- Synchronization
- Sharing

This separation improves maintainability and allows future expansion without large-scale rewrites.

### Trade-Offs

#### Pros

- Better scalability
- Clear responsibilities
- Easier testing
- Cleaner architecture

#### Cons

- Additional planning required
- More abstraction than a simple page-based structure

---

## Web-First Platform Strategy

### Decision

Build ACTA primarily as a web application.

### Why

The web provides the best balance of:

- Accessibility
- Compatibility
- Simplicity
- Deployment efficiency

Users can access ACTA instantly without installation.

PWA support extends the experience while preserving platform flexibility.

### Trade-Offs

#### Pros

- Universal access
- Simple deployment
- Broad compatibility
- Lower maintenance costs

#### Cons

- Limited native capabilities
- Some platform-specific features remain unavailable

---

## Lightweight Technology Stack

### Decision

Keep the technology stack intentionally small.

### Why

ACTA prioritizes maintainability over technological novelty.

Dependencies are introduced only when they provide clear long-term value.

The objective is not to use the newest technology.

The objective is to use the most appropriate technology.

### Trade-Offs

#### Pros

- Smaller codebase
- Easier maintenance
- Reduced dependency risk
- Faster loading times

#### Cons

- Fewer framework conveniences
- More manual implementation in some areas

---

## Simplicity Over Feature Count

### Decision

Prefer removing complexity over continuously adding features.

### Why

Every new feature introduces:

- Maintenance cost
- Learning overhead
- Architectural complexity

ACTA intentionally avoids systems that require excessive configuration or management.

Simplicity is treated as a feature.

### Trade-Offs

#### Pros

- Cleaner experience
- Faster workflows
- Better maintainability
- Stronger consistency

#### Cons

- Fewer customization options for advanced users

---

## Engineering Principles

Every engineering decision in ACTA is evaluated against a common set of principles:

- Reality over assumptions
- Recognition over evaluation
- History over temporary state
- Simplicity over unnecessary abstraction
- Consistency over feature quantity
- Compatibility over technological novelty
- Sustainability over rapid expansion

If an implementation introduces complexity without strengthening the platform's identity, it should be reconsidered.

---

## Closing Thoughts

Engineering is not only about choosing technologies.

It is also about choosing constraints.

Throughout ACTA's development, many common solutions were intentionally rejected—not because they were technically impossible, but because they conflicted with the project's philosophy.

Every engineering decision ultimately serves a single purpose:

> Make meaningful actions easier to record, easier to recognize, and easier to remember.
