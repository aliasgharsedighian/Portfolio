import "../../styles/Products.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section className="products-container">{children}</section>;
}
