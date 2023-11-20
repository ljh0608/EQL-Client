import 'styled-components';
import { ColorsTypes, FontsTypes, TransparencysTypes } from './theme';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: ColorsTypes;
    fonts: FontsTypes;
    transparencys: TransparencysTypes;
  }
}
