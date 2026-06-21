# Repo Rules For Web Exercises

These rules are derived from exercises such as Ex46, Ex48, Ex49, Ex53, Ex54, Ex55, Ex56, and Ex57.

## File Organization

- Use one folder per exercise, usually `ExNN`.
- Common files:
  - `main.html` for the primary page.
  - `mainstyle.css` for CSS.
  - `scripts.js` for JavaScript in newer interactive exercises.
  - `hinh/` or `images/` for local assets.
- Keep relative paths local to the exercise unless an older exercise already references another folder.
- Do not rename image assets or data files unless the user asks.

## HTML Patterns

- Include `<!DOCTYPE html>`, `<html lang="vi">` for Vietnamese exercises, and `<meta charset="UTF-8">`.
- Link CSS with `<link rel="stylesheet" href="mainstyle.css">`.
- Link JS at the end of `<body>` with `<script src="scripts.js"></script>` for split-file exercises.
- Use simple containers such as `.container`, `.form-container`, `.table-wrapper`, `.web-container`.
- Tables are acceptable and often preferred for form/calculation exercises.
- Preserve course labels and button text such as `TongCong`, `MAX`, `MIN`, `Giai`, `Tiep`, even if spelling or casing is not modern.
- Prefer `readonly` result fields when output should not be typed by the user.
- Use `name` attributes in forms that submit with GET/POST.

## CSS Patterns

- Keep CSS direct and small.
- Prefer one shared rule over repeated declarations when multiple controls use the same font, border, spacing, or alignment.
- Common fonts:
  - `Arial, sans-serif` for forms and JS utility exercises.
  - `"Times New Roman", Times, serif` for table/product/order examples or old-style pages.
- Common controls:
  - Buttons use light gray background, `1px solid #a6a6a6`, small padding, and pointer cursor.
  - Inputs often use simple `1px solid #999` or borderless fields inside bordered table cells.
- Use borders, table cell padding, `border-collapse`, `fieldset`, and fixed widths when matching samples.
- If a page must fit the screen, first preserve the sample's proportions, then center and scale the full canvas or constrain the wrapper with viewport-based sizing.
- Avoid decorative gradients, card-heavy marketing layouts, animations, icon libraries, and responsive redesigns unless the exercise demands them.

## JavaScript Patterns

- Use vanilla JavaScript only.
- Keep functions globally callable when buttons use inline `onclick`.
- Use Vietnamese no-accent function names such as:
  - `layGiaTri`
  - `hienThiKetQua`
  - `giaiPhuongTrinh`
  - `lamTiep`
  - `tinhTongCong`
  - `ghiKetQua`
- Use helper functions to reduce repetition when there are multiple related buttons.
- Use `let`/`const` consistently; avoid unnecessary classes or modules.
- Keep calculations straightforward:
  - Convert with `Number(...) || 0` or `parseFloat(...)`.
  - Guard invalid inputs with `isNaN`.
  - Write results to `.value`, `.innerText`, or `.textContent` depending on element type.
- For GET result pages, use `new URLSearchParams(window.location.search)`.
- For string exercises with Vietnamese text, use locale-aware methods when helpful: `toLocaleUpperCase("vi-VN")`, `toLocaleLowerCase("vi-VN")`.

## Implementation Priorities

1. Match the requested exercise behavior.
2. Match nearby exercise structure and visual style.
3. Keep code readable for a web programming class.
4. Avoid unrelated cleanup.
5. Verify path resolution and user interactions.

## Common Pitfalls To Avoid

- Do not leave duplicate logic both inline in HTML and in `scripts.js` unless preserving an existing exercise exactly.
- Do not introduce external dependencies for small tasks.
- Do not replace table-based sample layouts with complex modern layouts.
- Do not silently change product codes, form field names, asset filenames, or target page names.
- Do not bulk-fix mojibake across the repo without explicit instruction.
