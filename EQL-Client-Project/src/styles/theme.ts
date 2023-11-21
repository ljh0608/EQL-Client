import { DefaultTheme } from 'styled-components';

const colors = {
  red: '#ea3223',
  black: '#000000',
  grey1: '#767676',
  grey2: '#999999',
  grey3: '#b1b1b1',
  grey4: '#cccccc',
  grey5: '#EBEFF5',
  grey6: '#f2f2f2',
  grey7: '#FAFAFA',
  white: '#fffff',
};

const transparencys = {
  forRed: '80%',
  forWhite: '40%',
};

type Font = {
  family: string;
  weight: number;
  size: number;
  lineHeight: number;
};
const FONT = ({ family, weight, size, lineHeight }: Font): string => {
  return `
    font-family: ${family};
    font-weight : ${weight};
    font-size : ${size}rem;
    line-height : ${lineHeight}rem;
    `;
};

// medium =500
// bold=700
// underlinSemebold=600
// Strikethrough_Medium =500

// 예시입니다 지우고 다시 적용해야해요!
const fonts = {
  title1: FONT({ family: 'Pretendard Variable', weight: 500, size: 3.25, lineHeight: 1.2 }),
  title2: FONT({ family: 'Pretendard Variable', weight: 500, size: 2.25, lineHeight: 1.3 }),
  title3: FONT({ family: 'Pretendard Variable', weight: 500, size: 2, lineHeight: 1.3 }),
  title4: FONT({ family: 'Pretendard Variable', weight: 700, size: 1.625, lineHeight: 1.3 }),

  subtitle1: FONT({ family: 'Pretendard Variable', weight: 600, size: 1.75, lineHeight: 1.3 }),
  subtitle_underlined1: FONT({ family: 'Pretendard Variable', weight: 600, size: 1.25, lineHeight: 1.4 }),

  body1: FONT({ family: 'Pretendard Variable', weight: 500, size: 1.5, lineHeight: 1.4 }),
  body2: FONT({ family: 'Pretendard Variable', weight: 600, size: 1.25, lineHeight: 1.6 }),
  body3: FONT({ family: 'Pretendard Variable', weight: 500, size: 1.25, lineHeight: 1.6 }),
  body4: FONT({ family: 'Pretendard Variable', weight: 600, size: 1.125, lineHeight: 1.6 }),
  body5: FONT({ family: 'Pretendard Variable', weight: 500, size: 1.125, lineHeight: 1.6 }),
  body6: FONT({ family: 'Pretendard Variable', weight: 600, size: 1, lineHeight: 1.6 }),
  body7: FONT({ family: 'Pretendard Variable', weight: 500, size: 1, lineHeight: 1.5 }),
  body8: FONT({ family: 'Pretendard Variable', weight: 600, size: 0.875, lineHeight: 1.4 }),
  body_underlinde8: FONT({ family: 'Pretendard Variable', weight: 600, size: 0.875, lineHeight: 1.4 }),
  body9: FONT({ family: 'Pretendard Variable', weight: 500, size: 0.875, lineHeight: 1.4 }),
  body10: FONT({ family: 'Pretendard Variable', weight: 500, size: 0.75, lineHeight: 1.6 }),

  detail1: FONT({ family: 'Pretendard Variable', weight: 500, size: 0.625, lineHeight: 1.6 }),
  number_strikethrough1: FONT({ family: 'Pretendard Variable', weight: 500, size: 0.875, lineHeight: 1.6 }),
};

export type ColorsTypes = typeof colors;
export type FontsTypes = typeof fonts;
export type TransparencysTypes = typeof transparencys;

export const theme: DefaultTheme = {
  colors,
  transparencys,
  fonts,
};
