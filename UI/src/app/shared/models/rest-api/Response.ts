
export class GetResponse<T>
{
  constructor(public matchingRowCount: number, public message: string, public genericList: T[], public SingleObject: T){ }
}

export class PutResponse<T>{
  constructor(public matchingRowCount: number, public message: string, public genericList: T[], public singleObject: T){ }
}

export class GetSingleObjectResponse<T>
{
  constructor(public singleObject: T){ }
}

