/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable implicit-arrow-linebreak */
import Document from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        // eslint-disable-next-line implicit-arrow-linebreak
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            // eslint-disable-next-line react/react-in-jsx-scope
            // eslint-disable-next-line react/jsx-props-no-spreading
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          // eslint-disable-next-line react/react-in-jsx-scope
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
}
