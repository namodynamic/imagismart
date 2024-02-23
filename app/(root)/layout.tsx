import MobileNav from "@/components/shared/MobileNav";
import Siderbar from "@/components/shared/Siderbar";
import { Toaster } from "@/components/ui/toaster";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="root">
      <Siderbar />
      <MobileNav />

      <div className="root-container">
        <div className="wrapper">{children}</div>
      </div>
      <Toaster />
    </main>
  );
};

export default Layout;
