import { paths } from '@/shared/routing'
import {
  Icon,
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/shared/ui'
import Link from 'next/link'
import { NavBanner, NavListItem } from './ui'
import { coinLinks, nftLinks } from '@/features/nav-menu'
import { Bitcoin } from 'lucide-react'

export const NavMenuDesktop = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>NFT</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavBanner
                  icon={
                    <Icon name="nft" type="special" className="text-blue-500" />
                  }
                  title="Ethereum NFTs"
                  description="Ethereum NFT Collections shows the name, sales and volume
                      of the top NFTs on the Ethereum blockchain."
                />
              </li>
              {nftLinks.map(({ description, href, title }) => (
                <NavListItem key={title} href={href} title={title}>
                  {description}
                </NavListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Coins</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] grid-rows-1 lg:grid-cols-[.75fr_1fr]">
              <NavBanner
                icon={
                  <Bitcoin className="w-4/6 h-4/6 mt-4 mx-auto text-background bg-blue-500 rounded-full" />
                }
                title="Coin Price"
                description="Showroom lists the most relevant tokens in the market today. The ranking is based on user behaviour and price data."
              />

              <ul className="grid gap-1 grid-cols-1 h-full ">
                {coinLinks.map(({ description, href, title }) => (
                  <NavListItem key={title} title={title} href={href}>
                    {description}
                  </NavListItem>
                ))}
              </ul>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href={paths.trade} legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Trade
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
