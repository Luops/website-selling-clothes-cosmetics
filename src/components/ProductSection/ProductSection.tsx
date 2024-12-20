import React from "react";

//Shadcn
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function ProductSection() {
  // Coletar as informacoes de genero e categoria
  const [selectedGender, setSelectedGender] =
    React.useState<string>("allGender");
  const [selectedCategory, setSelectedCategory] =
    React.useState<string>("allCategory");
  const [appliedFilters, setAppliedFilters] = React.useState<
    { type: string; value: string }[]
  >([]);
  console.log("Genero: ", selectedGender);
  console.log("Categoria: ", selectedCategory);
  console.log("Filtros: ", appliedFilters);

  const handleGenderChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;
    setSelectedGender(value);

    // Atualizar filtros aplicados
    if (value === "allGender") {
      removeFilter("gender");
    } else {
      updateFilters(
        "gender",
        value === "man"
          ? "Masculino"
          : value === "woman"
          ? "Feminino"
          : "Unissex"
      );
    }
  };

  const handleCategoryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSelectedCategory(value);

    // Atualizar filtros aplicados
    if (value === "allCategory") {
      removeFilter("category");
    } else {
      updateFilters("category", value === "shirt" ? "Camisa" : "Perfume");
    }
  };

  // Atualiza os filtros aplicados, removendo duplicatas e substituindo valores
  const updateFilters = (type: string, value: string) => {
    setAppliedFilters((prevFilters) => {
      const existingFilterIndex = prevFilters.findIndex(
        (filter) => filter.type === type
      );
      if (existingFilterIndex !== -1) {
        // Atualizar o filtro existente
        const updatedFilters = [...prevFilters];
        updatedFilters[existingFilterIndex] = { type, value };
        return updatedFilters;
      }
      // Adicionar novo filtro
      return [...prevFilters, { type, value }];
    });
  };

  // Remove um filtro individualmente
  const removeFilter = (type: string) => {
    setAppliedFilters((prevFilters) =>
      prevFilters.filter((filter) => filter.type !== type)
    );

    // Atualizar os estados correspondentes
    if (type === "gender") {
      setSelectedGender("allGender");
    } else if (type === "category") {
      setSelectedCategory("allCategory");
    }
  };

  //Abrir ou fechar o accordion
  const [openAccordion, setOpenAccordion] = React.useState<string | null>(null);
  const handleAccordionToggle = (value: string | null) => {
    setOpenAccordion((prev) => (prev === value ? null : value));
  };
  const handleClickOutside = (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    if (!target.closest(".accordion-item")) {
      setOpenAccordion(null);
    }
  };
  React.useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <section className="w-full max-[480px]:px-2 max-[860px]:px-4 px-12 relative">
      <form
        action=""
        className="w-full flex gap-5 border-b border-[#f2f2f2] relative"
      >
        <Accordion
          type="single"
          collapsible
          className="accordion-item"
          value={openAccordion === "gender" ? "gender" : ""}
          onValueChange={(value) =>
            handleAccordionToggle(value === "gender" ? "gender" : null)
          }
        >
          <AccordionItem
            value="gender"
            className="!border-b-0 font-oswald tracking-widest"
          >
            <AccordionTrigger className="uppercase text-lg font-semibold">
              Gênero
            </AccordionTrigger>
            <AccordionContent className="flex flex-wrap gap-5 absolute z-50 bg-white shadow-md border border-gray-300 p-2">
              <label htmlFor="allGender" className="flex items-center gap-2">
                <input
                  type="radio"
                  name="gender"
                  id="allGender"
                  value="allGender"
                  checked={selectedGender === "allGender"}
                  onChange={handleGenderChange}
                  className="custom-radio"
                />
                <span className="text-[1rem]">Todos</span>
              </label>
              <label htmlFor="man" className="flex items-center gap-2">
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
              <label htmlFor="woman" className="flex items-center gap-2">
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
              <label htmlFor="unissex" className="flex items-center gap-2">
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
        <Accordion
          type="single"
          collapsible
          className="accordion-item"
          value={openAccordion === "category" ? "category" : ""}
          onValueChange={(value) =>
            handleAccordionToggle(value === "category" ? "category" : null)
          }
        >
          <AccordionItem
            value="category"
            className="!border-b-0 font-oswald tracking-widest"
          >
            <AccordionTrigger className="uppercase text-lg font-semibold">
              Categoria
            </AccordionTrigger>
            <AccordionContent className="flex flex-wrap gap-5 absolute z-50 bg-white shadow-md border border-gray-300 p-2">
              <label htmlFor="allCategory" className="flex items-center gap-2">
                <input
                  type="radio"
                  name="category"
                  id="allCategory"
                  value="allCategory"
                  checked={selectedCategory === "allCategory"}
                  onChange={handleCategoryChange}
                  className="custom-radio"
                />
                <span className="text-[1rem]">Todos</span>
              </label>
              <label htmlFor="shirt" className="flex items-center gap-2">
                <input
                  type="radio"
                  name="category"
                  id="shirt"
                  value="shirt"
                  checked={selectedCategory === "shirt"}
                  onChange={handleCategoryChange}
                  className="custom-radio"
                />
                <span className="text-[1rem]">Camisas</span>
              </label>
              <label htmlFor="perfume" className="flex items-center gap-2">
                <input
                  type="radio"
                  name="category"
                  id="perfume"
                  value="perfume"
                  checked={selectedCategory === "perfume"}
                  onChange={handleCategoryChange}
                  className="custom-radio"
                />
                <span className="text-[1rem]">Perfumes</span>
              </label>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </form>
      {/* Div de filtros aplicados */}
      <div className="mt-4 flex gap-3 flex-wrap">
        {appliedFilters.map((filter, index) => (
          <div
            key={index}
            className="flex items-center gap-2 bg-gray-200 px-3 py-1 rounded-full"
          >
            <span className="text-sm font-semibold font-oswald tracking-[1px]">{filter.value}</span>
            <button
              type="button"
              onClick={() => removeFilter(filter.type)}
              className="text-red-500 hover:text-red-700"
            >
              x
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProductSection;
