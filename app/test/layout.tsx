import "../../styles/UserList.css";
import PageWrapper from "../pageWrapper";

export const metadata = {
  title: "Portfolio - test-page",
  description: "Portfolio Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="userList-section">
      <PageWrapper>
        <div className="usersList-container">{children}</div>
      </PageWrapper>
    </section>
  );
}
