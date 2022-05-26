interface IModel<T>{
  create(data: T): Promise<T>;
  read(query: any): Promise<T[]>;
  readOne(query: any): Promise<T | null>;
  update(id: string, data: T): Promise<T | null>;
  delete(id: string): Promise<T | null>;
}

export { IModel as Model };

export const teste = 'ignora lint';
// End of file ModelInterface.ts