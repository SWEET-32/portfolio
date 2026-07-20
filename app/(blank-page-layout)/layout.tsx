const BlankLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return <div className="bg-muted text-foreground">{children}</div>;
};

export default BlankLayout;