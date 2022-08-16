import { FilterProvider } from "./Filter";
import { ListProvider } from "./List";
import { RemoveProvider } from "./Remove";
import { RemoveAllProvider } from "./removeAll";

const Providers = ({ children }) => {
  return (
    <ListProvider>
      <RemoveProvider>
        <RemoveAllProvider>
          <FilterProvider>{children}</FilterProvider>
        </RemoveAllProvider>
      </RemoveProvider>
    </ListProvider>
  );
};

export default Providers;
