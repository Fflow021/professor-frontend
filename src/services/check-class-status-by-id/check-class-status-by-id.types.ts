export interface ApiResponseBody {
    classStatus: string;    
}

export interface checkClassStatusByIdServiceInput {
    urlBase: string;
    classId: string;
}

export type CheckClassStatusByIdService = (
    params: checkClassStatusByIdServiceInput,
) =>  Promise<string>;