export function cssvar(name: string): string {
  return getComputedStyle(document.documentElement).getPropertyValue(name);
}

export const csshsl = (name: string): string => {
  return `hsl(${cssvar(name)})`;
};
