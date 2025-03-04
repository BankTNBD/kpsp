import SectionGroup from "@/components/custom/SectionGroup";

export default function Page() {
    return (
        <SectionGroup postList={[{
            name: "ข่าวประชาสัมพันธ์",
            id: "annouce"
        },
        {
            name: "คนเก่ง-คนดี",
            id: "dekd"
        },
        {
            name: "จัดซื้อ-จัดจ้าง",
            id: "procurement"
        }]} />
    );
}