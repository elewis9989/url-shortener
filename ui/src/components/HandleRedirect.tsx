import axios from 'axios';
import { useEffect, useState } from 'react';
import { SERVER_ENDPOINT } from '../config';
import { useMatch } from 'react-router-dom';
import { Spinner, Box } from '@chakra-ui/react';

function HandleRedirectContainer() {
  const [destination, setDestination] = useState<null | string>(null);
  const [error, setError] = useState();
}

export default HandleRedirectContainer;
