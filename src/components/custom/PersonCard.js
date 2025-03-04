import Image from "next/image";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import {
    Card,
    CardContent,
    CardDescription,
    // CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { cn } from "@/lib/utils";


export default function PersonCard({ name, position, phone, email, srcImg, notIncludeImage }) {
    return (
        <Card className="m-1 p-0 pb-2 w-2xs max-h-[800]px">
            {(!notIncludeImage && srcImg) && <AspectRatio ratio={4 / 5} className="m-2">
                <Image src={srcImg} alt={name ? name : "image"} fill className="h-full w-full rounded-md object-cover top-0" />
            </AspectRatio>}
            <CardHeader>
                {name && <CardTitle className={cn("text-center", notIncludeImage || !srcImg ? "my-5" : "")}>{name}</CardTitle>}
                {position && <CardDescription className="text-center">{position}</CardDescription>}
            </CardHeader>
            <CardContent>
                {phone && <p className="text-center">{phone}</p>}
                {email && <p className="text-center">{email}</p>}
            </CardContent>
        </Card>
    );
}