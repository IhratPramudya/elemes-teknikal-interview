
import { cn } from "@/lib/utils"

export default function Button({className, onClick, children, ...props}) {
    return (
        <div>
            <button 
            className={cn("custom-btn ", className)}
            {...props}
            onClick={onClick}
            >
                {children}
            </button>
        </div>
    )
}