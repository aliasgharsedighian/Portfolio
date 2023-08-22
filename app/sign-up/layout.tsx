import "../../styles/SignUpPage.css";
import PageWrapper from "../pageWrapper";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="sign-up-section dark:bg-zinc-800">
      <PageWrapper>
        <div className="sign-up-effect dark:bg-zinc-700">{children}</div>
      </PageWrapper>
    </section>
  );
}
