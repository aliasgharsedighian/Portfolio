import "../../styles/login-page.css";
import PageWrapper from "../pageWrapper";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="login-page-section dark:bg-zinc-900">
      <PageWrapper>
        <div className="login-page-container dark:!bg-zinc-700 dark:border-[1px] dark:border-gray-100 shadow-2xl">
          {children}
        </div>
      </PageWrapper>
    </section>
  );
}
