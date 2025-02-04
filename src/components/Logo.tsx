import Link from "next/link";

interface props{
    title?: string;
    className?: string;
}


const Logo = ({title,className}: props) => {
  return (
    <Link href={"/"}>
    <h1 className={`text-3xl font-extrabold uppercase ${className}`}>
        {title || "Blogers"}

    </h1>
    </Link>
  );
};

export default Logo