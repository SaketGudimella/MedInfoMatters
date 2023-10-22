import { injectGlobal } from "@emotion/css";

export default function createGlobalStyle() {
  injectGlobal`
    body {
      margin: 0; line-height: normal;
    }
:root {

/* fonts */
--font-poppins: Poppins;
--font-kyivtype-sans: 'KyivType Sans';
--font-inter: Inter;

/* font sizes */
--font-size-21xl: 40px;
--font-size-5xl: 24px;
--font-size-6xl: 25px;
--font-size-17xl: 36px;

/* Colors */
--color-lightblue: #add8e6;
--color-black: #000;
--color-whitesmoke: #f7f1f1;
--color-ghostwhite: #f2f0f5;

}
`;
}
