import { useEffect } from 'react';
import Heading from '../ui/Heading';
import Row from '../ui/Row';
import { getCabins } from '../services/apiCabins';

function Cabins() {
  useEffect(() => {
    getCabins()
      .then((data) => {
        console.log('Cabins data:', data);
      })
      .catch((error) => {
        console.error('Error fetching cabins:', error);
      });
  }, []);

  return (
    <Row type="horizontal">
      <Heading as="h1">All cabins</Heading>
      <p>TEST</p>
    </Row>
  );
}

export default Cabins;
