import Section from "@/components/custom/Section";
import PersonCard from "@/components/custom/PersonCard";
import { getPerson } from "@/resources/personnel";

export default async function Page({ params }) {
    const id = (await params).id;
    const data = getPerson(id)
    return (
        <div>
            <Section title={data[0]} >
                {data[1].map((childValue, childIndex) => (
                    <PersonCard name={childValue.name + " " + childValue.surname} position={childValue.position} phone={childValue.phone} email={childValue.email} srcImg={childValue.image} key={childIndex} />
                ))}
            </Section>
        </div>
    );
}