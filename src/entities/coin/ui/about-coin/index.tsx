import { cn } from '@/shared/lib'
import { ChevronDown, ChevronUp } from 'lucide-react'
import React from 'react'

export const AboutCoin: React.FC<{
  description?: string
  name?: string
}> = ({ description, name }) => {
  const [isOpen, setIsOpen] = React.useState(false)

  if (!description) return

  const parser = new DOMParser()
  const parsedDoc = parser.parseFromString(description, 'text/html')
  const sections = parsedDoc.querySelectorAll('*')

  const variants = {
    H2: (item: Element, idx: number) => (
      <h2 key={idx} className="text-lg font-semibold py-5">
        {item.textContent}
      </h2>
    ),
    P: (item: Element, idx: number) => <p key={idx}>{item.textContent}</p>,
  }
  console.log(description)

  return (
    <div className="">
      <h3 className="text-2xl font-medium mb-5 mt-10">About {name}</h3>

      <div
        className={cn(
          'grid grid-rows-[0fr] transition-[grid] duration-1000',
          isOpen && 'grid-rows-[1fr]'
        )}
      >
        <div className="overflow-hidden ">
          {Array.from(sections).map((item, idx) =>
            variants[item.tagName as keyof typeof variants]
              ? variants[item.tagName as keyof typeof variants](item, idx)
              : ''
          )}
        </div>
      </div>
      <div className="text-center mt-2">
        <button
          className="cursor-pointer mx-auto flex items-center hover:opacity-40 transition-opacity"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          Read More
          {isOpen ? (
            <ChevronUp className="ml-1" size={20} />
          ) : (
            <ChevronDown className="ml-1" size={20} />
          )}
        </button>
      </div>
    </div>
  )
}
