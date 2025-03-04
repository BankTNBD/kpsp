import { Facebook } from 'lucide-react';
import Link from 'next/link';

export default function Footerbar() {
    return (
        <div className="w-full bg-blue-950 min-h-5 text-gray-50 p-5 text-sm/loose">
            <p>โรงเรียนกาญจนาภิเษกวิทยาลัย สุพรรณบุรี</p>
            <p>สำนักงานเขตพื้นที่การศึกษามัธยมศึกษาเขต 9</p>
            <p>109 หมู่ 6 ต.ไผ่ขวาง อ.เมืองสุพรรณบุรี จังหวัดสุพรรณบุรี</p>
            <p>โทร: <a href="tel:035494715">035-494715</a> FAX: <a>035-494718</a></p>
            <div>
                <Link href="https://www.facebook.com/kanchanapiseksuphanburi">
                <Facebook />
                </Link>
            </div>
        </div>
    );
}