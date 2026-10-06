import { fromJS } from 'immutable';

const DEFAULTS = fromJS({ theme: 'light', pageSize: 20, columns: { compact: false } });

// Viewer preferences layered over the defaults.
export function viewPreferences(overrides) {
  return DEFAULTS.mergeDeep(fromJS(overrides || {})).toJS();
}
