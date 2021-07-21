import Button from "@material-tailwind/react/Button";
import Image from "next/image";
import { signIn } from "next-auth/client";

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-[#F6F6F6]">
      <Image
        src="https://awsimages.detik.net.id/community/media/visual/2019/09/11/6412d37a-15ec-4855-aa95-3e7ebfeffc15.jpeg?w=700&q=90"
        height={300}
        width={550}
        objectFit="contain"
      />
      <Button
        className="w-44 mt-10"
        color="blue"
        buttonType="filled"
        ripple="light"
        onClick={signIn}
      >
        Login Sekarang
      </Button>
    </div>
  );
};

export default Login;
