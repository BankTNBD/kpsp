import Image from "next/image";
import Link from "next/link";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { cn } from "@/lib/utils";


export default function Post({ title, date, content, link, srcImg, notIncludeImage, children }) {
    return (
        <Card className={cn("m-4 p-0 w-xs max-w-screen max-h-[800]px", srcImg ? "pb-3" : "py-3")}>
            {(!notIncludeImage && srcImg) && <AspectRatio ratio={16 / 9} className="m-1">
                <Image src={srcImg} alt={title ? title : "image"} fill className="h-full w-full rounded-md object-cover top-0" />
            </AspectRatio>}
            <CardHeader>
                {title && <CardTitle className="text-wrap text-lg">{title}</CardTitle>}
                {date && <CardDescription >{date}</CardDescription>}
            </CardHeader>
            {content &&
                <CardContent className="text-wrap">
                    <p>{content}</p>
                </CardContent>
            }
            {link &&
                <CardFooter className={cn(children ? "flex justify-between" : "")}>
                    <Link href={link} className="hover:underline text-blue-950 font-bold text-sm">อ่านเพิ่มเติม</Link>
                    {children}
                </CardFooter>
            }
        </Card>
    );
}