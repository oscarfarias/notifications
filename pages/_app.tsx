import 'moment/locale/es'
import moment from 'moment-timezone'
import type { AppProps } from 'next/app'
import type { NextPage } from 'next'
import { SnackbarProvider } from 'notistack'
import ThemeConfig from 'common/theme'
import { CacheProvider, EmotionCache } from '@emotion/react'
import createEmotionCache from '../common/theme/createEmotionCache'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import { QueryClient, QueryClientProvider } from 'react-query'
import './GlobalStyles.css'
import { Icon } from 'common/components'
moment.locale(`es`)
moment.tz.setDefault(`America/Santiago`)
const clientSideEmotionCache = createEmotionCache()

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: true,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      refetchInterval: false,
    },
  },
})

// eslint-disable-next-line @typescript-eslint/ban-types
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: JSX.Element) => JSX.Element
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
  emotionCache?: EmotionCache
}
function MyApp({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps,
}: AppPropsWithLayout): JSX.Element {
  const getLayout = Component.getLayout || ((page) => page)

  return (
    <CacheProvider value={emotionCache}>
      <QueryClientProvider client={queryClient}>
        <ThemeConfig>
          <SnackbarProvider
            hideIconVariant
            anchorOrigin={{
              vertical: `top`,
              horizontal: `right`,
            }}
            dense
            preventDuplicate
            iconVariant={{
              success: <Icon icon="checkCircleOutlineRounded" />,
              warning: <Icon icon="warningAmberOutlined" />,
            }}
          >
            {getLayout(<Component {...pageProps} />)}
          </SnackbarProvider>
        </ThemeConfig>
      </QueryClientProvider>
    </CacheProvider>
  )
}
export default MyApp
