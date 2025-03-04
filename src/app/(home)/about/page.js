import Image from "next/image";

export default function Page() {
    return (
        <div>
            <div className="max-w-4xl mx-auto p-6 space-y-6" id="history">
                <h1 className="text-3xl font-bold text-center">โรงเรียนกาญจนาภิเษกวิทยาลัย สุพรรณบุรี</h1>
                <p>
                    โรงเรียนกาญจนาภิเษกวิทยาลัย สุพรรณบุรี เป็นหนึ่งใน 9 โรงเรียนเฉลิมพระเกียรติ เนื่องในโอกาสฉลองสิริราชสมบัติครบ 50 ปี เมื่อวันที่ 9 มิถุนายน พ.ศ. 2539 โดยมีการสถาปนาเมื่อวันที่ 28 กุมภาพันธ์ พ.ศ. 2538
                </p>
                <h2 className="text-2xl font-semibold">เกี่ยวกับโรงเรียน</h2>
                <p>
                    โรงเรียนเป็นโรงเรียนสหศึกษา เปิดสอนระดับมัธยมศึกษาปีที่ 1-6 และได้รับการยกระดับเป็นโรงเรียนส่งเสริมความเป็นเลิศทางด้านวิทยาศาสตร์และคณิตศาสตร์ เพื่อสนองต่อนโยบายการศึกษาของประเทศ
                </p>
                <h2 className="text-2xl font-semibold">ประวัติโรงเรียน</h2>
                <p>
                    โรงเรียนได้รับพระมหากรุณาธิคุณจากพระบาทสมเด็จพระเจ้าอยู่หัว รัชกาลที่ 9 พระราชทานนามว่า “โรงเรียนกาญจนาภิเษกวิทยาลัย สุพรรณบุรี” โดยกระทรวงศึกษาธิการประกาศจัดตั้งเมื่อวันที่ 27 กุมภาพันธ์ พ.ศ. 2538
                </p>
                <h2 className="text-2xl font-semibold">รายชื่อโรงเรียนกาญจนาภิเษกวิทยาลัย</h2>
                <ul className="list-disc list-inside space-y-2">
                    <li>โรงเรียนกาญจนาภิเษกวิทยาลัย นครปฐม</li>
                    <li>โรงเรียนกาญจนาภิเษกวิทยาลัย สุราษฎร์ธานี</li>
                    <li>โรงเรียนกาญจนาภิเษกวิทยาลัย กระบี่</li>
                    <li>โรงเรียนกาญจนาภิเษกวิทยาลัย อุทัยธานี</li>
                    <li>โรงเรียนกาญจนาภิเษกวิทยาลัย เพชรบูรณ์</li>
                    <li>โรงเรียนกาญจนาภิเษกวิทยาลัย กาฬสินธุ์</li>
                    <li>โรงเรียนกาญจนาภิเษกวิทยาลัย ชัยภูมิ</li>
                    <li>โรงเรียนกาญจนาภิเษกวิทยาลัย ฉะเชิงเทรา</li>
                    <li>โรงเรียนกาญจนาภิเษกวิทยาลัย สกลนคร</li>
                </ul>
                <h2 className="text-2xl font-semibold">ข้อมูลที่ตั้ง</h2>
                <p>
                    โรงเรียนตั้งอยู่ที่หนองปลาดุก หมู่ที่ 1 ตำบลไผ่ขวาง อำเภอเมือง จังหวัดสุพรรณบุรี บนพื้นที่ 94 ไร่ 3 งาน 58 ตารางวา
                </p>
                <h2 className="text-2xl font-semibold">เอกลักษณ์ของโรงเรียน</h2>
                <p>
                    เอกลักษณ์ของกลุ่มโรงเรียนกาญจนาภิเษกวิทยาลัย คือ ชุดพิธีการสีขาว และหลักเบญจวิถี ได้แก่ เทิดทูนสถาบัน, กตัญญู, บุคลิกดี, มีวินัย และให้เกียรติ
                </p>
            </div>
            <div className="max-w-4xl mx-auto p-6 space-y-6" id="general">
                <h1 className="text-3xl font-bold mb-6 text-center">ข้อมูลโรงเรียน</h1>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2 text-center">ตราประจำโรงเรียน</h2>
                    <Image
                        src="http://kpsp.ac.th/img/page/20230829121553%E0%B8%95%E0%B8%A3%E0%B8%B2_%E0%B8%81%E0%B8%A0%E0%B8%AA%E0%B8%9E.gif"
                        alt="ตราประจำโรงเรียน"
                        width={250}
                        height={250}
                        className="mb-4 mx-auto"
                    />
                    <p className="text-center">ตราพระปรมาภิไธยย่อ ภ.ป.ร.</p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2 text-center">ต้นไม้ประจำโรงเรียน</h2>
                    <Image
                        src="http://kpsp.ac.th/img/page/2023082912175820220420-625f772006fbe.jpg"
                        alt="ต้นราชพฤกษ์"
                        width={500}
                        height={500}
                        className="mb-4 mx-auto"
                    />
                    <p className="text-center">ต้นราชพฤกษ์</p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2">สีประจำโรงเรียน</h2>
                    <ul className="list-inside list-disc">
                        <li><strong>สีเหลืองทอง</strong> - หมายถึง สีประจำวันพระบรมราชสมภพ พระบาทสมเด็จพระบรมชนกาธิเบศร มหาภูมิพลอดุลยเดชมหาราช บรมนาถบพิตร</li>
                        <li><strong>สีน้ำเงิน</strong> - หมายถึง สีประจำสถาบันพระมหากษัตริย์</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2">คติพจน์พระราชทาน</h2>
                    <p>อกตํ ทุกฺกฏํ เสยฺโย ความชั่วไม่ทำเสียเลยดีกว่า ประทานโดย สมเด็จพระสังฆราชเจ้า กรมหลวงวชิรญาสังวร</p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-2">คำขวัญประจำโรงเรียน</h2>
                    <p>รักษ์ศักดิ์ศรี มีคุณธรรม นำวิชาการ สืบสานงานพระราชดำริ</p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2 text-center">วิสัยทัศน์</h2>
                    <Image
                        src="http://kpsp.ac.th/img/page/20230831022517%E0%B8%A7%E0%B8%B4%E0%B8%AA%E0%B8%B1%E0%B8%A2%E0%B8%97%E0%B8%B1%E0%B8%A8%E0%B8%99%E0%B9%8C.png"
                        alt="วิสัยทัศน์"
                        width={500}
                        height={500}
                        className="mb-4 mx-auto"
                    />
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2 text-center">โครงสร้างการบริหารงานโรงเรียนกาญจนาภิเษกวิทยาลัย สุพรรณบุรี</h2>
                    <Image
                        src="http://kpsp.ac.th/img/page/20240813085702%E0%B9%82%E0%B8%84%E0%B8%A3%E0%B8%87%E0%B8%AA%E0%B8%A3%E0%B9%89%E0%B8%B2%E0%B8%87%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%9A%E0%B8%A3%E0%B8%B4%E0%B8%AB%E0%B8%B2%E0%B8%A3%E0%B8%87%E0%B8%B2%E0%B8%99%E0%B9%82%E0%B8%A3%E0%B8%87%E0%B9%80%E0%B8%A3%E0%B8%B5%E0%B8%A2%E0%B8%99%E0%B8%81%E0%B8%B2%E0%B8%8D%E0%B8%88%E0%B8%99%E0%B8%B2%E0%B8%A0%E0%B8%B4%E0%B9%80%E0%B8%A9.png"
                        alt="โครงสร้างการบริหาร"
                        width={500}
                        height={500}
                        className="mb-4 mx-auto"
                    />
                </section>
            </div>
        </div>
    );
}