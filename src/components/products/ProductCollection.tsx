import { Product } from "@/types/product";

interface ProductCollectionProps {
  title: String;
  products: Product[];
}

const ProductCollection: React.FC<ProductCollectionProps> = ({
  title,
  products,
}) => {
  return (
    <div className="min-w-1/2 md:min-w-1/3 ">
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      <div className="grid grid-cols-2 gap-2">
        {products.slice(0, 4).map((p) => (
          <img key={p.id} src={p.image} alt={p.name} className="rounded-md w-full aspect-square object-cover" />
        ))}
      </div>
    </div>
  );
};

export default ProductCollection;
