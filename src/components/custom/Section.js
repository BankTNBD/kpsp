import { cn } from "@/lib/utils";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
// import {
//     Pagination,
//     PaginationContent,
//     PaginationEllipsis,
//     PaginationItem,
//     PaginationLink,
//     PaginationNext,
//     PaginationPrevious,
// } from "@/components/ui/pagination"


export default function Section({ title, children, scroll }) {
    return (
        <div className="w-full p-5">
            <h1 className="text-left font-extrabold text-2xl m-3 text-blue-900">{title}</h1>
            <Separator className="bg-amber-300" />

            {scroll ? (
                <ScrollArea className="w-full my-5 whitespace-nowrap rounded-md border">
                    <section className="flex">
                        {children}
                    </section>
                    <ScrollBar orientation="horizontal" />
                </ScrollArea>
            ) : (
                <section className={cn("flex flex-wrap justify-evenly my-5")}>
                    {children}
                </section>
            )}
            {/* Wait for implement */}
            {/* {!page && <Pagination>
                <PaginationContent>
                    <PaginationItem>
                        <PaginationPrevious href="#" />
                    </PaginationItem>
                    <PaginationItem>
                        {(new Array(Math.min(pageCount, 3))).map((_, i) => (
                            <PaginationLink href="#">1</PaginationLink>

                        ))}
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationEllipsis />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationNext href="#" />
                    </PaginationItem>
                </PaginationContent>
            </Pagination>} */}
        </div>
    );
}