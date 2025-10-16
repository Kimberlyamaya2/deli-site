export type MenuOptions = Record<string, string[]>;

export interface MenuItem {
  name: string;
  desc?: string;
  price?: number | null;
  priceTier?: number | null;
  tags?: string[];
  options?: MenuOptions;
}

export interface MenuSection {
  category: string;
  items: MenuItem[];
}

export type Menu = MenuSection[];
