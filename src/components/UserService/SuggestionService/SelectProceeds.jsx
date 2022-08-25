import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export const SelectProceeds = () => {
  return (
    <div>
      <Button className='btn-process-yes' size='sm'>
        Si
      </Button>{' '}
      <Button className='btn-process-no' size='sm'>
        No
      </Button>{' '}
    </div>
  );
};
