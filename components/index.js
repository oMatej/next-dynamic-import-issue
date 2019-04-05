import dynamic from 'next/dynamic';

export const Hello = dynamic(import('./Hello'));
export const World = dynamic(import('./World/World'));
