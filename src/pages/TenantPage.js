import React from 'react';
import { useParams } from 'react-router-dom';

function TenantPage() {
  const { tenant } = useParams(); // Get the tenant parameter from the URL
  return <div>Tenant Page for {tenant}</div>;
}

export default TenantPage;
