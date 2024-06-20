import { useState } from "react";
import { Box, Container, Text, VStack, Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

const categories = [
  {
    name: "Category 1",
    subcategories: ["Subcategory 1-1", "Subcategory 1-2", "Subcategory 1-3"],
  },
  {
    name: "Category 2",
    subcategories: ["Subcategory 2-1", "Subcategory 2-2"],
  },
  {
    name: "Category 3",
    subcategories: ["Subcategory 3-1", "Subcategory 3-2", "Subcategory 3-3"],
  },
];

const Index = () => {
  const [hoveredCategory, setHoveredCategory] = useState(null);

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">Shopify Store</Text>
        <Text>Hover over the categories to see subcategories.</Text>
        <Box>
          {categories.map((category, index) => (
            <Menu key={index} onMouseEnter={() => setHoveredCategory(index)} onMouseLeave={() => setHoveredCategory(null)}>
              <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                {category.name}
              </MenuButton>
              <MenuList display={hoveredCategory === index ? "block" : "none"}>
                {category.subcategories.map((subcategory, subIndex) => (
                  <MenuItem key={subIndex}>{subcategory}</MenuItem>
                ))}
              </MenuList>
            </Menu>
          ))}
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;