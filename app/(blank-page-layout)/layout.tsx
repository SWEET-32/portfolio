const BlankLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    return (
        <div className="bg-[#fafafa] text-neutral-900">
            {children}
        </div>
    );
};

export default BlankLayout;