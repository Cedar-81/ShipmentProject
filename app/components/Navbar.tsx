import BasicBreadcrumbs from "./BreadCrumbComponent";
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import AppsIcon from '@mui/icons-material/Apps';

export default function Navbar() {
    return (
        <nav className="flex items-center sticky top-0 border-b bg-gray z-10 border-[#E5E5E5] h-18 px-8 justify-between">
            <BasicBreadcrumbs />

            <div className="flex gap-3">
                <div className="size-9 relative cursor-pointer flex rounded-full border items-center justify-center"><NotificationsNoneOutlinedIcon sx={{height: "1.3rem", width: "1.3rem"}} className="text-[#818181]" /> <div className="size-[7.5px] top-2 left-[17px] rounded-full bg-brand absolute" /></div>
                <div className="size-9 cursor-pointer flex rounded-full border items-center justify-center"><AppsIcon sx={{height: "1.3rem", width: "1.3rem"}} className="text-[#818181]" /></div>
            </div>
        </nav>
    )   
}