# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Purpose

This is a prompt engineering guide repository that organizes prompts, snippets, and configurations for various AI language models (Gemini, GPT, Claude, Grok, Perplexity) and development tools. The repository serves as a comprehensive collection of AI prompting strategies, templates, and configurations for different use cases including development, research, and content creation.

## Repository Structure

The repository follows a modular organization:

- `configs/` - Shared configurations across models
  - `coderabbit.yaml` - CodeRabbit configuration for Portuguese reviews
- `models/` - Model-specific configurations organized by AI provider
  - `claude/` - Claude-specific configurations with README, API config, and Raycast snippets
  - `gemini/` - Gemini-specific prompts with comprehensive GEMINI.md configuration
  - `gpt-5/` - GPT-5 configurations including Cursor rules and OpenAI playground structures
  - `grok-4/` - Grok model configurations and templates
  - `perplexity/` - Perplexity-specific templates and research configurations
- `tools/` - Tool-specific configurations
  - `raycast/` - Raycast AI setup, commands and presets
- `manual/` - Detailed documentation for specific tools and processes
- `.claude/` - Claude Code specific settings and language preferences

## Key Files and Configurations

### CodeRabbit Configuration
The repository includes a `configs/coderabbit.yaml` configuration file that sets:
- Language to Portuguese (`pt-br`)
- Review mode to `review-changes`
- Short descriptions with emoji-style comments
- Filters out documentation files (`.md`, `.json`, `.yaml`, `.txt`)

### Cursor Rules Integration
The repository contains Cursor IDE rules in `models/gpt-5/cursor-rules.md` that define:
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
- Each model directory contains standardized files:
  - `README.md` - Model-specific documentation
  - `api-config.json` - Optimized API configurations
  - `raycast-snippets.md` - Raycast AI snippets
- Raycast snippets follow consistent naming conventions (3-letter codes)

### File Organization Principles
- Model-specific content is isolated in respective directories with consistent structure
- Configuration files are centralized in `configs/` directory
- Tool-specific setups are in `tools/` directory
- Bilingual support where relevant (Portuguese and English versions)
- Standardized naming conventions using hyphens instead of underscores

### API Configuration System
Each model directory includes an `api-config.json` file with:
- Model information and capabilities
- Default parameters optimized for the model
- Task-specific presets for different use cases
- Best practices and guidelines
- Model-specific features (reasoning_effort, verbosity, etc.)

### Development Philosophy
The repository emphasizes:
- Modular prompt design with clear separation of concerns
- Structured XML formatting for complex prompt engineering
- Language-specific optimizations for different AI models
- Comprehensive coverage of use cases from development to research
- Consistent organization patterns across all model directories

This repository does not contain traditional development commands (build, test, lint) as it's a documentation and configuration repository rather than a software project.