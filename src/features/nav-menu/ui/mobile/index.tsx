import { paths } from '@/shared/routing'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/shared/ui'
import Link from 'next/link'
import { coinLinks, nftNavLinks } from '@/features/nav-menu'
import { AlignRight } from 'lucide-react'
import { Link2Icon } from '@radix-ui/react-icons'

export const NavMenuMobile = () => {
  return (
    <Sheet>
      <SheetTrigger className="hover:opacity-50 transition-opacity">
        <AlignRight size={30} />
      </SheetTrigger>
      <SheetContent
        className="pr-10 pt-12 overflow-y-auto h-svh grid items-end"
        style={{ scrollbarWidth: 'none' }}
      >
        <nav className="">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="flex justify-end gap-4 hover:no-underline">
                NFT
              </AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col items-end">
                  {nftNavLinks.map((link) => (
                    <Link
                      href={link.href}
                      key={link.href}
                      className="flex gap-4  items-center justify-end font-medium text-sm py-3"
                    >
                      {link.title} <Link2Icon />
                    </Link>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="flex justify-end gap-4 hover:no-underline">
                Coins
              </AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col items-end">
                  {coinLinks.map((link) => (
                    <Link
                      href={link.href}
                      key={link.href}
                      className="flex gap-4  items-center justify-end font-medium text-sm py-3"
                    >
                      {link.title} <Link2Icon />
                    </Link>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Link
            href={paths.trade}
            className="flex gap-4 items-center justify-end border-b font-medium text-sm py-4"
          >
            Trade <Link2Icon />
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  )
}
