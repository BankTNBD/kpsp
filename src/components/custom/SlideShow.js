"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Autoplay from "embla-carousel-autoplay";
import { slideShow } from "@/resources/content";

export default function SlideShow() {
    const [api, setApi] = React.useState(null)
    const [current, setCurrent] = React.useState(0)
    const [count, setCount] = React.useState(0)

    React.useEffect(() => {
        if (!api) {
            return
        }

        setCount(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap() + 1)

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1)
        })
    }, [api])

    return (
        <div className="mx-auto w-full md:max-w-2/4 p-3 m-2">
            <Carousel
                setApi={setApi}
                plugins={[
                    Autoplay({
                        delay: 5000,
                    }),
                ]}
            >
                <CarouselContent>
                    {slideShow.map((value, index) => (
                        <CarouselItem key={index}>
                                    <Link href={value.path}>
                                    <AspectRatio ratio={16 / 9}>
                                        <Image src={value.image} fill alt="Image" className="rounded-md object-cover" />
                                    </AspectRatio>
                                    {/* <span className="text-4xl font-semibold">{index + 1}</span> */}
                                    </Link>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="hidden md:inline-flex" />
                <CarouselNext className="hidden md:inline-flex" />
            </Carousel>
            <div className="p-2 text-center text-sm text-muted-foreground">
                หน้า {current} จาก {count}
            </div>
        </div>
    )
}
