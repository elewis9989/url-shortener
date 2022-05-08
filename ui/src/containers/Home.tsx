import { ChakraProvider, Box, theme } from '@chakra-ui/react';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import URLShortenerForm from '../components/URLShortenerForm';

function Home() {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeSwitcher justifySelf='flex-end' float='right' />
      <Box
        height='100%'
        display='flex'
        alignItems='center'
        justifyContent='center'
      >
        <URLShortenerForm />
      </Box>
    </ChakraProvider>
  );
}

export default Home;
