import "../../styles/UserList.css";
import PageWrapper from "../pageWrapper";

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
