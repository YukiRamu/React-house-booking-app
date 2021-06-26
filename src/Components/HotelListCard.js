import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { Box, Image, Badge } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

const HotelListCard = ({ name, rating, total, price, imageUrl }) => {
  return (
    <>
      <ChakraProvider>
        <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
          <Image src={imageUrl} alt="hotel image" />
          <Box p="6">
            <Box d="flex" alignItems="baseline">
              <Badge borderRadius="full" px="2" colorScheme="teal">
                New
              </Badge>
              <Box
                color="gray.500"
                fontWeight="semibold"
                letterSpacing="wide"
                fontSize="xs"
                textTransform="uppercase"
                ml="2"
              ></Box>
            </Box>
            <Box
              mt="1"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated
            >
              {name}
            </Box>
            <Box>
              {price}
              <Box as="span" color="gray.600" fontSize="sm">
                / wk
              </Box>
            </Box>
            <Box d="flex" mt="2" alignItems="center">
              {Array(5)
                .fill("")
                .map((_, i) => (
                  <StarIcon
                    key={i}
                    color={i < rating ? "teal.500" : "gray.300"}
                  />
                ))}
              <Box as="span" ml="2" color="gray.600" fontSize="sm">
                {total} reviews
              </Box>
            </Box>
          </Box>
        </Box>
      </ChakraProvider>
    </>
  );
};

export default HotelListCard;
