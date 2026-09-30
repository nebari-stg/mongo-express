import Handlebars from 'handlebars';

// Fixed built-in template; no user input reaches compile().
const renderSummary = Handlebars.compile('<p>Database {{db}}: {{count}} collections</p>');

export function collectionSummaryHtml(db, count) {
  return renderSummary({ db, count });
}
