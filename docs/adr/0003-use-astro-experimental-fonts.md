# 1. Use Astro Experimental Fonts API

Date: 2025-05-09

## Status

Accepted

## Context

The project requires custom font integration with the following key requirements: 
- Fonts must be hosted locally to ensure compliance with performance and security standards.
- Fonts must be subsetted to include only the necessary glyphs, reducing file size and improving performance.
- The solution must work seamlessly with both USWDS components and Shadcn components, ensuring consistent typography across the project.
- The implementation should avoid introducing unnecessary dependencies and align with the existing Astro-based stack.

Several options were considered for managing custom fonts:
- **USWDS Custom Fonts**: Using USWDS's built-in support for self-hosted fonts.
- **Astro Experimental Fonts API**: Leveraging Astro's built-in experimental feature for font management.
- **Third-Party Packages**: Using external libraries like `astro-font`.

## Decision

We decided to use the **Astro Experimental Fonts API** for managing custom fonts in the project.

### Rationale
- **Built-In Integration**: The Astro Experimental Fonts API is built directly into Astro, ensuring better integration with our existing stack and avoiding reliance on third-party dependencies.
- **Automatic Optimization**: The API handles complex tasks like subsetting and preloading fonts automatically, saving development time and ensuring optimal performance.
- **Flexibility**: The API works well for both USWDS and custom components, including those from Shadcn, providing a unified solution for typography across the project.
- **Local Hosting**: Fonts are served locally, meeting the project's requirements for security and performance.
- **CSS Variable Support**: The API generates CSS variables (e.g., `--font-archivo`) for easy font usage in stylesheets, simplifying integration with TailwindCSS and other styling frameworks.
- **Future-Proofing**: As the Astro Fonts API is part of Astro's core, it is likely to receive ongoing support and improvements, making it a sustainable choice for the project.

## Consequences

### Positive
- Simplifies font management by leveraging Astro's built-in capabilities.
- Reduces the need for additional tools or libraries.
- Ensures consistent typography across USWDS and Shadcn components.
- Improves performance through automatic subsetting and preloading.

### Negative
- The Astro Fonts API is still experimental, so there may be potential changes or instability in future updates.
- Requires manual downloading and conversion of font files to `.woff2` format.