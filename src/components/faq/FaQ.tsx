import SectionHeader from "../sectionHeader/SectionHeader";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

const FaQ = () => {
  return (
    <div className="max-w-screen-xl mx-auto p-10 md:p-0 font-inter mt-24">
      <SectionHeader header1="FaQ" header2=""></SectionHeader>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>
            Q1: What are the essential items I need for a camping trip?
          </AccordionTrigger>
          <AccordionContent>
            Essential camping items include a tent, sleeping bag, sleeping pad,
            cooking gear, food, water, a first aid kit, appropriate clothing,
            and a backpack. Depending on your destination and activities, you
            might also need navigation tools, lighting, and personal items like
            toiletries.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>
            Q2: How do I choose the right tent for my needs?
          </AccordionTrigger>
          <AccordionContent>
            Consider the number of people, the type of camping, and the weather
            conditions. For solo camping, a lightweight one-person tent might be
            ideal. For family camping, a larger, more spacious tent is better.
            Check the tent's waterproof rating and ventilation features as well.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>
            Q3: What should I look for in a sleeping bag?
          </AccordionTrigger>
          <AccordionContent>
            Look for a sleeping bag with a temperature rating suitable for the
            conditions you’ll be camping in. Consider the shape (rectangular,
            mummy, or semi-rectangular), insulation type (down or synthetic),
            and weight. A sleeping bag that balances warmth, weight, and comfort
            is ideal.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>
            Q4: How can I ensure my safety while camping?
          </AccordionTrigger>
          <AccordionContent>
            Always inform someone of your camping plans and expected return.
            Pack a first aid kit, stay aware of weather conditions, and follow
            Leave No Trace principles. Bring a map, compass, or GPS device, and
            be aware of local wildlife and how to store food safely.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger>
            Q5: What cooking gear do I need for camping?
          </AccordionTrigger>
          <AccordionContent>
            Essential cooking gear includes a portable stove or campfire setup,
            pots and pans, cooking utensils, a cooler, and food storage
            containers. Don’t forget biodegradable soap for cleaning up and a
            lightweight, durable dish set.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default FaQ;
