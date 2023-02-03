import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />

      <NextScript />
      <script
            dangerouslySetInnerHTML={{
              __html: `
                (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
                (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
      
                ym(12345678, "init", {
                      clickmap:true,
                      trackLinks:true,
                      accurateTrackBounce:true
                });
              `,
            }}
          />
        <noscript>
          <div>
            <img src="https://mc.yandex.ru/watch/92317253" style={{ position:'absolute', left:'-9999px' }} alt="" />
          </div>
        </noscript>

      {/* FAVICONS */}

      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"></link>
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"></link>
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"></link>
      <link rel="manifest" href="/site.webmanifest"></link>
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#333333"></link>
      <meta name="msapplication-TileColor" content="#000000"></meta>
      <meta name="theme-color" content="#A2FA32"></meta>

      <title>Flowerave・NFT</title>
      <meta name="description" content="Project created by Culture3k’s team in collaboration with a Moscow based label System108."></meta>

      {/* BODY */}

      <body>
        <Main />
        <NextScript />
      </body>

    </Html>
  )
}
