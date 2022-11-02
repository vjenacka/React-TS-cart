import { Button, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import storeItems from "../data/items.json";
import { formatCurrency } from "../utils/formatCurrency";

type Props = {
  id: number;
  quantity: number;
};

const CartItem = ({ id, quantity }: Props) => {
  const { removeFromCart } = useShoppingCart();
  const item = storeItems.find(i => i.id == id);
  if (item == null) return null;

  return (
    <Stack direction="horizontal" className="d-flex align-items-center" gap={3}>
      <img
        src={item.imgUrl}
        alt={item.name}
        style={{ width: "125px", height: "75px", objectFit: "cover" }}
      />
      <div className="me-auto ml-2">
        <div>
          {item.name}{" "}
          {quantity > 1 && (
            <span className="text-muted" style={{ fontSize: ".65rem" }}>
              x{quantity}
            </span>
          )}
        </div>
        <div className="text-muted" style={{ fontSize: ".75rem" }}>
          {formatCurrency(item.price)}
        </div>
      </div>
      <div>{formatCurrency(item.price * quantity)}</div>
      <Button
        variant="outline-danger"
        size="sm"
        onClick={() => removeFromCart(item.id)}
      >
        &times;
      </Button>
    </Stack>
  );
};

export default CartItem;
