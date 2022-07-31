import styles from "./layout.module.css";
import Footer from "../footer/footer";
import NavBar from "../nav-bar/nav-bar";

export default function Layout({ children }) {
  return (
    <div>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
