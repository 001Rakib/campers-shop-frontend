import { SelectGroup, SelectItem, SelectLabel } from "../ui/select";

const CategorySelector = ({ selectLabel }: { selectLabel: string }) => {
  return (
    <div>
      <SelectGroup>
        <SelectLabel> {selectLabel} </SelectLabel>
        <SelectItem value="TentsAndShelters">Tents & Shelters</SelectItem>
        <SelectItem value="SleepingBagsAndPads">
          Sleeping Bags & Pads
        </SelectItem>
        <SelectItem value="BackpacksAndGears">Backpacks & Gears</SelectItem>
        <SelectItem value="CampFurniture">Camp Furniture</SelectItem>
        <SelectItem value="CookingGear">Cooking Gear</SelectItem>
        <SelectItem value="HydrationAndWaterPurification">
          Hydration & Water Purification
        </SelectItem>
      </SelectGroup>
    </div>
  );
};

export default CategorySelector;
