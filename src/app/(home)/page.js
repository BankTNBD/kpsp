import Section from "@/components/custom/Section";
import { activities, kanchana, home, links } from "@/resources/content";
import SlideShow from "@/components/custom/SlideShow";
import Image from "next/image";
import Link from "next/link";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import SectionGroup from "@/components/custom/SectionGroup";

export default function Home() {
  
  return (
    <div className="grid grid-rows-[auto_1fr_auto] grid-cols-1 w-full border-2">
      <SlideShow />
      <SectionGroup postList={home} scroll/>
      <div>
        <Section title={kanchana.name}>
          {kanchana.list.map((value, index) => (
            <a href={value.path} key={index} className="m-3 hover:underline">{value.name}</a>
          ))}
        </Section>
      </div>
      <div>
        <Section title="เว็บไซต์ที่เกี่ยวข้อง">
          {links.map((value, index) => (
            <div className="w-98" key={index}>
              <Link href={value.path} className="w-max h-max">
                <AspectRatio ratio={21 / 9} className="m-3">
                  <Image src={value.image} alt={value.name} fill className="h-full w-full rounded-md object-cover top-0" />
                </AspectRatio>
              </Link>
            </div>
          ))}
        </Section>
      </div>
    </div>
  );
}
