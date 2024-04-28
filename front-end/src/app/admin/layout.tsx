import styles from './layout.module.scss';

import { SidePanel } from '@/components/Admin/SidePanel';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.main}>
      <SidePanel></SidePanel>
      <div>
        {children}
      </div>
    </div>
  )
}
