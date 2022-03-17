interface props {
  children: React.ReactNode;
}

const Heading = ({ children }: props) => (
  <h1 className="text-2xl sm:text-6xl font-bold">{children}</h1>
);

export default Heading;
