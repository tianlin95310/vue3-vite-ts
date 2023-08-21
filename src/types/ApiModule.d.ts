declare module "myModule" {
  export interface API {
    
  }
  export function fn(): string;

  export = 'myModule'
}

declare namespace API {
  export interface InfoRequest {
    id: string;
  }
  export interface InfoResponse {
    width: number;
    height: number;
  }
}