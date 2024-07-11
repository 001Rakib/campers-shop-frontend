import CheckoutForm from "@/components/checkout form/CheckoutForm";
import SectionHeader from "@/components/sectionHeader/SectionHeader";

const Checkout = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <SectionHeader header1="" header2="Checkout"></SectionHeader>
      <div>
        <CheckoutForm></CheckoutForm>
      </div>
    </div>
  );
};

export default Checkout;
