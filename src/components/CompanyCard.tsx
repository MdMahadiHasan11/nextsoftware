import { Company } from '../pages/api/fetchCompanyList';

interface Props {
  company: Company;
}

const CompanyCard: React.FC<Props> = ({ company }) => {
  return (
    <div className="p-4 border rounded-lg shadow-md">
      <h2 className="text-lg font-bold">{company.name}</h2>
      {/* Add more details as necessary */}
    </div>
  );
};

export default CompanyCard;
