import GlobalStyles from '@/components/GlobalStyles';
import AppLayout from '@/components/Layout/AppLayout/AppLayout';
import useCheckPage from '@/hooks/useCheckPage';
import '@/styles/globals.css';
import theme from '@/theme';
import { ThemeProvider } from '@emotion/react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { RecoilRoot } from 'recoil';
import { appWithTranslation } from 'next-i18next';
import { GoogleAnalytics } from '@next/third-parties/google';

function App({ Component, pageProps }: AppProps) {
  const { isProjectDetailPage } = useCheckPage();
  const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || '';

  return (
    <>
      {GA_TRACKING_ID && <GoogleAnalytics gaId={GA_TRACKING_ID} />}

      <Head>
        <title>JUNY PORTFOLIO</title>
        <meta name="description" content="프론트엔드 개발자 박준영의 포트폴리오입니다. 기술 역량, 개발 경험, 작업 철학을 정리하고, 나의 개발자로서의 성장을 한눈에 볼 수 있도록 구성했습니다." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <RecoilRoot>
          {isProjectDetailPage ? (
            <Component {...pageProps} />
          ) : (
            <AppLayout>
              <Component {...pageProps} />
            </AppLayout>
          )}
        </RecoilRoot>
      </ThemeProvider>
    </>
  );
}

export default appWithTranslation(App);
