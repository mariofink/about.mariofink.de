interface props {
  term: string;
  children: React.ReactNode;
}

const TabularEntry = ({ term, children }: props) => (
  <div className="py-3 sm:grid sm:grid-cols-3 sm:gap-3 sm:px-3">
    <dt className="text-sm font-medium text-gray-500">{term}</dt>
    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
      {children}
    </dd>
  </div>
);

export default TabularEntry;
