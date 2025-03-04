import { categories } from "@/resources/personnel";
import Section from "@/components/custom/Section";

export default function Page() {
    return (
        <div>
            <Section title="หมวดหมู่">
                <ul className="p-3 my-3 bg-gray-100">
                    {categories.map((item, index) => (
                        <li key={index}>
                            <p>
                                <a href={`/structure/${item.id}`} className="block py-4 px-4 hover:bg-blue-950 rounded text-black hover:text-gray-100">{item.name}</a>
                            </p>
                        </li>
                    ))}
                </ul>
            </Section>
        </div>
    );
}