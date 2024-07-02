
import Sidebar from './Sidebar'
import Header from './Header'

// eslint-disable-next-line react/prop-types
export const Layout = ({ children }) => {
    return (
        <div className="bg-[#F5F5F5]">
            <Header />
            <div className="w-[calc(100vw-16px)] flex overflow-hidden mx-auto h-[calc(100vh-68px)] shadow-[0px_8px_40px_-20px_rgba(0,0,0,0.12)] border border-[ECECF1] bg-white rounded-[8px]">
                <div className='w-[15%] bg-[#FBFBFB] border-r min-h-full'>
                    <Sidebar />
                </div>
                <div className='w-[85%] p-[20px]'>
                    {children}
                </div>
            </div>
        </div>
    )
}
