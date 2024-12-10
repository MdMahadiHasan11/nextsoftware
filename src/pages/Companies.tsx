 'use client'; // Ensure this is a client-side component

import { useCompanyList } from '../hooks/useCompanyList';
import LoadingSpinner from '../components/LoadingSpinner';

const Companies = () => {
  const { companies, loading, error } = useCompanyList();

  // Show loading spinner while the data is being fetched
  if (loading) {
    return <LoadingSpinner />;
  }

  // Handle any errors that may occur during the fetch
  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  // Ensure that companies is an array before rendering the list
  if (!Array.isArray(companies)) {
    return <div>Invalid data format for companies</div>;
  }

  return (
    <div>
      <h1>Company List</h1>
      <ul>
        {companies.map((company) => (
          <li key={company.id}>{company.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Companies;
