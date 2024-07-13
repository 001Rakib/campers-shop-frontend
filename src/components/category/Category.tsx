import SectionHeader from "../sectionHeader/SectionHeader";
import CategoryCard from "./CategoryCard";

const categories = [
  {
    categoryName: "Tents&Shelters",
    image:
      "https://images.unsplash.com/photo-1603738397297-a374b78e9626?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    categoryName: "SleepingBags&Pads",
    image:
      "https://images.unsplash.com/photo-1542404172-a39e98f63c09?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    categoryName: "Backpacks&Gears",
    image:
      "https://images.unsplash.com/photo-1514524929069-1021cbe21035?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    categoryName: "CampFurniture",
    image:
      "https://images.unsplash.com/photo-1715442804988-ff4bde3713a0?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    categoryName: "CookingGear",
    image:
      "https://plus.unsplash.com/premium_photo-1682965965303-bfa030c224f0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    categoryName: "Hydration&Water Purification",
    image:
      "https://plus.unsplash.com/premium_photo-1681566541647-40a47073614c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const Category = () => {
  return (
    <div className="mt-24 max-w-screen-xl mx-auto mb-5">
      <SectionHeader header1="Product" header2="Category"></SectionHeader>

      <div className="grid grid-cols-1 p-4 md:px-4 lg:p-0 md:grid-cols-3 gap-5">
        {categories.map((category) => (
          <CategoryCard
            key={category.categoryName}
            categoryName={category.categoryName}
            image={category.image}
          ></CategoryCard>
        ))}
      </div>
    </div>
  );
};

export default Category;
