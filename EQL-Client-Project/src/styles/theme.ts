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
  head1: FONT({ family: 'Pretendard Variable', weight: 600, size: 2.8, lineHeight: 3.4 }),
  head2: FONT({ family: 'Pretendard Variable', weight: 600, size: 2.2, lineHeight: 3 }),

  title1: FONT({ family: 'Pretendard Variable', weight: 600, size: 1.8, lineHeight: 2.4 }),
  title2: FONT({ family: 'Pretendard Variable', weight: 500, size: 1.6, lineHeight: 2 }),

  body1: FONT({ family: 'Pretendard Variable', weight: 500, size: 1.6, lineHeight: 2.4 }),
  body2: FONT({ family: 'Pretendard Variable', weight: 500, size: 1.4, lineHeight: 2 }),
  body3: FONT({ family: 'Pretendard Variable', weight: 400, size: 1.4, lineHeight: 2 }),
  body4: FONT({ family: 'Pretendard Variable', weight: 500, size: 1.2, lineHeight: 1.6 }),

  button1: FONT({ family: 'Pretendard Variable', weight: 500, size: 1.6, lineHeight: 2 }),
  button2: FONT({ family: 'Pretendard Variable', weight: 400, size: 1.6, lineHeight: 2 }),
};

export type ColorsTypes = typeof colors;
export type FontsTypes = typeof fonts;
export type TransparencysTypes = typeof transparencys;

export const theme: DefaultTheme = {
  colors,
  transparencys,
  fonts,
};
