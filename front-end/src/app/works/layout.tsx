import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { HeaderSplash } from '@/components/HeaderSplash/HeaderSplash';

import { choice } from '@/utils/gradient';
import { splash_data } from '@/data/splash.data';


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
        <HeaderSplash splash_text={choice(splash_data)}></HeaderSplash>
        {children}
        <Footer></Footer>
    </>
  )
}
