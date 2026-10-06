import LinkifyIt from 'linkify-it';

const linkify = new LinkifyIt();

// URLs mentioned in a free-text collection note, for the "links" sidebar.
export function noteLinks(text) {
  return (linkify.match(text || '') || []).map((m) => m.url);
}
