"use client"

import { Breadcrumbs as BreadcrumbsComponent } from "@material-tailwind/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const capitalize = (str) => {
  return str.replace(/-/g, ' ').replace(/\b\w/g, (char) => char.toUpperCase());
};

const Breadcrumbs = () => {
  const pathname = usePathname();
  const pathSegments = [''].concat(pathname.split('/').filter(segment => segment !== ''));

  const breadcrumbItems = pathSegments.map((segment, index) => {
    const path = `${pathSegments.slice(0, index + 1).join(' / ')}`;
    return { label: segment === '' ? 'Home' : capitalize(segment), path: path === '' ? '/' : path };
  });

  return (
    <BreadcrumbsComponent fullWidth className="pl-0 mt-4">
      {breadcrumbItems.map((item, index) => (
        <Link key={index} href={item.path} className={`text-royal hover:text-emerald ${ index ? 'mx-4' : 'ml-0 mr-4'}`}>
          {item.label}
        </Link>
      ))}
    </BreadcrumbsComponent>
  );
};

export default Breadcrumbs;