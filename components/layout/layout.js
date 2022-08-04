import Footer from "../footer/footer";
import NavBar from "../nav-bar/nav-bar";

export default function Layout({ children, home }) {
  return (
    <div>
      <NavBar home={home} />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
