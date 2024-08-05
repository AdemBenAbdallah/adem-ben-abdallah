import MyImage from "@/../public/assets/adem.jpeg";
import { Container } from "@/components";
import Image from "next/image";
import Link from "next/link";

const Navbar = async () => {
  return (
    <header className="px-4 h-14 sticky top-0 inset-x-0 w-full bg-background/40 backdrop-blur-lg border-b border-border z-50">
      <Container reverse>
        <div className="flex items-center justify-between h-full mx-auto md:max-w-screen-xl">
          <div className="flex items-start">
            <Link href="/" className="flex items-center gap-2">
              <div className="relative w-[50px] h-[50px] rounded-full flex items-center justify-center bg-[#00214c] ">
                <Image
                  src={MyImage}
                  alt="Adem ben abdallah"
                  className="w-[40px] h-[40px] border-[0.2vw]  rounded-full object-cover"
                />
              </div>
              <span className="text-lg font-medium">Adem</span>
            </Link>
          </div>
          <nav className="hidden md:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <ul className="flex items-center justify-center gap-8">
              <Link href="/" className="hover:text-foreground/80 text-sm">
                Home
              </Link>
              <Link
                href={"/about"}
                className="hover:text-foreground/80 text-sm"
              >
                About
              </Link>
              <Link href="#" className="hover:text-foreground/80 text-sm">
                Blog
              </Link>
              <Link
                href="/contact"
                className="hover:text-foreground/80 text-sm"
              >
                Contact
              </Link>
            </ul>
          </nav>
          <div className="flex items-center gap-4"></div>
        </div>
      </Container>
    </header>
  );
};

export default Navbar;
