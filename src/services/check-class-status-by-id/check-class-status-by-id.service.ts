import axios from 'axios';
import { CheckClassStatusByIdService } from './check-class-status-by-id.types';


export const checkClassStatusByIdService: CheckClassStatusByIdService = async ({
  urlBase,
  classId,
}) => {

  console.log('vai fazer a req class status:::');

  const { data } = await axios.get<string>(
    `${urlBase}/class/${classId}/status`,
  );

  console.log('RETORNO class status:::', data);

  return data;
};
