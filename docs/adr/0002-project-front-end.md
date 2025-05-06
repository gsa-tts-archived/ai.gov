# 2. Project front-end

Date: 2025-05-06

## Status

Accepted

## Context

The AI Platform project requires a public web presence to serve as the host of several different apps.

- Informational pages
- Dashboard with model and usage metrics to help with model selection
- Chat UI
- API documentation

This is the glue for several products and will need to provide a cohesive UI for all products. 

## Decision

The project team will use the Astro web framework.

## Consequences

Astro has native support for most commonly-used web frameworks and has flexible rendering strategies to accommodate the different products. The informational pages and the API documents will be mostly static, whereas the chat and dashboard are more interactive and dynamic.

Negatively, Astro is a mid-tier web framework that may lose updates and compatibility in the coming years. This risk is mitigated by encapsulating dependent logic outside of Astro components.
