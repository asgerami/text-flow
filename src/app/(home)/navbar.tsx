import Link from "next/link";
import Image from "next/image";
import { SearchInput } from "./search-input";
import { UserButton, OrganizationSwitcher } from "@clerk/nextjs";
import { Organization } from "@clerk/nextjs/server";

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-between h-full w-full">
      <div className="flez gap-3 items-center shrink-0 pr-6">
        <Link href={"/"}>
          <Image src="/logo.svg" alt="logo" width={40} height={40} />
        </Link>
        <h3 className="text-xl"> Docs </h3>
      </div>
      <SearchInput />
      <div className="flex gap-3 items-center pl-6">
        <OrganizationSwitcher 
        afterCreateOrganizationUrl="/"
        afterLeaveOrganizationUrl="/"
        afterSelectOrganizationUrl="/"
        afterSelectPersonalUrl="/"
        />
      <UserButton />
      </div>
    </nav>
  );
};
