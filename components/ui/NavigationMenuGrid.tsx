import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { usePathname } from 'next/navigation';

export interface NavigationMenuItem {
  label: string;
  href: string;
}

interface NavigationMenuGridProps {
  items: NavigationMenuItem[];  // Changed to 1D array
  columns?: number;  // Optional parameter to specify number of columns
}

export const NavigationMenuGrid: React.FC<NavigationMenuGridProps> = ({ 
    items, 
    columns = 4
}) => {
  // Map column number to Tailwind class
  const getColumnClass = () => {
    switch (columns) {
      case 1: return 'grid-cols-1';
      case 2: return 'grid-cols-2';
      case 3: return 'grid-cols-3';
      case 4: return 'grid-cols-4';
      case 5: return 'grid-cols-5';
      case 6: return 'grid-cols-6';
      default: return 'grid-cols-4';
    }
  };

  const pathname = usePathname();  
  const totalItems = items.length;
  const totalRows = Math.ceil(totalItems / columns);
  
  return (
    <NavigationMenu.Root value={pathname}>
      <div className="inline-block border border-textSecondary">
        <NavigationMenu.List className={`grid ${getColumnClass()}`}>
          {items.map((item, index) => {
            // Calculate row and column positions directly from the index
            const gridRow = Math.floor(index / columns);
            const gridCol = index % columns;
            
            // Determine if this item is in the last row or column of the grid
            const isLastRow = gridRow === totalRows - 1;
            const isLastCol = gridCol === columns - 1 || index === totalItems - 1;
            console.log(`Item: ${item.label}, Row: ${gridRow}, Col: ${gridCol}, Last Row: ${isLastRow}, Last Col: ${isLastCol}`);
            return (
              <NavigationMenu.Item 
                key={`${item.href}-${index}`}
                className={`
                  col-span-1
                  ${isLastRow && isLastCol ? 'border-b-0 border-r-0' : ''}
                  ${isLastRow ? 'border-b-0' : 'border-b'}
                  ${isLastCol ? 'border-r-0' : 'border-r'}
                  border-textSecondary
                `}
              >
                <NavigationMenu.Link
                  href={item.href || '#'}
                  active={pathname === item.href}
                  className="px-3 py-2 uppercase relative block w-full text-textSecondary text-left text-sm leading-[22px] text-upppecase font-aoboshiOne line-clamp-1 data-[active]:text-textPrimary overflow-visible"
                >
                  {item.label}
                  {/* Active indicator - black square */}
                  <span 
                    className="absolute left-0 top-1/2 -translate-y-1/2 w-[10px] aspect-square bg-black transform -translate-x-1/2 opacity-0 data-[active=true]:opacity-100" 
                    data-active={pathname === item.href} 
                  />
                </NavigationMenu.Link>
              </NavigationMenu.Item>
            );
          })}
        </NavigationMenu.List>
      </div>
    </NavigationMenu.Root>
  );
};
