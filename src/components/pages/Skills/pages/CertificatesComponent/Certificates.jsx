import { CheckCircle } from "lucide-react";
import { useEffect, useState } from "react";

import CertificatesCard from "./components/CertificatesCard";

const Certificates = () => {
  const [certificatesData, setCertificatesData] = useState([]);

  useEffect(() => {
    fetch("/data/Certificates.json")
      .then((res) => res.json())
      .then((data) => setCertificatesData(data));
  }, []);

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Certificates Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {certificatesData.map((cert) => (
            <CertificatesCard certData={cert} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Certificates;
