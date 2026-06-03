/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Product {
  id: string;
  name: string;
  category: 'construction' | 'tools' | 'remodeling' | 'industrial';
  description: string;
  specs: string[];
  image: string;
  badge?: string;
  brand: string;
  availability: 'Garantizada' | 'Bajo Pedido' | 'Inmediata';
  origin: string;
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

export interface ValueCard {
  title: string;
  description: string;
  iconName: string;
}

export interface StatsItem {
  id: string;
  value: string;
  suffix?: string;
  label: string;
  description: string;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  text: string;
  avatar: string;
  stars: number;
}

export type ActiveTab = 'main' | 'privacy' | 'cookies' | 'terms' | 'disclaimer' | 'contact';
