"use client";

import React from "react";
import Image from "next/image";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { dailyAlert } from "@/resources/content";

export default function DailyAlert() {
    const [open, setOpen] = React.useState(false);

    React.useEffect(() => {
        const currentDate = new Date().toLocaleDateString();
        const openAlert = localStorage.getItem("openAlert");
        if (!openAlert || openAlert !== currentDate) {
            localStorage.setItem("openAlert", currentDate);
            setOpen(true && (dailyAlert.title || dailyAlert.description || dailyAlert.image));
        }
    }, []);
    return (
        <AlertDialog open={open} onOpenChange={setOpen}>
            <AlertDialogContent>
                <AlertDialogHeader>
                    {dailyAlert.image &&
                        <AspectRatio ratio={16 / 9}>
                            <Image src={dailyAlert.image} alt={dailyAlert.title ? dailyAlert.title : "image"} fill />
                        </AspectRatio>
                    }
                    <AlertDialogTitle>{dailyAlert.title ? dailyAlert.title : ""}</AlertDialogTitle>
                    <AlertDialogDescription>{dailyAlert.description ? dailyAlert.description : ""}</AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogAction className="bg-blue-950">รับทราบ</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}
