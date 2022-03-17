interface props {
  children: React.ReactNode;
}

const Page = ({ children }: props) => {
  return <div className="container mx-auto">{children}</div>;
};

export default Page;
