import { AppLogin } from "@/components/app-login";
export default function Login() {
  return (
    <div className="flex flex-col items-center h-screen justify-center bg-[#037EF2]">
      <AppLogin
        className={"flex flex-col h-[35vh] items-center justify-center"}
      />
    </div>
  );
}
