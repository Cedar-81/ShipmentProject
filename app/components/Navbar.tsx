import BasicBreadcrumbs from "./BreadCrumbComponent";
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import AppsIcon from '@mui/icons-material/Apps';
import MenuIcon from '@mui/icons-material/Menu';

export default function Navbar({setShowNav}:{setShowNav:  React.Dispatch<React.SetStateAction<boolean>>}) {
    return (
        <nav className="flex items-center sticky top-0 border-b bg-gray z-10 border-[#E5E5E5] h-18 px-8 justify-between">
            <BasicBreadcrumbs />

            <div className="flex gap-3">
                <div className="size-9 relative cursor-pointer hidden lg:flex rounded-full border items-center justify-center"><NotificationsNoneOutlinedIcon sx={{height: "1.3rem", width: "1.3rem"}} className="text-[#818181]" /> <div className="size-[7.5px] top-2 left-[17px] rounded-full bg-brand absolute" /></div>
                <div className="size-9 cursor-pointer hidden lg:flex rounded-full border items-center justify-center"><AppsIcon sx={{height: "1.3rem", width: "1.3rem"}} className="text-[#818181]" /></div>
                <div onClick={() => setShowNav(prev => !prev)} className="size-9 cursor-pointer flex lg:hidden rounded-full border items-center justify-center"><MenuIcon sx={{height: "1.3rem", width: "1.3rem"}} className="text-dark-gray" /></div>
            </div>
        </nav>
    )   
}