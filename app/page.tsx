import SectionHeading from "./components/skip/SectionHeading";
import SkipCard from "./components/skip/SkipCard";


export default function Home() {
  const sampleSkip = {
    id: 17933,
    size: 4,
    hire_period_days: 14,
    transport_cost: null,
    per_tonne_cost: null,
    price_before_vat: 278,
    vat: 20,
    postcode: "NR32",
    area: "",
    forbidden: false,
    created_at: "2025-04-03T13:51:46.897146",
    updated_at: "2025-04-07T13:16:52.813",
    allowed_on_road: true,
    allows_heavy_waste: true
  };
  
  return (
   <>

      <SectionHeading title={"Choose Your Skip Size"} subtitle={"Select the skip size that best suits your needs"}/>
      <SkipCard skip={sampleSkip}/>
   </>
  );
}
