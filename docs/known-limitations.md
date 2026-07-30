# Known Limitations

## Introduction

No software project is without limitations.

ACTA is developed under practical constraints, including time, resources, funding, testing capacity, and team size. Some of these limitations are temporary and expected to improve over time. Others are deliberate trade-offs made to preserve the project's philosophy, simplicity, and long-term maintainability.

This document exists to acknowledge those limitations transparently and provide context for current engineering decisions.

## Limited Real-World Validation

### Current State

Most testing has been performed by the project's creator throughout daily use and development.

While this provides extensive familiarity with the product's workflows, ACTA has not yet undergone large-scale testing across a diverse user base.

### Potential Impact

Real-world adoption may reveal:

- unexpected user behaviors
- usability issues
- browser-specific edge cases
- accessibility concerns
- workflows not anticipated during development

### Future Direction

Expanding real-world testing and collecting user feedback remains one of the most important priorities for future development.

## Single-Developer Development

ACTA is currently designed, developed, documented, maintained, and tested by a single person.

This naturally limits:

- development velocity
- feature throughput
- testing coverage
- documentation review
- long-term maintenance capacity

As a result, development prioritizes:

- simplicity
- maintainability
- architectural consistency

over rapid feature expansion.

## Resource Constraints

ACTA is developed without commercial funding or dedicated organizational support.

Current limitations include:

- no dedicated development budget
- no professional design resources
- no dedicated QA team
- no enterprise infrastructure
- limited access to external technical review

Engineering decisions must therefore balance technical quality with realistic resource constraints.

## Web Platform Constraints

ACTA is primarily delivered as a web application.

This decision provides excellent accessibility and portability but introduces limitations inherent to modern browsers.

Examples include:

- browser-specific behavior
- restricted background execution
- limited operating system integration
- browser permission restrictions
- storage limitations
- notification limitations
- offline capability constraints

These trade-offs are accepted in exchange for universal access and simplified deployment.

## Cloud Infrastructure Maturity

Cloud synchronization is still evolving.

Current infrastructure is designed for reliability and practicality rather than enterprise-scale operation.

Capabilities that are currently outside the project's scope include:

- distributed infrastructure
- automatic failover systems
- advanced observability
- enterprise-grade redundancy
- large-scale traffic optimization

At the current scale of the project, these capabilities are not considered essential.

## Security Limitations

Security is considered throughout development, but ACTA has not undergone professional security auditing or penetration testing.

Current limitations include:

- no independent security assessment
- no dedicated security engineering resources
- limited infrastructure hardening
- no formal security certification process

As the project matures, security practices are expected to evolve alongside new requirements and resources.

## Scalability Assumptions

ACTA has been designed with scalability in mind, but it has not yet been validated under large-scale production workloads.

Questions that remain untested include:

- performance under heavy concurrent usage
- large-scale synchronization behavior
- long-term infrastructure costs
- high-volume data processing

Current architectural decisions aim to support future growth, but large-scale scalability remains an engineering assumption rather than a proven capability.

## Platform Coverage

ACTA is accessible from modern web browsers, but platform-specific optimization remains limited.

Areas that have not yet received comprehensive validation include:

- extensive browser compatibility testing
- accessibility compliance audits
- localization and translation support
- native desktop integration
- native mobile distribution

These areas represent opportunities for future improvement rather than current priorities.

## AI-Assisted Development

AI-assisted development played a significant role throughout the creation of ACTA.

AI accelerated implementation, exploration, and iteration, particularly during rapid development phases.

However:

- product decisions remain human-driven
- architecture remains human-designed
- workflows remain human-defined
- implementation requires manual review and validation

AI serves as a development tool rather than a source of product direction.

## Educational Project Context

ACTA was developed while its creator was still a high school student.

Development therefore occurred alongside:

- academic responsibilities
- limited available time
- limited financial resources
- limited access to professional mentorship
- ongoing technical learning

Many architectural and engineering decisions were made within these constraints.

Rather than defining the project's limitations, these constraints shaped its development process and priorities.

## Deliberate Trade-Offs

Not every limitation is unintended.

Several constraints are conscious design decisions intended to preserve ACTA's identity.

Examples include:

- prioritizing web accessibility over native applications
- maintaining a lightweight technology stack
- minimizing external dependencies
- limiting feature expansion
- favoring simplicity over configurability
- keeping collaboration outside the project's primary focus

These trade-offs are considered part of the product's design philosophy rather than shortcomings.

## Looking Forward

Many of the limitations described in this document are expected to improve as ACTA continues to evolve.

Others may remain permanently because they align with the project's philosophy and intended scope.

The goal is not to eliminate every limitation.

The goal is to understand constraints clearly, document them honestly, and make informed decisions around them.

## Closing Statement

ACTA is not presented as a finished or perfect system.

It is presented as an evolving project built with transparency, curiosity, and deliberate trade-offs.

Every software project operates within constraints. ACTA is no exception.

Understanding those constraints is an important part of understanding the project itself.
