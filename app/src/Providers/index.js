import { UsersProvider } from "./users";
import { ProductsProvider } from "./products";
import { CartProvider } from "./Cart";
import { AuthProvider } from "./Auth";

const Providers = ({ children }) => {
  return (
    <AuthProvider>
      <UsersProvider>
        <ProductsProvider>
          <CartProvider>{children}</CartProvider>
        </ProductsProvider>
      </UsersProvider>
    </AuthProvider>
  );
};

export default Providers;
