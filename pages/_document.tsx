import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.fbAsyncInit = function() {
                FB.init({
                appId            : '394501179179086',
                autoLogAppEvents : true,
                xfbml            : true,
                version          : 'v13.0'
                });
            };`,
          }}
        />
        <script
          async
          defer
          crossOrigin="anonymous"
          src="https://connect.facebook.net/en_US/sdk.js"
        ></script>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
