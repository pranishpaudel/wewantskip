// pages/index.tsx

import SectionHeading from "../components/skip/SectionHeading";
import SkipGrid from "../components/skip/SkipGrid";


export default function SkipPage() {
  return (
    <>
      <SectionHeading title="Choose Your Skip Size" subtitle="Select the skip size that best suits your needs" />
      <SkipGrid postcode="NR32" area="Lowestoft" />
    </>
  );
}
