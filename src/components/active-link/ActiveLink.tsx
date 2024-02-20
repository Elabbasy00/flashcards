import { Typography } from "@mui/joy";
import Link from "next/link";
import { usePathname } from "next/navigation";

const ActiveLink = ({ href, name }: { href: string; name: string }) => {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <Link href={href}>
      <Typography
        color={isActive ? "primary" : "neutral"}
        variant={isActive ? "soft" : "plain"}
        level="title-md"
        borderRadius="sm"
      >
        {name}
      </Typography>
    </Link>
  );
};

export default ActiveLink;
