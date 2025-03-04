"use client";

import React from "react";
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

import { useForm } from "react-hook-form"
import { Trash2 } from 'lucide-react';
import Post from "@/components/custom/admin/Post";

import { postList } from "./content";
import { logout } from "@/app/(admin)/actions/auth";

export default function Page() {
    const [selectedValue, setSelectedValue] = React.useState('');
    const [posts, setPosts] = React.useState([]);
    // const [editPost, setEditPost] = React.useState();

    const handleSelectChange = (value) => {
        setSelectedValue(value);
    };

    const fetchPosts = async () => {
        if (!selectedValue) return;
        try {
            const response = await fetch(`/api/post/${selectedValue}/`);
            const data = await response.json();
            setPosts(data);
        } catch (error) {
            console.error("Error fetching posts:", error);
        } finally {
            // setLoading(false);
        }
    };

    const form = useForm({
        defaultValues: {
            title: "",
            description: "",
            link: "",
            image: ""
        },
    });

    const onSubmit = async (values) => {
        if (!selectedValue) return;
        try {
            await fetch(`/api/post/${selectedValue}/`, {
                method: "POST",
                body: JSON.stringify(values)
            })
            form.reset();
            fetchPosts();
        } catch (error) {
            console.error(error)
        }
    }

    const handleDelete = async (key) => {
        try {
            await fetch(`/api/post/`, {
                method: "DELETE",
                body: JSON.stringify({ id: key })
            })
            fetchPosts();
        } catch (error) {
            console.error(error)
        }
    }

    React.useEffect(() => {
        fetchPosts()
        form.reset()
    }, [selectedValue]);

    return (
        <ResizablePanelGroup
            direction="horizontal"
            className="w-full md:min-w-[450px]"
        >
            <ResizablePanel defaultSize={50}>
                <ResizablePanelGroup direction="vertical">
                    <ResizablePanel defaultSize={25}>

                        <div className="flex h-full items-center justify-center p-6">
                            <Select value={selectedValue} onValueChange={handleSelectChange}>
                                <SelectTrigger className="w-3/4">
                                    <SelectValue placeholder="หัวข้อ" />
                                </SelectTrigger>
                                <SelectContent>
                                    {postList.map((value, index) => (
                                        <SelectItem value={value.id} key={index}>{value.name}</SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>
                    </ResizablePanel>
                    <ResizableHandle />
                    <ResizablePanel defaultSize={75} className="p-10">
                        <div className="w-full h-full border rounded-md p-5">
                            <Form {...form}>
                                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                                    <FormField
                                        control={form.control}
                                        name="title"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>หัวเรื่อง</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="ข้อความ" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="description"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>รายละเอียด</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="ข้อความ" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="link"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>ลิงค์</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="url" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="image"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>รูปภาพ</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="url" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <Button type="submit">เพิ่ม</Button>
                                </form>
                            </Form>
                        </div>
                    </ResizablePanel>
                </ResizablePanelGroup>
            </ResizablePanel>
            <ResizableHandle />
                    <Button className="fixed right-0 m-3 z-1" onClick={logout}>
                        ลงชื่อออก
                    </Button>
            <ResizablePanel defaultSize={50} className="p-10">
                <ScrollArea className="h-full w-full rounded-md border">
                    <div className="flex max-w-full h-auto space-x-4 p-4 flex-wrap justify-evenly">
                        {posts.map((value, index) => (
                            <Post title={value.title} content={value.description} date={value.timestamp} srcImg={value.image} link={value.link} key={value.id}>
                                <div>
                                    {/* For editing post */}
                                    {/* <AlertDialog>
                                        <AlertDialogTrigger asChild>
                                            <Button className="mx-1" >
                                                <Pencil />
                                            </Button>
                                        </AlertDialogTrigger>
                                        <AlertDialogContent>
                                            <AlertDialogHeader>
                                                <AlertDialogTitle>คุณแน่ใจว่าต้องการแก้ไขหรือไม่?</AlertDialogTitle>
                                                <div className="flex justify-center">
                                                    <Post title={value.title} content={value.description} date={value.timestamp} srcImg={value.image} link={value.link} key={value.id} />
                                                </div>
                                            </AlertDialogHeader>
                                            <AlertDialogFooter>
                                                <AlertDialogCancel className="bg-green-700 text-white">ยกเลิก</AlertDialogCancel>
                                                <AlertDialogAction onClick={() => handleDelete(value.id)} className="bg-red-600 hover:bg-white hover:text-black hover:border">ดำเนินการต่อ</AlertDialogAction>
                                            </AlertDialogFooter>
                                        </AlertDialogContent>
                                    </AlertDialog> */}
                                    <AlertDialog>
                                        <AlertDialogTrigger asChild>
                                            <Button className="bg-red-600 mx-1" >
                                                <Trash2 />
                                            </Button>
                                        </AlertDialogTrigger>
                                        <AlertDialogContent>
                                            <AlertDialogHeader>
                                                <AlertDialogTitle>คุณแน่ใจว่าต้องการลบหรือไม่?</AlertDialogTitle>
                                                <div className="flex justify-center">
                                                    <Post title={value.title} content={value.description} date={value.timestamp} srcImg={value.image} link={value.link} key={value.id} />
                                                </div>
                                            </AlertDialogHeader>
                                            <AlertDialogFooter>
                                                <AlertDialogCancel className="bg-green-700 text-white">ยกเลิก</AlertDialogCancel>
                                                <AlertDialogAction onClick={() => handleDelete(value.id)} className="bg-red-600 hover:bg-white hover:text-black hover:border">ดำเนินการต่อ</AlertDialogAction>
                                            </AlertDialogFooter>
                                        </AlertDialogContent>
                                    </AlertDialog>
                                </div>
                            </Post>
                        ))}
                    </div>
                </ScrollArea>
            </ResizablePanel>
        </ResizablePanelGroup>
    );
}