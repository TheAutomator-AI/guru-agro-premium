/**
 * Concatenates truthy classnames into a single string.
 */
export function cn(...inputs: Array<string | false | null | undefined | Record<string, boolean>>): string {
  const classes: string[] = [];

  for (const input of inputs) {
    if (!input) continue;

    if (typeof input === 'string') {
      classes.push(input);
    } else if (typeof input === 'object') {
      for (const [key, value] of Object.entries(input)) {
        if (value) {
          classes.push(key);
        }
      }
    }
  }

  return classes.join(' ').trim();
}

/**
 * Formats a 2-digit index string (e.g. 1 -> "01")
 */
export function formatIndex(index: number): string {
  return index < 10 ? `0${index}` : `${index}`;
}
