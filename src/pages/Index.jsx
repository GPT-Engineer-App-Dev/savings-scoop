import { Box, Container, Flex, Heading, Text, VStack, HStack, Link, Spacer } from "@chakra-ui/react";
import { FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Flex as="nav" bg="gray.800" color="white" p={4} align="center">
        <Heading size="md">Financial Times</Heading>
        <Spacer />
        <HStack spacing={4}>
          <Link href="#" color="white">Home</Link>
          <Link href="#" color="white">World</Link>
          <Link href="#" color="white">Business</Link>
          <Link href="#" color="white">Tech</Link>
          <Link href="#" color="white">Markets</Link>
          <Link href="#" color="white">Opinion</Link>
        </HStack>
      </Flex>

      {/* Main Headline Section */}
      <Box bg="gray.100" p={10} textAlign="center">
        <Heading as="h1" size="2xl" mb={4}>Breaking News: Market Hits Record Highs</Heading>
        <Text fontSize="lg">Stay updated with the latest financial news and trends.</Text>
      </Box>

      {/* Featured Articles Section */}
      <VStack spacing={8} p={10} align="stretch">
        <Box p={5} shadow="md" borderWidth="1px">
          <Heading fontSize="xl">Article 1</Heading>
          <Text mt={4}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</Text>
        </Box>
        <Box p={5} shadow="md" borderWidth="1px">
          <Heading fontSize="xl">Article 2</Heading>
          <Text mt={4}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</Text>
        </Box>
        <Box p={5} shadow="md" borderWidth="1px">
          <Heading fontSize="xl">Article 3</Heading>
          <Text mt={4}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</Text>
        </Box>
      </VStack>

      {/* Footer */}
      <Box bg="gray.800" color="white" p={10} textAlign="center">
        <Text mb={4}>Contact Us: contact@financialtimes.com</Text>
        <HStack spacing={4} justify="center">
          <Link href="#"><FaTwitter /></Link>
          <Link href="#"><FaFacebook /></Link>
          <Link href="#"><FaLinkedin /></Link>
        </HStack>
      </Box>
    </Container>
  );
};

export default Index;