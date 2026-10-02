/* Subtle repeating damask ornamental overlay rendered as an inline SVG data URI */
export function damaskUrl(stroke: string, opacity = 0.4) {
  const svg = `
  <svg xmlns='http://www.w3.org/2000/svg' width='120' height='150' viewBox='0 0 120 150'>
    <g fill='none' stroke='${stroke}' stroke-opacity='${opacity}' stroke-width='1.4'>
      <path d='M60 8 c18 12 18 34 0 46 c-18 -12 -18 -34 0 -46 Z'/>
      <path d='M60 20 c8 6 8 18 0 24 c-8 -6 -8 -18 0 -24 Z'/>
      <path d='M60 60 c22 8 30 34 0 52 c-30 -18 -22 -44 0 -52 Z'/>
      <path d='M30 95 c-12 6 -14 24 -2 34 M90 95 c12 6 14 24 2 34'/>
      <path d='M0 75 c18 12 18 34 0 46 M120 75 c-18 12 -18 34 0 46'/>
      <circle cx='60' cy='118' r='4'/>
    </g>
  </svg>`;
  return `url("data:image/svg+xml;utf8,${encodeURIComponent(svg)}")`;
}
