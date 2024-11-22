import * as React from "react"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";

export default function LogIn() {
    return (
        <div className="w-full h-screen flex justify-center items-center">
            <div className="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>

            <Card className="w-[350px] relative">
                <div className="w-12 h-12 bg-slate-800 absolute top-[-7%] rounded left-[50%] translate-x-[-50%]"></div>
                <CardHeader>
                    <CardTitle>Near Park</CardTitle>
                    <CardDescription>Set Up Your Parking as a Business.</CardDescription>
                </CardHeader>
                <CardContent>
                    <form>
                        <div className="grid w-full items-center gap-4">
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" placeholder="Enter your email" type="email" />
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="password">Password</Label>
                                <Input id="password" placeholder="Enter your password" type="password" />
                            </div>
                        </div>
                    </form>
                </CardContent>
                <CardFooter className="flex flex-col gap-4">
                    <Button className="w-full">Log In</Button>
                    <Button className="w-full" variant="outline">Sign Up</Button>
                    <div className="flex w-full justify-between gap-2 mt-5">
                        <Button variant={'outline'} className="w-full text-white">
                            <FcGoogle />
                        </Button>
                        <Button className="w-full bg-blue-600 text-white hover:bg-blue-700">
                            <FaFacebookF />
                        </Button>
                    </div>
                </CardFooter>
            </Card>
        </div>
    )
}
