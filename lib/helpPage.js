import { marked } from 'marked';

// Built-in help text rendered once at startup; no user input is parsed.
const HELP_HTML = marked.parse('# Help\n\nUse the **database** list on the left to browse collections.');

export function helpPageHtml() {
  return HELP_HTML;
}
