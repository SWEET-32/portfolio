import { SiteHeader } from "@/components/site-header";

const BlankLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    return (
        <div className="min-h-screen bg-[#fafafa] text-neutral-900">
            <SiteHeader />
            {children}
        </div>
    );
};

export default BlankLayout;