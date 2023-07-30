export const alphabeticalSort = (a: string, b: string): number =>
  a.toLocaleLowerCase() < b.toLowerCase()
    ? -1
    : a.toLowerCase() > b.toLowerCase()
    ? 1
    : 0
