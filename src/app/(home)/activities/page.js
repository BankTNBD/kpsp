import SectionGroup from "@/components/custom/SectionGroup";

export default function Page() {

    return (
        <div>
            <SectionGroup postList={[{ name: "กิจกรรม", id: "activities" }]} page/>
        </div>
    );
}