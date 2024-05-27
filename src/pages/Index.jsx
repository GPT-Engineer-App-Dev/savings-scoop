import { Box, Container, Flex, Heading, Text, VStack, HStack, Link, Spacer } from "@chakra-ui/react";

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
        <Heading size="2xl" mb={4}>Breaking News: Market Hits Record Highs</Heading>
        <Text fontSize="lg">Stay updated with the latest financial news and trends.</Text>
      </Box>

      {/* Featured Articles Section */}
      <VStack spacing={8} p={10} align="stretch">
        <Box bg="white" p={6} shadow="md" borderWidth="1px">
          <Heading size="md">Article 1: The Future of Finance</Heading>
          <Text mt={4}>Explore the emerging trends and technologies shaping the financial industry.</Text>
        </Box>
        <Box bg="white" p={6} shadow="md" borderWidth="1px">
          <Heading size="md">Article 2: Global Market Insights</Heading>
          <Text mt={4}>An in-depth analysis of the current state of global markets.</Text>
        </Box>
        <Box bg="white" p={6} shadow="md" borderWidth="1px">
          <Heading size="md">Article 3: Investment Strategies</Heading>
          <Text mt={4}>Expert advice on how to navigate the complex world of investments.</Text>
        </Box>
      </VStack>

      {/* Footer */}
      <Box bg="gray.800" color="white" p={4} textAlign="center">
        <Text>Contact us: info@financialtimes.com</Text>
        <Text>&copy; 2023 Financial Times. All rights reserved.</Text>
      </Box>
    </Container>
  );
};

export default Index;