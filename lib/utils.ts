/** Prefixes a path with NEXT_PUBLIC_BASE_PATH for GitHub Pages compatibility */
export const imgPath = (path: string): string => {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? ''
  return `${base}${path}`
}
