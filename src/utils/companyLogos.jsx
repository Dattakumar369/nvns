import { Building2 } from 'lucide-react'

const withBase = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`

// Map company names to their logo paths
const companyLogoMap = {
  'TCS': withBase('/logos/tcs.png'),
  'Infosys': withBase('/logos/infosys.png'),
  'Wipro': withBase('/logos/wipro.png'),
  'Accenture': withBase('/logos/accenture.png'),
  'Cognizant': withBase('/logos/cognizant.png'),
  'HCL': withBase('/logos/hcl.png'),
  'Capgemini': withBase('/logos/capgemini.png'),
  'Tech Mahindra': withBase('/logos/tech-mahindra.png'),
  'LTI': withBase('/logos/lti.png'),
  'IBM': withBase('/logos/ibm.png'),
  'Microsoft': withBase('/logos/microsoft.jpg'),
  'Amazon': withBase('/logos/amazon.png'),
  'Oracle': withBase('/logos/oracle.png'),
  'Dell': withBase('/logos/dell.png'),
  'Cisco': withBase('/logos/cisco.png'),
}

/**
 * Get the logo path for a company name
 * @param {string} companyName - The name of the company
 * @returns {string} - The path to the company logo or null if not found
 */
export const getCompanyLogo = (companyName) => {
  return companyLogoMap[companyName] || null
}

/**
 * Get a company logo component (image or fallback icon)
 * @param {string} companyName - The name of the company
 * @param {object} imageProps - Props to pass to the img element
 * @returns {JSX.Element} - Image element or Building2 icon as fallback
 */
export const CompanyLogo = ({ companyName, className = 'h-8 w-auto object-contain', ...imageProps }) => {
  const logoPath = getCompanyLogo(companyName)
  
  if (logoPath) {
    return (
      <img 
        src={logoPath} 
        alt={`${companyName} logo`}
        className={className}
        {...imageProps}
      />
    )
  }
  
  return <Building2 className={className} />
}

export default getCompanyLogo


