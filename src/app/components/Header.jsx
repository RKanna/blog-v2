import Link from "next/link";
const Header = () => {
  return (
    <section className="w-full h-6rem flex justify-between items-center bg-blue-50 pl-3 pr-3">
      <div className="h-0.5rem">
        <img src="/images/logo.png" alt="" className="h-[5rem]" />
      </div>
      <div className="flex gap-3">
        <Link href="Explore">Explore</Link>
        <Link href="Createblog">Write Blog</Link>
        <a href="#">Profile</a>
        <a href="#">Login</a>
      </div>
    </section>
  );
};

export default Header;
