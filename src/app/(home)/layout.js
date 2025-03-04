import NavBar from "@/components/custom/NavBar";
import Footerbar from '@/components/custom/FooterBar';
import DailyAlert from '@/components/custom/DailyAlert';

export default function HomeLayout({ children }) {
    return (
        <>
            <NavBar />
            <DailyAlert />
            {children}
            <Footerbar />
        </>
    );
}
