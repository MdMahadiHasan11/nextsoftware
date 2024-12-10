export interface Company {
    id: string;
    name: string;
  }
  
  export const fetchCompanyList = async (): Promise<Company[]> => {
    const response = await fetch('http://103.129.115.165:5000/api/Company/List', {
      method: 'GET',
      headers: {
        'accept': '*/*',
        'Authorization': 'Bearer YOUR_TOKEN_HERE', // Ensure valid token is used
      },
    });
  
    if (!response.ok) {
      throw new Error('Failed to fetch companies');
    }
  
    // Extract data from response and return the company list
    const data = await response.json();
  
    // Ensure that the `data` field contains the expected list of companies
    if (data && data.data && Array.isArray(data.data.availableGroups)) {
      return data.data.availableGroups.map((group: any) => ({
        id: group.value, // Assuming 'value' is the company's ID
        name: group.text, // Assuming 'text' is the company's name
      }));
    } else {
      throw new Error('Invalid response structure');
    }
  };
  