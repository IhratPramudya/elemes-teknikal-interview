
export default function Navigation() {
    return (
        <div className="sm:hidden flex justify-between items-center p-4 bg-white">

            <div className="flex flex-col items-center">
                <div className="w-6 h-1 bg-gray-600 mb-1"></div>
                <div className="w-6 h-1 bg-gray-600 mb-1"></div>
                <div className="w-6 h-1 bg-gray-600 mb-1"></div>
                <p className="text-sm text-gray-700 mt-2">Home</p>
            </div>
        
            <div className="flex flex-col items-center">
                <div className="w-6 h-1 bg-gray-600 mb-1"></div>
                <div className="w-6 h-1 bg-gray-600 mb-1"></div>
                <div className="w-6 h-1 bg-gray-600 mb-1"></div>
                <p className="text-sm text-gray-700 mt-2">Promotions</p>
            </div>
        
            <div className="flex flex-col items-center">
            <div className="w-6 h-1 bg-gray-600 mb-1"></div>
            <div className="w-6 h-1 bg-gray-600 mb-1"></div>
            <div className="w-6 h-1 bg-gray-600 mb-1"></div>
            <p className="text-sm text-gray-700 mt-2">Others</p>
            </div>
      </div>
      
    )
}