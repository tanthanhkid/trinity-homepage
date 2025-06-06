import * as React from "react"
import { cn } from "@/lib/utils"
import { X } from "lucide-react"

interface SheetContextType {
  open: boolean
  onOpenChange: (open: boolean) => void
}

const SheetContext = React.createContext<SheetContextType | undefined>(undefined)

const useSheet = () => {
  const context = React.useContext(SheetContext)
  if (!context) {
    throw new Error("useSheet must be used within a Sheet")
  }
  return context
}

interface SheetProps {
  open?: boolean
  onOpenChange?: (open: boolean) => void
  children: React.ReactNode
}

const Sheet = ({ open = false, onOpenChange, children }: SheetProps) => {
  const [internalOpen, setInternalOpen] = React.useState(false)
  const isControlled = open !== undefined && onOpenChange !== undefined
  const isOpen = isControlled ? open : internalOpen
  const setIsOpen = isControlled ? onOpenChange : setInternalOpen

  return (
    <SheetContext.Provider value={{ open: isOpen, onOpenChange: setIsOpen }}>
      {children}
    </SheetContext.Provider>
  )
}
Sheet.displayName = "Sheet"

const SheetTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, onClick, ...props }, ref) => {
  const { onOpenChange } = useSheet()
  
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onOpenChange(true)
    onClick?.(e)
  }

  return (
    <button ref={ref} className={cn("", className)} onClick={handleClick} {...props} />
  )
})
SheetTrigger.displayName = "SheetTrigger"

interface SheetContentProps extends React.HTMLAttributes<HTMLDivElement> {
  side?: "left" | "right" | "top" | "bottom"
}

const SheetContent = React.forwardRef<HTMLDivElement, SheetContentProps>(
  ({ className, side = "right", children, ...props }, ref) => {
    const { open, onOpenChange } = useSheet()
    
    React.useEffect(() => {
      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          onOpenChange(false)
        }
      }
      
      if (open) {
        document.addEventListener("keydown", handleEscape)
        document.body.style.overflow = "hidden"
      }
      
      return () => {
        document.removeEventListener("keydown", handleEscape)
        document.body.style.overflow = "unset"
      }
    }, [open, onOpenChange])

    if (!open) return null

    const sideClasses = {
      right: "inset-y-0 right-0 w-3/4 sm:max-w-sm translate-x-0",
      left: "inset-y-0 left-0 w-3/4 sm:max-w-sm -translate-x-0",
      top: "inset-x-0 top-0 h-3/4 translate-y-0",
      bottom: "inset-x-0 bottom-0 h-3/4 translate-y-0"
    }

    return (
      <>
        {/* Overlay */}
        <div 
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
          onClick={() => onOpenChange(false)}
        />
        
        {/* Sheet Content */}
        <div
          ref={ref}
          className={cn(
            "fixed z-50 bg-white border-l shadow-lg transition-transform duration-300 p-6",
            sideClasses[side],
            className
          )}
          {...props}
        >
          <button
            onClick={() => onOpenChange(false)}
            className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </button>
          {children}
        </div>
      </>
    )
  }
)
SheetContent.displayName = "SheetContent"

export { Sheet, SheetTrigger, SheetContent }