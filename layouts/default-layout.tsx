import { ReactNode } from "react";
import Footer from "../components/footer/footer";
import NavBar from "../components/nav-bar/nav-bar";

type Props = {
  children?: ReactNode;
};

export default function DefaultLayout({ children }: Props) {
  return (
    <>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
