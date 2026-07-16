import { SiteHeader } from "@/components/site-header";

const BlankLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    return (
        <div className="bg-[#fafafa] text-neutral-900">
            <SiteHeader />
            {children}
        </div>
    );
};

export default BlankLayout;