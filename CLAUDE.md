# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Purpose

This is a prompt engineering guide repository that organizes prompts, snippets, and configurations for various AI language models (Gemini, GPT, Claude, Grok, Perplexity) and development tools. The repository serves as a comprehensive collection of AI prompting strategies, templates, and configurations for different use cases including development, research, and content creation.

## Repository Structure

The repository follows a modular organization:

- `models/` - Contains model-specific configurations and snippets organized by AI provider
  - `gemini/` - Gemini-specific prompts and configurations
  - `claude/` - Claude-specific Raycast snippets
  - `grok-4/` - Grok model configurations
  - `perplexity/` - Perplexity-specific templates
- `raycast-ai/` - Raycast AI commands and presets
- `archive/` - Legacy configurations and templates
- `coderabbit.yaml` - CodeRabbit configuration for Portuguese reviews

## Key Files and Configurations

### CodeRabbit Configuration
The repository includes a `coderabbit.yaml` configuration file that sets:
- Language to Portuguese (`pt-br`)
- Review mode to `review-changes`
- Short descriptions with emoji-style comments
- Filters out documentation files (`.md`, `.json`, `.yaml`, `.txt`)

### Cursor Rules Integration
The repository contains Cursor IDE rules in `models/gemini/google/cursor_rules.md` that define:
- Code quality standards emphasizing clarity and maintainability
- Frontend stack defaults (Next.js, TypeScript, TailwindCSS, shadcn/ui, Lucide, Zustand)
- Self-reflection process for complex features using internal rubrics
- Tool usage optimization with `apply_patch` preference
- Verbosity control guidelines
- Architecture principles focusing on modularity and consistency

### Gemini Model Configurations
The `GEMINI.md` file contains extensive Raycast snippet configurations organized into groups:
- **Agente**: Autonomous agents with different persistence levels
- **Desenvolvimento**: Frontend development with self-reflection frameworks
- **Pesquisa**: Research strategies (robust vs. quick)
- **Escrita**: Markdown and professional report writing
- **Meta**: Prompt optimization and reasoning effort control

## Working with This Repository

### Content Standards
- All content is primarily in Portuguese (`pt-br`)
- Prompts use XML-like structured formatting for clarity
- Each model directory contains specific optimization patterns
- Raycast snippets follow consistent naming conventions (3-letter codes)

### File Organization Principles
- Model-specific content is isolated in respective directories
- Bilingual content exists (both Portuguese and English versions)
- Archive directory preserves historical configurations
- README files provide context within subdirectories

### Development Philosophy
The repository emphasizes:
- Modular prompt design with clear separation of concerns
- Structured XML formatting for complex prompt engineering
- Language-specific optimizations for different AI models
- Comprehensive coverage of use cases from development to research

This repository does not contain traditional development commands (build, test, lint) as it's a documentation and configuration repository rather than a software project.