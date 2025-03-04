import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { login } from '@/app/(admin)/actions/auth'

export default function Page() {
    return (
        <div className="flex flex-row justify-center my-60">
            <form action={login} className="border-2 p-5 m-auto rounded-md w-md max-w-[80svw] h-60 flex flex-col justify-evenly">
                <div className="my-5">
                    <label htmlFor="password">รหัสผ่าน</label>
                    <Input id="password" name="password" type="password" />
                </div>
                <Button type="submit">เข้าสู่ระบ</Button>
            </form>
        </div>
    )
}
