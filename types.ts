
export interface MessageResponse {
  text: string;
}

export enum AppState {
  ASKING = 'ASKING',
  LOADING = 'LOADING',
  ACCEPTED = 'ACCEPTED'
}
