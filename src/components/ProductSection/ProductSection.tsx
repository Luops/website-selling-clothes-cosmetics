import React from "react";

//Shadcn
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function ProductSection() {
  const [selectedGender, setSelectedGender] = React.useState<string>("all");
  console.log(selectedGender);

  const handleGenderChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const gender = event.target.value;
    setSelectedGender(gender);

    try {
      /*
      const response = await fetch("/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ gender }),
      });

      if (!response.ok) {
        throw new Error("Erro ao buscar os produtos");
      }

      const data = await response.json();
      console.log("Produtos filtrados:", data);*/
    } catch (error) {
      console.error("Erro ao enviar o filtro:", error);
    }
  };

  return (
    <section className="w-full max-[480px]:px-2 max-[860px]:px-4 px-12 relative">
      <form
        action=""
        className="w-full flex border-b border-[#f2f2f2] relative"
      >
        <Accordion type="single" collapsible>
          <AccordionItem value="gender" className="font-oswald tracking-widest">
            <AccordionTrigger className="uppercase text-lg font-semibold">
              Gênero
            </AccordionTrigger>
            <AccordionContent className="flex gap-5 absolute z-50 bg-white shadow-md border border-gray-300 p-2">
              <label htmlFor="all" className="flex gap-2">
                <input
                  type="radio"
                  name="gender"
                  id="all"
                  value="all"
                  checked={selectedGender === "all"}
                  onChange={handleGenderChange}
                  className="custom-radio"
                />
                <span className="text-[1rem]">Todos</span>
              </label>
              <label htmlFor="man" className="flex gap-2">
                <input
                  type="radio"
                  name="gender"
                  id="man"
                  value="man"
                  checked={selectedGender === "man"}
                  onChange={handleGenderChange}
                  className="custom-radio"
                />
                <span className="text-[1rem]">Masculino</span>
              </label>
              <label htmlFor="woman" className="flex gap-2">
                <input
                  type="radio"
                  name="gender"
                  id="woman"
                  value="woman"
                  checked={selectedGender === "woman"}
                  onChange={handleGenderChange}
                  className="custom-radio"
                />
                <span className="text-[1rem]">Feminino</span>
              </label>
              <label htmlFor="unissex" className="flex gap-2">
                <input
                  type="radio"
                  name="gender"
                  id="unissex"
                  value="unissex"
                  checked={selectedGender === "unissex"}
                  onChange={handleGenderChange}
                  className="custom-radio"
                />
                <span className="text-[1rem]">Unissex</span>
              </label>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </form>
      <div className="mt-4"></div>
    </section>
  );
}

export default ProductSection;
