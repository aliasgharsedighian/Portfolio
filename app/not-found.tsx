import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "404",
  description: "Generated by create next app",
};
export default function NotFound() {
  return (
    <div className="flex flex-col gap-10 m-auto px-10 py-20 justify-center items-center min-h-[90vh]">
      <img src="/images/error-404.png" alt="error-404" />
      <h2 className="text-5xl">Page not found!</h2>
      <p className="text-center">
        Oh. your page not found . go to{" "}
        <Link className="text-blue-500" href="/">
          Home
        </Link>{" "}
        page
      </p>
    </div>
  );
}