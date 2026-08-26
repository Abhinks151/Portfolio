/**
 * parseInline — tiny inline markup renderer for Info.js text fields.
 *
 * Supported syntax:
 *   **bold text**   → <strong> with accent colour
 *   `code snippet`  → <code> monospace pill
 *
 * Returns an array of React-renderable nodes (strings or JSX-like objects).
 * Used in description and architecture fields.
 */

/**
 * @param {string} text
 * @returns {Array<string|{type:string, key:number, content:string}>}
 */
export function parseInline(text) {
  if (!text) return []

  // Split on **...** and `...`
  const parts = text.split(/(\*\*[^*]+\*\*|`[^`]+`)/g)

  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return { type: 'bold', key: i, content: part.slice(2, -2) }
    }
    if (part.startsWith('`') && part.endsWith('`')) {
      return { type: 'code', key: i, content: part.slice(1, -1) }
    }
    return { type: 'text', key: i, content: part }
  })
}

/**
 * Splits a multi-line string into paragraphs (blank-line separated),
 * then parses inline markup within each paragraph.
 *
 * @param {string} text
 * @returns {Array<Array>}  array of paragraphs, each is an array of inline nodes
 */
export function parseParagraphs(text) {
  if (!text) return []

  return text
    .trim()
    .split(/\n\s*\n/)
    .filter(Boolean)
    .map(para => parseInline(para.trim()))
}
