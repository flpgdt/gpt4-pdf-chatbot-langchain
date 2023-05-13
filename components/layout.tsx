interface LayoutProps {
  children?: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="mx-auto flex flex-col space-y-4" style={{ backgroundColor: '#001E62' }}>
      <header className="container sticky top-0 z-40">
      </header>
      <div>
        <main className="flex w-full flex-1 flex-col overflow-hidden" >
          {children}
        </main>
      </div>
    </div>
  );
}
