import { useEffect, useState } from 'react';
import { checkClassStatusByIdService } from '../../services/check-class-status-by-id/check-class-status-by-id.service';
import { ApiResponseBody } from '../../services/check-class-status-by-id/check-class-status-by-id.types';
import { CheckClassesStatusByIdProps } from './check-class-status-by-id.types';

export const CheckClassStatusByIdHook = ({ classId }: CheckClassesStatusByIdProps) => {
  const [classStatus, setClassStatus] = useState<string | null>();
  // I couldn't figure out how to use loading and error in class.screen so I just got rid of it

  useEffect(() => {
    const fetchClasses = async () => {
        try {
          const result = await checkClassStatusByIdService({ 
            urlBase: 'http://localhost:8080',
            classId, });
          setClassStatus(result);
      } catch (err) {
        console.log(err)
      }
    };

    if (classId) {
      fetchClasses();
    }
  }, [classId]);

  return { classStatus };
}

