import { createTamagui } from 'tamagui'
import { createInterFont } from '@tamagui/font-inter'
import { shorthands } from '@tamagui/shorthands'
import { themes, tokens } from '@tamagui/themes'
import { createMedia } from '@tamagui/react-native-media-driver'

import { animations } from './animations'

const headingFont = createInterFont({
  size: {
    6: 15,
  },
  transform: {
    6: 'uppercase',
    7: 'none',
  },
  weight: {
    6: '400',
    7: '700',
  },
  color: {
    6: '$colorFocus',
    7: '$color',
  },
  letterSpacing: {
    5: 2,
    6: 1,
    7: 0,
    8: -1,
    9: -2,
    10: -3,
    12: -4,
    14: -5,
    15: -6,
  },
  face: {
    700: { normal: 'InterBold' },
  },
})

const bodyFont = createInterFont(
  {
    face: {
      700: { normal: 'InterBold' },
    },
  },
  {
    sizeSize: (size) => Math.round(size * 1.1),
    sizeLineHeight: (size) => Math.round(size * 1.1 + (size > 20 ? 10 : 10)),
  }
)

export const config = createTamagui({
  defaultFont: 'body',
  animations,
  shouldAddPrefersColorThemes: true,
  themeClassNameOnRoot: true,
  shorthands,
  fonts: {
    body: bodyFont,
    heading: headingFont,
  },
  themes: {
    light: {
      background: tokens.color.gray9Light,
      backgroundHover: tokens.color.gray10Light,
      backgroundPress: tokens.color.gray11Light,
      backgroundFocus: tokens.color.gray12Light,
      backgroundTransparent: 'rgba(255, 255, 255, 0.25)',
      borderColor: tokens.color.gray6Light,
      borderColorHover: tokens.color.gray7Light,
      borderColorPress: tokens.color.gray8Light,
      borderColorFocus: tokens.color.gray9Light,
      color: tokens.color.gray1Light,
      colorHover: tokens.color.gray2Light,
      colorPress: tokens.color.gray3Light,
      colorFocus: tokens.color.gray4Light,
      shadowColor: 'rgba(255, 255, 255, 0.25)',
      shadowColorHover: 'rgba(255, 255, 255, 0.25)',
      shadowColorPress: 'rgba(255, 255, 255, 0.25)',
      shadowColorFocus: 'rgba(255, 255, 255, 0.25)',
      // foo: tokens.color.green7Light,
    },
    dark: {
      background: tokens.color.gray9Dark,
      backgroundHover: tokens.color.gray10Dark,
      backgroundPress: tokens.color.gray11Dark,
      backgroundFocus: tokens.color.gray12Dark,
      backgroundTransparent: 'rgba(0, 0, 0, 0.25)',
      borderColor: tokens.color.gray6Dark,
      borderColorHover: tokens.color.gray7Dark,
      borderColorPress: tokens.color.gray8Dark,
      borderColorFocus: tokens.color.gray9Dark,
      color: tokens.color.gray1Dark,
      colorHover: tokens.color.gray2Dark,
      colorPress: tokens.color.gray3Dark,
      colorFocus: tokens.color.gray4Dark,
      shadowColor: 'rgba(0, 0, 0, 0.25)',
      shadowColorHover: 'rgba(0, 0, 0, 0.25)',
      shadowColorPress: 'rgba(0, 0, 0, 0.25)',
      shadowColorFocus: 'rgba(0, 0, 0, 0.25)',
      // foo: tokens.color.green7Dark,
    },
  },
  tokens,
  media: createMedia({
    xs: { maxWidth: 660 },
    sm: { maxWidth: 800 },
    md: { maxWidth: 1020 },
    lg: { maxWidth: 1280 },
    xl: { maxWidth: 1420 },
    xxl: { maxWidth: 1600 },
    gtXs: { minWidth: 660 + 1 },
    gtSm: { minWidth: 800 + 1 },
    gtMd: { minWidth: 1020 + 1 },
    gtLg: { minWidth: 1280 + 1 },
    short: { maxHeight: 820 },
    tall: { minHeight: 820 },
    hoverNone: { hover: 'none' },
    pointerCoarse: { pointer: 'coarse' },
  }),
})
