import axios from 'axios';
import React, { useState } from 'react';
import { Box, Button, Input, InputGroup } from '@chakra-ui/react';
import { SERVER_ENDPOINT } from '../config';

function URLShortenerForm() {
  const [destination, setDestination] = useState();
  const [shortUrl, setShortUrl] = useState<{
    shortId: string;
  } | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!destination) return;
    setShortUrl(null);

    console.log('ATTEMPING');

    const result = await axios
      .post(`${SERVER_ENDPOINT}/api/url`, {
        destination,
      })
      .then((res) => res.data);

    console.log(result);
    setShortUrl(result);
  }

  return (
    <Box pos='relative'>
      <form onSubmit={handleSubmit}>
        <InputGroup>
          <Input
            onChange={(e: any) => setDestination(e.target.value)}
            placeholder='https://google.com'
          />
          <Button type='submit'>Create</Button>
        </InputGroup>
      </form>

      {shortUrl && (
        <a href={`${SERVER_ENDPOINT}/${shortUrl.shortId}`}>Visit Site</a>
      )}
    </Box>
  );
}

export default URLShortenerForm;
