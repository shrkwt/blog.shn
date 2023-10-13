'use client'
/*
import siteMetadata from '@/data/siteMetadata'
import Logo from '@/data/logo.svg'
*/
import headerNavLinks from '@/data/headerNavLinks'
import Link from './Link'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import Typewriter from 'typewriter-effect'
import { usePathname } from 'next/navigation'
import SearchButton from './SearchButton'

const Header = () => {
  const pathName = usePathname()
  return (
    <header className="flex items-center justify-between py-10">
      <div>
        <Link href="/" className="flex items-center justify-center gap-1" aria-label="Homepage">
          <div className="text-primary-color dark:text-primary-color-dark flex items-center justify-between text-xl font-semibold">
            {`~${pathName}`}
            <Typewriter
              options={{
                strings: [],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
        </Link>
        {/* <Link href="/" aria-label={siteMetadata.headerTitle}>
          <div className="flex items-center justify-between">
            <div className="mr-3">
              <Logo />
            </div>
            {typeof siteMetadata.headerTitle === 'string' ? (
              <div className="hidden h-6 text-2xl font-semibold sm:block">
                {siteMetadata.headerTitle}
              </div>
            ) : (
              siteMetadata.headerTitle
            )}
          </div>
            </Link> */}
      </div>
      <div className="flex items-center leading-5 space-x-4 sm:space-x-6">
        {headerNavLinks
          .filter((link) => link.href !== '/')
          .map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="hidden sm:block font-medium text-gray-900 dark:text-gray-100"
            >
              {link.title}
            </Link>
          ))}
        <SearchButton />
        <ThemeSwitch />
        <MobileNav />
      </div>
    </header>
  )
}

export default Header
