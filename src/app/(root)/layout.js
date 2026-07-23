import Footer from "@/components/ui/Footer";
import Header from "@/components/ui/Header";

const layout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default layout;
