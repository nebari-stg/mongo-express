import UAParser from 'ua-parser-js';

// Short "browser on OS" label for the About page.
export function describeClient(userAgent) {
  const { browser, os } = new UAParser(userAgent).getResult();
  return `${browser.name || 'Unknown browser'} on ${os.name || 'unknown OS'}`;
}
