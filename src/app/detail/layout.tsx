import Header from "@/components/ui/header/header";

export default function DetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header isHome={false} />
      <div className="m-32">{children}</div>
    </>
  );
}
