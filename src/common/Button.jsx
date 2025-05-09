import { ArrowUpRight } from 'lucide-react'
import React from 'react'

export const Button = () => {
  return (
    <div>
          <button className="flex items-center p-2 md:px-4 md:py-2 bg-red-800 text-white rounded-md" style={{   transform: "rotate(-10deg) scale(1.02)",
                  top: "1%",
                  left: "1%",
                  right: "2%",}}>
    View All <ArrowUpRight size={16}  className="ml-1" />
  </button>
    </div>
  )
}
