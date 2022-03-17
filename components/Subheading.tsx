interface props {
  children: React.ReactNode;
}

const SubHeading = ({ children }: props) => (
  <h2 className="mt-6 mb-3 text-3xl font-bold">{children}</h2>
);

export default SubHeading;
