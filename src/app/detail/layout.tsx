import Header from "@/components/ui/header/header";

export default function DetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* <Header isHome={false} /> */}
      <div>{children}</div>
    </>
  );
}
