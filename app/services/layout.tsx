export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col  justify-center gap-4 py-8 md:py-10">
      <div className="inline-block w-full  justify-center">{children}</div>
    </section>
  );
}
