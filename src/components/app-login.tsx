"use client";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { Poppins } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import loginBtnASvg from "../../public/login_btn_a.svg";
import { fetchRegions } from "@/models/regionsModels";
import { Loader2 } from "lucide-react";

const poppins = Poppins({
  weight: "500",
  subsets: ["latin"],
});

type CardProps = React.ComponentProps<typeof Card>;

const loader = () => {
  return (
    <div className="flex items-center justify-center">
      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
    </div>
  );
};

export function AppLogin({ className }: CardProps) {
  return (
    <Card className={cn("w-[30%]", className)}>
      <CardHeader className="items-center">
        <CardTitle>AIESEC Contact List</CardTitle>
        <CardDescription>
          Login using EXPA to access your portal of contacts !
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <Link href="/dashboard">
          <Button
            className={cn(poppins.className, "bg-blue-500 hover:bg-blue-600")}
            style={{ marginTop: "12px" }}
          >
            Log in with EXPA{" "}
            <Image priority src={loginBtnASvg} alt="" width={20} height={20} />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
