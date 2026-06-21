---
name: code-exercise-style
description: Use this skill when implementing, fixing, or reviewing HTML/CSS/JavaScript exercises in this code_exercise repository, especially folders named ExNN with main.html, mainstyle.css, scripts.js, image assets, form/table layouts, GET pages, or small vanilla-JS tasks. It preserves the repo's simple exercise style, file naming, DOM patterns, and visual consistency.
---

# Code Exercise Style

## Core Workflow

1. Read the target exercise files first, then read 2-4 nearby exercises with the same pattern.
   - For JS exercises, inspect nearby `main.html`, `mainstyle.css`, and `scripts.js`.
   - For layout exercises, inspect the provided data text file and image assets if present.
   - For form/GET exercises, inspect both the input page and result page.

2. Preserve the exercise contract.
   - Keep the existing folder name, file names, relative asset paths, button labels, field names, product codes, and visible wording unless the user asks to change them.
   - Reproduce the required sample output over inventing a polished modern redesign.
   - Prefer small, readable vanilla HTML/CSS/JS.

3. Apply the repo rules from `references/repo-rules.md` when the task is non-trivial.

4. Implement narrowly.
   - Use plain HTML, CSS, and JavaScript.
   - Avoid frameworks, build tooling, external CDNs, modules, TypeScript, bundlers, or large abstractions.
   - Keep logic close to the exercise and name functions in Vietnamese without accents or clear camelCase.

5. Verify locally.
   - For static pages, inspect by opening the HTML or using a local browser check when available.
   - For JS tasks, test the expected button/input flows manually or with a browser automation pass.
   - Confirm relative image/script/style paths still resolve.

## Default Coding Rules

- Use `main.html`, `mainstyle.css`, and `scripts.js` when the exercise already follows that split.
- Keep a single HTML entry page unless the exercise explicitly needs result/help/search pages.
- Use semantic-enough markup, but allow table-based layouts when the surrounding exercises use tables.
- Style with simple selectors, visible borders, basic fonts, and fixed/sample-like spacing when matching a screenshot or old exercise style.
- If an exercise needs to fit the viewport, preserve the original visual ratio first, then scale or center the whole page before redesigning the layout structure.
- Keep CSS as small as possible by grouping shared selectors, reusing container patterns, and avoiding repeated font, border, width, and spacing declarations when one rule can cover them.
- Put JS in `scripts.js` for newer interactive exercises unless the existing exercise uses inline script consistently.
- Use direct DOM APIs: `getElementById`, `querySelector`, `querySelectorAll`, `closest`, `URLSearchParams`.
- Validate simple inputs defensively with `Number`, `parseFloat`, `isNaN`, empty-string checks, and fallback values.
- Do not change unrelated exercises or shared assets.

## Text And Encoding

- Keep user-facing text exactly as the exercise requires.
- Prefer ASCII identifiers and function names without Vietnamese accents.
- If existing Vietnamese text appears mojibake, do not mass-convert unrelated files. Fix only target text when the task explicitly requires readable Vietnamese or the target file is already being edited for that text.
- Keep `<meta charset="UTF-8">` in modernized or newly created HTML files.

## When In Doubt

Choose the smallest implementation that satisfies the exercise and looks like neighboring folders. If a modern best practice conflicts with the course sample style, follow the course sample unless it breaks functionality.
