import { paths } from '@/shared/routing'
import {
  DropdownMenuSeparator,
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
import { coinLinks, nftNavLinks } from '@/features/nav-menu'
import { Bitcoin } from 'lucide-react'
import { Logo } from '../logo'

export const NavMenuDesktop = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>NFT</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid gap-3 p-4 md:w-[500px] grid-rows-1 md:grid-cols-[.75fr_1fr]">
              <NavBanner
                icon={
                  <Icon
                    name="nft"
                    type="special"
                    className="text-blue-500 aspect-square"
                  />
                }
                title="Ethereum NFTs"
                description="Ethereum NFT Collections shows the name, sales and volume
                of the top NFTs on the Ethereum blockchain."
              />
              <ul className="grid gap-1 grid-cols-1 h-full">
                {nftNavLinks.map(({ description, href, title }) => (
                  <NavListItem key={title} href={href} title={title}>
                    {description}
                  </NavListItem>
                ))}
              </ul>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Coins</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid gap-3 p-4 md:w-[500px] grid-rows-1 md:grid-cols-[.75fr_1fr]">
              <NavBanner
                icon={
                  <Bitcoin className=" w-24 h-24 md:w-4/6 md:h-4/6 mt-4 mx-auto text-background bg-blue-500 rounded-full" />
                }
                title="Coin Price"
                description="Showroom lists the most relevant tokens in the market today. The ranking is based on user behaviour and price data."
              />

              <ul className="grid gap-1 grid-cols-1 h-full">
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
