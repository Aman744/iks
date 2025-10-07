import { writable } from 'svelte/store';

export const mobileBar = writable(false);
export function toggleMobilebar(){
  mobileBar.update(mode => !mode);
}

export const mediaClass = writable('')