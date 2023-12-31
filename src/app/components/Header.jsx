import Link from "next/link";
const Header = () => {
  return (
    <section className="w-full h-6rem flex justify-between items-center bg-blue-50 pl-3 pr-3 lg:pl-[10rem] lg:pr-[10rem]">
      <Link href="/">
        <div className="h-0.5rem">
          <img src="/images/logo.png" alt="" className="h-[5rem]" />
        </div>
      </Link>
      <div className="flex gap-3 lg:gap-10">
        <Link href="Explore">Explore</Link>
        <Link href="Createblog">Write Blog</Link>
        <a href="#">Profile</a>
        <Link href="Login">Login</Link>
      </div>
    </section>
  );
};

export default Header;
