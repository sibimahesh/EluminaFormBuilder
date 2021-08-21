export interface Control{
    type: 'text' | 'dropdown';
    label: string;
    name?: string | null ;
}