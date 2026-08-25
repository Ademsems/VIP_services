/**
 * Extensions tried, in order, for every "base path" image slot on the site
 * (Hero, Fleet, Routes, About). Lets any of these formats be dropped into
 * `public/` under the same base filename with zero code changes — the
 * component tries each in turn and falls back to the CSS/SVG treatment only
 * once all candidates fail to load.
 */
export const IMAGE_EXTENSIONS = ["webp", "avif", "jpg", "jpeg", "png"];

export function candidateSrc(base: string, index: number) {
  return `${base}.${IMAGE_EXTENSIONS[index]}`;
}
