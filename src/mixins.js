import { css } from "styled-components"

const breakpoints = ['640px', '832px', '1024px', '1280px', '1800px']

// aliases
breakpoints.xs = breakpoints[0]
breakpoints.sm = breakpoints[1]
breakpoints.md = breakpoints[2]
breakpoints.lg = breakpoints[3]
breakpoints.xl = breakpoints[4]

const breakpointsAliases = ["xs", "sm", "md", "lg", "xl"]

export const down = breakpointsAliases.reduce((acc, bp) => {
  acc[bp] = (strings, ...args) => css`
    @media (max-width: ${breakpoints[bp]}) {
      ${css(strings, ...args)}
    }
  `
  return acc
}, {})

export const up = breakpointsAliases.reduce((acc, bp) => {
  acc[bp] = (strings, ...args) => css`
    @media (min-width: ${breakpoints[bp]}) {
      ${css(strings, ...args)}
    }
  `
  return acc
}, {})