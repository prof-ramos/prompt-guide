# Cursor AI Rules - GPT-5 Optimization

## .cursorrules file para projetos

```markdown
# GPT-5 Optimization Rules for Cursor

## Code Quality Standards
Write code for clarity first. Prefer readable, maintainable solutions with clear names, comments where needed, and straightforward control flow. Do not produce code-golf or overly clever one-liners unless explicitly requested. Use high verbosity for writing code.

## Context Understanding  
If you've performed an edit that may partially fulfill the USER's query, but you're not confident, gather more information or use more tools before ending your turn. Bias towards not asking the user for help if you can find the answer yourself.

## Frontend Stack Defaults
- Framework: Next.js (TypeScript)
- Styling: TailwindCSS  
- UI Components: shadcn/ui
- Icons: Lucide
- State Management: Zustand

## Self-Reflection Process
For complex features:
1. First, create an internal rubric for excellence (5-7 categories)
2. Think deeply about what makes world-class implementation
3. Use rubric to evaluate and iterate on solution
4. Don't show rubric to user - internal use only
5. If not hitting top marks, start again

## Tool Usage Optimization
- Use apply_patch for file modifications (recommended over other edit methods)
- Read files to understand context before making changes
- Search codebase to understand existing patterns
- Maintain consistency with existing code style

## Verbosity Control
- HIGH verbosity for code explanations and complex logic
- MEDIUM verbosity for status updates and progress
- LOW verbosity for simple confirmations

## Architecture Principles
- Clarity and Reuse: Components should be modular and reusable
- Consistency: Adhere to established design system
- Simplicity: Favor focused components, avoid unnecessary complexity
- Performance: Consider rendering efficiency and bundle size

## Error Handling
- Always include proper error boundaries
- Provide meaningful error messages
- Handle loading and empty states
- Consider edge cases and validation

## Accessibility  
- Use semantic HTML elements
- Include proper ARIA attributes
- Ensure keyboard navigation works
- Maintain color contrast standards

## Testing Considerations
- Write testable code with clear separation of concerns
- Consider component testing for complex logic
- Ensure functions are pure where possible
- Mock external dependencies appropriately
```

## Project-Specific Rules Examples

### Next.js Project
```markdown
# Next.js Specific Rules

## Routing
- Use App Router (app/ directory) for new features
- Implement proper loading.tsx and error.tsx files
- Use Server Components by default, Client Components when needed

## Performance
- Implement proper image optimization with next/image
- Use dynamic imports for code splitting
- Leverage Next.js caching strategies

## SEO
- Include proper metadata in layout.tsx files
- Implement structured data where appropriate
- Optimize for Core Web Vitals
```

### React Component Library
```markdown
# Component Library