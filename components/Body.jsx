import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Body({ children }) {
  return (
    <div className="overflow-x-hidden antialiased pt-20">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
